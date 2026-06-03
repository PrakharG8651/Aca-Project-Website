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
    "Learning DOM to manipulate html and css"
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
    status: "active",
    topics: ["Asynchronous Js", "Async/Await", "Fetch", "API", "ES6+ Syntax"],
    assignmentCount: 3,
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
  // {
  //   id: "week-3",
  //   week: 3,
  //   title: "Advanced CSS & Responsive Design",
  //   description:
  //     "Level up your styling skills. Master CSS Grid, responsive design patterns, animations, and build a design system mindset that scales.",
  //   status: "locked",
  //   topics: ["CSS Grid", "Media Queries", "CSS Variables", "Animations & Transitions", "Mobile-First Design", "Design Systems"],
  //   assignmentCount: 2,
  //   goal: "Build responsive, polished UIs that work across all screen sizes.",
  //   learningOutcomes: [
  //     "Create two-dimensional layouts with CSS Grid",
  //     "Implement responsive designs using media queries and fluid units",
  //     "Define and use CSS custom properties (variables) for theming",
  //     "Add meaningful animations and transitions to UI elements",
  //     "Apply mobile-first design methodology",
  //     "Structure CSS with a component-based design system approach",
  //   ],
  //   timeRequired: "10–12 hours",
  //   resources: [
  //     {
  //       title: "CSS Tricks — A Complete Guide to CSS Grid",
  //       url: "https://css-tricks.com/snippets/css/complete-guide-grid/",
  //       type: "article",
  //     },
  //     {
  //       title: "web.dev — Learn Responsive Design",
  //       url: "https://web.dev/learn/design/",
  //       type: "article",
  //     },
  //     {
  //       title: "MDN — Using CSS Animations",
  //       url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations",
  //       type: "documentation",
  //     },
  //     {
  //       title: "Kevin Powell — CSS Grid Tutorial",
  //       url: "https://www.youtube.com/watch?v=rg7Fvvl3taU",
  //       type: "video",
  //     },
  //   ],
  // },
  // {
  //   id: "week-4",
  //   week: 4,
  //   title: "TypeScript & Modern Tooling",
  //   description:
  //     "Write type-safe code and understand the modern JavaScript ecosystem. Learn TypeScript, npm, bundlers, linting, and the tools that power professional workflows.",
  //   status: "locked",
  //   topics: ["TypeScript Basics", "Interfaces & Types", "Generics", "npm & Package Management", "ESLint & Prettier", "Vite / Bundlers"],
  //   assignmentCount: 2,
  //   goal: "Write type-safe TypeScript and configure a professional dev environment.",
  //   learningOutcomes: [
  //     "Annotate variables, functions, and objects with TypeScript types",
  //     "Define interfaces and type aliases for data structures",
  //     "Use generics for reusable, type-safe functions and components",
  //     "Manage dependencies with npm and understand package.json",
  //     "Configure ESLint and Prettier for consistent code quality",
  //     "Understand module bundling and dev server tooling (Vite)",
  //   ],
  //   timeRequired: "12–15 hours",
  //   resources: [
  //     {
  //       title: "TypeScript Handbook",
  //       url: "https://www.typescriptlang.org/docs/handbook/",
  //       type: "documentation",
  //     },
  //     {
  //       title: "Total TypeScript — Beginner's Tutorial",
  //       url: "https://www.totaltypescript.com/tutorials/beginners-typescript",
  //       type: "exercise",
  //     },
  //     {
  //       title: "Fireship — TypeScript in 100 Seconds",
  //       url: "https://www.youtube.com/watch?v=zQnBQ4tB3ZA",
  //       type: "video",
  //     },
  //     {
  //       title: "Vite — Getting Started",
  //       url: "https://vite.dev/guide/",
  //       type: "documentation",
  //     },
  //   ],
  // },
  // {
  //   id: "week-5",
  //   week: 5,
  //   title: "React Fundamentals",
  //   description:
  //     "Learn component-based UI development with React. Build reusable components, manage state with hooks, and understand the React rendering model.",
  //   status: "locked",
  //   topics: ["JSX", "Components & Props", "useState & useEffect", "Conditional Rendering", "Lists & Keys", "Forms in React"],
  //   assignmentCount: 3,
  //   goal: "Build interactive, component-based UIs with React and hooks.",
  //   learningOutcomes: [
  //     "Write JSX and understand how it compiles to JavaScript",
  //     "Create functional components with props for data flow",
  //     "Manage local state with useState and side effects with useEffect",
  //     "Render lists with proper key usage",
  //     "Handle forms with controlled components",
  //     "Compose complex UIs from small, reusable components",
  //   ],
  //   timeRequired: "15–18 hours",
  //   resources: [
  //     {
  //       title: "react.dev — Learn React",
  //       url: "https://react.dev/learn",
  //       type: "documentation",
  //     },
  //     {
  //       title: "react.dev — Thinking in React",
  //       url: "https://react.dev/learn/thinking-in-react",
  //       type: "article",
  //     },
  //     {
  //       title: "React Tutorial for Beginners — Programming with Mosh",
  //       url: "https://www.youtube.com/watch?v=SqcY0GlETPk",
  //       type: "video",
  //     },
  //     {
  //       title: "React Hooks Cheatsheet",
  //       url: "https://react.dev/reference/react/hooks",
  //       type: "documentation",
  //     },
  //   ],
  // },
  // {
  //   id: "week-6",
  //   week: 6,
  //   title: "Next.js & Full-Stack Foundations",
  //   description:
  //     "Move to full-stack with Next.js. Learn file-based routing, server components, data fetching, API routes, and how to build production-ready applications.",
  //   status: "locked",
  //   topics: ["App Router", "Server Components", "Client Components", "Data Fetching", "API Routes", "Metadata & SEO"],
  //   assignmentCount: 2,
  //   goal: "Build full-stack web applications with Next.js App Router.",
  //   learningOutcomes: [
  //     "Set up a Next.js project with the App Router",
  //     "Create pages and layouts using file-system routing",
  //     "Understand the difference between server and client components",
  //     "Fetch data on the server and pass it to client components",
  //     "Build API endpoints with Route Handlers",
  //     "Configure metadata for SEO and social sharing",
  //   ],
  //   timeRequired: "15–18 hours",
  //   resources: [
  //     {
  //       title: "Next.js Documentation",
  //       url: "https://nextjs.org/docs",
  //       type: "documentation",
  //     },
  //     {
  //       title: "Next.js Learn Course",
  //       url: "https://nextjs.org/learn",
  //       type: "exercise",
  //     },
  //     {
  //       title: "Vercel — Understanding Server Components",
  //       url: "https://vercel.com/blog/understanding-react-server-components",
  //       type: "article",
  //     },
  //     {
  //       title: "Lee Robinson — Next.js App Router",
  //       url: "https://www.youtube.com/watch?v=DrxiNfbr63s",
  //       type: "video",
  //     },
  //   ],
  // },
  // {
  //   id: "week-7",
  //   week: 7,
  //   title: "Databases & Backend",
  //   description:
  //     "Design and interact with relational databases. Learn SQL fundamentals, PostgreSQL, and use Prisma ORM to model data and build backend APIs.",
  //   status: "locked",
  //   topics: ["SQL Fundamentals", "PostgreSQL", "Prisma ORM", "Data Modeling", "Migrations", "CRUD Operations"],
  //   assignmentCount: 3,
  //   goal: "Design database schemas and build data-driven backend APIs.",
  //   learningOutcomes: [
  //     "Write SQL queries: SELECT, INSERT, UPDATE, DELETE, JOINs",
  //     "Set up and interact with PostgreSQL databases",
  //     "Define data models and relationships using Prisma schema",
  //     "Run database migrations to evolve your schema",
  //     "Build CRUD API endpoints backed by a real database",
  //     "Understand indexing, constraints, and data integrity",
  //   ],
  //   timeRequired: "12–15 hours",
  //   resources: [
  //     {
  //       title: "SQLBolt — Learn SQL Interactively",
  //       url: "https://sqlbolt.com/",
  //       type: "exercise",
  //     },
  //     {
  //       title: "Prisma Documentation",
  //       url: "https://www.prisma.io/docs",
  //       type: "documentation",
  //     },
  //     {
  //       title: "PostgreSQL Tutorial",
  //       url: "https://www.postgresqltutorial.com/",
  //       type: "article",
  //     },
  //     {
  //       title: "Fireship — SQL Explained in 100 Seconds",
  //       url: "https://www.youtube.com/watch?v=zsjvFFKOm3c",
  //       type: "video",
  //     },
  //   ],
  // },
  // {
  //   id: "week-8",
  //   week: 8,
  //   title: "Authentication & Security",
  //   description:
  //     "Secure your applications. Implement authentication flows, understand JWT and session-based auth, protect API routes, and follow security best practices.",
  //   status: "locked",
  //   topics: ["Auth Patterns", "JWT Tokens", "Session Management", "OAuth / Social Login", "Input Validation", "Security Headers"],
  //   assignmentCount: 2,
  //   goal: "Implement secure authentication and protect your applications.",
  //   learningOutcomes: [
  //     "Implement email/password authentication with hashing",
  //     "Understand JWT structure, signing, and verification",
  //     "Manage user sessions securely with httpOnly cookies",
  //     "Integrate OAuth providers (Google, GitHub)",
  //     "Protect API routes with middleware and role-based access",
  //     "Apply security best practices: CORS, CSRF, XSS prevention",
  //   ],
  //   timeRequired: "10–12 hours",
  //   resources: [
  //     {
  //       title: "Auth.js (NextAuth) Documentation",
  //       url: "https://authjs.dev/",
  //       type: "documentation",
  //     },
  //     {
  //       title: "OWASP — Web Security Basics",
  //       url: "https://owasp.org/www-project-web-security-testing-guide/",
  //       type: "article",
  //     },
  //     {
  //       title: "JWT.io — Introduction to JWTs",
  //       url: "https://jwt.io/introduction",
  //       type: "article",
  //     },
  //     {
  //       title: "Theo — Authentication on the Web",
  //       url: "https://www.youtube.com/watch?v=mL8EuL7jSbg",
  //       type: "video",
  //     },
  //   ],
  // },
  // {
  //   id: "week-9",
  //   week: 9,
  //   title: "Real-time & Advanced Patterns",
  //   description:
  //     "Build real-time features and learn advanced architectural patterns. WebSockets, state management, caching strategies, and testing your code.",
  //   status: "locked",
  //   topics: ["WebSockets", "Socket.IO", "State Management", "Caching", "Testing (Vitest)", "Performance Optimization"],
  //   assignmentCount: 3,
  //   goal: "Build real-time features and write tested, production-quality code.",
  //   learningOutcomes: [
  //     "Establish WebSocket connections for real-time communication",
  //     "Build real-time features with Socket.IO (chat, live updates)",
  //     "Implement client-side state management patterns",
  //     "Apply caching strategies for performance (Redis, HTTP caching)",
  //     "Write unit and integration tests with Vitest",
  //     "Profile and optimize frontend and backend performance",
  //   ],
  //   timeRequired: "15–18 hours",
  //   resources: [
  //     {
  //       title: "Socket.IO Documentation",
  //       url: "https://socket.io/docs/v4/",
  //       type: "documentation",
  //     },
  //     {
  //       title: "MDN — WebSockets API",
  //       url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
  //       type: "documentation",
  //     },
  //     {
  //       title: "Vitest — Getting Started",
  //       url: "https://vitest.dev/guide/",
  //       type: "documentation",
  //     },
  //     {
  //       title: "Redis University — Introduction to Redis",
  //       url: "https://university.redis.io/",
  //       type: "exercise",
  //     },
  //   ],
  // },
  // {
  //   id: "week-10",
  //   week: 10,
  //   title: "Deployment & Production",
  //   description:
  //     "Ship it. Learn CI/CD pipelines, Docker containerization, monitoring, logging, and everything needed to deploy and maintain production applications.",
  //   status: "locked",
  //   topics: ["Docker", "CI/CD Pipelines", "Vercel / Cloud Deploy", "Environment Variables", "Monitoring & Logging", "DNS & Domains"],
  //   assignmentCount: 2,
  //   goal: "Deploy production-grade applications with CI/CD and monitoring.",
  //   learningOutcomes: [
  //     "Containerize applications with Docker and Docker Compose",
  //     "Set up CI/CD pipelines with GitHub Actions",
  //     "Deploy to Vercel, Railway, or similar cloud platforms",
  //     "Manage environment variables and secrets securely",
  //     "Set up error tracking, logging, and uptime monitoring",
  //     "Configure custom domains, SSL, and DNS records",
  //   ],
  //   timeRequired: "12–15 hours",
  //   resources: [
  //     {
  //       title: "Docker — Getting Started Guide",
  //       url: "https://docs.docker.com/get-started/",
  //       type: "documentation",
  //     },
  //     {
  //       title: "GitHub Actions Documentation",
  //       url: "https://docs.github.com/en/actions",
  //       type: "documentation",
  //     },
  //     {
  //       title: "Vercel — Deploying Next.js",
  //       url: "https://vercel.com/docs/frameworks/nextjs",
  //       type: "article",
  //     },
  //     {
  //       title: "Fireship — Docker in 100 Seconds",
  //       url: "https://www.youtube.com/watch?v=Gjnup-PuquQ",
  //       type: "video",
  //     },
  //   ],
  // },
];
