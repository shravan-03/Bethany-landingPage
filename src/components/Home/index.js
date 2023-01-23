import React from "react";
import './index.css'

function Home () {
    return (
       <nav  className="nav-bar-large">
            <div className="bg-container">
                <div className="menu-container">
                    <h1 className="side-name">BETHANY</h1>
                    <div>
                        <a className="anchor" href="/">HOME</a>
                        <a className="anchor" href="/feature">FEATURE</a>
                        <a className="anchor" href="/portfolio">PORTFOLIO</a>
                        <a className="anchor" href="/contact">CONTACT</a>
                    </div>
                </div>
                <div className="headings">
                    <h2 className="service-heading">WEB DESIGN & DEVELOPMENT</h2>
                    <h3 className="main-heading">BETHANY</h3>
                    <h4 className="company-slogan">WE CREATE AMAZING DESIGNS</h4>
                    <button className="btn">DOWNLOAD NOW</button>
                </div>
            </div>
            <div className="company-quote">
                <h3 className="quote">"Everything is designed. Few things are designed well." -Bria Reed</h3>
            </div>
       </nav>
    )   
}

export default Home