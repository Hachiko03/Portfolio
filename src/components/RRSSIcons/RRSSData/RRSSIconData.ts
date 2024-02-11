interface RRSSIcon {
  iconType: "Twitch" | "Github" | "Linkedin" | "Instagram";
  link: string;
  name: string;
}
export const RRSSIconData: RRSSIcon[] = [
  {
    link: "https://github.com/Hachiko03",
    name: "Github",
    iconType: "Github",
  },
  {
    link: "https://www.linkedin.com/in/jeniffer-f/",
    name: "LinkedIn",
    iconType: "Linkedin",
  },
  {
    link: "https://www.twitch.tv/hachiko_03",
    name: "Twitch",
    iconType: "Twitch",
  },
  {
    link: "https://www.instagram.com/hachiko_0.3/",
    name: "Instagram",
    iconType: 'Instagram',
  },
];
