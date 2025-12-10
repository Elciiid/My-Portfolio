import extensionImage from './assets/Extension.png';
import sulyapImage from './assets/sulyap.png';

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
    link: "https://chromewebstore.google.com/detail/facebook-phishing-detecto/gijaklfaegcklbdgikikgocmedcohmdl" // Added Link
  },
  {
    title: "Sulyap Kapampangan",
    type: "Mobile Application",
    description: "Developed a gamified, Duolingo-inspired language-learning mobile application to promote and preserve the Kapampangan language.",
    tags: ["Dart", "Firebase", "Flutter"],
    image: sulyapImage,
    link: "https://drive.google.com/file/d/1LM_QiIAx7sjftbbsuZt3utUyp-ytqUmx/view" // Added Link
  }
];

export const SKILLS = [
  "Web Design", "Web Development", "Cloud Architecture", "UI/UX Prototyping", "Machine Learning"
];