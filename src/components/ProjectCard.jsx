function ProjectCard({ title, text, color, href }) {
    const external = href.startsWith('http')

    return (
        <a 
        className="card"
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        >
            <div className={`thumb thumb-${color}`}></div>
            <h3>{title}</h3>
            <p>{text}</p>
        </a>
    )
}

export default ProjectCard