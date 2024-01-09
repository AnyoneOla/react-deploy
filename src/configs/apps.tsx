import FaceTime from "~/components/apps/FaceTime";
import Terminal from "~/components/apps/Terminal";
import Safari from "~/components/apps/Safari";
import Bear from "~/components/apps/Bear";
import Typora from "~/components/apps/Typora";
import VSCode from "~/components/apps/VSCode";
import { appBarHeight } from "~/utils";
import type { AppsData } from "~/types";
import Maps from "~/components/apps/Maps";
import Netflix from "~/components/apps/Netflix";
import Prime from "~/components/apps/Prime";
import Apple_Music from "~/components/apps/Apple_Music";

const apps: AppsData[] = [
  {
    id: "Finder",
    title: "Finder",
    desktop: false,
    img: "img/icons/finder.png"
  },
  {
    id: "launchpad",
    title: "Launchpad",
    desktop: false,
    img: "img/icons/launchpad.png"
  },
  {
    id: "bear",
    title: "Bear",
    desktop: true,
    width: 860,
    height: 500,
    show: true,
    y: -40,
    img: "img/icons/bear.png",
    content: <Bear />
  },
  {
    id: "typora",
    title: "Typora",
    desktop: true,
    width: 600,
    height: 580,
    y: -20,
    img: "img/icons/typora.png",
    content: <Typora />
  },
  {
    id: "safari",
    title: "Safari",
    desktop: true,
    width: 1024,
    minWidth: 375,
    minHeight: 200,
    x: -20,
    img: "img/icons/safari.png",
    content: <Safari />
  },
  {
    id: "vscode",
    title: "VSCode",
    desktop: true,
    width: 900,
    height: 600,
    x: 80,
    y: -30,
    img: "img/icons/vscode.png",
    content: <VSCode />
  },
  {
    id: "facetime",
    title: "FaceTime",
    desktop: true,
    img: "img/icons/facetime.png",
    width: 500 * 1.7,
    height: 500 + appBarHeight,
    minWidth: 350 * 1.7,
    minHeight: 350 + appBarHeight,
    aspectRatio: 1.7,
    x: -80,
    y: 20,
    content: <FaceTime />
  },
  {
    id: "terminal",
    title: "Terminal",
    desktop: true,
    img: "img/icons/terminal.png",
    content: <Terminal />
  },
  {
    id: "Maps",
    title: "Maps",
    desktop: true,
    width: 900,
    height: 600,
    x: 80,
    y: -30,
    img: "img/icons/maps.png",
    content: <Maps />
  },
  {
    id: "Netflix",
    title: "Netflix",
    desktop: true,
    width: 900,
    height: 600,
    x: 80,
    y: -30,
    img: "img/icons/netflix.png",
    content: <Netflix />
  },
  {
    id: "Apple_Music",
    title: "Apple_Music",
    desktop: true,
    width: 900,
    height: 600,
    x: 80,
    y: -30,
    img: "img/icons/Apple_Music.png",
    content: <Apple_Music />
  },
  {
    id: "Prime",
    title: "Prime",
    desktop: true,
    width: 900,
    height: 600,
    x: 80,
    y: -30,
    img: "img/icons/prime.png",
    content: <Prime />
  },
  {
    id: "github",
    title: "Github",
    desktop: false,
    img: "img/icons/github.png",
    link: "https://github.com/JeetJoshi"
  },
];

export default apps;
