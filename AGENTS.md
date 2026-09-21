# AGENTS.md

## Commands

- Never run npx commands (or similar). Use the project's npm scripts from `package.json` instead.
- After making changes, verify with `npm run check`, `npm run format:check` and, if the change affects build output, `npm run build`.

## Code style

- Use `className` (not `class`) for JSX attributes in Preact components, so the code stays consistent and React-portable.
- Name component prop interfaces `{Component}Props` (e.g. `ButtonProps`), not bare `Props`.
- Combine class-name values with the `classNames` utility (`src/utils/classNames`).
- Use the `Link` component (`src/components/Link`) instead of raw `<a>` elements in Preact components.
- Use default exports in component and utility files.
- Type Preact functional components like this: `const Foo = ({ bar }: FooProps) => ...` — annotate the props parameter, don't annotate the const.
- Trust deprecation messages literally: try importing the suggested replacement from the package namespace (e.g. `import type { HTMLAttributes } from "preact"`) before assuming it doesn't exist.
