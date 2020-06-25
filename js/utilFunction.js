'use strict';

(function () {
  window.utilFunction = {
    getRandomInteger: function (min, max) {
      var rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    },

    shuffle: function (arr) {
      var shuffleArray = arr.slice();
      var j;
      var temp;
      for (var i = shuffleArray.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = shuffleArray[j];
        shuffleArray[j] = shuffleArray[i];
        shuffleArray[i] = temp;
      }
      return shuffleArray;
    }
  };
})();
