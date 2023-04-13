import "./FooterStyles.css";
import React from "react";

import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaTwitter, FaLinkedin} from "react-icons/fa";

const Footer=() =>{
    return(
        <div className="footer">
         <div className="footer-container">
         <div className="left">
        <div className="location">
            < FaHome  size={20} style={{color:"#fff",marginRight:"2rem"}} />
            <div>
                <p>Gulistane Jauhar block 2</p>
                <p>Karachi</p>
            </div>

        </div>
        <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            090978601</h4>
        </div>
        <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            areebanazkhan44@gmail.com</h4>
        </div>
        </div>   
            <div className="right">
            <h4>About Me</h4>
            <p>Hi, I am AREEBA NAZ KHAN I am full stack developer and also i am doing  BS Artificial Intelligence from Sindh Madersatul Islam University from 2020-2024
                I enjoy discussing new project and design challenges
            </p>

            <div className="social">
                <FaFacebook
                size={20}
                style={{color:"#fff",
            marginRight:"1rem"}}
            />
             <FaTwitter
                size={20}
                style={{color:"#fff",
            marginRight:"1rem"}}
            />
             <FaLinkedin
                size={20}
                style={{color:"#fff",
            marginRight:"1rem"}}
            />
        </div>
        </div>   
        </div>
        </div>
        
    );
};
export default Footer;