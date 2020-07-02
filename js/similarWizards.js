'use strict';

(function () {
  var fragment = document.createDocumentFragment();
  var wizardTemplate = document.querySelector('#similar-wizard-template').content;
  var wizardListBlock = document.querySelector('.setup-similar-list');

  window.renderWizards = function (wizards) {
    wizardListBlock.innerHTML = '';
    for (var i = 0; i < wizards.length; i++) {
      var templateClone = wizardTemplate.cloneNode(true);
      var nameElement = templateClone.querySelector('.setup-similar-label');
      var coatElement = templateClone.querySelector('.wizard-coat');
      var eyesElement = templateClone.querySelector('.wizard-eyes');
      nameElement.textContent = wizards[i].name;
      coatElement.style.fill = wizards[i].colorCoat;
      eyesElement.style.fill = wizards[i].colorEyes;
      fragment.appendChild(templateClone);
    }
    wizardListBlock.appendChild(fragment);
  };
})();
