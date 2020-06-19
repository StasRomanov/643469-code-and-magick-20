'use strict';

(function () {
  var setupOpenButton = document.querySelector('.setup-open');
  var setupOpenIcon = document.querySelector('.setup-open-icon');
  var setupCloseButton = document.querySelector('.setup-close');

  var addListenerToggle = function (toggle) {
    if (toggle) {
      setupOpenButton.removeEventListener('click', onSetupOpenButtonClick, false);
      setupOpenIcon.removeEventListener('keydown', onSetupOpenIconKeydown, false);
      setupCloseButton.addEventListener('click', onSetupCloseButtonClick, false);
      document.addEventListener('keydown', onDocumentKeydown, false);
      window.data.mainWizardCoat.addEventListener('click', window.onMainWizardCoatClick, false);
      window.data.mainWizardEyes.addEventListener('click', window.onMainWizardEyesClick, false);
      window.data.mainFireball.addEventListener('click', window.onMainFireball, false);
    } else {
      setupOpenButton.addEventListener('click', onSetupOpenButtonClick, false);
      setupOpenIcon.addEventListener('keydown', onSetupOpenIconKeydown, false);
      setupCloseButton.removeEventListener('click', onSetupCloseButtonClick, false);
      document.removeEventListener('keydown', onDocumentKeydown, false);
      window.data.mainWizardCoat.removeEventListener('click', window.onMainWizardCoatClick, false);
      window.data.mainWizardEyes.removeEventListener('click', window.onMainWizardEyesClick, false);
      window.data.mainFireball.removeEventListener('click', window.onMainFireball, false);
    }
  };

  var renderSetupToggle = function (toggle) {
    if (toggle) {
      window.data.setupBlock.classList.remove('hidden');
      window.data.similarBlock.classList.remove('hidden');
    } else {
      window.data.setupBlock.classList.add('hidden');
      window.data.similarBlock.classList.add('hidden');
    }
  };

  var onSetupOpenButtonClick = function (evt) {
    if (evt.button === window.data.LEFT_MOUSE_CODE) {
      renderSetupToggle(true);
    }
    addListenerToggle(true);
  };

  var onSetupOpenIconKeydown = function (evt) {
    if (evt.code === window.data.ENTER_KEY) {
      renderSetupToggle(true);
    }
    addListenerToggle(true);
  };

  var onSetupCloseButtonClick = function (evt) {
    if (evt.button === window.data.LEFT_MOUSE_CODE) {
      renderSetupToggle(false);
    }
    addListenerToggle(false);
  };

  var onDocumentKeydown = function (evt) {
    if (evt.code === window.data.ESC_KEY) {
      if (document.activeElement !== window.data.nameWizardInput) {
        renderSetupToggle(false);
        addListenerToggle(false);
      }
    }
  };

  window.renderWizardsBlock = function () {
    window.createAllWizardsInfo();
    window.renderWizards();
  };

  setupOpenButton.addEventListener('click', onSetupOpenButtonClick, false);
  setupOpenIcon.addEventListener('keydown', onSetupOpenIconKeydown, false);
})();
