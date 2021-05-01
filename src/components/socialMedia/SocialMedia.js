import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-container">
      <div className="social-media-div">
        <a
          href={socialMediaLinks.github}
          className="icon-button github hex "
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <div className="top"></div>
          <div className="middle">
            <i className="fab fa-github"></i>
          </div>
          <div className="bottom"></div>
        </a>
        {/* <a
        href={socialMediaLinks.gitlab}
        className="icon-button gitlab"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-gitlab"></i>
        <span></span>
      </a> */}
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin hex "
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="top"></div>
          <div className="middle">
            <i className="fab fa-linkedin-in"></i>
          </div>
          <div className="bottom"></div>

          <span></span>
        </a>
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google hex "
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="top"></div>
          <div className="middle">
            <i className="fab fa-google"></i>
          </div>
          <div className="bottom"></div>
        </a>
        {/* <a
        href={socialMediaLinks.twitter}
        className="icon-button twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.instagram}
        className="icon-button instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram"></i>
        <span></span>
      </a> */}
      </div>
    </div>
  );
}
