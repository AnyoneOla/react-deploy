import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there!👋 I am a...."
      }

    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "AVNDS",
        title: "AVNDS",
        file: "https://github.com/JeetJoshi/Automatic-Vehicle-Numberplate-Detection/main/README.md",
        icon: "i-ri:gamepad-line",
        excerpt: "System which automaticlly detects number-plates and add into Database...",
        link: "https://github.com/JeetJoshi/Automatic-Vehicle-Numberplate-Detection/"
      },
      {
        id: "Social Distancing detector",
        title: "Social Distance Detector",
        file: "https://github.com/JeetJoshi/Social-Distancing-detector/README.md",
        icon: "i-ri:gamepad-line",
        excerpt: "System which automaticlly detects social distance between people and...",
        link: "https://github.com/JeetJoshi/Social-Distancing-detector"
      }
    ]
  }
];

export default bear;
