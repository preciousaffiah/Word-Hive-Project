// randomize original array and level1words array
// set timer
// make new array
// check if tile background is green and push the tile to new array 
// check if new array length is == 3 and check if it is equal to level1word


const level1Words = [['b', 'u', 'r', 'n'], ['a', 'c', 'e'], ['f', 'o', 'u', 'g', 'h', 't'], ['d', 'o', 'g', 's'], ['e', 'l', 'e', 'v', 'a', 't', 'e', 'd'], ['a', 'c', 'c', 'e', 's', 's'], ['s', 'u', 'c', 'c', 'e', 's', 's'], ['p', 'r', 'i', 'n', 'g', 'l', 'e'], ['a', 'w', 'a', 'r', 'd'], ['a', 'b', 's', 'o', 'r', 'b'],  ['s', 't', 'r', 'e', 'e', 't'],  ['o', 'r', 'a', 'n', 'g', 'e'],  ['p', 'o', 'e', 't', 'r', 'y'], ['p', 'u', 'r', 'p', 'l', 'e'], ['i', 'n', 'c', 'h', 'e', 's'], ['c', 'u', 'r', 't', 'i', 's'], ['f', 'a', 'v', 'o', 'u', 'r'], ['t', 'r', 'a', 'v', 'i', 's'], ['b', 'a', 'd', 'e'], ['e', 'y', 'o'] , ['c', 'h', 'r', 'i', 's', 't', 'i', 'n', 'e']];
var randomIndex3 = Math.floor(Math.random() * level1Words.length);
var level1Index = level1Words[randomIndex3];
const ArrayOfLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ...level1Index];
const grid = document.getElementById("grid");
const reloadbtn = document.getElementById("reloadbtn");
const actionMsg = document.getElementById("actionMsg");
const wordToFind = document.getElementById("wordToFind");
const modal = document.querySelector('.modal');

wordToFind.innerHTML = level1Index.join('');
var currentIndex = ArrayOfLetters.length, randomIndex;
var timeOut = document.getElementById('timeOut');
var timeleft = 10;
var Newarray = [];


function displayTiles(){
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

  ArrayOfLetters.forEach(letter => {
    grid.innerHTML += `<div class='block'>${letter}</div>`

  });
}

var downloadTimer = setInterval(function () {
    if (timeleft < 1) {
      clearInterval(downloadTimer);
      timeOut.innerHTML = " Time up! ";
      console.log('time up');
      reloadbtn.innerHTML = 'Reload';
      actionMsg.innerHTML = 'Time up!';
      modal.style.visibility = 'visible';
  
      reloadbtn.addEventListener('click', (e) => {
        location.reload()
      })
  
    } else {
      timeOut.innerHTML = timeleft + ":00";
  
    }
    timeleft--;
}, 1000);

function winOrfail() {
  const blocks = document.querySelectorAll('.block');
  if (blocks.length > 0) {
    const blockArray = [...blocks];
  
    blockArray.forEach(block => {
      var green = false;
  
      block.addEventListener('click', (e) => {
        green = !green;
        if (green) {
          block.style.backgroundColor = '#07bf9d';
          Newarray.push(block.innerHTML);
          if (Newarray.length == wordToFind.innerHTML.length) {
            if (Newarray.join('') == level1Index.join('')) {
              console.log('word found');
  
              modal.style.visibility = 'visible';
              clearInterval(downloadTimer);
  
              reloadbtn.addEventListener('click', (e) => {
                location.reload()
              })
  
            } else {
              console.log('word not found');
              reloadbtn.innerHTML = 'Reload';
              actionMsg.innerHTML = 'Word not found';
              modal.style.visibility = 'visible';
              clearInterval(downloadTimer);
  
              reloadbtn.addEventListener('click', (e) => {
                location.reload()
              })
            }
          }
        } else {
          block.style.backgroundColor = '';
          var index = Newarray.indexOf(block.innerHTML);
          Newarray.splice(index, 1);
          console.log(Newarray);
        }
      })
  
    })
  }
}

displayTiles();
winOrfail();
