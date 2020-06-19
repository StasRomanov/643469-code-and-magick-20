'use strict';

(function () {
  var renderNewItemColor = function (item, colorsArray, fillMethod, inputField) {
    if (fillMethod === 'fill') {
      var randColorFill = colorsArray[window.getRandomInteger(0, colorsArray.length - 1)];
      while (String(randColorFill) === item.style.fill) {
        randColorFill = colorsArray[window.getRandomInteger(0, colorsArray.length - 1)];
      }
      item.style.fill = randColorFill;
      inputField.value = randColorFill;
    }
    if (fillMethod === 'backgroundColor') {
      var randColorBcg = colorsArray[window.getRandomInteger(0, colorsArray.length - 1)];
      while (String(randColorBcg) === item.style.backgroundColor) {
        randColorBcg = colorsArray[window.getRandomInteger(0, colorsArray.length - 1)];
      }
      item.style.backgroundColor = randColorBcg;
      inputField.value = randColorBcg;
    }
  };

  window.onMainWizardCoatClick = function (evt) {
    if (evt.button === window.data.LEFT_MOUSE_CODE) {
      renderNewItemColor(window.data.mainWizardCoat, window.data.WIZARDS_COAT_COLORS, 'fill', window.data.mainWizardCoatInput);
    }
  };

  window.onMainWizardEyesClick = function (evt) {
    if (evt.button === window.data.LEFT_MOUSE_CODE) {
      renderNewItemColor(window.data.mainWizardEyes, window.data.WIZARDS_EYES_COLORS, 'fill', window.data.mainWizardEyesInput);
    }
  };

  window.onMainFireball = function (evt) {
    if (evt.button === window.data.LEFT_MOUSE_CODE) {
      renderNewItemColor(window.data.mainFireball, window.data.WIZARDS_FIREBALLS_COLORS, 'backgroundColor', window.data.mainWizardFireballInput);
    }
  };
})();
