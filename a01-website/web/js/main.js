var wordlist = ['page', 'image', 'form', 'table', 'column',
'row', 'responsive', 'typography', 'java', 'python',
'javascript', 'quantum', 'computing', 'read', 'write',
'print', 'web', 'example', 'image', 'site'];

function randomize() {
  return Math.floor(Math.random()*20);
}

var flash = document.getElementById('flash');
var button = document.getElementById('button');

var clicked = false;
  // button.addEventListener('mousedown', function(event) {
  //   button.click();
  button.onclick = function() {
    var x = randomize();
    var word = wordlist[x];
    var numberOfVowels = 0;
    var numberOfConsonants = 0;

    for (var i = 0; i < word.length; i++) {
      if (word[i] === 'a' | word[i] === 'e' | word[i] === 'i' | word[i] === 'o' | word[i] === 'u') {
        numberOfVowels++;
      }
      else {
        numberOfConsonants++;
      }
    }

    document.writeln('Uppercase: ' + word.toUpperCase() +
    '\nLowercase: ' + word.toLowerCase() +
    '\nCharacter amount: ' + word.length +
    '\nNumber of vowels: ' + numberOfVowels +
    '\nNumber of consonants: ' + numberOfConsonants);

    console.log('Uppercase: ' + word.toUpperCase() +
    '\nLowercase: ' + word.toLowerCase() +
    '\nCharacter amount: ' + word.length +
    '\nNumber of vowels: ' + numberOfVowels +
    '\nNumber of consonants: ' + numberOfConsonants);
}
  // });
