(function() {
  'use strict';
  angular
    .module('app.core', [
      'ngAnimate',
      'ngCookies',
      'ngSanitize',
      'ngMessages',
      'ui.router',
      'ngMaterial',
      
      'app.ngEnter'
    ]);
}());
