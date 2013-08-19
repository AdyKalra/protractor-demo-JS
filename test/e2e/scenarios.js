'use strict';

// var util = require('util');

describe('Home Page', function() {
  var ptor;

  beforeEach(function () {
    ptor = protractor.getInstance();
    ptor.get('/');
  });

  it('should load page', function () {
    ptor.findElement(protractor.By.tagName('body')).then(function (body) {
      expect(body.isDisplayed()).toBe(true);
    });
  });

  it('should load awesome things into repeater', function () {
    ptor.findElements(protractor.By.repeater('thing in awesomeThings').column('{{thing}}')).then(function (things) {
      expect(things.length).toBe(3);
    });
  });
});