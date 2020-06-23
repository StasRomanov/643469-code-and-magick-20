'use strict';

(function () {
  var fragment = document.createDocumentFragment();
  var wizardTemplate = document.querySelector('#similar-wizard-template').content;
  var wizardListBlock = document.querySelector('.setup-similar-list');


  window.renderWizards = function () {
    for (var i = 0; i < window.utilData.wizards.length; i++) {
      var templateClone = wizardTemplate.cloneNode(true);
      var nameElement = templateClone.querySelector('.setup-similar-label');
      var coatElement = templateClone.querySelector('.wizard-coat');
      var eyesElement = templateClone.querySelector('.wizard-eyes');
      nameElement.textContent = window.utilData.wizards[i].name;
      coatElement.style.fill = window.utilData.wizards[i].colorCoat;
      eyesElement.style.fill = window.utilData.wizards[i].colorEye;
      fragment.appendChild(templateClone);
    }
    wizardListBlock.appendChild(fragment);
  };
})();
