var util = require('util');

describe('angularjs homepage', function() {
  var ptor;

  beforeEach(function () {
  	ptor = protractor.getInstance();
  	ptor.get('/');
  });
});