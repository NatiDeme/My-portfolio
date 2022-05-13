let isClicked = false;
const form = document.getElementById('contact-me');
const emailInput = document.getElementById('user_email');
const nameInput = document.getElementById('user_name');
const textInput = document.getElementById('user_text');
const error = document.getElementById('error');

const projects = [
  {
    id: 0,
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releas",
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    image: { link: 'images/Snapshoot-Portfolio.png', alt: 'cover picture' },
    livesource: '#',
    sourcecode: '#',
  },
  {
    id: 1,
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releas",
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    image: { link: 'images/Snapshoot-Portfolio.png', alt: 'cover picture' },
    livesource: '#',
    sourcecode: '#',
  },
  {
    id: 2,
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releas",
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    image: { link: 'images/Snapshoot-Portfolio.png', alt: 'cover picture' },
    livesource: '#',
    sourcecode: '#',
  },
  {
    id: 3,
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releas",
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    image: { link: 'images/Snapshoot-Portfolio.png', alt: 'cover picture' },
    livesource: '#',
    sourcecode: '#',
  },
  {
    id: 4,
    name: 'Multi-Post Stories <br/> Gain+Glory',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releas",
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    image: { link: 'images/Snapshoot-Portfolio.png', alt: 'cover picture' },
    livesource: '#',
    sourcecode: '#',
  },
  {
    id: 5,
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releas",
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    image: { link: 'images/Snapshoot-Portfolio.png', alt: 'cover picture' },
    livesource: '#',
    sourcecode: '#',
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
  src="images/Snapshoot-Portfolio.png"
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
<button class="see-project-mbutton1" type="button">
<div class='btn-modal'>
  <p>See Live</p>
  <img src="images/seelive.png" alt="" id="liveimg" />
  </div>
</button>
<button class="see-project-mbutton2" type="button">
  <div class='btn-modal'>
  <p>See Source</p>
  <img src="images/git.png" alt="" id="gitimg" />
  </div>
</button>
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
      data-id="${
  projects[i].id
}"
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


function populateStorage() {
  formData = { name: nameInput.value, email: emailInput.value, message: textInput.value };
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