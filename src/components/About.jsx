import React from "react";
import "@styles/about.css";
import ME from "@assets/images/me-about.jpg";
import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>ABOUT ME</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-images">
                        <img src={ME} alt="about images" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <BsAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>1+ years working</small>
                        </article>
                    <article className="about__card">
                        <FiUsers className="about__icon" />
                        <h5>Client</h5>
                        <small>10+ wordwide</small>
                    </article>
                    <article className="about__card">
                        <VscFolderLibrary className="about__icon" />
                        <h5>Projects</h5>
                        <small>12+ Completed</small>
                    </article>
                    </div>
                    <p>
                        I'm a <b>Full-Stack Developer</b> passionate about technologies like <b>React.js</b> and <b>Next.js</b> I also love data-driven development, creating or using <b>API REST</b> etc. I have made the implementation of the website based on WordPress. I distinguish myself by collaboration in teamwork and neutral adaptability to changes.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Let's talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
