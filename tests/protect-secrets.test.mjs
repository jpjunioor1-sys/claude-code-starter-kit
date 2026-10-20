// node tests/protect-secrets.test.mjs — checks the hook blocks secrets and lets normal files through.
import { spawnSync } from 'node:child_process';
import assert from 'node:assert';

const run = (file_path) =>
  spawnSync('node', ['.claude/hooks/protect-secrets.mjs'], { input: JSON.stringify({ tool_input: { file_path } }) }).status;

for (const p of ['.env', 'app/.env.local', 'certs/server.pem', 'config/secrets/db.json']) assert.equal(run(p), 2, p);
for (const p of ['src/index.ts', 'src/environment.ts', 'README.md']) assert.equal(run(p), 0, p);
console.log('ok');
