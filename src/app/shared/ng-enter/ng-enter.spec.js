'use strict';

describe('Directive: ngEnter', function () {

  // load the directive's module
  beforeEach(module('app'));

  var element,
      scope;

  beforeEach(inject(function ($rootScope) {

    scope = $rootScope;
    scope.mockFunction = function(){};
    compileDirective();

  }));

  /**
   * Compile the directive into HTML
   */
  function compileDirective(){
    element = angular.element('<input type="text" data-ng-enter="mockFunction()" />');
    inject(function($compile){
      element = $compile(element)(scope);
    });
    scope.$apply();
  }

  it('it should call the mock function on pressing enter', function () {
    spyOn(scope,'mockFunction');
    // var e = window.KeyboardEvent('keypress');
    // e.which = 13; //choose the one you want
    // e.keyCode = 13;
    // element.trigger(e);
    element.triggerHandler({type:"keydown", which: 13, keyCode: 13});
    expect(scope.mockFunction).toHaveBeenCalled();
  });

});
