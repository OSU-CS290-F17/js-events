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
  return wordSpan;
}

function getHighlightColor() {

}

function handleAddWordButtonClick(event) {

  var word = allWords[currentWord];

  if (word) {
    console.log("== handling add word button click, word:", word);

    var highlightColor = null;

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
