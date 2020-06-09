'use strict';
var WIZARDS_QUANTITY = 4;
var wizardTemplate = document.querySelector('#similar-wizard-template').content;
var setupBlock = document.querySelector('.setup');
var similarBlock = document.querySelector('.setup-similar');
var wizardListBlock = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();
var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
  'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
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

var createWizardsInfo = function (name, coat, eyes, array) {
  var wizardInfo = {
    name: name,
    eyesColor: eyes,
    coatColor: coat
  };
  array.push(wizardInfo);
};

var createAllWizardsInfo = function () {
  shuffle(WIZARDS_NAMES);
  shuffle(WIZARDS_SURNAMES);
  shuffle(WIZARDS_COAT_COLORS);
  shuffle(WIZARDS_EYES_COLORS);
  for (var i = 0; i < WIZARDS_QUANTITY; i++) {
    var name = WIZARDS_NAMES[i] + ' ' + WIZARDS_SURNAMES[i];
    var coat = WIZARDS_COAT_COLORS[i];
    var eyes = WIZARDS_EYES_COLORS[i];
    createWizardsInfo(name, coat, eyes, wizards);
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
  wizardListBlock.appendChild(fragment);
};

var renderWizardsBlock = function () {
  createAllWizardsInfo();
  renderWizards();
  setupBlock.classList.remove('hidden');
  similarBlock.classList.remove('hidden');
};

renderWizardsBlock();
