'use strict';
var WIZARDS_QUANTITY = 4;
var wizardTemplate = document.querySelector('#similar-wizard-template').content;
var setup = document.querySelector('.setup');
var similar = document.querySelector('.setup-similar');
var renderBlock = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();
var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
  'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyeColors = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];

var shuffle = function (arr) {
  var j;
  var temp;
  for (var i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
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
  shuffle(wizardNames);
  shuffle(wizardSurname);
  shuffle(coatColors);
  shuffle(eyeColors);
  for (var i = 0; i < WIZARDS_QUANTITY; i++) {
    var name = wizardNames[i] + ' ' + wizardSurname[i];
    var coat = coatColors[i];
    var eyes = eyeColors[i];
    getWizardsInfo(name, coat, eyes);
  }
};

var renderWizards = function () {
  for (var i = 0; i < wizards.length; i++) {
    var templateClone = wizardTemplate.cloneNode(true);
    var nameElement = templateClone.querySelector('.setup-similar-label');
    var coatElement = templateClone.querySelector('.wizard-coat');
    var eyesElement = templateClone.querySelector('.wizard-eyes');
    nameElement.textContent = wizards[i].name;
    coatElement.style.fill = wizards[i].coatColor;
    eyesElement.style.fill = wizards[i].eyesColor;
    fragment.appendChild(templateClone);
  }
  renderBlock.appendChild(fragment);
};

var renderWizardsBlock = function () {
  getAllWizardsInfo();
  renderWizards();
  setup.classList.remove('hidden');
  similar.classList.remove('hidden');
};

renderWizardsBlock();
