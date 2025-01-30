# Contributing

Welcome, and thanks for your interest in contributing! Please take a moment to review the following:

## Style Guide

- **Commits** follow the ["Conventional Commits" specification](https://www.conventionalcommits.org/en/v1.0.0/).
- **Code** is formatted using [Prettier](https://prettier.io/)

## Getting Started

### Setup

1. [Fork the repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) and clone it to your machine.
2. Create a new branch with your contribution; **check branch naming section**.
3. Install dependencies:
   ```bash
   npm i
   ```
4. You're ready to go! Create your PR

### Branch naming

prefix/branch-name

#### Prefixes

- feat: new feature for the user, not a new feature for build script
- fix: bug fix for the user, not a fix to a build script
- docs: changes to the documentation
- refactor: refactoring production code, eg. renaming a variable
- test: adding missing tests, refactoring tests; no production code change

#### Example

- feat/doing-something-cool

### Scripts

- `npm test`
- `npm run dev` – runs vitest, watching for file changes
- `npm run format` – format the code using prettier
- `npm run lint` – type checks
- `npm run build` – production build
