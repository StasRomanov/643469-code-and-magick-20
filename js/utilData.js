'use strict';

(function () {
  var WIZARDS_QUANTITY = 4;
  var LEFT_MOUSE_CODE = 0;
  var ENTER_KEY = 'Enter';
  var ESC_KEY = 'Escape';
  var wizards = [];
  var mainWizard = document.querySelector('.setup-wizard');
  var mainWizardCoat = mainWizard.querySelector('.wizard-coat');
  var mainWizardEyes = document.querySelector('.wizard-eyes');
  var mainFireball = document.querySelector('.setup-fireball-wrap');


  window.utilData = {
    WIZARDS_QUANTITY: WIZARDS_QUANTITY,
    LEFT_MOUSE_CODE: LEFT_MOUSE_CODE,
    ENTER_KEY: ENTER_KEY,
    ESC_KEY: ESC_KEY,
    wizards: wizards,
    mainWizard: mainWizard,
    mainWizardCoat: mainWizardCoat,
    mainWizardEyes: mainWizardEyes,
    mainFireball: mainFireball
  };
})();
