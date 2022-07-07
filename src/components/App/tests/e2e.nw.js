describe('App@Localhost', function () {
  before((browser) => browser.navigateTo('http://localhost:3000/'));
  after((browser) => browser.end());

  it('should increment counter', function (browser) {
    browser.navigateTo('http://localhost:3000/');
    browser
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .assert.visible('button[type=submit]')
      .click('button[type=submit]')
      .assert.textContains('.layout__content', 'Nightwatch.js');
  });
});
