
import { useState } from 'react'
import ProjectCard from './projectCard'
import { projects } from '../data/projects'

const categories = [
  'Alla',
  'Front-end',
  'Back-end',
  'Fotografi',
  'Visuell kommunikation',
  'Grafisk design',
]

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Alla')

  const filteredProjects =
    selectedCategory === 'Alla'
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedCategory),
        )

  return (
    <section id="projekt" className="projects">
      <h2>Mina projekt</h2>

      <div className="project-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category
                ? 'filter-button active'
                : 'filter-button'
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
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
