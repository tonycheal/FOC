#!/usr/bin/env node
// Regenerates slides/index.html from slides.json so Claude (not Code) can
// fetch a single page listing everything in the deck.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import vm from 'node:vm';

const root = dirname(fileURLToPath(import.meta.url));
const ctx = { window: {} };
vm.runInNewContext(readFileSync(join(root, 'slides.js'), 'utf8'), ctx);
const slides = ctx.window.SLIDES;

const escape = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const entries = slides.map((entry, i) => {
    const n = i + 1;
    const target = entry.startsWith('@') ? entry.substring(1) : entry;
    const isUrl = /^https?:\/\//i.test(target);
    const isPdf = /\.pdf$/i.test(target);
    const isImage = /\.(png|jpe?g|gif|webp|svg)$/i.test(target);
    // Paths in slides.json are relative to repo root (e.g. "slides/foo.png").
    // This file lives at slides/index.html, so strip the leading "slides/".
    const localSrc = target.startsWith('slides/') ? target.substring('slides/'.length) : target;
    const label = escape(target);
    const href = escape(isUrl ? target : localSrc);

    if (isImage && !isUrl) {
        return `<figure>
  <figcaption>${n}. <a href="${href}">${label}</a></figcaption>
  <img alt="${escape(label)}" src="${escape(localSrc)}">
</figure>`;
    }
    if (isPdf) {
        return `<figure>
  <figcaption>${n}. PDF — <a href="${href}">${label}</a></figcaption>
</figure>`;
    }
    // External URL
    return `<figure>
  <figcaption>${n}. Link — <a href="${href}">${label}</a></figcaption>
</figure>`;
});

const html = `<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>All slides</title>
    <style>
        body { font-family: sans-serif; }
        figure { margin: 1em 0; }
        img { max-width: 100%; border: 1px solid red; padding: 2px; }
        figcaption { margin-bottom: 4px; }
    </style>
</head>
<body>
<h1>All slides (${slides.length})</h1>
<p>Generated from <a href="../slides.js">slides.js</a> by <code>build-slides-index.mjs</code>.</p>
${entries.join('\n')}
</body>
</htmllang>
`;

writeFileSync(join(root, 'slides', 'index.html'), html);
console.log(`Wrote slides/index.html (${slides.length} entries)`);
