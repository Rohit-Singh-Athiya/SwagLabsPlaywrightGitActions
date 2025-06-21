// scripts/generate-summary.js
const fs = require('fs');

const report = JSON.parse(fs.readFileSync('./playwright-report/test-results-json.json'));
let passed = 0, failed = 0, skipped = 0;

for (const suite of report.suites || []) {
  for (const test of suite.specs || []) {
    for (const r of test.tests || []) {
      const status = r.results[0].status;
      if (status === 'passed') passed++;
      else if (status === 'failed') failed++;
      else skipped++;
    }
  }
}

const summary = {
  passed,
  failed,
  skipped,
  timestamp: new Date().toISOString()
};

fs.mkdirSync('dashboard/data', { recursive: true });
fs.writeFileSync('dashboard/data/results.json', JSON.stringify(summary, null, 2));

console.log("✅ Summary generated.");
