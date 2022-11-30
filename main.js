const { webdriver, Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const safari = require('selenium-webdriver/safari');

const BROWSER = 'chrome';

let driver = new Builder()
  .forBrowser(BROWSER)
  .build();

(async function example() {
  try {
    await driver.get('https://www.oriolgomez.com/');
    await driver.wait(until.titleContains('Oriol'), 5000);
    console.log('found title');

/*
    const slack = require('slack-notify')(process.env.SLACK_WEBHOOK_URL);
    slack.send({
      channel: '#qa-automation',
      text: `Selenium POC test passed on browser: ${BROWSER} using version $browserVersion}`
    });
  });
*/

} finally {
  await driver.quit();
}
}) ();