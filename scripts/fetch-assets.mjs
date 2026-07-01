#!/usr/bin/env node
// Downloads Lovable CDN assets referenced by *.asset.json pointers into dist/
// so `/__l5e/assets-v1/{id}/{filename}` URLs resolve on GitHub Pages.
import { readdirSync, statSync, readFileSync, mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";

const SRC = "src/assets";
const DIST = "dist";
const ORIGIN = process.env.ASSET_ORIGIN || "https://color-palette-prose.lovable.app";

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, out);
    else if (entry.endsWith(".asset.json")) out.push(p);
  }
  return out;
}

const pointers = walk(SRC);
console.log(`Found ${pointers.length} asset pointers. Origin: ${ORIGIN}`);

let ok = 0, fail = 0;
for (const ptr of pointers) {
  const meta = JSON.parse(readFileSync(ptr, "utf8"));
  const url = meta.url; // "/__l5e/assets-v1/{id}/{filename}"
  const dest = join(DIST, url);
  if (existsSync(dest)) { ok++; continue; }
  mkdirSync(dirname(dest), { recursive: true });
  const full = ORIGIN + url;
  try {
    const res = await fetch(full);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    writeFileSync(dest, buf);
    ok++;
    console.log(`✓ ${url} (${buf.length} bytes)`);
  } catch (e) {
    fail++;
    console.error(`✗ ${url} — ${e.message}`);
  }
}
console.log(`Done. ok=${ok} fail=${fail}`);
if (fail > 0) process.exit(1);
