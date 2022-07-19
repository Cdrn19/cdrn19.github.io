import React from "react";
import "@styles/portfolio.css";
import IMG1 from "@assets/images/IMG1.jpg";
import IMG2 from "@assets/images/IMG2.jpg";
import IMG3 from "@assets/images/IMG3.jpg";
import IMG4 from "@assets/images/IMG4.jpg";

const data = [
    {
        id: 1,
        images: IMG1,
        title: "QR Code component main",
        github: "http://github.com/Cdrn19/qr-code-component-main",
        demo: "https://cdrn19.github.io/qr-code-component-main/"
    },
    {
        id: 2,
        images: IMG2,
        title: "simple Utilities",
        github: "http://github.com/Cdrn19/simpleUtilities",
        demo: "https://cdrn19.github.io/simpleUtilies/",
    },
    {
        id: 3,
        images: IMG3,
        title: "Clone Google",
        github: "http://github.com/Cdrn19/cloneGoogle",
        demo: "https://cdrn19.github.io/cloneGoogle/"
    },
    {
        id: 4,
        images: IMG4,
        title: "Yard Sale",
        github: "http://github.com/Cdrn19/yardSale",
        demo: "https://yardsaleofficial.store",
    }, 
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>PORTFOLIO</h2>
            <div className="container portfolio__container">
                {data.map(({ id, images, title, github, demo }) =>{
                    return (
                        <article key={id} className="portfolio__item">
                            <div>
                                <img src={images} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className="btn" target="_blank">
                                    Github
                                </a>
                                <a href={demo} className="btn btn-primary" target="_blank">
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    );
                })};
            </div>
        </section>
    )
}

export default Portfolio;