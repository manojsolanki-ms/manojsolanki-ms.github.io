// research.js

document.addEventListener('DOMContentLoaded', function () {

    const researchList = document.querySelector('.research-list');
    const timeline = document.querySelector('.timeline');

    const projects = [

        {
            title: "Package of Solution of ODE",

            subtitle:
            "Department of Mathematics, Central University of Rajasthan",

            supervisor:
            "Dr. R.P. Singh and Dr. Harshita Madduri",

            date: "2024-01-01",

            description:
            "We have developed a comprehensive Python package for solving Ordinary Differential Equations (ODEs) using various numerical methods including Euler Method, Modified Euler Method, Runge-Kutta Methods, Taylor Series Method and Predictor-Corrector Methods.",

            link:
            "projects/ode-package.html"
        },

        {
            title:
            "Compact Finite Difference Method to Solve Differential Equations",

            subtitle:
            "Department of Mathematics, XYZ University",

            supervisor:
            "Dr. Manoj Solanki",

            date:
            "2023-01-01",

            description:
            "Development and implementation of high-order compact finite difference schemes for ordinary and partial differential equations with applications in scientific computing.",

            link:
            "projects/cfdm-pde.html"
        },
                {
            title:
            "Compact Finite Difference Method to Solve Differential Equations",

            subtitle:
            "Department of Mathematics, XYZ University",

            supervisor:
            "Dr. Manoj Solanki",

            date:
            "2023-01-01",

            description:
            "Development and implementation of high-order compact finite difference schemes for ordinary and partial differential equations with applications in scientific computing.",

            link:
            "projects/cfdm-pde.html"
        },
                {
            title:
            "Compact Finite Difference Method to Solve Differential Equations",

            subtitle:
            "Department of Mathematics, XYZ University",

            supervisor:
            "Dr. Manoj Solanki",

            date:
            "2023-01-01",

            description:
            "Development and implementation of high-order compact finite difference schemes for ordinary and partial differential equations with applications in scientific computing.",

            link:
            "projects/cfdm-pde.html"
        }

    ];

    function renderProjects() {

        researchList.innerHTML = '';

        projects.forEach(project => {

            const card = createProjectCard(project);

            project.element = card;

            researchList.appendChild(card);

        });
    }

    function createProjectCard(project) {

        const card = document.createElement('div');
        card.classList.add('course-card');

        const header = document.createElement('div');
        header.classList.add('course-header');

        const titleSection = document.createElement('div');
        titleSection.classList.add('course-title-section');

        const title = document.createElement('h2');
        title.classList.add('course-title');
        title.textContent = project.title;

        const subtitle = document.createElement('p');
        subtitle.classList.add('course-subtitle');
        subtitle.textContent = project.subtitle;

        const supervisor = document.createElement('p');
        supervisor.classList.add('course-subtitle');
        supervisor.innerHTML =
            `<strong>Supervisor:</strong> ${project.supervisor}`;

        titleSection.appendChild(title);
        titleSection.appendChild(subtitle);
        titleSection.appendChild(supervisor);

        const date = document.createElement('div');
        date.classList.add('course-date');
        date.textContent = formatDate(project.date);

        header.appendChild(titleSection);
        header.appendChild(date);

        const descriptionSection = document.createElement('div');
        descriptionSection.classList.add('course-description-section');

        const description = document.createElement('p');
        description.classList.add('course-description');
        description.textContent = project.description;

        descriptionSection.appendChild(description);

        const readMoreBtn = document.createElement('a');

        readMoreBtn.classList.add('feedback-toggle');

        readMoreBtn.href = project.link;

        readMoreBtn.textContent = 'Read More';

        card.appendChild(header);
        card.appendChild(descriptionSection);
        card.appendChild(readMoreBtn);

        return card;
    }

    function renderTimeline() {

        timeline.innerHTML = '';

        const years = new Set(
            projects.map(project =>
                new Date(project.date).getFullYear())
        );

        Array.from(years)
            .sort((a, b) => b - a)
            .forEach(year => {

                const timelineItem =
                    document.createElement('div');

                timelineItem.classList.add('timeline-item');

                timelineItem.textContent = year;

                timelineItem.addEventListener('click', () => {

                    const yearProjects =
                        projects.filter(project =>
                            new Date(project.date)
                            .getFullYear() === year);

                    if (yearProjects.length > 0) {

                        yearProjects[0].element
                            .scrollIntoView({
                                behavior: 'smooth'
                            });
                    }
                });

                timeline.appendChild(timelineItem);
            });
    }

    function formatDate(dateString) {

        const options = {
            year: 'numeric',
            month: 'long'
        };

        return new Date(dateString)
            .toLocaleDateString(undefined, options);
    }

    renderProjects();
    renderTimeline();

});
