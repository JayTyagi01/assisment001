import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { BsAlarm, BsArrow90DegUp } from "react-icons/bs";

import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.png";

export const navLinks = [
  {
    id: 1,
    href: "home",
    link: "Home",
  },
  {
    id: 2,
    href: "about",
    link: "About",
  },
  {
    id: 3,
    href: "courses",
    link: "Why us",
  },

  {
    id: 5,
    href: "contact",
    link: "Contact",
  },
];

export const categories = [
  {
    id: 1,
    icon: <FiPenTool />,
    category: "Work on contract",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    category: "Online Mode ",
  },
  {
    id: 3,
    icon: <BsAlarm />,
    category: "On time",
  },
  {
    id: 4,
    icon: <BsArrow90DegUp />,
    category: "Brightup future",
  },
];

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export const accordions = [
  {
    id: 1,
    title: "What is CLOUDEAGLE?",
  },
  {
    id: 2,
    title: "What can I learn from CLOUDEAGLE?",
  },
  {
    id: 3,
    title: "Can I teach on CLOUDEAGLE?",
  },
  {
    id: 4,
    title: "What is included in my CLOUDEAGLE membership?",
  },
];
