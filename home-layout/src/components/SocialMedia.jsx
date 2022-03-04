import React from 'react';
import './styles.css';
import { GrFacebookOption, GrTwitter,GrYoutube} from 'react-icons/gr';
import {FaLinkedinIn, FaInstagram} from 'react-icons/fa';


function SocialMedia() {
    return (
        <div className='footer__socials'>
            <GrFacebookOption className="footer__socials-icon"/>
            <GrTwitter className="footer__socials-icon" />
            <GrYoutube className="footer__socials-icon"/>
            <FaInstagram className="footer__socials-icon"/>
            <FaLinkedinIn className="footer__socials-icon"/>      
        </div>
    )
}

export default SocialMedia;