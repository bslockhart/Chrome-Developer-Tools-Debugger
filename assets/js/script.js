// Let's choose a direction!

// Instruct to choose
alert("Choose a direction.");

var chooseNow = function () {
  // Ask which way

  var askMe = prompt("Will you go left or right?");
  // To fix: Use debugger keyword
  // debugger;
  // Check direction
  switch (askMe) {
    case "left":
      alert("You have chosen left.");
      break;
    case "right":
      alert("You have chosen right.");
      break;
    default:
      alert("You stay in place");
      break;
  }
};

chooseNow();
