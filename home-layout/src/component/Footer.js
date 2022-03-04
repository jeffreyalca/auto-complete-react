import React from "react";
import FooterLinks from "./UI/FooterLinks";
import Ribbon from "./UI/Ribbon";
import SocialMediaLinks from "./UI/SocialMediaLinks";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <SocialMediaLinks />
        <FooterLinks />
      </div>
      <div className="footer-copyright__bg">
        <Ribbon />
      </div>
    </>
  );
}
