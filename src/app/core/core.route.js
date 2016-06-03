(function() {
  'use strict';

  angular
    .module('app.core')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('predict-by-gif', {
        url: '/',
        templateUrl: 'app/components/predict-by-gif/predict-by-gif.html',
        controller: 'predictByGif',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
