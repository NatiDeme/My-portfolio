let isClicked = false;

// eslint-disable-next-line no-unused-vars
function btnClicked() {
  document.getElementById('modal').style.display = 'block';
  document.getElementById('personal-works').style.filter = 'blur(.8rem)';
  document.getElementById('about-me').style.filter = 'blur(.8rem)';
}

// eslint-disable-next-line no-unused-vars
function modalClose() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('personal-works').style.filter = 'blur(0rem)';
  document.getElementById('about-me').style.filter = 'blur(0rem)';
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
