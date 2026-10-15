
import { useState } from 'react'
import ProjectCard from './projectCard'
import { projects } from '../data/projects'

function Projects() {
  const [selectedTechnology, setSelectedTechnology] = useState('Alla')

  const technologies = [
    'Alla',
    ...new Set(projects.flatMap((project) => project.technologies)),
  ]

  const filteredProjects =
    selectedTechnology === 'Alla'
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(selectedTechnology),
        )

  return (
    <section id="projekt" className="projects">
      <h2>Mina projekt</h2>

      <div className="project-filters">
        {technologies.map((technology) => (
          <button
            key={technology}
            className={
              selectedTechnology === technology
                ? 'filter-button active'
                : 'filter-button'
            }
            onClick={() => setSelectedTechnology(technology)}
          >
            {technology}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
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
