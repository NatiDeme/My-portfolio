let isClicked = false;
const form = document.getElementById('contact-me');
const emailInput = document.getElementById('user_email');
const nameInput = document.getElementById('user_name');
const textInput = document.getElementById('user_text');
const error = document.getElementById('error');

const projects = [
  {
    id: 0,
    name: 'Cardano Seminar Capstone Project',
    title: 'Keeping track of hundreds of components',
    description:
      'This website that holds information about Cardano Student Seminar. The project was done as a final showcasing project to finalize a module.',
    technologies: ['CSS', 'HTML'],
    image: { link: 'images/CSCapstone.JPG', alt: 'Cardano summit' },
    livesource: 'https://natideme.github.io/Cardano-Seminar/',
    sourcecode: 'https://github.com/NatiDeme/Cardano-Seminar',
  },
  {
    id: 1,
    name: 'Movie Rater',
    title: 'Movie Rating Website',
    description:
      'This is a website that allows users to like and post reviews of movies they have previously watched',
    technologies: ['CSS', 'JavaScript', 'HTML'],
    image: { link: 'images/movie_rater.png', alt: 'Movie Rater' },
    livesource: 'https://natideme.github.io/movies-rater/',
    sourcecode: 'https://github.com/NatiDeme/movies-rater',
  },
  {
    id: 2,
    name: 'Space Traveler',
    title: 'Space Traveler',
    description:
      "This website is about Space Travelers' Hub consists of Rockets, Missions, and the My Profile section.",
    technologies: ['CSS', 'JavaScript', 'HTML', 'React', 'Redux'],
    image: { link: 'images/space_travler.png', alt: 'cover picture' },
    livesource: '#',
    sourcecode: 'https://github.com/NatiDeme/space-traveler',
  },
  {
    id: 3,
    name: 'Dota 2 Heroes',
    title: 'Mobile version Web app',
    description:
      'This project is a mobile version website that serves as an information hub about heroes in the game Dota 2.',
    technologies: ['React', 'Redux', 'Tailwindcss', 'JavaScript', 'html'],
    image: { link: 'images/dota_heroes.png', alt: 'cover picture' },
    livesource: 'https://62e145834c84cd265ced3323--heroesofdota2.netlify.app/',
    sourcecode: 'https://github.com/NatiDeme/react-capstone',
  },
  {
    id: 4,
    name: 'Tour Booking Site',
    title: 'Backend API for Tour Booking Website',
    description:
      'This is an app in which you can reserve a tour, create a tour, delete a tour and show all your reserved tours. This app was created by separating the Fron-End and the Back-End into two repositories.',
    technologies: ['Ruby on rails', 'Ruby'],
    image: { link: 'images/tour_booking.png', alt: 'Tour Booking' },
    livesource: 'https://booking-tour-app.herokuapp.com/api-docs/index.html',
    sourcecode: 'https://github.com/NatiDeme/tour-booking-backend',
  },
  {
    id: 5,
    name: 'Math-Magicians',
    title: 'Math Magicians',
    description:
      'This project is a website that allows user to perform calculation and serves as a calculator.',
    technologies: ['css', 'JavaScript', 'html', 'React'],
    image: { link: 'images/math.png', alt: 'Math' },
    livesource: '#',
    sourcecode: 'https://github.com/NatiDeme/Math-Magicians',
  },
];
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

const modal = document.getElementById('modal-wrap');
const projectModal = document.createElement('div');
projectModal.className = 'modal-container';
function showDetails(projectIndex) {
  const projectCode = `
<div class="mclose-btn">
<button onclick="modalClose()" id='close-modal' type="button">
  <img src="images/Icon.png" alt="close icon" />
</button>
</div>
<div class="modal-image">
<img
  src="${projects[projectIndex].image.link}"
  alt="cover picture"
  id="modal-cover"
/>
<img
  src="images/Snapshoot-Portfolio-mob.png"
  alt="cover picture"
  id="modal-cover-mob"
  onclick="modalClose()"
/>
</div>
<div class="modal-btns">
<a href= "${projects[projectIndex].livesource}">
<button class="see-project-mbutton1" type="button">
<div class='btn-modal'>
  <p>See Live</p>
  <img src="images/seelive.png" alt="" id="liveimg" />
  </div>
</button>
</a>
<a href='https://github.com/NatiDeme/Cardano-Seminar'>
<button class="see-project-mbutton2" type="button">
  <div class='btn-modal'>
  <p>See Source</p>
  <img src="images/git.png" alt="" id="gitimg" />
  </div>
</button>
</a>
</div>
<div class="modal-head">
<h2>${projects[projectIndex].title}</h2>
<ul class="skills-list-modal">
${(function usedTech() {
    return projects[projectIndex].technologies
      .map((tech) => `<li>${tech}</li>`)
      .join('');
  }())}
</ul>
</div>
<div class="modal-text">
<p>
  ${projects[projectIndex].description}
</p>
</div>
  `;
  projectModal.innerHTML += projectCode;
  modal.appendChild(projectModal);
  document.getElementById('close-modal').addEventListener('click', () => {
    projectModal.innerHTML = '';
    modal.removeChild(projectModal);
  });
}

const projectCards = document.getElementById('projects-containerid');
const projectList = document.createElement('div');
projectList.className = 'projects-container';
projectCards.appendChild(projectList);
let projectelement = '';
for (let i = 0; i < projects.length; i += 1) {
  projectelement += `
  <div class="project-card">
  <img src=''>
  <div class="single-card">
    <h3>
     ${projects[i].name}
    </h3>
    <ul class="skills-list">
    ${(function usedTech() {
    return projects[i].technologies
      .map((tech) => `<li>${tech}</li>`)
      .join('');
  }())}

    </ul>
    <button
      class="see-project-button"
      type="button"
      id="mybtn"
      onclick="btnClicked()"
      data-id="${projects[i].id}"
    >
      See Project
    </button>
  </div>
</div>
          `;
}

projectList.innerHTML += projectelement;
const showButton = document.querySelectorAll('.see-project-button');
showButton.forEach((button) => {
  button.addEventListener('click', (event) => {
    showDetails(event.target.dataset.id);
  });
});

form.addEventListener('submit', (event) => {
  let check = false;
  if (emailInput.value.toLowerCase() === emailInput.value) {
    check = true;
  }
  if (check === false) {
    event.preventDefault();
    error.innerText = 'Please Your Email Must be in Lower Case';
    error.style.color = 'red';
  }
});

let formData = {};
function setValues() {
  let data = null;
  data = JSON.parse(localStorage.getItem('formData'));
  nameInput.value = data.name;
  emailInput.value = data.email;
  textInput.value = data.message;
}

function populateStorage() {
  formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: textInput.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
  setValues();
}
if (!localStorage.getItem('formData')) {
  populateStorage();
} else {
  setValues();
}

emailInput.onchange = populateStorage;
textInput.onchange = populateStorage;
nameInput.onchange = populateStorage;
