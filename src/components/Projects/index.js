import "./styles.css";

const projects = [
  {
    id: 1,
    title: "Nome do projeto",
    techs: "Tecnologias usadas no projeto",
    image: "Imagem projeto",
    projectUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "Nome do projeto",
    techs: "Tecnologias usadas no projeto",
    image: "Imagem projeto",
    projectUrl: "#",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "Nome do projeto",
    techs: "Tecnologias usadas no projeto",
    image: "Imagem projeto",
    projectUrl: "#",
    repoUrl: "#",
  },
  {
    id: 4,
    title: "Nome do projeto",
    techs: "Tecnologias usadas no projeto",
    image: "Imagem projeto",
    projectUrl: "#",
    repoUrl: "#",
  },
];

export default function ProjectCardGrid() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projetos</h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.id} className="project-card">
            <div className="project-img">{p.image}</div>

            <h3 className="project-title">{p.title}</h3>

            <p className="project-techs">{p.techs}</p>

            <div className="buttons">
              <a href={p.projectUrl} className="btn btn-primary">
                Acessar o projeto
              </a>

              <a href={p.repoUrl} className="btn btn-outline">
                Acessar repositório
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
