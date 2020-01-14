const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*api_test.js',
  //output: './output',
  helpers: {
    WebDriver: {
      url: 'https://swapi.co/api/people/1/',
      browser: 'chrome',
     // host: '127.0.0.1',
     // port: 4444,
      restart: 'true',
      windowSize: '1920x1680',
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'easy',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}