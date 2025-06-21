import * as fs from 'fs';
import * as path from 'path';

interface TestResult {
  status: string;
}

interface Test {
  tests: { results: TestResult[] }[];
}

interface Suite {
  specs: Test[];
}

interface Report {
  suites?: Suite[];
}

const reportPath = path.resolve('./playwright-report/test-results-json.json');
const report: Report = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));

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

const outDir = path.resolve('dashboard/data');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'results.json'), JSON.stringify(summary, null, 2));

console.log("✅ Summary generated.");