import extensionImage from './assets/Extension.png';
import sulyapImage from './assets/sulyap.png';
import portalVideo from './assets/LRNPortal.mp4?url';
import mp3Video from './assets/mp3vid.mp4?url';
import rtwVideo from './assets/rtwvid.mp4?url';

export const SOCIALS = {
  github: "https://github.com/Elciiid",
  linkedin: "https://www.linkedin.com/in/jonas-david-487722352/",
  email: "jonaselcid30@gmail.com",
  location: "Angeles City, Pampanga, Philippines"
};

export const PROJECTS = [
  {
    title: "Facebook Phishing Detector",
    type: "Facebook Browser Extension",
    description: "Engineered a browser extension using a hybrid machine learning model (Autoencoders and GCNs) for real-time phishing link detection and user safety enhancement on Facebook.",
    tags: ["Python", "Javascript", "Firebase"],
    image: extensionImage,
    link: "https://chromewebstore.google.com/detail/facebook-phishing-detecto/gijaklfaegcklbdgikikgocmedcohmdl"
  },
  {
    title: "Sulyap Kapampangan",
    type: "Mobile Application",
    description: "Developed a gamified, Duolingo-inspired language-learning mobile application to promote and preserve the Kapampangan language.",
    tags: ["Dart", "Firebase", "Flutter"],
    image: sulyapImage,
    link: "https://drive.google.com/file/d/1LM_QiIAx7sjftbbsuZt3utUyp-ytqUmx/view"
  },
  {
    title: "MP3 Player",
    type: "Application",
    description: "A feature-rich MP3 player application with custom playlist, alarm management and audio visualization.",
    tags: ["Javascript", "PHP", "CSS"],
    image: mp3Video,
    isVideo: true,
    link: "#",
    isConfidential: true
  },
  {
    title: "Portal System",
    type: "Web Application",
    description: "A comprehensive portal system for managing organizational resources and user access controls.",
    tags: ["PHP", "CSS", "MSSQL"],
    image: portalVideo,
    isVideo: true,
    link: "#",
    isConfidential: true
  },
  {
    title: "Return to Work",
    type: "System",
    description: "An automated system designed to streamline the return-to-work process for employees after absences.",
    tags: ["PHP", "CSS", "MSSQL"],
    image: rtwVideo,
    isVideo: true,
    link: "#",
    isConfidential: true
  }
];

export const SKILLS = [
  "Web Design", "Web Development", "Cloud Architecture", "UI/UX", "Machine Learning"
];