import React from 'react';
import './About.css';
import { HiDownload } from "react-icons/hi";

function About() {

    return (
        <section className="about" id='about'>
            <div className="about_title">
                <span className="angle_bracket">{'<'}</span>
                <span className="title_text">about me</span>
                <span className="angle_bracket">{'>'}</span>
            </div>
            <div className='about_container'>
                <div>
                    <div className='about_item_title'>My <br />Biography</div>
                    <button style={{display: 'flex', alignItems: 'center', gap: '10px'}} className='about_item_button'>
                        <span className="icon-circle">
                            <HiDownload />
                        </span>Download CV
                    </button>
                </div>
                <div className='about_item_description'>
                    <div>I'm Thomas Odvart, a student-entrepreneur from Belgium with a passion for IT and technology.
                        I work on both software and hardware projects — from full-stack development to energy systems.
                        Since January 2025, I've been subcontracting for FIRN Energy, mainly building EMS dashboards.
                        Besides that, I also take on side projects like website development or software implementations.</div>
                    <br />
                    <div>I started my one-man business under the name ODY tech.
                        I enjoy solving real-world problems with efficient, smart solutions.
                        Always learning, always building — that's what drives me.</div>
                </div>
            </div>
        </section>
    );
}

export default About;