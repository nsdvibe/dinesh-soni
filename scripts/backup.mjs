#!/usr/bin/env node
/**
 * npm run backup
 * ---------------
 * One-shot backup to GitHub:
 *   1. stage all changes
 *   2. commit with a timestamped message (skips if nothing to commit)
 *   3. pull --rebase (so we never clobber remote work)
 *   4. push
 *
 * Safe to run repeatedly. Never force-pushes. .env.local is gitignored so
 * secrets are never included.
 */
import { execSync } from "node:child_process";

function run(cmd, { allowFail = false } = {}) {
  try {
    return execSync(cmd, { stdio: ["ignore", "pipe", "pipe"] }).toString().trim();
  } catch (err) {
    if (allowFail) return "";
    console.error(`\n✗ Command failed: ${cmd}\n${err.stdout?.toString() || ""}${err.stderr?.toString() || ""}`);
    process.exit(1);
  }
}

// Ensure we're in a git repo
const insideRepo = run("git rev-parse --is-inside-work-tree", { allowFail: true });
if (insideRepo !== "true") {
  console.error(
    "✗ Not a git repository yet.\n  Run:  git init && git remote add origin <your-repo-url>\n  then try again."
  );
  process.exit(1);
}

const status = run("git status --porcelain", { allowFail: true });
if (!status) {
  console.log("✓ Nothing to back up — working tree is clean.");
} else {
  const stamp = new Date().toISOString().replace("T", " ").slice(0, 19);
  run("git add -A");
  run(`git commit -m "backup: ${stamp}"`);
  console.log(`✓ Committed changes (backup: ${stamp}).`);
}

// Figure out the current branch and whether a remote exists.
const branch = run("git rev-parse --abbrev-ref HEAD", { allowFail: true }) || "main";
const hasRemote = run("git remote", { allowFail: true });

if (!hasRemote) {
  console.log("\nℹ No git remote configured yet — commit saved locally.");
  console.log("  Add one with:  git remote add origin <your-repo-url>");
  process.exit(0);
}

// Rebase onto the latest remote, then push.
console.log("↺ Pulling latest (rebase)…");
const upstream = run(`git rev-parse --abbrev-ref ${branch}@{upstream}`, { allowFail: true });
if (upstream) {
  run(`git pull --rebase`);
} else {
  console.log("ℹ No upstream set yet — will set it on first push.");
}

console.log("↑ Pushing…");
run(`git push -u origin ${branch}`);
console.log(`\n✓ Backup complete — pushed to origin/${branch}.`);
