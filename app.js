// randomize original array
// make new array 
// check if letter does not exist in new array and if the new array is upto 40 letters => push into new array
// else if all leters have been pushed and non is repeating but array is not upto 40 letters => push letters into new array till array letters are up to 40

const level1Words = [['t', 'a', 'p'], ['c', 'u', 'p'], ['p', 'e', 't']];
var randomIndex3 = Math.floor(Math.random() * level1Words.length);
// level1Words.push(level1Words[randomIndex3]);
var level1Index = level1Words[randomIndex3];
console.log('word to find is ', level1Index);
const ArrayOfLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ...level1Index];
const grid = document.getElementById("grid");
const reloadbtn = document.getElementById("reloadbtn");
const actionMsg = document.getElementById("actionMsg");
const wordToFind = document.getElementById("wordToFind");
const modal = document.querySelector('.modal');

wordToFind.innerHTML = level1Index.join('');
var Newarray = [];
var currentIndex = ArrayOfLetters.length, randomIndex;
// While there remain elements to shuffle. 
while (currentIndex != 0) {
  // Pick a remaining element.
  randomIndex = Math.floor(Math.random() * currentIndex); currentIndex--;
  // And swap it with the current element. 
  [ArrayOfLetters[currentIndex], ArrayOfLetters[randomIndex]] = [ArrayOfLetters[randomIndex], ArrayOfLetters[currentIndex]];
}

if (ArrayOfLetters.length < 41) {
  console.log('chee');
  for (let i = 0; i < 12; i++) {
    var randomIndex2 = Math.floor(Math.random() * ArrayOfLetters.length);
    ArrayOfLetters.push(ArrayOfLetters[randomIndex2])

  }
}

console.log(ArrayOfLetters);


ArrayOfLetters.forEach(letter => {
  grid.innerHTML += `<div class='block'>${letter}</div>`

});


const blocks = document.querySelectorAll('.block');
const nextLevelBtn = document.getElementById('next');

if (blocks.length > 0) {
  const blockArray = [...blocks];

  blockArray.forEach(block => {
    var green = false;

    block.addEventListener('click', (e) => {
      green = !green;
      if (green) {
        block.style.backgroundColor = '#07bf9d';
        Newarray.push(block.innerHTML);
      } else {
        block.style.backgroundColor = '';
        var index = Newarray.indexOf(block.innerHTML);
        Newarray.splice(index, 1);
        console.log(Newarray);
      }
    })

  })
}



nextLevelBtn.addEventListener('click', (e) => {
  if (Newarray[0] == level1Index[0] && Newarray[1] == level1Index[1] && Newarray[2] == level1Index[2]) {
    console.log('word found');

    modal.style.visibility = 'visible';
    nextLevelBtn.style.display = 'none';

    reloadbtn.addEventListener('click', (e) => {
      location.reload()
    })

  } else {
    console.log('word not found');
    reloadbtn.innerHTML = 'Reload';
    actionMsg.innerHTML = 'Word not found';
    modal.style.visibility = 'visible';
    nextLevelBtn.style.display = 'none';

    reloadbtn.addEventListener('click', (e) => {
      location.reload()
    })
  }

})