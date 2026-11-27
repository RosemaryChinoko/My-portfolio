import './Projects.css'
import ProjectCard from './ProjectCard'
import websitePicture from '../assets/Modern Portfolio Workspace Mockup.png'
import sampleSite from '../assets/project-sample-site.jpg'
import yourSite from '../assets/project-your-site.jpg'


const projects = [
   
    {
        title: 'This website',
        text: 'Designed and built by me with React.',
        color: 'amber',
        image: websitePicture,
        href: 'https://github.com/RosemaryChinoko/My-portfolio',
    },
    {
        title: 'Sample site: coming soon',
        text: 'A practice project for a made-up business. Built to show my skills.',
        color: 'sky',
        image: sampleSite,
        href: '#',
    },
    {
        title:'Your project',
        text: 'i am taking my first clients. Lets build yours next.',
        color: 'line',
        image:yourSite,
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
                        image={project.image}
                        href={project.href}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
} 

export default Projects