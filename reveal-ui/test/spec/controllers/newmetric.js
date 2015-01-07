'use strict';

describe('Controller: NewmetricCtrl', function () {

  // load the controller's module
  beforeEach(module('revealUiApp'));

  var NewmetricCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewmetricCtrl = $controller('NewmetricCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
