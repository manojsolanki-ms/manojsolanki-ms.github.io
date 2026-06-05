document.addEventListener('DOMContentLoaded', () => {

```
const researchProjects = [

    {
        title: "Compact Finite Difference Method to Solve Differential Equations",
        image: "image/projects/cfdm.jpg",
        supervisor: "Dr. Supervisor Name",
        abstract: "Development and implementation of high-order compact finite difference schemes for ordinary and partial differential equations.",
        tags: [
            "CFDM",
            "FDM",
            "PDE",
            "ODE",
            "Numerical Analysis",
            "Scientific Computing",
            "Python"
        ],
        link: "projects/cfdm-pde.html"
    },

    {
        title: "Solution of Non Linear Partial Differential Equations",
        image: "image/projects/nonlinear-pde.jpg",
        supervisor: "Dr. Supervisor Name",
        abstract: "Numerical investigation of nonlinear PDEs using finite difference and iterative computational techniques.",
        tags: [
            "Nonlinear PDE",
            "CFDM",
            "Finite Difference",
            "Numerical Solution",
            "Computational Mathematics",
            "MATLAB",
            "Python"
        ],
        link: "projects/nonlinear-pde.html"
    },

    {
        title: "Comparison of Solution of Parabolic PDEs",
        image: "image/projects/parabolic-pde.jpg",
        supervisor: "Dr. Supervisor Name",
        abstract: "Comparative analysis of explicit, implicit and Crank-Nicolson methods for parabolic differential equations.",
        tags: [
            "Parabolic PDE",
            "Crank Nicolson",
            "Implicit Method",
            "Explicit Method",
            "Numerical Methods",
            "Finite Difference",
            "Analysis"
        ],
        link: "projects/parabolic-pde.html"
    }

];

const academicProjects = [

    {
        title: "Package of Solution of ODE",
        image: "image/projects/ode-package.jpg",
        supervisor: "Dr. Supervisor Name",
        abstract: "A computational package developed for solving first and higher-order ordinary differential equations.",
        tags: [
            "ODE",
            "Python",
            "Scientific Package",
            "Numerical Solver",
            "Runge Kutta",
            "Euler Method",
            "Software Development"
        ],
        link: "projects/ode-package.html"
    },

    {
        title: "Codes for Finite Difference Methods",
        image: "image/projects/fdm-codes.jpg",
        supervisor: "Dr. Supervisor Name",
        abstract: "Collection of numerical implementations of finite difference methods for academic and research purposes.",
        tags: [
            "Finite Difference",
            "Python",
            "MATLAB",
            "Numerical Methods",
            "CFDM",
            "Algorithms",
            "Scientific Computing"
        ],
        link: "projects/finite-difference-codes.html"
    },

    {
        title: "Codes for Numerical Methods in Python",
        image: "image/projects/numerical-python.jpg",
        supervisor: "Dr. Supervisor Name",
        abstract: "Python implementations of root-finding, interpolation, numerical integration, differential equations and linear algebra algorithms.",
        tags: [
            "Python",
            "Numerical Methods",
            "Root Finding",
            "Interpolation",
            "Numerical Integration",
            "Linear Algebra",
            "Differential Equations"
        ],
        link: "projects/numerical-python-codes.html"
    }

];

renderProjects(researchProjects, "research-projects");
renderProjects(academicProjects, "academic-projects");
```

});

function renderProjects(projects, containerId) {

```
const container = document.getElementById(containerId);

projects.forEach((project, index) => {

    const tagsHTML = project.tags
        .map(tag => `<span>${tag}</span>`)
        .join("");

    const card = document.createElement('div');

    card.classList.add('project-card');

    card.style.animationDelay = `${index * 0.15}s`;

    card.innerHTML = `

        <img src="${project.image}"
             alt="${project.title}"
             class="project-image">

        <div class="project-content">

            <h3>${project.title}</h3>

            <p class="supervisor">
                <strong>Supervisor:</strong>
                ${project.supervisor}
            </p>

            <p class="abstract">
                ${project.abstract}
            </p>

            <div class="tags">
                ${tagsHTML}
            </div>

            <a href="${project.link}"
               class="read-more">
               Read More →
            </a>

        </div>
    `;

    card.addEventListener('click', (e) => {

        if (!e.target.classList.contains('read-more')) {

            window.location.href = project.link;
        }

    });

    container.appendChild(card);

});
```

}

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
