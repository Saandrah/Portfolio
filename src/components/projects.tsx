
import ProjectCard from './projectCard'
import { projects } from '../data/projects'


function Projects() {
  return (
    <section id="projekt" className="projects">
      <h2>Mina projekt</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            image={project.image}
            description={project.description}
            technologies={project.technologies}
            links={project.links}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
