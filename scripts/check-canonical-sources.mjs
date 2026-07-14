#!/usr/bin/env node
/*
 * check-canonical-sources.mjs — REPORTING ONLY. Always exits 0; never blocks a merge.
 *
 * Failure it prevents: an authoritative-looking document (roadmap/status/registry/dashboard/queue/
 * canonical/policy/standard/contract in its name) that sits outside an approved directory AND lacks a
 * superseded/archived/historical marker — the condition that caused the docs/Content-Roadmap.md
 * source-of-truth incident (2026-07). See operations/CANONICAL_SOURCES.md.
 *
 * Mode: reporting-only. Do NOT promote to a blocking check until it has run long enough to establish a
 * low false-positive rate. Maintenance owner: project owner.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname, basename } from 'node:path';

const ROOT = process.cwd();
const AUTHORITATIVE = /(roadmap|status|registry|dashboard|canonical|queue|policy|standard|contract)/i;
const APPROVED_DIRS = ['operations', 'docs/strategy'];
const MARKER = /superseded|deprecated|archived|historical/i;
const IGNORE = /(^|\/)(node_modules|\.git|dist|build)(\/|$)/;

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (IGNORE.test(p)) continue;
    const s = statSync(p);
    if (s.isDirectory()) walk(p, acc);
    else if (extname(p) === '.md') acc.push(p);
  }
  return acc;
}

const findings = [];
for (const file of walk(ROOT)) {
  const rel = file.slice(ROOT.length + 1).replace(/\\/g, '/');
  if (rel.includes('/templates/')) continue; // templates are named artifacts, not canonical docs
  if (!AUTHORITATIVE.test(basename(rel))) continue;
  const inApproved = APPROVED_DIRS.some((d) => rel.startsWith(d + '/'));
  const marked = MARKER.test(readFileSync(file, 'utf8').slice(0, 600));
  if (!inApproved && !marked) {
    findings.push(rel);
  }
}

if (findings.length === 0) {
  console.log('canonical-sources check: no ambiguous authoritative documents found.');
} else {
  console.log('canonical-sources check (REPORTING ONLY) — review against operations/CANONICAL_SOURCES.md:');
  for (const rel of findings) console.log(`  - ${rel}: authoritative-looking name, not in an approved dir, no superseded marker`);
  console.log(`\n${findings.length} item(s) to review. This check does not fail the build.`);
}
process.exit(0);
