'use strict';

(function () {

  window.filter = function () {
    var coatCurrentFill = window.utilData.mainWizardCoat.style.fill;
    var eyeCurrentFill = window.utilData.mainWizardEyes.style.fill;
    if (coatCurrentFill === '') {
      coatCurrentFill = '#6589a4';
    }
    if (eyeCurrentFill === '') {
      eyeCurrentFill = 'black';
    }
    var coatEyesFilter = function (colorCoat, colorEyes) {
      return window.utilData.allWizards.filter(function (wizard) {
        return wizard.colorCoat === colorCoat && wizard.colorEyes === colorEyes;
      });
    };
    var coatFilter = function (colorCoat, colorEyes) {
      return window.utilData.allWizards.filter(function (wizard) {
        return wizard.colorCoat === colorCoat && wizard.colorEyes !== colorEyes;
      });
    };
    var eyesFilter = function (colorCoat, colorEyes) {
      return window.utilData.allWizards.filter(function (wizard) {
        return wizard.colorCoat !== colorCoat && wizard.colorEyes === colorEyes;
      });
    };
    var anyWizardFilter = function (colorCoat, colorEyes) {
      return window.utilData.allWizards.filter(function (wizard) {
        return wizard.colorCoat !== colorCoat && wizard.colorEyes !== colorEyes;
      });
    };
    var result = coatEyesFilter(coatCurrentFill, eyeCurrentFill);
    result = result.concat(coatFilter(coatCurrentFill, eyeCurrentFill));
    result = result.concat(eyesFilter(coatCurrentFill, eyeCurrentFill));
    result = result.concat(anyWizardFilter(coatCurrentFill, eyeCurrentFill));
    result = result.slice(0, 4);
    window.renderWizards(result);
  };
})();
