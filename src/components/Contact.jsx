import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "@styles/contact.css";
import { MdOutlineEmail, MdUpdate } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
    const form = useRef(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        let formData = new FormData(form.current) 

        let data = {
            name: formData.get('name'),
            email:formData.get('email'),
            message: formData.get('message'),
        }

        let stateMail = document.getElementById("contact__state");
        stateMail.innerHTML = 'Wait sending ...';
        emailjs.sendForm(process.env.SERVICE_ID , process.env.TEMPLATE_ID, form.current, process.env.PUBLIC_KEY)
            .then((result) => {
                if (result.text === "OK") {
                stateMail.innerHTML = "Send";
                setTimeout(() => {
                    stateMail.innerHTML = "";
                },5000);
                alert("Submitted successfully!");
                e.target.reset();
                }
            },
            (error) => {
                stateMail.innerHTML = "Failed!";
                setTimeout(() => {
                    stateMail.innerHTML = "";
                },15000);
                alert("Could not send successfully!")
                console.error(error.text);
            });
    };

    return (
        <section id="contact">
            <h5>Get in Touch</h5>
            <h2>CONTACT ME</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <a href="mailto:cdrn_19@hotmail.com" target="_blank">Send a message</a>
                    </article> 
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>Whatsapp</h4>
                        <a href="https://api.whatsapp.com/send?phone=584249296307" target="_blank">
                            Send a message
                        </a>
                    </article>
                </div>
                <form ref={form} onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    name="name"
                    placeholder="Your Full Name" 
                    required
                    />
                    <input 
                    type="email" 
                    name="email"
                    placeholder="Your email" 
                    required
                    />
                    <textarea 
                    name="message" 
                    rows="7" 
                    placeholder="Your Message" 
                    required 
                    />
                    <h5 id="contact__state"></h5>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;