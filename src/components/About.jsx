import './About.css'

const skills = [
    {title: 'Design', text: 'Clean layouts that are esy to read and easy to use.'},
    {title: 'Build', text: 'Fast websites that look great on phones and computers.'},
    {title: 'Launch', text: 'I help you go live and show you how to manage your site.'},
]

function About(){
    return (
        <section id="about" className="section">
            <div className="wrap about">
                <div>
                    <h2>A little about me</h2>
                    <p className="muted">
                        I studied computer science and i love turning ideas into things
                        people can use. I've built a cyber crime reporting app, and now I'm
                        bringing the same care to websites for businesses and creators. I'm 
                        just starting out, so every client gets my full attention. 
                    </p>
                </div>

                <div className="what">
                    {skills.map((item) => (
                        <div key={item.title}>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>  
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About