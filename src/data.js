import {
  Portfolio1,
  Portfolio2,
  Portfolio3,
  Portfolio4,
  Portfolio5,
  Portfolio6,
  ChairPage,
  Alumni,
  Iptraker,
  Shortly,
  Loopstudios,
  GeorgesGarden,
} from "./assets";

export const portfolioData = [
  {
    title: "TAFE alumni",
    id:'tafe-alumni',
    thumnail: Portfolio1,
    screenshot: Alumni,
    alt: "A dynamic website that I developed from scratch as a volunteer for a client",
    involvement:' I was involved in a client-driven initiative to develop a comprehensive and dynamic website for school alumni. This significant undertaking involves the creation of a fully functional platform that allows client administrators to manage a range of content, including blogs, events, and job opportunities, through a robust CMS backend. Taking charge of this project individually, I have gained invaluable hands-on experience, encompassing client requirement analysis, conducting productive meetings, designing intuitive UI/UX interfaces, creating meticulous wireframes, developing a functional static prototype, and skillfully integrating the website with WordPress as a theme.',
    category: ["Web Design ","Web Development "],
    link: "/work/tafe-alumni",
    url:'2023.alumni.dev.screencraft.net.au',
    code:'github.com/akiraafu/alumni-wordpress'
  },
  {
    title: "Chair Issue - chair finding app",
    id:'chair-issue',
    thumnail: Portfolio2,
    screenshot: ChairPage,
    alt: "A full-stack web application that I developed myself from scratch in 3 weeks using React",
    involvement:'This innovative platform serves as a valuable tool for individuals seeking to find and donate unwanted furniture within their local community. By seamlessly browsing through a wide range of available furniture items and accessing detailed descriptions and photos, users can effortlessly contribute to the well-being of the environment and those in need. I built this app entirely from scratch within a span of just three weeks. Leveraging my skills in HTML, CSS, Tailwind CSS, JavaScript, React, Mapbox, Node.js, and Firebase. I invite you to access the demo login using the following details: Username: cat@cat.com, Password: 123456.',
    category: ["Web Design ","Web Development "],
    link: "/work/chair-issue",
    url:'chair-finding-app.web.app',
    code:'github.com/akiraafu/chair-finding-app'

  },
  {
    title: "IP Address Tracker App",
    id:'ip-tracker',
    thumnail: Portfolio3,
    screenshot: Iptraker,
    alt: "IP Address Tracker App",
    involvement:'IP Address Tracker web app seamlessly integrates two APIs, empowers users with a range of functionalities, including the ability to view optimized layouts based on their devices screen size, interact with hover states on various elements, visualize their own IP address on an interactive map during the initial page load, and effortlessly search for any IP address to retrieve key information and location details. Leveraging a robust tech stack, I built this app using React, React Hooks (useState, useEffect), JavaScript, Fetch, async/await, Semantic HTML5 markup, CSS custom properties, and Flexbox for optimal responsiveness.',
    category:  ["Web Development"],
    link: "/work/ip-tracker",
    url:'ip-address-tracker-react-eight.vercel.app',
    code:'github.com/akiraafu/ip-address-tracker-react'


  },
  {
    title: "URL shortening API landing page",
    id:'shortly',
    thumnail: Portfolio4,
    screenshot: Shortly,
    alt: "URL shortening API landing page",
    involvement:'URL shortening API landing page. This platform enables users effortlessly shorten any valid URL, conveniently access a list of their shortened links even after refreshing the browser (thanks to the utilization of local storage), and conveniently copy the shortened link to their clipboard with a single click. Using Semantic HTML5 markup, CSS, Flexbox for responsive design, JavaScript, Fetch for API integration.',
    category:  ["Web Development"],
    link: "/work/shortly",
    url:'url-shortening-api-lac.vercel.app',
    code:'github.com/akiraafu/url-shortening-api'

  },
  {
    title: "Loopstudios landing page",
    id:'loopstudios',
    thumnail: Portfolio5,
    screenshot: Loopstudios,
    alt: "Loopstudios landing page",
    involvement:"Developed a responsive landing page using HTML, SASS, and JavaScript, showcasing expertise in CSS grid for optimal layout organization. Leveraged CSS grid exclusively, eliminating the use of 'display:flex' to create a visually appealing and highly functional design. Demonstrated strong proficiency in front-end technologies, resulting in a seamless and engaging user experience.",
    category:  ["Web Development"],
    link: "/work/loopstudios",
    url:'akiraafu.github.io/loopstudios-landing-page',
    code:'github.com/akiraafu/loopstudios-landing-page'

  },
  {
    title: "Georges Garden Centre",
    id:'georges-garden',
    thumnail: Portfolio6,
    screenshot: GeorgesGarden,
    alt: "Georges Garden Centre",
    involvement:'A responsive website with an original design to meet the needs of the client. Built with HTML/CSS/JS/Boostrap to help Georges Garden Centre improve their business.',
    category: ["Web Design","Web Development"],
    link: "/work/georges-garden",
    url:'georges-garden-centre.vercel.app',
    code:'github.com/akiraafu/Georges-Garden-Centre'

  },
];
