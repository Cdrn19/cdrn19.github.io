import React from 'react';
import '@styles/services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
    return (
        <section id='services'>
            <h5>What i Offer</h5>
            <h2>SERVICES</h2>
            <div className='container services__container'>
                <article className='service'>
                    <div className='service__head'>
                        <h3>Web Developer</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Writing efficient</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Good development practices.</p>
                        </li>                        
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>standard HTML/CSS practices.</p>
                        </li>                        
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Integration of data.</p>
                        </li>                        
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Optimal update.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>knowledge in the latest technologies.</p>
                        </li>
                    </ul>
                </article>
                <article className='service'>
                    <div className='service__head'>
                        <h3>UI/UX Desing</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Simplify the visual design.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Optimized user experience.</p>
                        </li>                        
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Responsive design.</p>
                        </li>                        
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Responsive strategies.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Wireframes.</p>
                        </li>            
                    </ul>
                </article>
                <article className='service'>
                    <div className='service__head'>
                        <h3>Content Creation</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Content Plan.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Original content.</p>
                        </li>                        
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Marketing strategy.</p>
                        </li>                        
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Responsive strategies.</p>
                        </li>          
                    </ul>
                </article>                 
            </div>
        </section>
    )
}

export default Services;