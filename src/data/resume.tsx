import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "CHARUKA CHANDRASEKARA ",
  initials: "CC",
  url: "https://charuka-blog-and-portfolio.vercel.app/",
  location: "San Francisco, CA",
  description:
    "Software Engineer undergraduate. I love building things and helping people. Very active on Linkedin.",
  summary:
    "",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    ".Net",
    "Spring Boot",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
    // { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "chrk4.pro@gmail.com",
    // tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/chrk-Dev",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chrk-dev/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Chrk_pro",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:chrk4.pro@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Epic Lanka",
      href: "https://www.epictechnology.lk/",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer intern",
      logoUrl: "/epic-lanka-logo.png",
      start: "Aug 2023",
      end: "Apr 2024",
      description:
        "Devloper member of the Sri Lanka Parliament Document Management System Team",
    }
  ],
  education: [
  
    {
      school: "Cardiff Metropolitan University",
      href: "https://www.cardiffmet.ac.uk/",
      degree: "BSc (Hons) Software Engineering",
      logoUrl: "/cardiff-met.png",
      start: "2025",
      end: "2024",
    },
    {
      school: "Cardiff Metropolitan University",
      href: "https://www.cardiffmet.ac.uk/",
      degree: "Higher Diploma in Software Engineering",
      logoUrl: "/cardiff-met.png",
      start: "2022",
      end: "2024",
    }
  ],
  projects: [
    {
      title: "Pathfinding Algorithms Visualizer",
      href: "https://chrk-dev.github.io/chrk-Dev-Pathfinding-Algorithms-Visualizer/",
      dates: "July 2024",
      active: true,
      description:
        "this project to provide a more engaging and intuitive understanding of these significant algorithms for others.The interactive Pathfinding Visualizer is a tool created to assist users in comprehending important pathfinding algorithm-related computer science concepts.",
      technologies: [
        "JavaScript",
        "Reactjs",
        "TailwindCSS"
        
      ],
      links: [
        {
          type: "Website",
          href: "https://chrk-dev.github.io/chrk-Dev-Pathfinding-Algorithms-Visualizer/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/chrk-Dev/chrk-Dev-Pathfinding-Algorithms-Visualizer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "Pathfinding.mp4",
    },
    {
      title: "Password Manager",
      href: "https://github.com/chrk-Dev/password-manager",
      // dates: "April 2023 - September 2023",
      active: true,
      description:
        "A simple and secure password manager built with Ruby on Rails, allowing users to store and share passwords effortlessly. The application utilizes SQLite3 for data storage and is styled with TailwindCSS for a clean and modern user interface.",
      technologies: [
        "Ruby On Rails",
        "Sqlite3",
        "TailwindCSS",
      ],
      links: [
       
        {
          type: "Source",
          href: "https://github.com/chrk-Dev/password-manager",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/passwordManger.png",
      video: "",
    },
    {
      title: "Task Management App",
      href: "https://github.com/chrk-Dev/task-management-web-app",
      // dates: "April 2023 - March 2024",
      active: true,
      description:
      "A basic task management application designed to demonstrate CRUD (Create, Read, Update, Delete) operations using the .NET framework for the backend and Angular for the frontend. This app helps users manage tasks efficiently while showcasing the integration of these technologies.",
      technologies: [
        ".NET Framework",
        "Angular",
        "MsSql"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/chrk-Dev/task-management-web-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    }
  ],
} as const;
