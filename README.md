# ViteJS React+TypeScript Template

| Actions                                                                                                                                                                                                                                        |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [![Dependencies Update](https://github.com/cTux/vitejs-react-ts-template/actions/workflows/dependencies-update.yml/badge.svg)](https://github.com/cTux/vitejs-react-ts-template/actions/workflows/dependencies-update.yml)                     |
| [![Dependencies Audit](https://github.com/cTux/vitejs-react-ts-template/actions/workflows/dependencies-audit.yml/badge.svg)](https://github.com/cTux/vitejs-react-ts-template/actions/workflows/dependencies-audit.yml)                        |
| [![Executing Linter & Tests](https://github.com/cTux/vitejs-react-ts-template/actions/workflows/lint-and-test.yml/badge.svg)](https://github.com/cTux/vitejs-react-ts-template/actions/workflows/lint-and-test.yml)                            |
| [![PR Title Checking]([![PR Title Checker](https://github.com/cTux/vitejs-react-ts-template/actions/workflows/pr-title-validation.yml/badge.svg)](https://github.com/cTux/vitejs-react-ts-template/actions/workflows/pr-title-validation.yml)) |

## Template's core:
* NodeJS v16
* [pnpm](https://pnpm.io/)
* [ViteJS](https://vitejs.dev/)
* [Vitest](https://vitest.dev/)

## Production bundle includes:

* ReactJS v18
* Normalize.css + CLSX
* PWA manifest

## Development dependencies:

* TypeScript v4
* SCSS + CSS Modules 
* ESLint + Prettier
* Testing Library
* Playwright
* Husky + hooks:
  * pre-commit: lint and test
  * commit-msg: conventional commit message
* GitHub Pages Deployment

## Other
* `Absolute imports` are configured.
* `Wallaby` works well with `vitest` with `automatic` configuration type.
