import React from 'react';


function FooterRibbon() {
  return (
    <div className='footer__ribbon'>
      <div className='footer__ribbon-copyright-wrapper'>
        <p className='footer__ribbon-copyright'>©2018-2021 ESSILOR OF AMERICA, INC. ALL RIGHTS RESERVED.</p>
      </div>
      <div className='footer__ribbon-link-wrapper'>
        <a className='footer__ribbon-link'>Terms of Use</a>
        <a className='footer__ribbon-link'>Privacy Policy</a>
        <a className='footer__ribbon-link'>Ethics & Compliance</a>
      </div>
    </div>
  )
}

export default FooterRibbon;