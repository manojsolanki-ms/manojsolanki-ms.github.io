document.addEventListener('DOMContentLoaded', function () {

    const researchList = document.querySelector('.research-list');

    const projects = [

        {
            title: "Package of Solution of ODE",

            supervisor: "Dr. R.P. Singh and Dr. Harshita Madduri",

            affiliation: "Department of Mathematics, Central University of Rajasthan",

            duration: "2024 - Present",

            image: "image/python-package.png",

            description:
            ".",

            link: "projects/ode-package.html"
        },

        {
            title: "Compact Finite Difference Method to Solve Differential Equations",

            supervisor: "Dr. Manoj Solanki",

            affiliation: "Department of Mathematics",

            duration: "2023 - 2024",

            image: "image/cfdm.png",

            description:
            "Development and implementation of high-order compact finite difference schemes for ODEs and PDEs.",

            link: "projects/cfdm-pde.html"
        }

    ];

    renderProjects();

    function renderProjects() {

        researchList.innerHTML = '';

        projects.forEach(project => {

            researchList.appendChild(
                createProjectCard(project)
            );

        });

    }

    function createProjectCard(project) {

        const card = document.createElement('div');
        card.classList.add('research-card');

        card.innerHTML = `

            <div class="research-poster">

                <img src="${project.image}"
                     alt="${project.title}">

            </div>

            <div class="research-content">

                <h2 class="project-title">
                    ${project.title}
                </h2>

                <p class="project-supervisor">

                    <strong>Supervisor :</strong>
                    ${project.supervisor}

                </p>

                <p class="project-affiliation">

                    <strong>Affiliation :</strong>
                    ${project.affiliation}

                </p>

                <p class="project-duration">

                    <strong>Duration :</strong>
                    ${project.duration}

                </p>

                <p class="project-description">

                    ${project.description}

                </p>

                <a href="${project.link}"
                   class="project-btn">

                   Read More

                </a>

            </div>
        `;

        return card;
    }

});
