const path = require('path');
const vite = require('./vite.server.js');

const startViteForReact = function () {
  return vite.start({
    configFile: path.join(__dirname, 'vite.react-config.js'),
  });
};

let viteServer;
module.exports = {
  async before() {
    viteServer = await startViteForReact();
    const port = viteServer.config.server.port;
    this.launchUrl = `http://localhost:${port}`;
  },

  async after() {
    await viteServer.close();
  },
};
