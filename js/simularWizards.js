'use strict';

(function () {
  window.renderWizards = function () {
    for (var i = 0; i < window.data.wizards.length; i++) {
      var templateClone = window.data.wizardTemplate.cloneNode(true);
      var nameElement = templateClone.querySelector('.setup-similar-label');
      var coatElement = templateClone.querySelector('.wizard-coat');
      var eyesElement = templateClone.querySelector('.wizard-eyes');
      nameElement.textContent = window.data.wizards[i].name;
      coatElement.style.fill = window.data.wizards[i].coatColor;
      eyesElement.style.fill = window.data.wizards[i].eyesColor;
      window.data.fragment.appendChild(templateClone);
    }
    window.data.wizardListBlock.appendChild(window.data.fragment);
  };
})();
