import React from "react";
import { RRSSIconData } from "./RRSSData/RRSSIconData";
import classes from "./RRSSIcons.module.scss";
import { PiTwitchLogoFill, PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareGithub } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";

interface RRSSIcon {
  iconType: "Twitch" | "Github" | "Linkedin" | "Instagram";
  link: string;
  name: string;
}

const RRSSIcons: React.FC = () => {
  const renderIcons = (): JSX.Element[] => {
    return RRSSIconData.map((icon: RRSSIcon, index: number) => {
      let IconComponent;
      switch (icon.iconType) {
        case "Twitch":
          IconComponent = PiTwitchLogoFill;
          break;
        case "Github":
          IconComponent = FaSquareGithub;
          break;
        case "Linkedin":
          IconComponent = ImLinkedin;
          break;
        case "Instagram":
          IconComponent = PiInstagramLogoFill;
          break;
        default:
          throw new Error(`Icon type "${icon.iconType}" not supported.`);
      }

      return (
        <div key={index}>
          <a href={icon.link} target="_blank" rel="noopener noreferrer" >
            <IconComponent className={classes.logo}/>
          </a>
          {/* <span>{icon.name}</span> */}
        </div>
      );
    });
  };

  return <div>{renderIcons()}</div>;
};

export default RRSSIcons;
