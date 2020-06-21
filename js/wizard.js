'use strict';

(function () {
  var mainWizardCoatInput = document.getElementsByName('coat-color');
  var mainWizardEyesInput = document.getElementsByName('eyes-color');
  var mainWizardFireballInput = document.getElementsByName('fireball-color');

  var renderNewItemColor = function (item, colorsArray, fillMethod, inputField) {
    if (fillMethod === 'fill') {
      var randColorFill = colorsArray[window.utilFunction.getRandomInteger(0, colorsArray.length - 1)];
      while (String(randColorFill) === item.style.fill) {
        randColorFill = colorsArray[window.utilFunction.getRandomInteger(0, colorsArray.length - 1)];
      }
      item.style.fill = randColorFill;
      inputField.value = randColorFill;
    }
    if (fillMethod === 'backgroundColor') {
      var randColorBcg = colorsArray[window.utilFunction.getRandomInteger(0, colorsArray.length - 1)];
      while (String(randColorBcg) === item.style.backgroundColor) {
        randColorBcg = colorsArray[window.utilFunction.getRandomInteger(0, colorsArray.length - 1)];
      }
      item.style.backgroundColor = randColorBcg;
      inputField.value = randColorBcg;
    }
  };

  window.onMainWizardCoatClick = function (evt) {
    if (evt.button === window.utilData.LEFT_MOUSE_CODE) {
      renderNewItemColor(window.utilData.mainWizardCoat, window.data.WIZARDS_COAT_COLORS, 'fill', mainWizardCoatInput);
    }
  };

  window.onMainWizardEyesClick = function (evt) {
    if (evt.button === window.utilData.LEFT_MOUSE_CODE) {
      renderNewItemColor(window.utilData.mainWizardEyes, window.data.WIZARDS_EYES_COLORS, 'fill', mainWizardEyesInput);
    }
  };

  window.onMainFireball = function (evt) {
    if (evt.button === window.utilData.LEFT_MOUSE_CODE) {
      renderNewItemColor(window.utilData.mainFireball, window.data.WIZARDS_FIREBALLS_COLORS, 'backgroundColor', mainWizardFireballInput);
    }
  };
})();
