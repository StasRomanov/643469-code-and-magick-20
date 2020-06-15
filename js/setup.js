'use strict';
var WIZARDS_QUANTITY = 4;
var LEFT_MOUSE_CODE = 0;
var ENTER_KEY = 'Enter';
var ESC_KEY = 'Escape';
var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
  'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_FIREBALLS_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var wizardTemplate = document.querySelector('#similar-wizard-template').content;
var setupBlock = document.querySelector('.setup');
var similarBlock = document.querySelector('.setup-similar');
var wizardListBlock = document.querySelector('.setup-similar-list');
var setupOpenButton = document.querySelector('.setup-open');
var setupCloseButton = document.querySelector('.setup-close');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var nameWizardInput = document.querySelector('.setup-user-name');
var mainWizard = document.querySelector('.setup-wizard');
var mainWizardCoat = mainWizard.querySelector('.wizard-coat');
var mainWizardEyes = document.querySelector('.wizard-eyes');
var mainWizardCoatInput = document.getElementsByName('coat-color');
var mainWizardEyesInput = document.getElementsByName('eyes-color');
var mainFireball = document.querySelector('.setup-fireball-wrap');
var mainWizardFireballInput = document.getElementsByName('fireball-color');
var fragment = document.createDocumentFragment();
var wizards = [];

var getRandomInteger = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

var shuffle = function (arr) {
  var shuffleArray = arr.slice();
  var j;
  var temp;
  for (var i = shuffleArray.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = shuffleArray[j];
    shuffleArray[j] = shuffleArray[i];
    shuffleArray[i] = temp;
  }
  return shuffleArray;
};

var createWizardsInfo = function (name, coat, eyes, allInfoArr) {
  var wizardInfo = {
    name: name,
    eyesColor: eyes,
    coatColor: coat
  };
  allInfoArr.push(wizardInfo);
};

var createAllWizardsInfo = function () {
  var shuffleName = shuffle(WIZARDS_NAMES);
  var shuffleSurname = shuffle(WIZARDS_SURNAMES);
  var shuffleCoat = shuffle(WIZARDS_COAT_COLORS);
  var shuffleEyes = shuffle(WIZARDS_EYES_COLORS);
  for (var i = 0; i < WIZARDS_QUANTITY; i++) {
    var name = shuffleName[i] + ' ' + shuffleSurname[i];
    var coat = shuffleCoat[i];
    var eyes = shuffleEyes[i];
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

var renderSetupToggle = function (toggle) {
  if (toggle) {
    setupBlock.classList.remove('hidden');
    similarBlock.classList.remove('hidden');
  } else {
    setupBlock.classList.add('hidden');
    similarBlock.classList.add('hidden');
  }
};

var renderNewItemColor = function (item, colorsArray, fillMethod, inputField) {
  if (fillMethod === 'fill') {
    var randColorFill = colorsArray[getRandomInteger(0, colorsArray.length - 1)];
    while (String(randColorFill) === item.style.fill) {
      randColorFill = colorsArray[getRandomInteger(0, colorsArray.length - 1)];
    }
    item.style.fill = randColorFill;
    inputField.value = randColorFill;
  }
  if (fillMethod === 'backgroundColor') {
    var randColorBcg = colorsArray[getRandomInteger(0, colorsArray.length - 1)];
    while (String(randColorBcg) === item.style.backgroundColor) {
      randColorBcg = colorsArray[getRandomInteger(0, colorsArray.length - 1)];
    }
    item.style.backgroundColor = randColorBcg;
    inputField.value = randColorBcg;
  }
};

var addListenerToggle = function (toggle) {
  if (toggle) {
    setupOpenButton.removeEventListener('click', onSetupOpenButtonClick, false);
    setupOpenIcon.removeEventListener('keydown', onSetupOpenIconKeydown, false);
    setupCloseButton.addEventListener('click', onSetupCloseButtonClick, false);
    document.addEventListener('keydown', onDocumentKeydown, false);
  } else {
    setupOpenButton.addEventListener('click', onSetupOpenButtonClick, false);
    setupOpenIcon.addEventListener('keydown', onSetupOpenIconKeydown, false);
    setupCloseButton.removeEventListener('click', onSetupCloseButtonClick, false);
    document.removeEventListener('keydown', onDocumentKeydown, false);
  }
};

var onSetupOpenButtonClick = function (evt) {
  if (evt.button === LEFT_MOUSE_CODE) {
    renderSetupToggle(true);
  }
  addListenerToggle(true);
};

var onSetupOpenIconKeydown = function (evt) {
  if (evt.code === ENTER_KEY) {
    renderSetupToggle(true);
  }
  addListenerToggle(true);
};

var onSetupCloseButtonClick = function (evt) {
  if (evt.button === LEFT_MOUSE_CODE) {
    renderSetupToggle(false);
  }
  addListenerToggle(false);
};

var onDocumentKeydown = function (evt) {
  if (evt.code === ESC_KEY) {
    if (document.activeElement !== nameWizardInput) {
      renderSetupToggle(false);
      addListenerToggle(false);
    }
  }
};

var renderWizardsBlock = function () {
  createAllWizardsInfo();
  renderWizards();
};

mainWizardCoat.addEventListener('click', function (evt) {
  if (evt.button === LEFT_MOUSE_CODE) {
    renderNewItemColor(mainWizardCoat, WIZARDS_COAT_COLORS, 'fill', mainWizardCoatInput);
  }
});

mainWizardEyes.addEventListener('click', function (evt) {
  if (evt.button === LEFT_MOUSE_CODE) {
    renderNewItemColor(mainWizardEyes, WIZARDS_EYES_COLORS, 'fill', mainWizardEyesInput);
  }
});

mainFireball.addEventListener('click', function (evt) {
  if (evt.button === LEFT_MOUSE_CODE) {
    renderNewItemColor(mainFireball, WIZARDS_FIREBALLS_COLORS, 'backgroundColor', mainWizardFireballInput);
  }
});

setupOpenButton.addEventListener('click', onSetupOpenButtonClick, false);
setupOpenIcon.addEventListener('keydown', onSetupOpenIconKeydown, false);

renderWizardsBlock();
