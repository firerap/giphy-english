(function() {
  'use strict';
  angular
    .module('app')
    .constant('ROOT_URL', '/api')
    .constant('giphyConfig', {
      key: 'dc6zaTOxFJmzC'
    })
    // Temp constant
    .constant('wordsConfig', [
      'cat',
      'dog',
      'party',
      'sun',
      'math'
    ])

}());
