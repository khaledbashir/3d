# EasyPanel deployment

This app is now ready to deploy on EasyPanel as a Docker-based static site.

## Recommended EasyPanel setup

- Service type: `App`
- Build method: `Dockerfile`
- Port: `80`

EasyPanel will build the image, run `npm ci`, create the Vite production build, and serve the compiled `dist` files through Nginx.

## Notes

- This is a client-side Vite app, so the Nginx config includes SPA fallback to `index.html`.
- There are currently no required runtime environment variables.
