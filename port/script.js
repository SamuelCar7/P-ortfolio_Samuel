const projects = [
    {
        title: "Projeto 1",
        description: "Um projeto incrível feito com HTML, CSS e JavaScript.",
    },
    {
        title: "Projeto 2",
        description: "Outro projeto criativo, desta vez usando React.",
    },
    {
        title: "Projeto 3",
        description: "Um sistema de gerenciamento de tarefas.",
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const projectList = document.getElementById("project-list");

    projects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectList.appendChild(projectDiv);
    });

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Mensagem enviada! Obrigado pelo contato.");
        form.reset();
    });
});