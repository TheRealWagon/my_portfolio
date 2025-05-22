import React, { useEffect, useState } from "react";
import "./Hero.css";
import Home_studio from "../assets/Home_studio.png";
import Home_office from "../assets/Home_office.png";
import classroom from "../assets/classroom.png";

const images = [classroom, Home_office, Home_studio];
const roles = ["Student", "Freelancer", "Web Developer"];

function Hero() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(false);
            }, 400);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero">
            <div className="hero-text">
                <h2>
                    Hi! I'm <span className="highlight">Thomas</span>{" "}
                    <span className="role-wrapper">
                        <span key={index} className={`role-slide ${fade ? "fade" : ""}`}>
                            {roles[index]}
                        </span>
                    </span>
                    <br />
                    Based in Belgium.
                </h2>
                <p>
                    Crafting sleek web apps with modern UI/UX. Let's team up — I’m open
                    for freelance work!
                </p>
                <a href="#skills"><button>Skills</button></a>
            </div>
            <div className="carousel-wrapper">
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`Slide ${i}`}
                        width={500}
                        className={`carousel-img ${i === index ? "visible" : "hidden"}`}
                    />
                ))}
            </div>
        </section>
    );
}

export default Hero;
