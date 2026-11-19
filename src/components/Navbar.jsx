import './Navbar.css'

function Navbar() {
  return (
    <header className="header">
      <div className="wrap">
        <nav className="nav">
          <a className="logo" href="#top">Rosemary</a>

          <div className="links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
          </div>

          <a className="btn small" href="#contact">Let’s talk</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar