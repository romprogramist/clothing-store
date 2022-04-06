﻿const body = document.querySelector('body')
const hamburger = document.querySelector('.hamburger')

//Гамбургер

hamburger.addEventListener('click', () => {
    hamburger.parentElement.classList.toggle('wrapper-active')
    if (hamburger.parentElement.classList.contains('wrapper-active')) {
        body.classList.add('hidden')
    } else {
        body.classList.remove('hidden')
    }    
})

const basketWindow = document.querySelector('.basket-window');
const shadow = document.querySelector('.shadow')

//Выпадающая корзина

document.querySelectorAll('.open-closed-basket').forEach(btn => {
    btn.addEventListener('click', () => {
        basketWindow.classList.toggle('none');
        shadow.classList.toggle('active');
        body.classList.toggle('hidden');
    })    
})

const modal = document.querySelector('.modal-window');


document.querySelector('.shadow').addEventListener('click', () => {
    basketWindow.classList.add('none');
    shadow.classList.remove('active');
    body.classList.remove('hidden');
    modal.classList.remove('show');
})

//Модальное окно

document.querySelectorAll('.registration').forEach(el => {
    el.addEventListener('click', () => {
      modal.classList.add('show');
      shadow.classList.add('active');
      body.classList.toggle('hidden');
  })
})

modal.firstElementChild.addEventListener('click', () => {
    modal.classList.remove('show');
    shadow.classList.remove('active');
    body.classList.remove('hidden');
})

//Маска ввода телефона 

const telInputs = document.querySelectorAll("input[type='tel']");
let previousNumberCount = 1;
let previousInputLength = 4;
telInputs.forEach((t) => {
  t.addEventListener("input", () => {
    const valueString = t.value;
    const numbers = [];

    for (let i = 0; i < valueString.length; i++) {
      if (Number(valueString[i]) || valueString[i] === "0") {
        numbers.push(valueString[i]);
      }
    }

    if (numbers.length <= 1) {
      t.value = "+7 (";
      previousInputLength = 4;
      previousNumberCount = 1;
      return;
    }

    if (previousInputLength + 1 === valueString.length) {
      if (numbers[0] != 7) {
        numbers.push(numbers.shift());
      }

      if (numbers[1] === "7" || numbers[1] === "8") {
        t.value = "+7 (";
        previousInputLength = 4;
        previousNumberCount = 1;
        return;
      }
    }

    if (
      (previousNumberCount + 11 === numbers.length ||
        previousNumberCount === 1) &&
      (numbers[1] === "7" || numbers[1] === "8")
    ) {
      numbers.splice(0, 2, "7");
    }

    let newString = "";
    let j = 1;
    for (let i = 1; i <= 18; i++) {
      if (numbers[j]) {
        switch (i) {
          case 1:
            newString += "+";
            break;
          case 2:
            newString += "7";
            break;
          case 3:
          case 9:
            newString += " ";
            break;
          case 4:
            newString += "(";
            break;
          case 8:
            newString += ")";
            break;
          case 13:
          case 16:
            newString += "-";
            break;
          default:
            newString += numbers[j++];
            break;
        }
      }
    }

    if (previousInputLength < valueString.length) {
      switch (newString.length) {
        case 7:
          newString += ") ";
          break;
        case 12:
        case 15:
          newString += "-";
          break;
        default:
          break;
      }
    }

    if (previousInputLength > valueString.length) {
      switch (valueString.length) {
        case 8:
          newString = newString.substr(0, newString.length - 1);
          break;
        case 12:
        case 15:
          newString = newString.substr(0, newString.length - 1);
          break;
        default:
          break;
      }
    }

    previousNumberCount = numbers.length;
    previousInputLength = newString.length;
    t.value = newString;
  });

  t.addEventListener("focus", () => {
    if (t.value.length <= 4) {
      t.value = "+7 (";
    }
  });

  t.addEventListener("focusout", () => {
    if (t.value.length <= 4) {
      t.value = "";
    }
  });
});



