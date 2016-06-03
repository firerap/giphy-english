(function() {
  'use strict';
  angular
    .module('app.predictByGif')
    .controller('predictByGif', predictByGif);

    /* ngInject */
    function predictByGif(dataservice, wordsConfig, $timeout) {
      var vm = this;
      vm.gifs = [];
      vm.wordSubmit = wordSubmit;
      vm.word = getRandomWord();

      render();

      /********  IMPLEMENTATION  ********/
      function render() {
        dataservice
          .getGifsByWord(vm.word)
          .then(function(gifs) {
            vm.gifs = gifs.data.map(function(gif) {
              return gif.images.fixed_height.url;
            });
          });
      }

      function wordSubmit(event) {
        var word = event.target.value;
        event.target.value = '';
        if(vm.word === word) {
          $timeout(function () {
            alert('You cool!');
          });
          nextWord();
        } else {
          $timeout(function () {
            alert('Try again!');
          });
        }
      }

      function nextWord() {
        // Set new word to vm.word.

        vm.word = getRandomWord();
        render();
      }

      function getRandomWord() {
        return wordsConfig[Math.floor(wordsConfig.length * Math.random())];
      }

    }
}());
