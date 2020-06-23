'use strict';

(function () {
  var setupOpenButton = document.querySelector('.setup-open');
  var setupOpenIcon = document.querySelector('.setup-open-icon');
  var setupCloseButton = document.querySelector('.setup-close');
  var setupBlock = document.querySelector('.setup');
  var similarBlock = document.querySelector('.setup-similar');
  var nameWizardInput = document.querySelector('.setup-user-name');
  var SAFE_GAP_ZONE = 20;

  var addListenerToggle = function (toggle) {
    if (toggle) {
      setupOpenButton.removeEventListener('click', onSetupOpenButtonClick, false);
      setupOpenIcon.removeEventListener('keydown', onSetupOpenIconKeydown, false);
      setupCloseButton.addEventListener('click', onSetupCloseButtonClick, false);
      document.addEventListener('keydown', onDocumentKeydown, false);
      window.utilData.mainWizardCoat.addEventListener('click', window.onMainWizardCoatClick, false);
      window.utilData.mainWizardEyes.addEventListener('click', window.onMainWizardEyesClick, false);
      window.utilData.mainFireball.addEventListener('click', window.onMainFireball, false);
    } else {
      setupOpenButton.addEventListener('click', onSetupOpenButtonClick, false);
      setupOpenIcon.addEventListener('keydown', onSetupOpenIconKeydown, false);
      setupCloseButton.removeEventListener('click', onSetupCloseButtonClick, false);
      document.removeEventListener('keydown', onDocumentKeydown, false);
      window.utilData.mainWizardCoat.removeEventListener('click', window.onMainWizardCoatClick, false);
      window.utilData.mainWizardEyes.removeEventListener('click', window.onMainWizardEyesClick, false);
      window.utilData.mainFireball.removeEventListener('click', window.onMainFireball, false);
    }
  };

  var renderSetupToggle = function (toggle) {
    if (toggle) {
      setupBlock.classList.remove('hidden');
      similarBlock.classList.remove('hidden');
    } else {
      setupBlock.classList.add('hidden');
      similarBlock.classList.add('hidden');
    }
  };

  var onSetupOpenButtonClick = function (evt) {
    if (evt.button === window.utilData.LEFT_MOUSE_CODE) {
      renderSetupToggle(true);
    }
    addListenerToggle(true);
  };

  var onSetupOpenIconKeydown = function (evt) {
    if (evt.code === window.utilData.ENTER_KEY) {
      renderSetupToggle(true);
    }
    addListenerToggle(true);
  };

  var onSetupCloseButtonClick = function (evt) {
    if (evt.button === window.utilData.LEFT_MOUSE_CODE) {
      renderSetupToggle(false);
      setupBlock.style.position = '';
      setupBlock.style.left = '';
      setupBlock.style.top = '';
    }
    addListenerToggle(false);
  };

  var onDocumentKeydown = function (evt) {
    if (evt.code === window.utilData.ESC_KEY) {
      if (document.activeElement !== nameWizardInput) {
        renderSetupToggle(false);
        addListenerToggle(false);
      }
    }
  };

  setupOpenButton.addEventListener('click', onSetupOpenButtonClick, false);
  setupOpenIcon.addEventListener('keydown', onSetupOpenIconKeydown, false);

  var setupInputUpload = document.querySelector('.upload');
  var NORMAL_LEFT = 405;

  var onMainPinMove = function (evt) {
    evt.preventDefault();
    if (evt.button === window.utilData.LEFT_MOUSE_CODE) {
      var startCoords = {
        x: evt.clientX,
        y: evt.clientY
      };
      var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();
        var shift = {
          x: startCoords.x - moveEvt.clientX,
          y: startCoords.y - moveEvt.clientY
        };
        startCoords = {
          x: moveEvt.clientX,
          y: moveEvt.clientY
        };

        setupBlock.style.left = (setupBlock.offsetLeft - shift.x) + 'px';
        setupBlock.style.top = (setupBlock.offsetTop - shift.y) + 'px';

        if (setupBlock.offsetLeft - shift.x - NORMAL_LEFT + setupBlock.offsetWidth > document.documentElement.clientWidth) {
          setupBlock.style.left = (setupBlock.offsetLeft - shift.x - SAFE_GAP_ZONE) + 'px';
        }
        if (setupBlock.offsetTop - shift.y < 0) {
          setupBlock.style.top = (setupBlock.offsetTop - shift.y + SAFE_GAP_ZONE) + 'px';
        }
        if (setupBlock.offsetLeft - shift.x - NORMAL_LEFT < 0) {
          setupBlock.style.left = (setupBlock.offsetLeft - shift.x + SAFE_GAP_ZONE) + 'px';
        }
      };

      var onMouseUp = function () {
        evt.preventDefault();
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }
  };

  window.hiddenSetup = function () {
    renderSetupToggle(false);
    setupBlock.style.position = '';
    setupBlock.style.left = '';
    setupBlock.style.top = '';
    addListenerToggle(false);
  };

  setupInputUpload.addEventListener('mousedown', onMainPinMove, false);
})();
