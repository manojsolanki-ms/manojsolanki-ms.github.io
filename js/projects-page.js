document.addEventListener('DOMContentLoaded', () => {

    const researchProjects = [
        {
            title: "Compact Finite Difference Method to Solve Differential Equations",
            image: "image/projects/cfdm.jpg",
            supervisor: "Dr. Supervisor Name",
            abstract: "Development and implementation of high-order compact finite difference schemes for ordinary and partial differential equations.",
            link: "projects/cfdm-pde.html"
        },

        {
            title: "Solution of Non Linear Partial Differential Equations",
            image: "image/projects/nonlinear-pde.jpg",
            supervisor: "Dr. Supervisor Name",
            abstract: "Numerical investigation of nonlinear PDEs using finite difference and iterative computational techniques.",
            link: "projects/nonlinear-pde.html"
        },

        {
            title: "Comparison of Solution of Parabolic PDEs",
            image: "image/projects/parabolic-pde.jpg",
            supervisor: "Dr. Supervisor Name",
            abstract: "Comparative analysis of explicit, implicit, and Crank-Nicolson methods for parabolic differential equations.",
            link: "projects/parabolic-pde.html"
        }
    ];

    const academicProjects = [
        {
            title: "Package of Solution of ODE",
            image: "image/projects/ode-package.jpg",
            supervisor: "Dr. Supervisor Name",
            abstract: "A computational package developed for solving first and higher-order ordinary differential equations.",
            link: "projects/ode-package.html"
        },

        {
            title: "Codes for Finite Difference Methods",
            image: "image/projects/fdm-codes.jpg",
            supervisor: "Dr. Supervisor Name",
            abstract: "Collection of numerical implementations of finite difference methods for academic and research purposes.",
            link: "projects/finite-difference-codes.html"
        },

        {
            title: "Codes for Numerical Methods in Python",
            image: "image/projects/numerical-python.jpg",
            supervisor: "Dr. Supervisor Name",
            abstract: "Python implementations of root-finding, interpolation, numerical integration, differential equations, and linear algebra algorithms.",
            link: "projects/numerical-python-codes.html"
        }
    ];

    renderProjects(researchProjects, "research-projects");
    renderProjects(academicProjects, "academic-projects");

});

function renderProjects(projects, containerId) {

    const container = document.getElementById(containerId);

    projects.forEach(project => {

        const card = document.createElement('div');
        card.classList.add('project-card');

        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">

            <div class="project-content">

                <h3>${project.title}</h3>

                <p class="supervisor">
                    <strong>Supervisor:</strong> ${project.supervisor}
                </p>

                <p class="abstract">
                    ${project.abstract}
                </p>

                <a href="${project.link}" class="read-more">
                    Read More →
                </a>

            </div>
        `;

        container.appendChild(card);
    });
}
