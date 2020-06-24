'use strict';

(function () {
  var wizardPictureBlock = document.querySelector('svg');
  var headerBlock = document.querySelector('header');
  var errorTemplate = document.querySelector('#error-template');
  var form = document.querySelector('.setup-wizard-form');
  var DATA_LOAD = 'https://javascript.pages.academy/code-and-magick/data';
  var DATA_SEND = 'https://javascript.pages.academy/code-and-magick';
  var TIMEOUT_IN_MS = 10000;
  var StatusCode = {
    ok: 200
  };
  var JSON_TYPE = 'json';
  var submitButton = document.querySelector('.setup-submit');

  window.backend = {
    load: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = JSON_TYPE;
      xhr.open('GET', DATA_LOAD);
      xhr.send();

      xhr.addEventListener('load', function () {
        if (xhr.status === StatusCode.ok) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.timeout = TIMEOUT_IN_MS;
    },

    save: function (data, onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open('POST', DATA_SEND);
      xhr.send(data);
      xhr.addEventListener('load', function () {
        if (xhr.status === StatusCode.ok) {
          onLoad();
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.timeout = TIMEOUT_IN_MS;
    }
  };

  var onSuccess = function (data) {
    window.utilData.wizards = data;
    window.utilData.allWizards = data;
    window.utilData.wizards = window.utilFunction.shuffle(window.utilData.wizards);
    while (window.utilData.wizards.length > window.utilData.WIZARDS_QUANTITY) {
      window.utilData.wizards.splice(window.utilData.wizards.length - 1, 1);
    }
    window.renderWizardsBlock();
  };

  var onError = function (message) {
    window.utilData.fragment = document.createDocumentFragment();
    var element = errorTemplate.content.cloneNode(true);
    element.querySelector('.error-header-text').textContent = message;
    element.querySelector('.error-description').textContent = 'something wrong. ' +
      'Please reload page or check your internet connection.';
    window.utilData.fragment.appendChild(element);
    headerBlock.insertBefore(window.utilData.fragment, wizardPictureBlock);
    throw new Error('something wrong.' + '\n' + message + '\n' +
      'Please reload page or check your internet connection.');
  };

  var onSuccessUpload = function () {
    window.hiddenSetup();
  };

  var onSubmitButtonClick = function (evt) {
    if (evt.button === window.utilData.LEFT_MOUSE_CODE) {
      evt.preventDefault();
      window.backend.save(new FormData(form), onSuccessUpload, onError);
    }
  };

  submitButton.addEventListener('click', onSubmitButtonClick, false);

  window.backend.load(onSuccess, onError);
})();
