# SwagLabsPlaywrightGitActions

This repository contains an automated test framework for [Swag Labs](https://www.saucedemo.com/) using [Playwright](https://playwright.dev/), with CI/CD integration via GitHub Actions and a public dashboard powered by GitHub Pages.

---

## 🚀 Features

- **End-to-End Testing**: Automated UI tests for Swag Labs using Playwright.
- **Page Object Model**: Clean separation of page logic (see `pages/`).
- **Data-Driven**: Easily configurable test data and user roles.
- **Cross-Browser**: Supports running tests on multiple browsers/devices.
- **CI/CD**: Automated test execution on every push to `main` via GitHub Actions.
- **JUnit & HTML Reports**: Test results are saved as JUnit XML, HTML, and JSON.
- **Public Dashboard**: Test results visualized on a GitHub Pages dashboard (`dashboard/index.html`).

---

## 📂 Project Structure

```
.
├── .github/workflows/           # CI/CD pipelines
│   ├── RunTestPipeline.yml
│   └── deploy-report-to-page.yml
├── dashboard/                   # Dashboard HTML & data
│   ├── index.html
│   └── test-results-json.json
├── data/                        # Test data files
├── pages/                       # Page Object Model classes
├── playwright-report/           # Playwright HTML reports (gitignored)
├── tests/                       # Test specs
├── playwright.config.ts         # Playwright configuration
├── package.json
└── README.md
```

---

## 🧑‍💻 Getting Started

### 1. Install Dependencies

```powershell
npm install
```

### 2. Run Tests Locally

```powershell
npx playwright test
```

### 3. View Local HTML Report

```powershell
npx playwright show-report
```

### 4. Generate Dashboard Data

The Playwright config outputs a JSON report to `dashboard/test-results-json.json`.  
You can view the dashboard locally with a static server (e.g., VS Code Live Server or `npx serve`).

---

## ⚙️ CI/CD & GitHub Pages

- On every push to `main`, GitHub Actions:
  - Runs all Playwright tests.
  - Publishes test results as artifacts.
  - Deploys the dashboard (`dashboard/index.html` and JSON) to GitHub Pages.

**Dashboard URL:**  
`https://rohit-singh-athiya.github.io/SwagLabsPlaywrightGitActions/`
<img width="2410" height="1473" alt="image" src="https://github.com/user-attachments/assets/6b73e83a-eeaa-4b57-bea6-3d51daedeb1c" />

---

## 📁 Notes

- The `playwright-report/` folder is gitignored and only used for local HTML reports.
- Test data and user roles are managed in the `data/` directory.
- Page objects are in the `pages/` directory.

---

## 📝 License

This project is licensed under the ISC License.
