// var firstBox = document.querySelector('.box');
// firstBox.addEventListener('click', function () {
//   firstBox.classList.toggle('highlighted');
// });

// window.addEventListener('click', function () {
//   console.log("== Window clicked");
// });

var allBoxes = document.getElementsByClassName('box');

function respondToBoxClick(event) {
  console.log("== Responding to box click, event.target:", event.target);
  console.log("== Responding to box click, event.currentTarget:", event.currentTarget);
  console.log("");
  event.currentTarget.classList.toggle('highlighted');
  // event.stopPropagation();
}

for (var i = 0; i < allBoxes.length; i++) {
  allBoxes[i].addEventListener('click', respondToBoxClick);
  // allBoxes[i].onclick = respondToBoxClick;
}


window.addEventListener('click', function (event) {
  console.log("== Window clicked, event.target:", event.target);
});

var websiteLink = document.getElementById('website-link');
websiteLink.addEventListener('click', function (event) {
  // var linkElem = event.target;
  event.preventDefault();
  alert("Clicked on the link!");
});

function delegatedButtonListener(event) {
  console.log("== delegatedButtonListener fired, target:", event.target);
  if (event.target.classList.contains('in-box-button')) {
    console.log("== Got a button click!");
  }
}

var boxContainer = document.getElementById('box-container');
boxContainer.addEventListener('click', delegatedButtonListener);
