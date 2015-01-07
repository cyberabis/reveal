'use strict';

describe('Controller: UniversalCtrl', function () {

  // load the controller's module
  beforeEach(module('revealUiApp'));

  var UniversalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UniversalCtrl = $controller('UniversalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
