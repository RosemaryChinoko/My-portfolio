import './Projects.css'
import ProjectCard from './ProjectCard'

const projects = [
    {
        title: 'Cyber crime reporting app',
        text: 'An app that makes it simple to report online crime',
        color: 'sky',
        href: 'https://github.com/RosemaryChinoko/yckf-app.git',
    },
    {
        title: 'This website',
        text: 'Designed and built by me with React.',
        color: 'amber',
        href: 'https://github.com/RosemaryChinoko/My-portfolio',
    },
    {
        title:'Your project',
        text: 'i am taking my first clients. Lets build yours next.',
        color: 'line',
        href: '#contact',
    },
]

function Projects() {
    return (
        <section id="work" className="section">
            <div className="wrap">
                <h2>Selected work</h2>
                <p className="muted">A few things I've built.</p>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard
                        key={project.title}
                        title={project.title}
                        text={project.text}
                        color={project.color}
                        href={project.href}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
} 

export default Projects