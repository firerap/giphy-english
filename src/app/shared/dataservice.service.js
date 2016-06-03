(function() {
  'use strict';
  angular
    .module('app.dataservice')
    .factory('dataservice', dataservice);

    function dataservice($http, giphyConfig) {
      var service = {
        getGifsByWord: getGifsByWord
      };
      return service;

      function getGifsByWord(word) {
        return $http({
            url: 'http://api.giphy.com/v1/gifs/search',
            params: {
              api_key: giphyConfig.key,
              q: word
            }
          })
          .then(function(response) {
            return response.data;
          });
      }
    }
}());
