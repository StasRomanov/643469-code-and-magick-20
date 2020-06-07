'use strict';
var wizardsQuantity = 4;
var wizardTemplate = document.querySelector('#similar-wizard-template').content;
var setup = document.querySelector('.setup');
var similar = document.querySelector('.setup-similar');
var wizardNameBlock = wizardTemplate.querySelector('.setup-similar-label');
var wizardCoatBlock = wizardTemplate.querySelector('.wizard-coat');
var wizardEyesBlock = wizardTemplate.querySelector('.wizard-eyes');
var renderBlock = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();
var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
  'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyeColors = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];

var getRandomInteger = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

var getWizardsInfo = function (name, coat, eyes) {
  var wizardInfo = {
    name: name,
    eyesColor: eyes,
    coatColor: coat
  };
  wizards.push(wizardInfo);
};

var getAllWizardsInfo = function () {
  for (var i = 0; i < wizardsQuantity; i++) {
    var name = wizardNames[getRandomInteger(0, wizardNames.length - 1)] + ' ' +
      wizardSurname[getRandomInteger(0, wizardSurname.length - 1)];
    var coat = coatColors[getRandomInteger(0, coatColors.length - 1)];
    var eyes = eyeColors[getRandomInteger(0, eyeColors.length - 1)];
    getWizardsInfo(name, coat, eyes);
  }
};

var renderWizards = function () {
  for (var i = 0; i < wizards.length; i++) {
    var templateClone = wizardTemplate.cloneNode(true);
    wizardNameBlock.textContent = wizards[i].name;
    wizardCoatBlock.style.fill = wizards[i].coatColor;
    wizardEyesBlock.style.fill = wizards[i].eyesColor;
    renderBlock.appendChild(templateClone);
  }
};

var renderWizardsBlock = function () {
  setup.classList.remove('hidden');
  similar.classList.remove('hidden');
  getAllWizardsInfo();
  renderWizards();
};

renderWizardsBlock();
