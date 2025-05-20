import './Skills.css'
import NodeJS from '../assets/nodejslogo.svg'
import React from '../assets/reactlogo.png'
import Python from '../assets/pythonlogo.png'

function Skills() {
    return (
        <section className="skill" id="skills">
            <div className="skill_title">
                <span className="angle_bracket">{'<'}</span>
                <span className="title_text">specialized</span>
                <span className="angle_bracket">{'>'}</span>
            </div>
            <div className="skill_container">
                <div className='skill_item_container'>
                    {/* <div className='skill_item_sidebar'></div> */}
                    <div className='skill_item_img'><img width={75} src={NodeJS} alt="" /></div>
                    <div style={{fontWeight: 'bold', fontSize: '1.25rem', marginTop: '10px'}}>Node JS</div>
                    <div style={{fontSize: '0.7rem', opacity: '0.8'}}>Build fast and scalable backend applications using JavaScript. Node.js runs on the server and is perfect for real-time, event-driven systems like APIs and microservices.</div>
                </div>
                <div className='skill_item_container'>
                    {/* <div className='skill_item_sidebar'></div> */}
                    <div className='skill_item_img'><img width={60} src={React} alt="" /></div>
                    <div style={{fontWeight: 'bold', fontSize: '1.25rem', marginTop: '10px'}}>React</div>
                    <div style={{fontSize: '0.7rem', opacity: '0.8'}}>A powerful JavaScript library for building modern, dynamic user interfaces. React is component-based, making development efficient, modular, and scalable.</div>
                </div>
                <div className='skill_item_container'>
                    {/* <div className='skill_item_sidebar'></div> */}
                    <div className='skill_item_img'><img width={50} src={Python} alt="" /></div>
                    <div style={{fontWeight: 'bold', fontSize: '1.25rem', marginTop: '10px'}}>Python</div>
                    <div style={{fontSize: '0.7rem', opacity: '0.8'}}>A versatile and beginner-friendly programming language. Python excels in automation, data analysis, AI, and scripting thanks to its simplicity and powerful ecosystem.</div>
                </div>
            </div>
        </section>
    )
}

export default Skills