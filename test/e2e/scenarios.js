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
  }, 100000);

  it('should load awesome things into repeater', function () {
    ptor.findElements(protractor.By.repeater('thing in awesomeThings').column('{{thing}}')).then(function (things) {
      expect(things.length).toBe(3);
    });
  }, 100000);
});

describe('Form Page', function () {
  var ptor;

  beforeEach(function () {
    ptor = protractor.getInstance();
    ptor.get('/#/form');
  });

  it('should load form page', function () {
    ptor.findElement(protractor.By.tagName('body')).then(function (body) {
      expect(body.isDisplayed()).toBe(true);
    });
  }, 100000);

  it('should enter input into form', function () {
    ptor.findElement(protractor.By.input('input.email')).sendKeys('example@example.com');
    ptor.findElement(protractor.By.input('input.name')).sendKeys('my name');
    ptor.findElement(protractor.By.input('input.city')).sendKeys('davis');
    ptor.findElement(protractor.By.selectedOption('input.state')).click();
    ptor.findElement(protractor.By.input('input.checkbox')).click();

    expect(ptor.findElement(protractor.By.input('input.email')).getAttribute('value')).toBe('example@example.com');
    expect(ptor.findElement(protractor.By.input('input.name')).getAttribute('value')).toBe('my name');
    expect(ptor.findElement(protractor.By.input('input.city')).getAttribute('value')).toBe('davis');
    // expect(ptor.findElement(protractor.By.selectedOption('input.state')).getAttribute('value')).toBe('');
    expect(ptor.findElement(protractor.By.input('input.checkbox')).isSelected()).toBeTruthy();
  }, 100000);
});

