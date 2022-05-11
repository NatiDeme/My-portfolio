let isClicked = false;
let projects = [
  {
    id: 1,
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releas",
    technologies: ['Ruby', 'css', 'html'],
    image: { link: 'images/Snapshoot-Portfolio.png', alt: 'cover picture' },
    livesource: '#',
    sourcecode: '#',
  },
  {
    id: 2,
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releas",
    technologies: ['Ruby', 'css', 'html'],
    image: { link: 'images/Snapshoot-Portfolio.png', alt: 'cover picture' },
    livesource: '#',
    sourcecode: '#',
  },
  {
    id: 3,
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releas",
    technologies: ['Ruby', 'css', 'html'],
    image: { link: 'images/Snapshoot-Portfolio.png', alt: 'cover picture' },
    livesource: '#',
    sourcecode: '#',
  },
  {
    id: 4,
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releas",
    technologies: ['Ruby', 'css', 'html'],
    image: { link: 'images/Snapshoot-Portfolio.png', alt: 'cover picture' },
    livesource: '#',
    sourcecode: '#',
  },
  {
    id: 5,
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releas",
    technologies: ['Ruby', 'css', 'html'],
    image: { link: 'images/Snapshoot-Portfolio.png', alt: 'cover picture' },
    livesource: '#',
    sourcecode: '#',
  },
  {
    id: 6,
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releas",
    technologies: ['Ruby', 'css', 'html'],
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

let modal = document.createElement('div');
modal.id = 'modal';
modal.className = 'card-modal disable-scrollbars';
function loadModal(prijectInex) {
  let projectCode = `
  <div class="modal-wrapper">
          <div class="modal-container">
            <div class="mclose-btn">
              <button onclick="modalClose()" type="button">
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
                onclick=" modalClose()"
              />
            </div>
            <div class="modal-btns">
              <button class="see-project-mbutton1" type="button">
                See Live
                <img src="images/seelive.png" alt="" id="liveimg" />
              </button>
              <button class="see-project-mbutton2" type="button">
                See Source
                <img src="images/git.png" alt="" id="gitimg" />
              </button>
            </div>
            <div class="modal-head">
              <h2>Keeping track of hundreds of components</h2>
              <ul class="skills-list-modal">
                <li>Ruby on rails</li>
                <li>css</li>
                <li>JavaScript</li>
                <li>html</li>
              </ul>
            </div>
            <div class="modal-text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it 1960s with the releaLorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it 1960s with the relea
              </p>
            </div>
          </div>
        </div>
  `;
  modal.innerHTRML += projectCode;
  document.body.appendChild(modal);
}

let projectCards = document.getElementById('projects-containerid');
let projectList = document.createElement('div');
projectList.className = 'projects-container';
projectCards.appendChild(projectList);
let projecelement = '';
for (let j = 1; j < projects.length; j += 1) {
  projecelement += `
            <div class="project-card">
            <div class="single-card">
              <h3>
                Multi-Post Stories <br />
                Gain+Glory
              </h3>
              <ul class="skills-list">
                <li>Ruby on rails</li>
                <li>css</li>
                <li>JavaScript</li>
                <li>html</li>
              </ul>
              <button
                class="see-project-button"
                type="button"
                id="mybtn"
                onclick="btnClicked()"
              >
                See Project
              </button>
            </div>
          </div>
          `;
}

projectList.innerHTRML += projecelement;
