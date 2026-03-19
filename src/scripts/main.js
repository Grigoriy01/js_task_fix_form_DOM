'use strict';

// write code here
const inputElements = [...document.querySelectorAll('input')];

function enhanceFormInputs(inputs) {
  const transformInputName = (input) => {
    const toLower = input.name.toLowerCase();
    const transformName = toLower.replace(/^./, (match) => match.toUpperCase());

    return transformName;
  };

  inputs.forEach((input) => {
    const label = document.createElement('label');
    const inputName = input.name;
    const inputId = input.id;
    const placeholderName = transformInputName(input);

    label.setAttribute('class', 'field-label');
    label.setAttribute('for', inputId);
    label.textContent = inputName;

    input.before(label);

    input.setAttribute('placeholder', placeholderName);
  });
}

enhanceFormInputs(inputElements);
