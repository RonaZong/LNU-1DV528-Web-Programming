# B03 implementation checklist

Source: Assignment B3.pdf (local course handout).

## Required application flow

1. Fetch all project issues from GitLab REST API on the server (including pagination).
2. Render the initial issue list as HTML on the server.
3. Connect the browser to the application's WebSocket channel.
4. Authenticate incoming GitLab issue webhooks with an environment-provided secret.
5. Update connected browsers without a page reload.

## Current baseline

- `Production/app.mjs` fails syntax checking: `app` is declared twice.
- npm scripts reference `app.js`, but the entry point is `app.mjs`.
- CommonJS and ES modules are mixed.
- Both native WebSocket and Socket.IO implementations are partially present.
- Several controllers, services and configuration files are empty.
- Initial HTML rendering and browser event handling are unfinished.
- `.env` is already tracked by Git. Ignoring it alone will not remove it from history.
- Production installation instructions and scripts need to be reconciled with the final implementation.

## Implementation order

- [ ] Establish one ES module entry point and validate configuration.
- [ ] Implement GitLab issue service and pagination.
- [ ] Render initial issues safely on the server.
- [ ] Authenticate and validate issue webhooks.
- [ ] Broadcast issue changes and refresh the browser list.
- [ ] Test API failures, rejected webhooks, HTML escaping and live updates locally.
- [ ] Prepare Nginx, HTTPS and PM2 configuration, with Node bound to loopback.
- [ ] Deploy and verify using the actual course server and GitLab project.
- [ ] Complete the report, public URL and 5–7 minute presentation video.
- [ ] Tag the final version and follow the course submission instructions.

## Deployment inputs

Confirm the current course server/domain and target GitLab project before using
the older server details in `Production/README.md`. Keep API tokens and webhook
secrets in local/server environment variables; do not place them in this plan.

## Report topics

Security; reverse proxy; process manager; TLS; environment variables;
development versus production; dependency choices; optional features;
limitations and personal learning reflections. Deployment results and personal
reflections must describe actual work, not assumed outcomes.
