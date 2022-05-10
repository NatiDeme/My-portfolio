let isClicked = false;
const btn = document.getElementById('mybtn');
let modal = document.getElementById('modal');

function btnClicked() {
  document.getElementById('modal').style.display = 'block';
}

function modalClose() {
  document.getElementById('modal').style.display = 'none';
}

function display() {
  if (!isClicked) {
    document.getElementById('mnc').style.display = 'block';
    document.getElementById('mnha').style.visibility = 'hidden';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('menu2').style.display = 'block';
    isClicked = true;
  } else {
    document.getElementById('mnc').style.display = 'none';
    document.getElementById('mnha').style.visibility = 'visible';
    document.getElementById('menu').style.display = 'block';
    document.getElementById('menu2').style.display = 'none';
    isClicked = false;
  }
}

// eslint-disable-next-line no-unused-vars
function menuClicked() {
  display();
}
