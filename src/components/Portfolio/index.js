import React from "react";
import Logo1 from '../../images/port01.jpg'
import Logo2 from '../../images/port02.jpg'
import Logo3 from '../../images/port03.jpg'
import Logo4 from '../../images/port04.jpg'
import Logo5 from '../../images/port05.jpg'
import Logo6 from '../../images/port06.jpg'
import './index.css'

function Portfolio () {
    return (
        <div className="portfolio-container">
            <div className="portfolio-heading-container">
                <h1 className="portfolio-title">Portfolio</h1>
                <hr className="hr" />
                <p className="portfolio-description">Lorem ipsum dolor sit amet, <br /> 
                    consectetur adipiscing elit, sed do <br />
                    eiusmod tempor incididunt ut labore et <br /> 
                    dolore magna aliqua..</p>
            </div>
                <div className="portfolio-imgs">
                    <div>
                        <img src={Logo1} className="image" alt="img"/>
                        <img src={Logo2} className="image" alt="img"/>
                        <img src={Logo3} className="image" alt="img"/>
                    </div>
                    <div>
                        <img src={Logo4} className="image" alt="img"/>
                        <img src={Logo5} className="image" alt="img"/>
                        <img src={Logo6} className="image" alt="img"/>
                </div>    
            </div>
        </div>
    )
}

export default Portfolio