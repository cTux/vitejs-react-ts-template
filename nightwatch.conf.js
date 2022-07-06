module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: [],

  // See https://nightwatchjs.org/guide/working-with-page-objects/using-page-objects.html
  page_objects_path: ['node_modules/nightwatch/examples/pages/'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/custom-commands.html
  custom_commands_path: ['node_modules/nightwatch/examples/custom-commands/'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/custom-assertions.html
  custom_assertions_path: '',

  // See https://nightwatchjs.org/guide/extending-nightwatch/plugin-api.html
  plugins: ['vite-plugin-nightwatch'],

  // See https://nightwatchjs.org/guide/#external-globals
  globals_path: './tests/nw.globals.js',

  webdriver: {},

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'http://localhost:3000',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true,
      },

      desiredCapabilities: {
        browserName: 'chrome',
      },

      webdriver: {
        start_process: true,
        server_path: '',
      },
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: true,
          args: [
            // '--no-sandbox',
            '--ignore-certificate-errors',
            '--allow-insecure-localhost',
            // '--headless',
          ],
        },
      },

      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // --verbose
        ],
      },
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        alwaysMatch: {
          acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: [
              // '-headless',
              // '-verbose'
            ],
          },
        },
      },
      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ],
      },
    },
  },
};
