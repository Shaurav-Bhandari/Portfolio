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
    threejs,
    python,
    dev,
    shishir,
    user,
    cat,
    piano,
    stephen
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
      title: "Game Developer",
      icon: mobile,
    },
    /*
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
    */
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
        name: "Python",
        icon: python,
    }
    /*
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
    */
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "N/A",
      icon: dev,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - Present",
      points: [
        "Learning and implementing concepts of HTML5, CSS3, and JS",
        "Making different basic projects to familiarize myself with these technologies and use them efficiently.",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Shaurav proved me wrong.",
      name: "prajwol Bohora",
      designation: "Student",
      company: "Deerwalk Institute of Technonlgy",
      image: user,
    },
    {
      testimonial:
        "Best website that I've ever seen. I didn't know 3D websites were possible until i saw what shaurav made. It is a piece of art.",
      name: "Shishir Paudel",
      designation: "Student",
      company: "Islington College",
      image: shishir,
    },
    
  ];
  
  const projects = [
    {
      name: "Cat Paint",
      description:
        "A Painting of a Cat to further broaden my knowledge of CSS",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        
      ],
      image: cat,
      source_code_link: "https://github.com/Shaurav-Bhandari/HTML-projects/tree/main/catPaint",
    },
    {
      name: "Piano",
      description:
        "A Project to Learn CSS Colors",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        
      ],
      image: piano,
      source_code_link: "https://github.com/Shaurav-Bhandari/HTML-projects/tree/main/Piano",
    },
    {
      name: "Tribute Page",
      description:
        "Tribute to Dr. Stephen Hawkings",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        
      ],
      image: stephen,
      source_code_link: "https://github.com/Shaurav-Bhandari/HTML-projects/tree/main/tributePage",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };