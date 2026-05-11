import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const htmlPath = path.join(process.cwd(), "index.html");

test("frontend page includes core testing elements", async () => {
  const html = await readFile(htmlPath, "utf8");

  assert.match(html, /<h1>\s*Tools Frontend Test\s*<\/h1>/);
  assert.match(html, /<button[^>]*>\s*Run Frontend Checks\s*<\/button>/);
});
