import React from "react";
import FooterLinks from "./UI/FooterLinks";
import Ribbon from "./UI/Ribbon";
import SocialMediaLinks from "./UI/SocialMediaLinks";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer--wrapper">
        <SocialMediaLinks />
        <FooterLinks />
      </div>
      <div className="footer__ribbon--wrapper">
        <Ribbon />
      </div>
    </>
  );
}
