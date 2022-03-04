import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function SocialMediaLinks() {
  return (
    <>
      <div className="footer-socials__layout">
        <FontAwesomeIcon
          icon={faFacebookF}
          className="footer-socials-item__layout"
        />
        <FontAwesomeIcon
          icon={faTwitter}
          className="footer-socials-item__layout"
        />
        <FontAwesomeIcon
          icon={faYoutube}
          className="footer-socials-item__layout"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="footer-socials-item__layout"
        />
        <FontAwesomeIcon
          icon={faLinkedinIn}
          className="footer-socials-item__layout"
        />
      </div>
    </>
  );
}
