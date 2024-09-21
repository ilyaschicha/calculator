function addValue(value) {
  let x = document.getElementById("input").value;
  if (
    x === "" &&
    (value.includes("%") ||
      value.includes("/") ||
      value.includes("X") ||
      value.includes("-") ||
      value.includes("+") ||
      value.includes("."))
  ) {
    return;
  }
  if (
    !(
      (x.includes("%") ||
        x.includes("/") ||
        x.includes("X") ||
        x.includes("-") ||
        x.includes("+")) &&
      (value.includes("%") ||
        value.includes("/") ||
        value.includes("X") ||
        value.includes("-") ||
        value.includes("+"))
    )
  ) {
    document.getElementById("input").setAttribute("value", x + value);
  }
}

function removeValue(state) {
  if (state === "all") {
    document.getElementById("input").setAttribute("value", "");
  }

  if (state === "one") {
    let x = document.getElementById("input").value;
    if (x.length >= 1) {
      x = x.substring(0, x.length - 1);
      document.getElementById("input").setAttribute("value", x);
    }
  }
}

function sum() {
  let expression = document.getElementById("input").value;
  let splitUp = expression.match(/[^\d()]+|[\d.]+/g);
  let result;
  switch (splitUp[1]) {
    case "%":
        if (Number(splitUp[2]) !== 0) {
            result = Number(splitUp[0]) % Number(splitUp[2]);
          } else {
            result = "ERROR";
          }
      break;
    case "/":
      if (Number(splitUp[2]) !== 0) {
        result = Number(splitUp[0]) / Number(splitUp[2]);
      } else {
        result = "ERROR";
      }
      break;
    case "X":
      result = Number(splitUp[0]) * Number(splitUp[2]);
      break;
    case "-":
      result = Number(splitUp[0]) - Number(splitUp[2]);
      break;
    case "+":
      result = Number(splitUp[0]) + Number(splitUp[2]);
      break;
    default:
      break;
  }
  document.getElementById("input").setAttribute("value", result);
}
