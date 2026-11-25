import { useState } from 'react'
import './Contact.css'

const FORM_URL = 'https://formspree.io/f/mppdkgzp'

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: ''})
    const [status, setStatus] = useState('idle')

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        setStatus('sending')

        try {
            const response = await fetch(FORM_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(form),
            })

            if (response.ok) {
                setStatus('sent')
                setForm({ name: '', email: '', message: ''})
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <section id="contact" className="section">
            <div className="wrap">
                <div className="contact">
                    <h2>Have a project in mind?</h2>
                    <p className="muted">
                        Tell me a little about it and I'll reply within two days.
                    </p>

                    {status === 'sent' ? (
                        <p className="notice">
                            Thank you! Your message has arrived. I'll reply soon.
                        </p>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <label>
                                Your name 
                                <input 
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                />
                            </label>

                            <label>
                                Your email 
                                <input 
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                />
                            </label>

                            <label>
                                About your project
                                <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                />
                            </label>

                            <button
                            className="btn"
                            type="submit"
                            disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending...' : 'Send message'}
                            </button>

                            {status === 'error' && (
                                <p className="notice error">
                                    Something went wrong. Please email me at 
                                    rosemarychinoko@gmail.com instead 
                                </p>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Contact