'use strict';

(function () {
  var WIZARDS_QUANTITY = 4;
  var LEFT_MOUSE_CODE = 0;
  var ENTER_KEY = 'Enter';
  var ESC_KEY = 'Escape';
  var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARDS_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
    'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARDS_FIREBALLS_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var wizardTemplate = document.querySelector('#similar-wizard-template').content;
  var setupBlock = document.querySelector('.setup');
  var similarBlock = document.querySelector('.setup-similar');
  var wizardListBlock = document.querySelector('.setup-similar-list');
  var nameWizardInput = document.querySelector('.setup-user-name');
  var mainWizard = document.querySelector('.setup-wizard');
  var mainWizardCoat = mainWizard.querySelector('.wizard-coat');
  var mainWizardEyes = document.querySelector('.wizard-eyes');
  var mainWizardCoatInput = document.getElementsByName('coat-color');
  var mainWizardEyesInput = document.getElementsByName('eyes-color');
  var mainFireball = document.querySelector('.setup-fireball-wrap');
  var mainWizardFireballInput = document.getElementsByName('fireball-color');
  var fragment = document.createDocumentFragment();
  var wizards = [];

  window.data = {
    WIZARDS_QUANTITY: WIZARDS_QUANTITY,
    LEFT_MOUSE_CODE: LEFT_MOUSE_CODE,
    ENTER_KEY: ENTER_KEY,
    ESC_KEY: ESC_KEY,
    WIZARDS_NAMES: WIZARDS_NAMES,
    WIZARDS_SURNAMES: WIZARDS_SURNAMES,
    WIZARDS_COAT_COLORS: WIZARDS_COAT_COLORS,
    WIZARDS_EYES_COLORS: WIZARDS_EYES_COLORS,
    WIZARDS_FIREBALLS_COLORS: WIZARDS_FIREBALLS_COLORS,
    wizardTemplate: wizardTemplate,
    setupBlock: setupBlock,
    similarBlock: similarBlock,
    wizardListBlock: wizardListBlock,
    nameWizardInput: nameWizardInput,
    mainWizard: mainWizard,
    mainWizardCoat: mainWizardCoat,
    mainWizardEyes: mainWizardEyes,
    mainWizardCoatInput: mainWizardCoatInput,
    mainWizardEyesInput: mainWizardEyesInput,
    mainFireball: mainFireball,
    mainWizardFireballInput: mainWizardFireballInput,
    fragment: fragment,
    wizards: wizards
  };
})();

(function () {
  window.getRandomInteger = function (min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

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

  window.createWizardsInfo = function (name, coat, eyes, allInfoArr) {
    var wizardInfo = {
      name: name,
      eyesColor: eyes,
      coatColor: coat
    };
    allInfoArr.push(wizardInfo);
  };

  window.createAllWizardsInfo = function () {
    var shuffleName = shuffle(window.data.WIZARDS_NAMES);
    var shuffleSurname = shuffle(window.data.WIZARDS_SURNAMES);
    var shuffleCoat = shuffle(window.data.WIZARDS_COAT_COLORS);
    var shuffleEyes = shuffle(window.data.WIZARDS_EYES_COLORS);
    for (var i = 0; i < window.data.WIZARDS_QUANTITY; i++) {
      var name = shuffleName[i] + ' ' + shuffleSurname[i];
      var coat = shuffleCoat[i];
      var eyes = shuffleEyes[i];
      window.createWizardsInfo(name, coat, eyes, window.data.wizards);
    }
  };
})();
