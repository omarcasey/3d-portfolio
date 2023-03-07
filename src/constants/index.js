import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  shopify,
  threejs,
  aigram,
  renthome,
  mocha,
  python,
  nextjs,
  firebase,
  sanity,
  nextauth,
  vscode,
  materialui,
  mysql,
  OCcompany,
  chatgpt,
  angular,
  java,
  statoasis,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Fullstack Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "sanity",
    icon: sanity,
  },
  {
    name: "nextauth",
    icon: nextauth,
  },
  {
    name: "vscode",
    icon: vscode,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "materialui",
    icon: materialui,
  },
  {
    name: "angular",
    icon: angular,
  },
  {
    name: "java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Independent Freelance",
    icon: OCcompany,
    iconBg: "#282634",
    date: "Jun 2021 - Jan 2022",
    points: [
      "Designed and developed websites for family and friends’ businesses, creating visually appealing and user-friendly web experiences for clients.",
      "Utilized front-end development technologies such as HTML, CSS, and JavaScript to build websites that are both responsive and accessible.",
      "Collaborated with clients to ensure complete satisfaction with the end result, making necessary updates and revisions until the website met their expectations.",
    ],
  },
  {
    title: "Contract Software Engineer",
    company_name: "StatOasis Inc.",
    icon: statoasis,
    iconBg: "#014080",
    date: "Jan 2021 - Present",
    points: [
      "Built a quantitative momentum investing strategy using Python, analyzing large financial datasets to identify stocks with high momentum and potential for growth.",
      "Designed and developed a Discord bot to manage a community of traders, providing real-time alerts on market changes and reminders to rebalance their portfolios based on their specific trading strategies.",
      "Built a landing page for StatOasis, a business that offers courses and educational resources on how to learn algorithmic trading, attracting between 100 and 300 unique visitors per month.",
      "Demonstrated proficiency in Python, JavaScript, HTML, CSS, and various data analysis and visualization tools, including pandas, NumPy, and Matplotlib.",
    ],
  },
  {
    title: "E-commerce Business Owner",
    company_name: "FanLuv Inc.",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2019 - Aug 2019",
    points: [
      "Created and managed an online clothing store using Shopify eCommerce platform that generated over $40,000 USD in revenue.",
      "Designed and built a website with a conversion rate of 6% (High for the industry)",
      "Designed ad creatives for use in Facebook and Instagram paid advertisements.",
      "Created and managed advertising campaigns for the business through the Facebook ad platform.",
      "Co-ordinated with supplier based in China on a daily basis to pay for product orders and arrange shipment of product to customers.",
      "Responded to and resolved all customer queries and complaints via e-mail.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Omar was a key factor in helping our students understand and achieve better results. Additionally, he saved us countless hours of manual labor.",
    name: "Ali",
    designation: "Founder & CEO",
    company: "StatOasis",
    image: "https://media.licdn.com/dms/image/C4E03AQFIbjeGTMEZww/profile-displayphoto-shrink_800_800/0/1517594042776?e=2147483647&v=beta&t=B4i1v5GP62uBsXoo19LSxz0VESL2pn-d9gq8TWINMQ4",
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Omar does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Omar optimized our website, our traffic increased by 50%. We can't thank him enough! Sample text innit",
  //   name: "Abel Tesfaye",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "AI-gram",
    description:
      "AIgram is an AI-powered Instagram clone. It is a full-stack web application that integrates a cutting-edge deep learning model, only allowing users to upload AI-generated images using the DALLE 2 image generator, providing a unique and creative experience for users. It also features complete CRUD functionalities, user authentication, and a modern and clean design with Tailwind CSS. The app was built using React, Next.js, Firebase, NextAuth, Recoil, and TypeScript.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
      {
        name: "NextAuth",
        color: "green-text-gradient",
      },
    ],
    image: aigram,
    source_code_link: "https://github.com/omarcasey/AI-gram",
  },
  {
    name: "RentHome",
    description:
      "My real estate project is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) dashboard application designed to manage properties and users. It has complete CRUD functionality, user authentication, pagination, sorting, and filtering. The app utilizes Refine, a React-based framework, to create a highly customizable, responsive, and user-friendly interface. Material UI and Cloudinary are integrated for a streamlined design and efficient image management. Google Authentication ensures secure access to the dashboard, and TypeScript improves reliability and development experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
    ],
    image: renthome,
    source_code_link: "https://github.com/omarcasey/real_estate_app-refine",
  },
  {
    name: "ChatGPT Clone",
    description:
      "My ChatGPT Clone project is a web application that uses OpenAI's GPT model to generate human-like responses to user inputs in real-time. The application features a user-friendly interface that enables users to interact with the pre-trained model and receive relevant responses to their queries. It was built using modern web technologies such as React, Next.js, TypeScript, Tailwind CSS, Firebase, and NextAuth.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
      {
        name: "NextAuth",
        color: "green-text-gradient",
      },
    ],
    image: chatgpt,
    source_code_link: "https://github.com/omarcasey/chatgpt-clone",
  },
];

export { services, technologies, experiences, testimonials, projects };