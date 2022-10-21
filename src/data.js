import * as Icons from "react-icons/fa";
// projects images

import Project1 from './assets/img-1.png';
import Project2 from './assets/img-2.jpg';
import Project3 from './assets/img-3.jpg';
import Project4 from './assets/img-4.jpg';
import Project5 from './assets/img-5.jpg';
import Project6 from './assets/img-6.jpg';
// blog images

import Blog1 from './assets/blog1.jpg';
import Blog2 from './assets/blog2.jpg';
import Blog3 from './assets/blog3.jpg';
import Blog4 from './assets/blog4.jpg';
import Blog5 from './assets/blog5.jpg';
import Blog6 from './assets/blog6.jpg';

// testimonial images
import Avatar1 from './assets/avatar-1.png';
import Avatar2 from './assets/avatar-3.png';
import Avatar3 from './assets/avatar-4.png';

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaHome />,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaInfo />,
  },
  {
    id: 3,
    title: "Resume",
    path: "/resume",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaBriefcase />,
  },
  {
    id: 4,
    title: "Portfolio",
    path: "/portfolio",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaCartArrowDown />,
  },
  {
    id: 5,
    title: "Blog",
    path: "/blog",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaCartArrowDown />,
  },
  
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaPhoneAlt />,
  },
];
// home
export const home = [
  {
    text: "HELLO I'M",
    name: "JOHN DOE",
    post: "WEB DESIGNER",
    design: "UI / UX DESIGNER",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
]
// projects Navigation
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Web Design',
  },
  {
    name: 'Applications',
  },
  {
    name: 'Web Development',
  },
 

];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: <a href="#" target="_blank">Project 1</a>,
    category: 'Web Development',
    url: "#", 
  },
  {
    id: '2',
    image: Project2,
    name: <a href="#" target="_blank">Project 2</a>,
    category: 'Web Design',
    url:"#",
    description:'Work with a variety of different languages.'
     
  },
  {
    id: '3',
    image: Project3,
    name: <a href="#" target="_blank">Project 3</a> ,
    category: 'Applications',
    url:"#",
  },
  {
    id: '4',
    image: Project4,
    name: <a href="#" target="_blank">Project 4</a>,
    category: 'Web Development',
    url: "#",
  },
  {
    id: '5',
    image: Project5,
    name: <a href="#" target="_blank">Project 5</a> ,
    category: 'Applications',
    url:"#",
  },
  {
    id: '6',
    image: Project6,
    name: <a href="#" target="_blank">Project 6</a> ,
    category: 'Web Design',
    url: "#",
  },
 
];

// blog
export const blogData = [
  {
    id: '1',
    image: Blog1,
    name: <a href="#" target="_blank">Best fonts every developer</a>,
    category: 'Web Development',
    time: 'Fab 23, 2022',
    description:'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.',
    url: "#", 
  },
  {
    id: '2',
    image: Blog2,
    name: <a href="#" target="_blank">Design conferences in 2022</a>,
    category: 'Design',
    time: 'Fab 23, 2022',
    description:' Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
    url:"#",
     
  },
  {
    id: '3',
    image: Blog3,
    name: <a href="#" target="_blank">Design digest #80</a> ,
    category: 'Applications',
    time: 'Fab 23, 2022',
    description:'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.',
    url:"#",
  },
  {
    id: '4',
    image: Blog4,
    name: <a href="#" target="_blank">UI interactions of the week</a>,
    category: 'Web Development',
    time: 'Fab 23, 2022',
    description:'Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.',
    url: "#",
  },
  {
    id: '5',
    image: Blog5,
    name: <a href="#" target="_blank">The forgotten art of spacing</a> ,
    category: 'Applications',
    time: 'Fab 23, 2022',
    description:'Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    url:"#",
  },
  {
    id: '6',
    image: Blog6,
    name: <a href="#" target="_blank">Design digest #79</a> ,
    category: 'Web Design',
    time: 'Fab 23, 2022',
    description:'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.',
    url: "#",
  },
 
];

// testimonials
export const testimonials = [
  {
    id: 1,
    image: Avatar1,
    name: 'Shaif Arfan',
    title: 'CEO',
    org: 'WEB CIFAR',
    desc:
      'We were very pleased with the work done. She has a lot of experience  and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt    consectetur adipiscing  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
  },
  {
    id: 2,
    image: Avatar2,
    name: 'Fahim Elahe',
    title: 'Co-founder',
    org: 'Kreetive',
    desc:
      'Really amazing communication skills. Always understand what I am trying to achieve. Also, his work is really amazing. Do really high-quality work.',
  },
  {
    id: 3,
    image: Avatar3,
    name: 'Sayed',
    title: 'Marketing Head',
    org: 'Eleven Dawn',
    desc:
      'Really hard-working person. Deliver the work as promised. Planning to work more with this person.',
  },
];