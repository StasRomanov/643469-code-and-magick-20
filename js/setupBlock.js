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
      window.data.setupBlock.style.position = '';
      window.data.setupBlock.style.left = '';
      window.data.setupBlock.style.top = '';
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

  (function () {
    var setupInputUpload = document.querySelector('.upload');
    var NORMAL_LEFT = 405;

    var onMainPinMove = function (evt) {
      evt.preventDefault();
      if (evt.button === window.data.LEFT_MOUSE_CODE) {
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

          window.data.setupBlock.style.left = (window.data.setupBlock.offsetLeft - shift.x) + 'px';
          window.data.setupBlock.style.top = (window.data.setupBlock.offsetTop - shift.y) + 'px';

          if (window.data.setupBlock.offsetLeft - shift.x - NORMAL_LEFT + window.data.setupBlock.offsetWidth > document.documentElement.clientWidth) {
            onMouseUp();
            window.data.setupBlock.style.left = (window.data.setupBlock.offsetLeft - shift.x - 20) + 'px';
          }
          if (window.data.setupBlock.offsetTop - shift.y < 0) {
            onMouseUp();
            window.data.setupBlock.style.top = (window.data.setupBlock.offsetTop - shift.y + 20) + 'px';
          }
          if (window.data.setupBlock.offsetLeft - shift.x - NORMAL_LEFT < 0) {
            onMouseUp();
            window.data.setupBlock.style.left = (window.data.setupBlock.offsetLeft - shift.x + 20) + 'px';
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

    setupInputUpload.addEventListener('mousedown', onMainPinMove, false);
  })();
})();
