let isClicked = false;

function display() {
  if (!isClicked) {
    document.getElementById('mnc').style.display = 'block';
    document.getElementById('mnha').style.visibility = 'hidden';
    document.getElementById('menu').src = 'images/close.png';
    document.getElementById('menu').style.height = '1.8rem';

    isClicked = true;
  } else {
    document.getElementById('mnc').style.display = 'none';
    document.getElementById('mnha').style.visibility = 'visible';
    document.getElementById('menu').src = 'images/more.png';

    isClicked = false;
  }
}

function menuClicked() {
  display();
}

