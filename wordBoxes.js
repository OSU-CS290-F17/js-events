var allWords = [];
var currentWord = 0;

function handleWordsChange(event) {
	var wordsText = event.currentTarget.value;
  allWords = wordsText.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '').toLowerCase().split(' ');
  currentWord = 0;
  console.log("== words changed:", allWords);
}

function generateWordElem(word, highlightColor) {
  var wordSpan = document.createElement('span');
  wordSpan.classList.add('word');
  wordSpan.textContent = word;

  if (highlightColor) {
    wordSpan.classList.add('highlight');
    wordSpan.classList.add(highlightColor);
  }

  return wordSpan;
}

function getHighlightColor() {

  // var highlightColor = null;
  // var highlightColorInputs = [
  //   document.getElementById('highlight-color-red'),
  //   document.getElementById('highlight-color-green'),
  //   document.getElementById('highlight-color-blue')
  // ];
  //
  // highlightColorInputs.forEach(function (input) {
  //   if (input.checked) {
  //     highlightColor = input.value;
  //   }
  // });
  // return highlightColor;

  var selectedColorInput = document.querySelector('input[name="highlight-color"]:checked');

  return selectedColorInput.value;

}

function handleAddWordButtonClick(event) {

  var word = allWords[currentWord];

  if (word) {
    console.log("== handling add word button click, word:", word);

    var everyNthSelect = document.getElementById('every-nth-select');
    var everyNth = parseInt(everyNthSelect.value);
    // console.log("== every nth:", everyNth);

    var highlightColor = null;
    if (!((currentWord + 1) % everyNth)) {
      highlightColor = getHighlightColor();
    }

    var wordElem = generateWordElem(word, highlightColor);
    var container = event.currentTarget.parentNode.parentNode;
    var wordsContainer = container.querySelector('.words-container');
    wordsContainer.appendChild(wordElem);

    currentWord = (currentWord + 1) % allWords.length;
  }

}

function handleWordsContainerClick(event) {

  var wordsContainer = event.currentTarget;
  var clickedElem = event.target;

  // console.log("== wordsContainer:", wordsContainer);
  // console.log("== clickedElem:", clickedElem);
  if (clickedElem.classList.contains('word')) {
    wordsContainer.removeChild(clickedElem);
  }

}

var wordsInput = document.getElementById('words-input');
wordsInput.addEventListener('change', handleWordsChange);
// wordsInput.addEventListener('input', handleWordsChange);

var addWordButtons = document.getElementsByClassName('add-word-button');
for (var i = 0; i < addWordButtons.length; i++) {
	addWordButtons[i].addEventListener('click', handleAddWordButtonClick);
}

var wordsContainers = document.getElementsByClassName('words-container');
for (var i = 0; i < wordsContainers.length; i++) {
	wordsContainers[i].addEventListener('click', handleWordsContainerClick)
}
