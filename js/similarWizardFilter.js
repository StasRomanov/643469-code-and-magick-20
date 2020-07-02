'use strict';

(function () {
  var result = [];
  var getIndex = function (wizard, colorCoat, colorEyes) {
    if (wizard.colorCoat === colorCoat && wizard.colorEyes === colorEyes) {
      return 3;
    }
    if (wizard.colorCoat === colorCoat && wizard.colorEyes !== colorEyes) {
      return 2;
    }
    if (wizard.colorCoat !== colorCoat && wizard.colorEyes === colorEyes) {
      return 1;
    }
    if (wizard.colorCoat !== colorCoat && wizard.colorEyes !== colorEyes) {
      return 0;
    }
    return 0;
  };

  window.filter = function () {
    var coatCurrentFill = window.utilData.mainWizardCoat.style.fill;
    var eyeCurrentFill = window.utilData.mainWizardEyes.style.fill;
    if (coatCurrentFill === '') {
      coatCurrentFill = '#6589a4';
    }
    if (eyeCurrentFill === '') {
      eyeCurrentFill = 'black';
    }
    result = window.utilData.allWizards.slice().sort(function (left, right) {
      var diff = getIndex(right, coatCurrentFill, eyeCurrentFill) - getIndex(left, coatCurrentFill, eyeCurrentFill);
      if (diff === 0) {
        diff = result.indexOf(left) - result.indexOf(right);
      }
      return diff;
    });
    result = result.slice(0, 4);
    window.renderWizards(result);
  };
})();
