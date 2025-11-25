const projects = [
    {
      id: 0,
      name: 'WIMBY',
      title: 'Wind Farm Simulation Application',
      description:
        'A lightweight yet powerful tool designed to simulate wind farm layouts and estimate energy production. Wimby helps users test turbine placements, understand terrain impacts, and explore how design decisions affect output. It’s basically a sandbox for renewable energy planning, wrapped in a clean and intuitive UI.',
      image: { link: 'images/wimby.png', alt: 'WIMBY wind simulation app' },
      liveSource: 'https://your-wimby-live-link.com',
      involvement: ['UI/UX', 'Full-Stack']
    },
  
    {
      id: 1,
      name: 'Buildspace',
      title: 'Flood Damage Simulation Tool',
      description:
        'A map-based application that simulates flood levels and predicts impacted areas using terrain and building data. The tool visualizes risk levels, damage estimates, and hydrological patterns in an intuitive UI for planners and responders.',
      image: { link: 'images/buildspace.png', alt: 'Flood simulation interface' },
      liveSource: 'https://your-buildspace-live-link.com',
      involvement: ['UI/UX', 'Full-Stack']
    },
  
    {
      id: 2,
      name: 'CA-Academy',
      title: 'Virtual Academy for Proposal Assessment',
      description:
        'An interactive learning platform designed to teach users how to evaluate climate adaptation funding proposals. It includes structured lessons, scoring rubrics, exercises, and real-world examples in a smooth, accessible interface.',
      image: { link: 'images/ca-academy.png', alt: 'CA Academy learning platform' },
      liveSource: 'https://your-caacademy-live-link.com',
      involvement: ['UI/UX', 'Full-Stack']
    },
  
    {
      id: 3,
      name: 'Maps In Context',
      title: 'Historical Map Browsing Application',
      description:
        'A rich web application for exploring historical maps across categories like trade, colonial routes, conflicts, terrain, and old cities. Users can browse, compare, and dive into map details with modern visualization tools.',
      image: { link: 'images/maps-in-context.png', alt: 'Historical maps browser' },
      liveSource: 'https://your-mapsincontext-live-link.com',
      involvement: ['UI/UX', 'Front-End']
    }
  ];

const projectCards = document.getElementById('projects-containerid');
const projectList = document.createElement('div');
projectList.className = 'cards';
projectCards.appendChild(projectList);
let projectelement = '';
for (let i = 0; i < projects.length; i += 1) {
  projectelement += `
  <article class="card">
            <h3>${projects[i].name}</h3>
            <p>
              ${projects[i].description}
            </p>
            <div class="tag-row">
              <span class="tag">${projects[i].involvement[0]}</span>
              <span class="tag">${projects[i].involvement[1]}</span>
            </div>
          </article>`;
        }
    projectList.innerHTML += projectelement;