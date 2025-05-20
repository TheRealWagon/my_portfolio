import './Contact.css'

import Linkedin from '../assets/linkedin.png'
import Github from '../assets/githublogo.png'
import Facebook from '../assets/facebooklogo.png'
import Whatsapp from '../assets/whatsapplogo.png'

function Contact() {

    return(
        <section className='contact' id='contact'>
            <div className="contact_title">
                <span className="angle_bracket">{'<'}</span>
                <span className="title_text">contact me</span>
                <span className="angle_bracket">{'>'}</span>
            </div>
            <div className='contact_info_container'>
                <div>
                    <div className='contact_info_title'>Hire Me <br />For The Next Projects.</div>
                    <div className='contact_info_desc'>Drop Your Details Here.</div>
                    <div className='contact_info_links'>
                        <div className='contact_info_link'><img width={15} src={Linkedin} alt="" /></div>
                        <div style={{backgroundColor: '#f79d4c'}} className='contact_info_link'><img width={20} src={Github} alt="" /></div>
                        <div className='contact_info_link'><img width={15} src={Facebook} alt="" /></div>
                        <div className='contact_info_link'><img width={25} src={Whatsapp} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className='contact_form_container'>
                <div className='contact_form_sidebar'></div>
                <form className='contact_form'>
                    <h2>Contact Us</h2>

                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="your@email.com" required />

                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" placeholder="+1234567890" />

                    <label htmlFor="comment">Comment</label>
                    <textarea id="comment" name="comment" placeholder="Your comment here..." rows="4"></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    )

}

export default Contact