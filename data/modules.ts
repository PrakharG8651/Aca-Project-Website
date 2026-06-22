import type { Module, WeekStatus } from "@/types";

export const modules: Module[] = [
  {
    id: "week-1",
    week: 1,
    title: "Web Fundamentals",
    description:
      "Build a foundation in JavaScript, HTML, and CSS — the core trio of the web. JS is the priority; get it done first. HTML and CSS can be sharpened as you go.",
    status: "done",
    topics: ["JavaScript", "HTML", "CSS", "DOM", "Node.js", "Tools & Server"],
    assignmentCount: 3,
    goal: "Get comfortable with JS basics and understand how HTML/CSS structure and style a web page. Set up your local environment with Node.js. Learn DOM, how to manipulate html and css with js using dom.",
    learningOutcomes: [
      "Understand JavaScript fundamentals: variables, functions, loops, and scope",
      "Write semantic HTML5 markup and structure pages correctly",
      "Style pages with CSS selectors, properties, and the box model",
      "Install and understand the role of Node.js in a web dev workflow",
      "Inspect and debug layouts using browser DevTools",
      "Learning DOM to manipulate html and css",
    ],
    timeRequired: "7–9 hours",
    resources: [
      {
        title: "JS Basics (3 hours)",
        url: "https://youtu.be/PkZNo7MFNFg?si=394XrMFzuxkTO3Eu",
        type: "video",
      },
      {
        title: "HTML & CSS Basics (4 hours)",
        url: "https://youtu.be/HGTJBPNC-Gw?si=Lb8gjwmikMxQvpcY",
        type: "video",
      },
      {
        title: "Learn DOM Manipulation",
        url: "https://youtu.be/y17RuWkWdn8?si=0-sGvl_DLloF7Qu6",
        type: "video",
      },
      {
        title: "What is Node.js and how it works",
        url: "https://youtu.be/q-xS25lsN3I?si=K2BpHuKfAWt8e8VR",
        type: "video",
      },
      {
        title: "Node.js Installation",
        url: "https://youtu.be/N6PjgN9licA?si=_lIFk-mDOd8A-EOq",
        type: "video",
      },
    ],
  },
  {
    id: "week-2",
    week: 2,
    title: "JavaScript Essentials & Git Basics",
    description:
      "Explore JavaScript from the ground up. Master Asynchronous JavaScript: Callbacks, Promises & Async/Await Made, functions.",
    status: "done",
    topics: ["Asynchronous Js", "Async/Await", "Fetch", "API", "ES6+ Syntax"],
    assignmentCount: 1,
    goal: "Write JavaScript that communicates with external APIs and handles asynchronous operations.",
    learningOutcomes: [
      "Understand the JavaScript event loop and why asynchronous code exists",
      "Work with Promises: chaining .then()/.catch() and handling rejections",
      "Write clean async functions using async/await syntax",
      "Handle errors gracefully in async contexts with try/catch",
      "Make HTTP requests using the Fetch API and read JSON responses",
      "Consume real-world REST APIs and integrate data into the DOM",
      "Use ES6+ syntax: destructuring, spread, template literals, and arrow functions in async contexts",
      "Understand the difference between parallel and sequential async execution (Promise.all vs await chaining)",
    ],
    timeRequired: "3–4 hours",
    resources: [
      {
        title: "Git Tutorial For Dummies (15 mins)",
        url: "https://youtu.be/mJ-qvsxPHpY?si=V_6HGBsl943Qn-2s",
        type: "video",
      },
      {
        title: "Learn JavaScript CLASSES in 6 minutes!",
        url: "https://youtu.be/U2vxAEiaVRY?si=w80PUON5Cyi_9Tow",
        type: "video",
      },
      {
        title: "JavaScript Modules in 100 Seconds",
        url: "https://youtu.be/qgRUr-YUk1Q?si=3QbuD-pZI1D_sKWj",
        type: "video",
      },
      {
        title: "Master Asynchronous JavaScript (45 mins)",
        url: "https://youtu.be/2pHQdjgSVUk?si=3ra1VoMAXsjn8N0M",
        type: "video",
      },
      {
        title: "Node.js Ultimate Beginner’s Guide in 7 Easy Steps (20 mins)",
        url: "https://youtu.be/ENrzD9HAZK4?si=4NmEgZcmRcQSNMxu",
        type: "video",
      },
      {
        title: "Learn Fetch API (6 mins)",
        url: "https://youtu.be/cuEtnrL9-H0?si=tX5o3NvZQos7IE-G",
        type: "video",
      },
      {
        title: "RESTful APIs (12 mins)",
        url: "https://youtu.be/-MTSQjw5DrM?si=T9nHYLtBxTpxpeJc",
        type: "video",
      },
    ],
  },
  {
    id: "week-3",
    week: 3,
    title: "React Deep Dive: Forms, Routing & Hooks",
    description:
      "Go beyond the basics of React. Learn to handle forms and user input, manage complex state with useReducer, navigate between pages with React Router, and encapsulate logic into reusable custom hooks.",
    status: "active",
    topics: [
      "React Components & JSX",
      "useState & useEffect",
      "Forms & Input Handling",
      "useReducer Hook",
      "React Router: Dynamic Routes",
      "useNavigate Hook",
      "Custom Hooks",
    ],
    assignmentCount: 1,
    goal: "Build interactive, multi-page React apps with robust form handling and reusable hook abstractions.",
    learningOutcomes: [
      "Structure a React app using functional components and JSX",
      "Manage local UI state with useState and trigger side effects with useEffect",
      "Handle single and multiple form inputs and form submission events",
      "Manage complex state transitions using the useReducer hook",
      "Set up dynamic routes and programmatic navigation with React Router",
      "Extract reusable stateful logic into custom hooks",
    ],
    timeRequired: "5-6 hours",
    resources: [
      {
        title: "Learn React With This ONE Project (1.5 hours)",
        url: "https://youtu.be/9aTRnV6g0eQ?si=7CGkH3Dmi0qnpnUL",
        type: "video",
      },
      {
        title: "Handling Input Fields In React (15 mins)",
        url: "https://www.youtube.com/watch?v=2bCqpPDRq3s&list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza&index=25",
        type: "video",
      },
      {
        title: "Handling Multiple Inputs In React (8 mins)",
        url: "https://youtu.be/5FDDoHI173g?si=QTYizWQbRA_IJ0q2",
        type: "video",
      },
      {
        title: "Handling Form Submission In React (5 mins)",
        url: "https://youtu.be/falMPMOPMAk?si=oJsTTJ4krnKkbVwk",
        type: "video",
      },
      {
        title: "useReducer Hook In React (15 mins)",
        url: "https://youtu.be/bJlXMbMPIFY?si=VG58JW6vkdY58vYy",
        type: "video",
      },
      {
        title: "React Router Part 5 Dynamic Routes (7 mins)",
        url: "https://youtu.be/EJVHAgmdzRY?si=7NoKlN6csxlPfeYk",
        type: "video",
      },
      {
        title: "React Router Part 6 useNavigate Hook In React (8 mins)",
        url: "https://youtu.be/EJVHAgmdzRY?si=7NoKlN6csxlPfeYk",
        type: "video",
      },
      {
        title: "Creating Custom Hooks In React (7mins)",
        url: "https://youtu.be/LJYZY0Hhrr4?si=0APyvJ_a13575-P2",
        type: "video",
      },
    ],
  },
];
