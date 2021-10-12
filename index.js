const buttons = document.getElementsByName("numbers");
const delBtn = document.getElementById("del-btn");
const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn");
const pointBtn = document.getElementById("point-btn");
const divideBtn = document.getElementById("divide-btn");
const timesBtn = document.getElementById("times-btn");
const outputTxt = document.getElementById("output-txt");
const resetBtn = document.getElementById("reset-btn");
const equalBtn = document.getElementById("equal-btn");
const toggleBtns = document.querySelectorAll(".toggle");

let numbers = [];
let number = 0;
let operators = [];
let output = 0;

plusBtn.checked = false;
minusBtn.checked = false;
divideBtn.checked = false;
timesBtn.checked = false;

// change theme
toggleBtns[0].addEventListener("click", function () {
  document.body.classList.remove("light-theme");
  document.body.classList.remove("dark-theme");
  toggleBtns[0].classList.remove("hidden");
  toggleBtns[1].classList.add("hidden");
  toggleBtns[2].classList.add("hidden");
});

toggleBtns[1].addEventListener("click", function () {
  document.body.classList.add("light-theme");
  document.body.classList.remove("dark-theme");
  toggleBtns[0].classList.add("hidden");
  toggleBtns[1].classList.remove("hidden");
  toggleBtns[2].classList.add("hidden");
});

toggleBtns[2].addEventListener("click", function () {
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
  toggleBtns[0].classList.add("hidden");
  toggleBtns[1].classList.add("hidden");
  toggleBtns[2].classList.remove("hidden");
});

// number buttons
buttons.forEach(function (button) {
  number = "";
  button.addEventListener("click", function () {
    number += button.value;
    outputTxt.innerText = number;
  });
});

// delete button
delBtn.addEventListener("click", function () {
  number = number.substr(0, number.length - 1);
  if (number === "") {
    outputTxt.innerText = 0;
  } else {
    outputTxt.innerText = number;
  }
});

// Which Operator?
function findOperator() {
  if (operators.length > 2) {
    operators.shift();
  }
  console.log(operators);
  for (let i = 0; i < operators.length; i++) {
    console.log(operators);
    if (operators[0] === "add") {
      add();
    } else if (operators[0] === "subtract") {
      subtract();
    } else if (operators[0] === "multiply") {
      multiply();
    } else if (operators[0] === "divide") {
      divide();
    }
  }
}

// ADDITION
// plus button
plusBtn.addEventListener("click", function () {
  operators.push("add");
  if (
    (number === "" &&
      operators[0] === "multiply" &&
      operators[1] !== "subtract") ||
    (number === "" && operators[0] === "multiply" && operators[1] !== "add")
  ) {
    number = 1;
  } else if (
    (number === "" &&
      operators[0] === "divide" &&
      operators[1] !== "subtract") ||
    (number === "" && operators[0] === "divide" && operators[1] !== "add")
  ) {
    number = 1;
  } else if (number === "" && operators[0] === "subtract") {
    number = 0;
  } else if (number === "" && operators[0] === "add") {
    number = 0;
  }

  numbers.push(parseInt(number));
  number = "";
  findOperator();
});

// addition calculation
function add() {
  output = 0;
  console.log(numbers);
  for (let i = 0; i < numbers.length; i++) {
    output += numbers[i];
  }
  renderEl();
}
// ADDITION END

// SUBTRACT
// subtract button
minusBtn.addEventListener("click", function () {
  operators.push("subtract");
  if (
    (number === "" &&
      operators[0] === "multiply" &&
      operators[1] !== "subtract") ||
    (number === "" && operators[0] === "multiply" && operators[1] !== "add")
  ) {
    number = 1;
  } else if (
    (number === "" &&
      operators[0] === "divide" &&
      operators[1] !== "subtract") ||
    (number === "" && operators[0] === "divide" && operators[1] !== "add")
  ) {
    number = 1;
  } else if (number === "" && operators[0] === "subtract") {
    number = 0;
  } else if (number === "" && operators[0] === "add") {
    number = 0;
  }

  numbers.push(parseInt(number));
  console.log(numbers);
  number = "";
  findOperator();
});

function subtract() {
  output = numbers[0];
  //   console.log(numbers);
  if (number === "") {
    number = 0;
  }
  for (let i = 1; i < numbers.length; i++) {
    output = output - numbers[i];
  }
  renderEl();
}
// SUBTRACT END

// MULTIPLY
// multiply button
timesBtn.addEventListener("click", function () {
  operators.push("multiply");
  if (
    (number === "" &&
      operators[0] === "multiply" &&
      operators[1] !== "subtract") ||
    (number === "" && operators[0] === "multiply" && operators[1] !== "add")
  ) {
    number = 1;
  } else if (
    (number === "" &&
      operators[0] === "divide" &&
      operators[1] !== "subtract") ||
    (number === "" && operators[0] === "divide" && operators[1] !== "add")
  ) {
    number = 1;
  } else if (number === "" && operators[0] === "subtract") {
    number = 0;
  } else if (number === "" && operators[0] === "add") {
    number = 0;
  }

  numbers.push(parseInt(number));
  number = "";
  findOperator();
});

// multiply calculation
function multiply() {
  output = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    output = output * numbers[i];
  }
  renderEl();
}
// MULTIPLY END

// DIVIDE
// divide button
divideBtn.addEventListener("click", function () {
  operators.push("divide");
  if (
    (number === "" &&
      operators[0] === "multiply" &&
      operators[1] !== "subtract") ||
    (number === "" && operators[0] === "multiply" && operators[1] !== "add")
  ) {
    number = 1;
  } else if (
    (number === "" &&
      operators[0] === "divide" &&
      operators[1] !== "subtract") ||
    (number === "" && operators[0] === "divide" && operators[1] !== "add")
  ) {
    number = 1;
  } else if (number === "" && operators[0] === "subtract") {
    number = 0;
  } else if (number === "" && operators[0] === "add") {
    number = 0;
  }

  numbers.push(parseInt(number));
  number = "";
  findOperator();
});

// divide calculation
function divide() {
  output = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    output = output / numbers[i];
  }
  renderEl();
}
// DIVIDE END

// render output
function renderEl() {
  numbers = [];
  numbers.push(output);
  number = "";
  outputTxt.innerText = Math.round(output * 100) / 100;
}

// Equal Button
equalBtn.addEventListener("click", function () {
  if (plusBtn.checked) {
    output += parseInt(number);
  } else if (minusBtn.checked) {
    output -= parseInt(number);
  } else if (timesBtn.checked) {
    output *= parseInt(number);
  } else if (divideBtn.checked) {
    output /= parseInt(number);
  }

  plusBtn.checked = "";
  minusBtn.checked = "";
  divideBtn.checked = "";
  timesBtn.checked = "";
  console.log(output);
  renderEl();
});

// Reset Button
resetBtn.addEventListener("click", function () {
  output = 0;
  number = "";
  numbers = [];
  plusBtn.checked = "";
  minusBtn.checked = "";
  divideBtn.checked = "";
  timesBtn.checked = "";
  outputTxt.innerText = 0;
});
