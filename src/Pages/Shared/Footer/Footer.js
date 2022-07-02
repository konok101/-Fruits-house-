import React from 'react';
import { Fade } from "react-awesome-reveal";
import './Footer.css';

const Footer = () => {
    return (
        <div id='footer' className="footer bg-primary mt-5 p-4">
        <Fade>
        <p className='mt-2'>© {new Date().getFullYear()}
          All rights reserved. Created by 
            <a href="https://www.linkedin.com/in/konok-majamder/ " target="_blank">Konok Majamder</a>.
        </p>
        </Fade>
    </div>
    );
};

export default Footer;