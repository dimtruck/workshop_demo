'use strict';
var $p;

describe('Main View', function() {
  var page;

  beforeEach(function() {
    $p = protractor.getInstance();
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().setSize(1280, 1024);
    browser.get('/');
    page = require('./main.po');
  });

  it('should include jumbotron with correct data', function() {
    expect(page.h1El.getText()).toBe('\'Allo, \'Allo!');
    expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/yeoman.png$/);
    expect(page.imgEl.getAttribute('alt')).toBe('I\'m Yeoman');
  });
});
