import './Services.css'
import PriceCard from './PriceCard'

const plans = [
    {
        name: 'Starter',
        blurb: 'A one-page site to get you online.',
        price: 'From $___',
        features: ['One scrolling page', 'Works on every phone', 'Ready in about a week'],
        button: 'Choose Starter',
    },
    {
        name: 'Business',
        blurb: 'A full site for your brand.',
        price: 'From $___',
        features: ['Up to five pages', 'Contact form', 'Ready in about four weeks'],
        button: 'Choose Business',
        featured: true,
    },
    {
        name: 'Custom',
        blurb: 'Something special? Lets plan it.',
        price: 'Lets talk',
        features: ['Bookings, shops or members', 'Built around your goals', 'Quote after a short call'],
        button: 'Get a quote',
    },
]

const steps = [
    'You tell me your idea',
    'I design and build it',
    'You approve and we launch',
]

function Services() {
    return (
        <section id="services" className="section">
            <div className="wrap">
                <h2>Websites for you</h2>
                <p className="muted">
                    Simple packages with clear prices. First clients get a special launch price.
                </p>

                <div className="plans">
                    {plans.map((plan) => (
                        <PriceCard key={plan.name} {...plan} />
                    ))}
                </div>

                <div className="steps">
                    {steps.map((step, index) => (
                        <span key={step}>
                            <b>{index + 1}.</b> {step}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services