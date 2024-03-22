import React from "react";
import { DeviconFacebook } from "../ui/icons/DeviconFacebook";
import { Fa6BrandsSquareXTwitter } from "../ui/icons/Fa6BrandsSquareXTwitter";
import { JamGithub } from "../ui/icons/JamGithub";
import { LogosWhatsappIcon } from "../ui/icons/LogosWhatsappIcon";
import { SkillIconsGmailDark } from "../ui/icons/SkillIconsGmailDark";
import { SkillIconsLinkedin } from "../ui/icons/SkillIconsLinkedin";

const SocialIcons = () => {
  return (
    <div className="absolte mt-10 mr-0 fixed">
      <div className="flex flex-col w-fit p-2 space-y-3 bg-primary/10 rounded-e-md">
        <a href="https://github.com/nazif786" target="_blank">
          <JamGithub fontSize={26} />
        </a>
        <a href="https://www.linkedin.com/in/nazif-ullah/" target="_blank">
          <SkillIconsLinkedin fontSize={24} />
        </a>
        <a href="https://twitter.com/nazifmal" target="_blank">
          <Fa6BrandsSquareXTwitter fontSize={26} />
        </a>
        {/* <a href="https://www.facebook.com/mal.nz" target="_blank">
          <DeviconFacebook fontSize={24} className="rounded-md" />
        </a> */}
        {/* <a href="917993841638" target="_blank">
          <LogosWhatsappIcon fontSize={24} />
        </a> */}
        <a href="mailto:nazit.it@gmail.com">
          <SkillIconsGmailDark fontSize={24} />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
