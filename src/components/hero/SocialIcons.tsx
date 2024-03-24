import { Fa6BrandsSquareXTwitter } from "../ui/icons/Fa6BrandsSquareXTwitter";
import { JamGithub } from "../ui/icons/JamGithub";
import { SkillIconsGmailDark } from "../ui/icons/SkillIconsGmailDark";
import { SkillIconsLinkedin } from "../ui/icons/SkillIconsLinkedin";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SocialIcons = () => {
  return (
    <div className="absolte mt-10 mr-0 fixed">
      <div className="flex flex-col w-fit p-2 space-y-3 bg-primary/10 rounded-e-md">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a href="https://github.com/nazif786" target="_blank">
                <JamGithub fontSize={26} />
              </a>
            </TooltipTrigger>
            <TooltipContent side="right" align="end">
              <p className="">Github</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a
                href="https://www.linkedin.com/in/nazif-ullah/"
                target="_blank"
              >
                <SkillIconsLinkedin fontSize={24} />
              </a>
            </TooltipTrigger>
            <TooltipContent side="right" align="end">
              <p className="">Linkedin</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a href="https://twitter.com/nazifmal" target="_blank">
                <Fa6BrandsSquareXTwitter fontSize={26} />
              </a>
            </TooltipTrigger>
            <TooltipContent side="right" align="end">
              <p className="">Twitter</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a href="mailto:nazit.it@gmail.com">
                <SkillIconsGmailDark fontSize={24} />
              </a>
            </TooltipTrigger>
            <TooltipContent side="right" align="end">
              <p className="">Email</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* <a href="https://www.facebook.com/mal.nz" target="_blank">
          <DeviconFacebook fontSize={24} className="rounded-md" />
        </a> */}
        {/* <a href="917993841638" target="_blank">
          <LogosWhatsappIcon fontSize={24} />
        </a> */}
      </div>
    </div>
  );
};

export default SocialIcons;
