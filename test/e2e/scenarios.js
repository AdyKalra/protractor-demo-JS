'use strict';

// var util = require('util');

describe('Home Page', function() {
  var ptor;

  // beforeEach(function () {
    // ptor = protractor.getInstance();
    // ptor.get('/');
  // });

  it('should load page', function () {
    ptor = protractor.getInstance();
    ptor.get('/');
    expect(ptor.getCurrentUrl()).toBe('/');
  });
});