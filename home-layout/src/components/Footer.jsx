import React from 'react';
import './styles/footer.css';
import SocialMedia from './SocialMedia';
import FooterLink from './FooterLink';
import FooterRibbon from './FooterRibbon';

function Footer() {
    return (
        <>
            <div className='footer__wrapper footer__wrapper--blue'>
                <SocialMedia />
                <FooterLink />
            </div>
            <div className='footer__wrapper footer__wrapper--gray'>
                <FooterRibbon />
            </div>
        </>
    )
}

export default Footer;