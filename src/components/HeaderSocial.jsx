import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiPlatzi } from "react-icons/si"

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a href="https://linkedin.com/in/cdrn19" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/cdrn19" target="_blank">
        <BsGithub />
      </a>
      <a href="https://platzi.com/p/cdrn19" target="_blank">
        <SiPlatzi />
      </a>
    </div>
  );
};

export default HeaderSocial;