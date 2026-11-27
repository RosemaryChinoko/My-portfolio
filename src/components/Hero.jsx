import './Hero.css'
import portrait from '../assets/rosemary.png'

function Hero() {
    return (
        <section id="top" className="hero-section">
            <div className="wrap hero">
                <div>
                    <h1>I build clean websites that help you get noticed.</h1>
                    <p className="lead">
                        Hi, I'm Rosemary, a computer science graduate. I design and build
                        simple, fast websites for people and small businesses who want to
                        look good online.
                    </p>
                    <div className="cta">
                        <a className="btn" href="#contact">Work with me</a>
                        <a className="btn ghost" href="#work">See my work</a>
                    </div>
                </div>

                <div className="portrait">
                    <img src={portrait} alt="Portrait of Rosemary Chinoko" />
                </div>
            </div>  
        </section>  
    );
}

export default Hero;