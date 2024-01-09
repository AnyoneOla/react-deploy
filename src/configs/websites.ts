import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "SNS Links",
    sites: [
      {
        id: "portfolio",
        title: "Website",
        img: "img/sites/hero.jpg",
        link: "https://jeetjoshi.github.io/Portfolio/",
        inner: true
      },
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/JeetJoshi"
      },
      {
        id: "my-linkedin",
        title: "Linkedin",
        img: "img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/jeet-joshi-292979188/"
      },
      {
        id: "my-twitter",
        title: "Twitter",
        img: "img/sites/twitter.svg",
        link: "https://twitter.com/Jeet___Joshi"
      },
      {
        id: "my-email",
        title: "Email",
        img: "img/sites/gmail.svg",
        link: "mailto:jeetjoshi2000@gmail.com"
      }
    ]
  },
  freq: {
    title: "Frequently Visited",
    sites: [
    ]
  }
};

export default websites;
