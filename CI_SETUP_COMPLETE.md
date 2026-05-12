# Storybook CI/CD Automation - Setup Summary

## What Was Implemented

Automated testing and CI/CD automation has been fully configured for the Storybook project with the following components:

### 1. **CI/CD Pipeline Files**

#### `.gitlab-ci.yml` (Primary)
- Multi-stage pipeline: install → lint → build → test → deploy
- Caches node_modules for faster builds
- Runs on all branches and merge requests
- Coverage reports with JUnit XML output
- Automatic deployment to production on main/master

**Key Jobs:**
- 📦 `install_dependencies`: Installs & caches dependencies
- 🔍 `lint`: ESLint validation
- ✓ `type_check`: TypeScript compilation
- 🏗️ `build_storybook`: Builds static site
- 🧪 `test_stories`: Runs story tests + a11y checks
- 📊 `coverage_report`: Generates coverage artifacts
- 🚀 `deploy_storybook`: Deploys static build (main only)

#### `.github/workflows/storybook-tests.yml` (Alternative)
- GitHub Actions workflow as alternative/backup
- Parallel jobs for faster execution
- PR comments with coverage summary
- Artifact uploads for coverage reports

### 2. **Test Configuration**

#### `vitest.config.ts`
- Storybook + Vitest integration via addon-vitest
- Playwright browser provider (headless Chromium)
- Coverage reporting (v8 provider)
- JUnit XML output for CI/CD integration
- Multiple reporters: verbose, junit, html, lcov

**Coverage Thresholds:**
- Lines: 50%
- Functions: 50%
- Branches: 50%
- Statements: 50%

(Adjust in config as needed)

#### `package.json` - New Test Scripts
```json
{
  "test": "vitest run",
  "test:watch": "vitest --watch",
  "test:ui": "vitest --ui",
  "test:coverage": "vitest run --coverage",
  "test:a11y": "vitest run --project storybook",
  "test:ci": "vitest run --reporter=verbose --coverage"
}
```

### 3. **Documentation**

#### `CI_TESTING.md` - Comprehensive Guide
- Overview of testing setup
- Local testing instructions
- Test types and examples
- Coverage reporting
- Troubleshooting guide
- Best practices
- Story test examples

#### `src/tests/example.test.ts` - Template
- Example test patterns
- Testing different component types
- Best practices and tips
- Mock examples
- Accessibility testing examples

### 4. **Git Configuration**

Updated `.gitignore` to exclude:
- `coverage/` - Test coverage reports
- `.nyc_output/` - Code coverage data

## How to Use

### Local Testing
```bash
# One-time test run
yarn test

# Watch mode during development
yarn test:watch

# Open test UI dashboard
yarn test:ui

# Generate coverage report
yarn test:coverage

# CI-style run with verbose output
yarn test:ci
```

### Build & Deploy
```bash
# Build Storybook
yarn build-storybook

# Start dev server
yarn storybook
```

### CI/CD Workflow

**On Pull Request:**
1. ✅ Dependencies installed (cached)
2. ✅ Linting checks
3. ✅ Type checking
4. ✅ Storybook builds
5. ✅ Story tests run (accessibility + interactions)
6. ✅ Coverage report generated
7. 💬 PR comment with metrics (GitHub only)

**On Merge to main/master:**
- All above steps + Deploy to production

## Test Types Included

### 1. **Story Tests**
- Vitest runs automatically on `.stories.tsx` files
- Browser-based testing with Playwright
- Headless Chromium for realistic behavior

### 2. **Accessibility Tests**
- a11y addon automatically checks each story
- Validates WCAG AA compliance (4.5:1 contrast, etc.)
- Checks heading hierarchy, ARIA, semantic HTML
- Keyboard navigation validation

### 3. **Type Checking**
- Full TypeScript validation
- Catches type errors before runtime

### 4. **Code Quality**
- ESLint linting
- Coverage reporting

## Coverage Reports

Generated in `coverage/` directory:
- `coverage.json` - Machine-readable metrics
- `coverage-summary.json` - Summary by metric
- `junit.xml` - JUnit format for CI/CD integration
- `lcov.info` - LCOV format for badges/tools
- `html/` - Interactive HTML report

View HTML report:
```bash
yarn test:coverage
open coverage/html/index.html
```

## Important Notes

### Playwright Installation
For local testing, install Playwright browsers:
```bash
npx playwright install --with-deps chromium
```

### Cache Management
- GitLab CI caches `node_modules/` between runs
- GitHub Actions uses `actions/setup-node` with caching
- Clear cache if issues occur: `yarn cache clean`

### Coverage Thresholds
Adjust in `vitest.config.ts`:
```ts
coverage: {
  lines: 80,      // Target 80% line coverage
  functions: 80,
  branches: 80,
  statements: 80,
}
```

### Story Test Discovery
Tests must follow naming convention:
- Story files: `*.stories.tsx` or `*.stories.ts`
- Test files: `*.test.ts` or `*.test.tsx` (if colocated)

## Next Steps

### For Developers
1. Review `CI_TESTING.md` for detailed guide
2. Check `src/tests/example.test.ts` for test patterns
3. Start writing tests in your story files
4. Run `yarn test:watch` during development
5. Use `yarn test:ui` to debug failing tests

### For Maintainers
1. Monitor pipeline status in GitLab/GitHub
2. Review coverage reports before merging
3. Adjust coverage thresholds as needed
4. Update test docs as patterns evolve

### For CI/CD Admins
1. Configure secrets (if using GitHub Actions)
2. Set up artifact storage/retention policies
3. Configure Slack/email notifications
4. Monitor pipeline performance metrics

## Troubleshooting

### Tests Timeout
- Increase timeout in `vitest.config.ts`
- Check for infinite loops or unresolved promises
- Try running locally: `yarn test:watch`

### Playwright Issues
```bash
# Reinstall Playwright
npx playwright install --with-deps chromium
```

### Cache Issues
```bash
# Clear and reinstall
yarn cache clean
rm -rf node_modules yarn.lock
yarn install
```

### Coverage Thresholds Not Met
- Review failing tests in coverage report
- Add missing test cases
- Consider lowering thresholds if unrealistic

## Resources

- 📖 [Storybook Testing](https://storybook.js.org/docs/writing-tests)
- 🧪 [Vitest Docs](https://vitest.dev)
- 🎭 [Playwright Docs](https://playwright.dev)
- ♿ [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- 🔗 [GitLab CI/CD](https://docs.gitlab.com/ee/ci/)
- 🐙 [GitHub Actions](https://docs.github.com/en/actions)

## Questions?

See:
1. `CI_TESTING.md` - Comprehensive testing guide
2. `src/tests/example.test.ts` - Test examples
3. Main `README.md` - Project overview
4. Local Storybook: `yarn storybook` → http://localhost:6006
