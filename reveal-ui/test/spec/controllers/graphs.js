'use strict';

describe('Controller: GraphsCtrl', function () {

  // load the controller's module
  beforeEach(module('revealUiApp'));

  var GraphsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GraphsCtrl = $controller('GraphsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
