console.log("RESEARCH PROJECTS JS LOADED");

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

renderProjects(researchProjects);
```

});

function renderProjects(projects) {

```
const container = document.getElementById("research-projects");

if (!container) {
    console.error("Container #research-projects not found");
    return;
}

projects.forEach((project, index) => {

    const tagsHTML = project.tags
        .map(tag => `<span>${tag}</span>`)
        .join("");

    const card = document.createElement("div");

    card.classList.add("project-card");

    card.style.animationDelay = `${index * 0.15}s`;

    card.innerHTML = `

        <img
            src="${project.image}"
            alt="${project.title}"
            class="project-image"
        >

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

            <a
                href="${project.link}"
                class="read-more"
            >
                Read More →
            </a>

        </div>
    `;

    card.addEventListener("click", (e) => {

        if (!e.target.classList.contains("read-more")) {
            window.location.href = project.link;
        }

    });

    container.appendChild(card);

});
```

}
