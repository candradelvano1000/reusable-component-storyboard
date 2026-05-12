# Storybook CI/CD Automation Guide

This guide explains how automated testing is configured for the Storybook project in CI/CD pipelines.

## Overview

The Storybook project now includes:
- ✅ **Automated Linting** (ESLint)
- ✅ **Type Checking** (TypeScript)
- ✅ **Story Tests** (Vitest + Storybook addon)
- ✅ **Accessibility Testing** (a11y addon)
- ✅ **Browser-based Testing** (Playwright)
- ✅ **Coverage Reporting** (v8)

## CI/CD Platforms Supported

### GitLab CI (.gitlab-ci.yml)
GitLab CI is the primary CI/CD pipeline. Run via commit or MR creation.

**Pipeline Stages:**
```
install → lint → build → test → deploy
```

**Key Jobs:**
- `install_dependencies`: Caches node_modules
- `lint`: Runs ESLint checks
- `type_check`: TypeScript compilation
- `build_storybook`: Builds static Storybook
- `test_stories`: Runs Vitest story tests with accessibility
- `coverage_report`: Generates coverage artifacts
- `deploy_storybook`: Deploys to production (main/master only)

### GitHub Actions (.github/workflows/storybook-tests.yml)
Alternative CI/CD for GitHub-hosted repositories.

**Workflow Jobs:**
```
install
  ├── lint
  ├── type-check
  ├── build-storybook
  └── test-stories
       └── test-results
```

**Features:**
- Coverage report commented on PRs
- Artifact uploads
- Conditional deployment

## Local Testing

### Run Tests Locally

```bash
# Run all story tests once
yarn test

# Run tests in watch mode
yarn test:watch

# Run accessibility tests specifically
yarn test:a11y

# Run tests with UI dashboard
yarn test:ui

# Run with coverage report
yarn test:coverage

# Run as CI (verbose output, coverage, xml reports)
yarn test:ci
```

### Build & Preview

```bash
# Build Storybook static site
yarn build-storybook

# Preview built storybook
yarn preview
```

## Test Types

### 1. **Story Tests** (Vitest + Storybook addon)
Automatically discovers and runs tests for all `.stories.tsx` files.

**Example Story with Tests:**
```tsx
// Button.stories.tsx
import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = {
  args: { label: 'Click me' },
};

describe('Button', () => {
  it('renders with label', () => {
    render(<Button label="Test" />);
    expect(screen.getByText('Test')).toBeDefined();
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    const { user } = await render(<Button label="Click" onClick={handleClick} />);
    await user.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalled();
  });
});
```

### 2. **Accessibility Tests**
The a11y addon runs automatically on stories.

**Checks include:**
- Color contrast (WCAG AA 4.5:1)
- Heading hierarchy
- ARIA attributes
- Keyboard navigation
- Alt text
- Semantic HTML

**Run accessibility tests:**
```bash
yarn test:a11y
```

### 3. **Browser-based Tests**
Playwright runs headless Chromium for realistic testing.

**Configuration:** `.storybook/main.ts` & `vitest.config.ts`

## Coverage Reports

### Output Files
```
coverage/
├── coverage.json           # Machine-readable format
├── coverage-summary.json   # Summary by metric
├── junit.xml              # JUnit XML for CI/CD
├── lcov.info              # LCOV format for badges
└── html/                  # HTML report (open in browser)
```

### Coverage Thresholds
Configured in `vitest.config.ts`:
- Lines: 50%
- Functions: 50%
- Branches: 50%
- Statements: 50%

Adjust thresholds as needed:
```ts
// vitest.config.ts
coverage: {
  lines: 80,
  functions: 80,
  branches: 80,
  statements: 80,
}
```

### Viewing HTML Report
```bash
yarn test:coverage
open coverage/html/index.html  # macOS
```

## CI/CD Environment Variables

### GitLab CI
Set in `.gitlab-ci.yml` (already configured):
```yaml
variables:
  NODE_VERSION: "20"
  CACHE_KEY: "storybook-node-modules"
```

### GitHub Actions
Secrets can be added in Settings → Secrets and variables → Actions

## Troubleshooting

### Tests Fail: "Chromium Not Found"
```bash
# Install Playwright browsers
npx playwright install --with-deps chromium
```

### Cache Issues
```bash
# Clear Yarn cache
yarn cache clean

# Reinstall dependencies
rm -rf node_modules yarn.lock
yarn install
```

### Coverage Report Missing
Ensure `vitest.config.ts` specifies reporters:
```ts
test: {
  coverage: {
    reporter: ['text', 'json', 'html', 'lcov', 'junit'],
  },
}
```

### Story Tests Not Running
Check that stories are named: `*.stories.tsx` or `*.stories.ts`

## Writing Story Tests

### Basic Structure
```tsx
import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

export default {
  title: 'MyComponent',
  component: MyComponent,
};

export const Default = {
  args: { label: 'Default' },
};

export const TestDefault = {
  render: (args) => <MyComponent {...args} />,
  play: async ({ canvasElement }) => {
    const element = screen.getByText('Default');
    expect(element).toBeDefined();
  },
};
```

### Using Vitest Utilities
```tsx
import { expect, it, describe, beforeEach, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('Component', () => {
  it('calls onClick when clicked', async () => {
    const onClick = vi.fn();
    const { user } = render(<MyButton onClick={onClick} />);
    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
});
```

## Continuous Integration Workflow

### On Pull Request
1. ✅ Install dependencies (cached)
2. ✅ ESLint runs
3. ✅ TypeScript type-checks
4. ✅ Storybook builds
5. ✅ Story tests run with a11y checks
6. ✅ Coverage report generated
7. ✅ PR comment with coverage summary (GitHub only)

### On Merge to Main/Master
All above + Deploy Storybook static build

## Best Practices

1. **Keep Tests Fast**
   - Mock external APIs
   - Use small, focused test units
   - Avoid unnecessary waits

2. **Write Meaningful Tests**
   - Test user interactions, not implementation
   - Include accessibility checks
   - Test edge cases

3. **Monitor Coverage**
   - Aim for 80%+ coverage
   - Review coverage reports regularly
   - Update thresholds incrementally

4. **Accessibility First**
   - All stories run through a11y addon
   - Fix violations before merging
   - Use semantic HTML

5. **CI/CD Performance**
   - Cache node_modules
   - Run jobs in parallel where possible
   - Use artifacts for sharing builds

## Useful Commands

```bash
# Development
yarn storybook               # Start dev server
yarn test:watch            # Watch tests
yarn test:ui               # Open test UI

# Build & Deploy
yarn build-storybook       # Build static site
yarn build                 # Build + typecheck

# CI/CD Simulation
yarn lint                  # Run linter
yarn test:ci               # Full CI pipeline locally

# Debugging
yarn test --reporter=verbose
yarn test -- --debug
```

## Resources

- [Storybook Testing Docs](https://storybook.js.org/docs/writing-tests)
- [Vitest Documentation](https://vitest.dev)
- [Playwright Documentation](https://playwright.dev)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## Questions or Issues?

Refer to the main [README.md](README.md) or check the [Storybook Status](http://localhost:6006) locally.
