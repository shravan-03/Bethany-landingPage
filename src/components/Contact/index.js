import React from "react";
import './index.css'

function Contact () {
    return (
        <div className="contact-container">
            <div className="contact-heading-container">
                <h1 className="heading-name">Contact Us</h1>
                <hr className="hr" />
                <p className="contact-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqa..</p>
            </div>
            <div className="input-contact-details-container">
                <div className="input-details">
                    <h1 className="email-heading">Email Us</h1>
                    <input type='text' placeholder="Your Name" className="input-styling"/>
                    <input type='email' placeholder="Your Email" className="input-styling"/>
                    <input type='text' placeholder="Subject" className="input-styling"/>
                    <textarea rows='6' colos='60' placeholder="Message" className="input-styling"/>
                    <button className="btn-send">Send</button>
                </div>
                <div className="address-container">
                    <h1 className="visit-us">Visit Us</h1>
                    <h3 className="address">Via Principe Amedeo 9, Torino, Italy</h3>
                    <h3 className="address">Phone: 0039 333 12 68 347</h3>
                    <h3 className="address">Email: hi@yourdomain.com</h3>
                </div>
            </div>
        </div>
    )
}

export default Contact