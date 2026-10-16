
type ProjectLink = {
  label: string;
  url: string;
};

type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
};

function ProjectCard({
  title,
  image,
  description,
  technologies,
  links,

}: ProjectCardProps) {
 return (
    <div className="project-card">
      <img
        src={image}
        alt={`Bild från projektet ${title}`}
        className="project-image"
      />
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="project-technologies">
        {technologies.map((technology) => (
          <span key={technology} className="technology-tag">
            {technology}
          </span>
        ))}
      </div>

      <div className="project-links">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;



