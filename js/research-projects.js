document.addEventListener("DOMContentLoaded", () => {

    const researchProjects = [

        {
            title: "Compact Finite Difference Method to Solve Differential Equations",
            supervisor: "Dr. Supervisor Name",
            abstract: "Development and implementation of high-order compact finite difference schemes for ordinary and partial differential equations.",
            link: "projects/cfdm-pde.html"
        },

        {
            title: "Solution of Non Linear Partial Differential Equations",
            supervisor: "Dr. Supervisor Name",
            abstract: "Numerical investigation of nonlinear PDEs using finite difference and iterative computational techniques.",
            link: "projects/nonlinear-pde.html"
        },

        {
            title: "Comparison of Solution of Parabolic PDEs",
            supervisor: "Dr. Supervisor Name",
            abstract: "Comparative analysis of explicit, implicit and Crank-Nicolson methods for parabolic differential equations.",
            link: "projects/parabolic-pde.html"
        }

    ];

    const container = document.getElementById("research-projects");

    researchProjects.forEach(project => {

        const card = document.createElement("div");

        card.classList.add("project-card");

        card.innerHTML = `

            <div class="project-content">

                <h3>${project.title}</h3>

                <p class="supervisor">
                    <strong>Supervisor:</strong>
                    ${project.supervisor}
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

});
