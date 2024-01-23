# How to switch to Bun?

## Change `package.json`:

Replace

```json
  "engines": {
    "node": "^20",
    "pnpm": "^8"
  },
```

with

```json
  "engines": {
    "bun": "^1"
  },
```

## Remove `node_modules` and `pnpm-lock.yaml`:

```bash
rm -rf ./node_modules
rm -f ./pnpm-lock.yaml
```

## Install Bun and project dependencies:

```bash
npm i -g bun
bun install
```

## Commit changes and run project:

Now use

```bash
bun run dev
```

instead of

```bash
pnpm run dev
```
