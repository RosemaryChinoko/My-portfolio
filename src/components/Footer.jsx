import './Footer.css'

const links = [
    { label: 'Email', href: 'mailto:rosemarychinoko@gmail.com' },
    { label: 'Github', href: 'https://github.com/RosemaryChinoko' },
    { label: 'Back to top', href: '#top'},
]

function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="wrap footer-inner">
                <span>© {year} Rosemary Chinoko</span>

                <nav className="footer-links" aria-label="Footer">
                    {links.map((link) => {
                        const external = link.href.startsWith('http')
                        return (
                            <a
                            key={link.label}
                            href={link.href}
                            target={external ? '_blank' : undefined}
                            rel={external ? 'noreferrer' : undefined}
                            >
                                {link.label}
                            </a>
                        )
                    })}
                </nav>
            </div>
        </footer>
    )
}

export default Footer