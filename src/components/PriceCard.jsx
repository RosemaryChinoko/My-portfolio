function PriceCard({ name, blurb, price, features, button, featured = false}) {
    return (
        <div className={featured ? 'price featured' : 'price'}>
            <h3>{name}</h3>
            <p className="muted">{blurb}</p>
            <div className="cost">{price}</div>

            <ul>
                {features.map((feature) => (
                    <li key={feature}>{feature}</li>
                ))}
            </ul>

            <a className={featured ? 'btn' : 'btn ghost'} href="#contact">
                {button}
            </a>
        </div>
    )
}

export default PriceCard