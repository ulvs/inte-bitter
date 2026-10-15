# inte-bitter

Source for [intebitter.se](https://intebitter.se), a Create React App site.

## Development

```bash
npm install
npm start        # dev server on http://localhost:3000
npm run build    # production build in build/
```

## Deployment

Every push to `main` runs [`.github/workflows/deploy-homelab.yml`](.github/workflows/deploy-homelab.yml). It builds the [`Dockerfile`](Dockerfile) (the CRA build served by nginx on port 8080) and publishes it as `ghcr.io/ulvs/inte-bitter:main` and `:<commit sha>`. Pull requests only build the image.

The homelab pulls that image every 5 minutes and restarts the container when it changes, so a push is live within about 5 minutes. GitHub never connects to the home network. The container (`/opt/apps/inte-bitter` on CT 106, port 3011), the Caddy config and DNS are documented in the `infra_claude` repo.

To test the image locally:

```bash
docker build -t inte-bitter:local .
docker run --rm -p 3011:8080 inte-bitter:local
```
