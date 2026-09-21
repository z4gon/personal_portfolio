# AGENTS.md

## Commands

- Never run npx commands (or similar). Use the project's npm scripts from `package.json` instead.

## Code style

- Use `className` (not `class`) for JSX attributes in Preact components, so the code stays consistent and React-portable.
- Name component prop interfaces `{Component}Props` (e.g. `ButtonProps`), not bare `Props`.
- Combine class-name values with the `classNames` utility (`src/utils/classNames`).
