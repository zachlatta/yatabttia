'use strict';

describe('Controller: TodoCtrl', function () {

  // load the controller's module
  beforeEach(module('yatabttiaApp'));

  var TodoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TodoCtrl = $controller('TodoCtrl', {
      $scope: scope
    });
  }));

  it('should start with two todos appended to scope', function () {
    expect(scope.todos.length).toBe(2);
  });
});
