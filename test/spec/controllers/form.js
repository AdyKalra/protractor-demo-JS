'use strict';

describe('Controller: FormCtrl', function () {

  beforeEach(module('protractorDemoApp'));

  var ctrl,scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('FormCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of states to the scope', function () {
    expect(scope.states.length).toBe(50);
  });

  it('should validate form', function () {
    
  });
});
