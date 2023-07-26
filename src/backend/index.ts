import type { Handler } from 'vite-plugin-mix';

export const handler: Handler = (req, res, next) => {
  if (req.path === '/health') {
    return res.end(JSON.stringify({ status: 'ok' }));
  }

  next();
};
