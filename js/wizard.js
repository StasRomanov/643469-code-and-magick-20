'use strict';

(function () {
  var mainWizardCoatInput = document.getElementsByName('coat-color');
  var mainWizardEyesInput = document.getElementsByName('eyes-color');
  var mainWizardFireballInput = document.getElementsByName('fireball-color');

  var renderNewItemColor = function (item, colorsArray, fillMethod, inputField) {
    if (item === window.utilData.mainWizardCoat) {
      if (fillMethod === 'fill') {
        var randCoatFill = colorsArray[window.utilFunction.getRandomInteger(0, colorsArray.length - 1)].colorCoat;
        while (String(randCoatFill) === item.style.fill) {
          randCoatFill = colorsArray[window.utilFunction.getRandomInteger(0, colorsArray.length - 1)].colorCoat;
        }
        item.style.fill = randCoatFill;
        inputField.value = randCoatFill;
      }
    }
    if (item === window.utilData.mainWizardEyes) {
      if (fillMethod === 'fill') {
        var randEyesFill = colorsArray[window.utilFunction.getRandomInteger(0, colorsArray.length - 1)].colorEyes;
        while (String(randEyesFill) === item.style.fill) {
          randEyesFill = colorsArray[window.utilFunction.getRandomInteger(0, colorsArray.length - 1)].colorEyes;
        }
        item.style.fill = randEyesFill;
        inputField.value = randEyesFill;
      }
    }
    if (item === window.utilData.mainFireball) {
      if (fillMethod === 'backgroundColor') {
        var randColorBcg = colorsArray[window.utilFunction.getRandomInteger(0, colorsArray.length - 1)].colorFireball;
        while (String(randColorBcg) === item.style.backgroundColor) {
          randColorBcg = colorsArray[window.utilFunction.getRandomInteger(0, colorsArray.length - 1)].colorFireball;
        }
        item.style.backgroundColor = randColorBcg;
        inputField.value = randColorBcg;
      }
    }
  };

  window.onMainWizardCoatClick = function (evt) {
    if (evt.button === window.utilData.LEFT_MOUSE_CODE) {
      renderNewItemColor(window.utilData.mainWizardCoat, window.utilData.allWizards, 'fill', mainWizardCoatInput);
    }
  };

  window.onMainWizardEyesClick = function (evt) {
    if (evt.button === window.utilData.LEFT_MOUSE_CODE) {
      renderNewItemColor(window.utilData.mainWizardEyes, window.utilData.allWizards, 'fill', mainWizardEyesInput);
    }
  };

  window.onMainFireball = function (evt) {
    if (evt.button === window.utilData.LEFT_MOUSE_CODE) {
      renderNewItemColor(window.utilData.mainFireball, window.utilData.allWizards, 'backgroundColor', mainWizardFireballInput);
    }
  };
})();
