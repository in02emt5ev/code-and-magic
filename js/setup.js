'use strict';

var setup = document.querySelector('.setup');

setup.classList.remove('hidden');

// Создание похожих волшебников;

var wizardNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var wizardSurnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var getRandomInt = function (min, max) {
  var randomInt = min + Math.random() * (max - min);
  return Math.floor(randomInt);
};

var createWizardData = function () {
  return {
    name: wizardNames[getRandomInt(0, wizardNames.length)] +
    ' ' +
    wizardSurnames[getRandomInt(0, wizardSurnames.length)],
    coatColor: wizardCoatColors[getRandomInt(0, wizardCoatColors.length)],
    eyesColors: wizardEyesColors[getRandomInt(0, wizardEyesColors.length)]
  };
};

var WIZARDS_COUNT = 4;
var similarWizardsData = [];

for (var i = 0; i < WIZARDS_COUNT; i++) {
  similarWizardsData.push(createWizardData());
}

var wizardTemplate = document
  .querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

var createWizardElement = function (wizardData) {
  var wizardElement = wizardTemplate.cloneNode(true);
  var wizardElementName = wizardElement.querySelector('.setup-similar-label');
  var wizardElementCoat = wizardElement.querySelector('.wizard-coat');
  var wizardElementEyes = wizardElement.querySelector('.wizard-eyes');

  wizardElementName.textContent = wizardData.name;
  wizardElementCoat.style.fill = wizardData.coatColor;
  wizardElementEyes.style.fill = wizardData.eyesColors;

  return wizardElement;
};

var similarWizardsElements = similarWizardsData.map(createWizardElement);
var wizardsContainer = document.createDocumentFragment();

for (var j = 0; j < similarWizardsElements.length; j++) {
  wizardsContainer.appendChild(similarWizardsElements[j]);
}

var setupSimilar = document.querySelector('.setup-similar');
var setupSimilarList = document.querySelector('.setup-similar-list');

setupSimilar.classList.remove('hidden');
setupSimilarList.appendChild(wizardsContainer);
