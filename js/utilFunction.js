'use strict';

(function () {
  var shuffle = function (arr) {
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
  };

  var createWizardsInfo = function (name, coat, eyes, allInfoArr) {
    var wizardInfo = {
      name: name,
      eyesColor: eyes,
      coatColor: coat
    };
    allInfoArr.push(wizardInfo);
  };

  window.utilFunction = {
    getRandomInteger: function (min, max) {
      var rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    },

    createAllWizardsInfo: function () {
      var shuffleName = shuffle(window.data.WIZARDS_NAMES);
      var shuffleSurname = shuffle(window.data.WIZARDS_SURNAMES);
      var shuffleCoat = shuffle(window.data.WIZARDS_COAT_COLORS);
      var shuffleEyes = shuffle(window.data.WIZARDS_EYES_COLORS);
      for (var i = 0; i < window.utilData.WIZARDS_QUANTITY; i++) {
        var name = shuffleName[i] + ' ' + shuffleSurname[i];
        var coat = shuffleCoat[i];
        var eyes = shuffleEyes[i];
        createWizardsInfo(name, coat, eyes, window.utilData.wizards);
      }
    },
  };
})();
