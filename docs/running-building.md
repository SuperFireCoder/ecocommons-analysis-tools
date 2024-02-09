
| [Main](README.md) | [Installation](installation.md) | Running &amp; Building | [Testing](testing.md) | [Dependencies](dependencies.md) | [Credits](credits.md) |
|------|-------|-------|--------|--------|-------|

## Running &amp; Building

### Local development

For a quick local development instance, you simply start the Next.js server:
```bash
npm run dev
```

### Building

To build:
```bash
npm run build
```

The built files will be located in `./.next`. Refer to Next.js documentation for
deployment and other considerations: https://nextjs.org/docs/deployment.

### Debugging

The provided `dev` npm script is set to open up a port for debugging. More info
can be found at https://nextjs.org/docs/advanced-features/debugging.

### Docker Compose

The full deployment image can be built and used for local dev as an alternative to running npm locally.

### To start
```bash
docker compose up
```

### To stop
```bash
docker compose down
```