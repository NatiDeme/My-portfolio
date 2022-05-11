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


const projects = [
  {
    id: 0,
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    image: {
      link: 'img/modal popup.png',
      alt: 'Project Screenshot',
    },

    liveSource: '#',
    sourceCode: '#',
  },
  {
    id: 1,
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    image: {
      link: 'img/modal popup.png',
      alt: 'Multi-Post Stories screenshot',
    },
    liveSource: '#',
    sourceCode: '#',
  },
  {
    id: 2,
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    image: {
      link: 'img/modal popup.png',
      alt: 'Facebook 360screenshot',
    },
    liveSource: '#',
    sourceCode: '#',
  },
  {
    id: 3,
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    image: {
      link: 'img/modal popup.png',
      alt: 'Uber Navigation screenshot',
    },
    liveSource: '#',
    sourceCode: '#',
  },
  {
    id: 4,
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    image: {
      link: 'img/modal popup.png',
      alt: 'Uber Navigation screenshot',
    },
    liveSource: '#',
    sourceCode: '#',
  },
  {
    id: 5,
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    image: {
      link: 'img/modal popup.png',
      alt: 'Uber Navigation screenshot',
    },
    liveSource: '#',
    sourceCode: '#',
  },
];

const modalDetails = document.createElement('div');
modalDetails.id = 'modal-details';
modalDetails.className = 'project-details';

function showDetails(projectIndex) {
  const projectsCode = `
  <div class="details-container">
    <div class="details-container-content">
      <i class="fa fa-times closeDetails" id="closeDetails"></i>
      <img class="project-image" src="${projects[projectIndex].image.link}" alt="${projects[projectIndex].image.alt}" />
      <div class="project-info">
        <h2 class="
        project-title">Keeping track of hundreds of
        components</h2>
        <div class="buttons">
          <a href="${
  projects[projectIndex].liveSource
}" class="btn green-button">See Live <i class="fa fa-external-link"></i></a>
           <a href="${
  projects[projectIndex].sourceCode
}" class="btn green-button">See Source <i class="fa fa-github"></i></a>
        </div>
        </div>
        <div class="tech-and-buttons">
          <ul class="card-languages">
            ${(function usedTech() {
    return projects[projectIndex].technologies
      .map((tech) => `<li class="language">${tech}</li>`)
      .join('');
  }())}
          </ul>
        <p class="description">
         ${projects[projectIndex].description}
        </p>
  </div>`;

  modalDetails.innerHTML += projectsCode;
  document.body.appendChild(modalDetails);
  document.getElementById('closeDetails').addEventListener('click', () => {
    modalDetails.innerHTML = '';
    document.body.removeChild(modalDetails);
  });
}

const portfolioDynamic = document.getElementById('personal-works');
const projectList = document.createElement('ul');
projectList.className = 'card-container';
portfolioDynamic.appendChild(projectList);

let projectsCard = '';
for (let j = 0; j < projects.length; j += 1) {
  projectsCard += `
  <li class="card">
    <div class="card-content">
    <h4 class="card-heading">${projects[j].name}</h4>
    <ul class="card-buttons">
    ${(function usedTech() {
    let btns = '';
    for (let i = 0; i < projects[j].technologies.length; i += 1) {
      btns += `<li ><button type="button">${projects[j].technologies[i]}</button></li>`;
    }
    return btns;
  }())}
    </ul>
        <button class="green-button details-btn" type="button" data-id="${
  projects[j].id
}">See Project</button>
  </div>
</li>`;
}

projectList.innerHTML = projectsCard;

const showButton = document.querySelectorAll('.details-btn');
showButton.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    showDetails(event.target.dataset.id);
  });
});