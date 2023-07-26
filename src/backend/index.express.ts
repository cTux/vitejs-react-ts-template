import express from 'express';

const app = express();

app.get('/health', (request, response) => {
  response.json({ status: 'ok' });
});

export const handler = app;
