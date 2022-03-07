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
      <div className="socials--wrapper">
        <FontAwesomeIcon icon={faFacebookF} className="socials__item" />
        <FontAwesomeIcon icon={faTwitter} className="socials__item" />
        <FontAwesomeIcon icon={faYoutube} className="socials__item" />
        <FontAwesomeIcon icon={faInstagram} className="socials__item" />
        <FontAwesomeIcon icon={faLinkedinIn} className="socials__item" />
      </div>
    </>
  );
}
