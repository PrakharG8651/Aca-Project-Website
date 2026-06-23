import type { Assignment } from "@/types";

export const assignments: Assignment[] = [
  {
    id: "JS-A1",
    title: "Student Report Card System",
    course: "JavaScript Fundamentals",
    runtime: "Node.js",
    difficulty: "medium-hard",
    estimated_time: "3–5 hours",
    deadline: "2026-06-01",
    problem_statement:
      "Build a CLI program that takes a student name + exam scores as arguments, processes them through a Student class, and prints a formatted report card.",
    learning_objectives: [
      "Before anything watch the node js lectures explained in week 1 and week 2.",
      "Do the research first before writing a line of code.",
      "Syntax of Js and enough understanding for later.",
      "How to take input and output.",
      "Self-research: process.argv",
    ],
    approach: [
      "Research process.argv",
      "Build the Student class first (P1), try to test it with hardcoded data",
      "Wire up argv parsing (P2), here you take arguments with the terminal",
      "Add input validation, exit early if less than 3 scores",
      "Build the formatted output (P3), template literals only",
      "The oops concepts used are very important for upcoming parts."
    ],
    self_research: {
      required: [
        {
          topic: "process.argv",
          why: "How Node.js reads command-line arguments.",
          hint: "Your data starts at argv[2]. Search 'Node.js process.argv'.",
        },
        {
          topic: "process.exit()",
          why: "Terminate early on bad input.",
          hint: "Exit code 0 = success, 1 = error.",
        },
        {
          topic: "String → Number conversion",
          why: "argv values are always strings.",
          hint: "Use Number(), parseInt(), or parseFloat().",
        },
      ],
      bonus: [
        {
          topic: "fs.readFileSync",
          why: "Read a JSON file from disk for multi-student mode.",
          hint: "Pass 'utf8' as the encoding option.",
        },
      ],
    },
    parts: [
      {
        id: "P1",
        title: "Student class",
        difficulty: "medium",
        subparts: [
          {
            id: "P1a",
            title: "Constructor",
            description: "Accept name (string) and scores (number[]). Store as properties.",
            concepts_used: ["class", "constructor"],
          },
          {
            id: "P1b",
            title: "get average",
            description: "Return the mean of all scores using a loop.",
            concepts_used: ["getters", "loops"],
          },
          {
            id: "P1c",
            title: "get letterGrade",
            description: "Return A/B/C/D/F based on average. Document your scale in a comment.",
            concepts_used: ["getters", "if-else"],
          },
          {
            id: "P1d",
            title: "summary()",
            description: "Return { highest, lowest } — find them with a loop.",
            concepts_used: ["methods", "loops"],
            restriction: "No Math.max/min. Write the logic yourself.",
          },
        ],
      },
      {
        id: "P2",
        title: "CLI input",
        difficulty: "medium",
        subparts: [
          {
            id: "P2a",
            title: "Parse argv",
            description: "Name from argv[2], scores from argv[3+]. Convert to numbers.",
            concepts_used: ["process.argv", "type conversion"],
          },
          {
            id: "P2b",
            title: "Validate",
            description: "Less than 3 scores → error message + process.exit(1).",
            concepts_used: ["if statements", "process.exit"],
          },
        ],
      },
      {
        id: "P3",
        title: "Formatted output",
        difficulty: "medium-hard",
        subparts: [
          {
            id: "P3a",
            title: "Report card",
            description: "Print name, scores, average (1 decimal), grade, high/low. Template literals only.",
            concepts_used: ["template literals", "toFixed()"],
            restriction: "No string concatenation with +.",
          },
          {
            id: "P3b",
            title: "Pass/fail + remark",
            description: "Ternary for PASS/FAIL (≥60). Switch-based getRemark(grade) function.",
            concepts_used: ["ternary", "switch"],
          },
          {
            id: "P3c",
            title: "Score breakdown",
            description: "Destructure into score1, score2, ...remaining. Display separately.",
            concepts_used: ["destructuring", "rest syntax"],
          },
        ],
      },
      {
        id: "BONUS",
        title: "Multi-student mode",
        difficulty: "challenge",
        optional: true,
        description:
          "Read a .json file via fs.readFileSync. Print report cards for all students + identify the top performer.",
        concepts_used: ["fs module", "JSON.parse", "loops"],
      },
    ],
    deliverables: {
      required_files: ["reportCard.js"],
      bonus_files: ["reportCard.js", "students.json"],
      run_command: 'node reportCard.js "StudentName" 85 90 78',
      minimum_scores_required: 3,
    },
    submission: {
      format: "Research how github works and git workflow, the 15 video in resource section is enough.",
      include_in_submission: [
        "Repo should be named 'assignmentFULLSTACK'.",
        "Make a folder 'assignment1', write all the code there and then push it to github.",
        "Make sure to use .gitignore."
      ],
      do_not_submit: ["node_modules (use .gitignore)"],
    },
  },
  {
  id: "JS-A2",
  title: "QR Code Attendance System",
  course: "JavaScript Fundamentals",
  runtime: "Node.js",
  difficulty: "hard",
  estimated_time: "6–10 hours",
  deadline: "2026-06-16",

  problem_statement:
    "Build a Telegram bot for QR-based attendance. A volunteer sends a photo of a student's IITK ID card. The bot decodes the QR, extracts the roll number, checks it's in the registered range (240001–240400), marks the student present in a JSON store, and handles duplicates. A /report command returns current stats.",

  learning_objectives: [
    "First: scan your own IITK ID card with any QR app. Find your roll number in the raw string. Understand your input before writing a parser.",
    "Multi-file project structure — one responsibility per module.",
    "Environment variables — bot token never goes in source code.",
    "How jimp + jsqr work together: jimp gives pixels, jsqr reads them.",
    "File-based persistence with fs + JSON.",
  ],

  approach: [
    "Scan your ID card. Paste the raw QR string. Find your roll number in it.",
    "Build qr.js and test it on a local image. Don't touch the bot yet.",
    "Build parser.js. Test extractRollNumber() with hardcoded strings.",
    "Build attendance.js. Test markPresent() with hardcoded roll numbers.",
    "Wire bot.js last. Bot is I/O only — logic stays in modules.",
  ],

  self_research: {
    required: [
      {
        topic: "BotFather + node-telegram-bot-api",
        why: "Creates your bot token and connects Node.js to the Telegram API.",
        hint: "@BotFather → /newbot → copy token. Use polling mode.",
      },
      {
        topic: "dotenv",
        why: "Loads BOT_TOKEN from .env so it stays out of your code.",
        hint: "require('dotenv').config() must be line 1 of bot.js.",
      },
      {
        topic: "jimp",
        why: "Reads an image and gives you raw pixel data for jsqr.",
        hint: "Jimp.read(path) → image.bitmap.{ data, width, height }.",
      },
      {
        topic: "jsqr",
        why: "Decodes a QR code from raw pixel data.",
        hint: "jsqr(data, width, height) returns null or { data: string }.",
      },
      {
        topic: "fs.readFileSync / fs.writeFileSync",
        why: "Read and write your attendance.json store.",
        hint: "JSON.parse(fs.readFileSync('attendance.json', 'utf8')).",
      },
      {
        topic: "bot.downloadFile()",
        why: "Telegram sends a file_id, not the image. You have to download it.",
        hint: "bot.downloadFile(file_id, './temp') resolves to a local file path.",
      },
    ],
    bonus: [
      {
        topic: "CSV export",
        why: "For the /export command.",
        hint: "rows.map(r => r.join(',')).join('\\n'). Send with bot.sendDocument().",
      },
      {
        topic: "os.tmpdir()",
        why: "Better place for temp images than a hardcoded ./temp folder.",
        hint: "path.join(os.tmpdir(), file_id + '.jpg')",
      },
    ],
  },

  parts: [
    {
      id: "P1",
      title: "QR Decoder (qr.js)",
      difficulty: "medium-hard",
      subparts: [
        {
          id: "P1a",
          title: "decodeQR(imagePath)",
          description: "Async function. Load image with Jimp.read(). Extract bitmap.data, bitmap.width, bitmap.height.",
          concepts_used: ["async/await", "jimp"],
        },
        {
          id: "P1b",
          title: "Decode + return",
          description: "Pass pixel data to jsqr(). Throw Error('No QR code found') if result is null. Return result.data.",
          concepts_used: ["jsqr", "null check", "throw"],
        },
        {
          id: "P1c",
          title: "Standalone test",
          description: "Guard with if (require.main === module). Call decodeQR() on a local test image and log the output.",
          concepts_used: ["require.main === module"],
        },
      ],
    },
    {
      id: "P2",
      title: "Roll number parser (parser.js)",
      difficulty: "medium",
      subparts: [
        {
          id: "P2a",
          title: "Document your QR string",
          description: "Paste your raw IITK ID card QR string as a comment at the top of the file. Identify where the roll number is. This is mandatory.",
          concepts_used: ["research"],
        },
        {
          id: "P2b",
          title: "extractRollNumber(qrString)",
          description: "Regex-match all 6-digit sequences. Return the first one in 240001–240400 as a string, or null.",
          concepts_used: ["regex", "String.match()", "Array.find()"],
        },
        {
          id: "P2c",
          title: "isRegistered(rollNumber)",
          description: "Return true if Number(rollNumber) is between 240001 and 240400 inclusive.",
          concepts_used: ["Number()", "range check"],
        },
      ],
    },
    {
      id: "P3",
      title: "Attendance store (attendance.js)",
      difficulty: "medium",
      subparts: [
        {
          id: "P3a",
          title: "Init store",
          description: "On require, read attendance.json with try/catch. Start with {} if file doesn't exist.",
          concepts_used: ["fs.readFileSync", "try/catch", "module scope"],
        },
        {
          id: "P3b",
          title: "markPresent(rollNumber)",
          description: "If already in store: return { success: false, reason: 'already_marked', timestamp }. If not: add entry with new Date().toISOString(), write to disk, return { success: true }.",
          concepts_used: ["object lookup", "Date", "fs.writeFileSync"],
        },
        {
          id: "P3c",
          title: "getStats()",
          description: "Return { total, rollNumbers: sorted array }. Use Object.keys() and Array.sort().",
          concepts_used: ["Object.keys()", "Array.sort()"],
        },
      ],
    },
    {
      id: "P4",
      title: "Telegram bot (bot.js)",
      difficulty: "hard",
      subparts: [
        {
          id: "P4a",
          title: "Setup",
          description: "require('dotenv').config() on line 1. Init bot in polling mode. Handle /start.",
          concepts_used: ["dotenv", "node-telegram-bot-api", "polling"],
        },
        {
          id: "P4b",
          title: "Photo handler",
          description: "bot.on('photo'): take last item in msg.photo (highest res), download it, run decodeQR → extractRollNumber → isRegistered → markPresent. Reply with result.",
          concepts_used: ["bot.on()", "async/await", "module composition"],
        },
        {
          id: "P4c",
          title: "Error handling",
          description: "try/catch around the entire photo handler. Distinct reply for each case: no QR, no roll number, out of range, already marked (show original timestamp).",
          concepts_used: ["try/catch", "conditional replies"],
        },
        {
          id: "P4d",
          title: "/report",
          description: "bot.onText() for /report. Reply with getStats() output — total count + roll number list.",
          concepts_used: ["bot.onText()", "template literals"],
        },
      ],
    },
    {
      id: "BONUS",
      title: "CSV Export via /export",
      difficulty: "challenge",
      optional: true,
      description:
        "Build a CSV (RollNumber,Timestamp) from the store. Write to temp file, send with bot.sendDocument(). No library — build the string manually.",
      concepts_used: ["Array.map()", "Array.join()", "bot.sendDocument()"],
    },
  ],

  deliverables: {
    required_files: ["bot.js", "qr.js", "parser.js", "attendance.js", ".env.example", "package.json", "README.md"],
    bonus_files: ["bot.js", "qr.js", "parser.js", "attendance.js", ".env.example", "package.json", "README.md"],
    run_command: "node bot.js",
    minimum_scores_required: 0,
  },

  submission: {
    format: "Same 'assignmentFULLSTACK' repo. Same git workflow as A1.",
    include_in_submission: [
      "Folder named 'assignment2' inside 'assignmentFULLSTACK'.",
      ".env.example with BOT_TOKEN=your_token_here.",
      "README.md: what it does, how to set up .env, how to run.",
      "The raw QR string comment in parser.js is mandatory.",
    ],
    do_not_submit: ["node_modules", ".env", "attendance.json"],
  },
  },
  {
    id: "REACT-A2",
    title: "Cipher MVP — Tasks, Goals, Focus & Mood Board",
    course: "React Fundamentals",
    runtime: "React (Vite)",
    difficulty: "hard",
    estimated_time: "16–22 hours",
    deadline: "2026-06-30",

    problem_statement:
      "Build the real Cipher front end — not a demo, something you'll actually open every day. Persists across refreshes. Tasks support subtasks and optional deadlines. Goals track progress. Focus mode runs a real countdown, optionally tied to a task. Mood board is a freeform grid. No backend yet — everything lives in localStorage.",

    learning_objectives: [
      "Before anything: finish the React basics videos — JSX, components, props, state.",
      "useState + a custom localStorage hook. No Context, no Redux.",
      "Derived state — grouping tasks by date happens at render time from raw data, it isn't stored as a separate 'group' field.",
      "Self-research: useEffect for both the timer and for syncing state to localStorage.",
      "Self-research: flat relational state (parentId references) instead of nested objects — this is how the Postgres schema will look later, so the shape should match now.",
    ],

    approach: [
      "Sketch the component tree and the full state shape (tasks, subtasks, goals, moodItems, activeSection) before writing any code.",
      "Build the useLocalStorage hook first, test it standalone with a dummy value before using it anywhere real.",
      "Build TaskBoard with hardcoded data, no persistence, no grouping — just render a flat list. Confirm it renders before adding behavior.",
      "Add quick-add (title only), then grouping (Overdue/Today/Upcoming/No date), then the date picker, then inline edit, then subtasks. One layer at a time — don't build all of P1 in one sitting.",
      "GoalTracker and MoodBoard next, they're simpler than TaskBoard.",
      "FocusTimer last. Isolate the countdown in a custom hook (useTimer) so the component itself is just UI.",
      "Wire localStorage into each piece only after it works in memory. Persistence bugs are easier to find when the underlying logic already works.",
    ],

    self_research: {
      required: [
        {
          topic: "useState + derived values",
          why: "Task groups (Overdue/Today/Upcoming) aren't stored — they're computed from dueDate every render.",
          hint: "Write a pure function groupTasks(tasks) that returns { overdue, today, upcoming, noDate }. Call it during render, don't store its output in state.",
        },
        {
          topic: "Flat relational state",
          why: "Subtasks reference a parentId instead of living nested inside their parent task.",
          hint: "subtasks.filter(s => s.parentId === task.id) at render time. Don't nest arrays inside task objects.",
        },
        {
          topic: "Controlled inputs + date input",
          why: "Quick-add is title-only; the date picker is a secondary, optional action.",
          hint: "<input type='date'> gives you an ISO string for free — no date library needed yet.",
        },
        {
          topic: "useEffect + setInterval",
          why: "Focus timer ticks every second.",
          hint: "Clear the interval in the cleanup function or it leaks on unmount/re-render.",
        },
        {
          topic: "useEffect + localStorage sync",
          why: "Every section needs to survive a refresh.",
          hint: "One effect per piece of state: read on mount (lazy initializer), write on every change.",
        },
        {
          topic: "CSS transitions for completion",
          why: "Completing a task should fade it out before it moves to the Completed section, not vanish instantly.",
          hint: "transition: opacity 400ms + a timeout before actually removing it from the visible group.",
        },
      ],
      bonus: [
        {
          topic: "Linking focus sessions to tasks",
          why: "'Focus on: <task>' makes the timer actually useful instead of generic.",
          hint: "A dropdown of incomplete tasks; selected task id stored alongside the timer state.",
        },
      ],
    },

    parts: [
      {
        id: "P0",
        title: "Persistence layer",
        difficulty: "medium",
        subparts: [
          {
            id: "P0a",
            title: "useLocalStorage hook",
            description: "Generic hook: useLocalStorage(key, defaultValue) → [value, setValue], synced to localStorage on every change.",
            concepts_used: ["custom hooks", "useEffect", "lazy state initializer"],
          },
          {
            id: "P0b",
            title: "Standalone test",
            description: "Use it for one dummy value, confirm it survives a hard refresh, before touching real features.",
            concepts_used: ["manual testing"],
          },
        ],
      },
      {
        id: "P1",
        title: "TaskBoard",
        difficulty: "hard",
        subparts: [
          {
            id: "P1a",
            title: "Quick add",
            description: "Single input. Enter adds a task with just a title — no date required.",
            concepts_used: ["controlled inputs", "useState"],
          },
          {
            id: "P1b",
            title: "Grouping",
            description: "groupTasks(tasks) returns Overdue / Today / Upcoming / No date. Computed at render, not stored.",
            concepts_used: ["derived state", "Date comparison"],
          },
          {
            id: "P1c",
            title: "Date picker",
            description: "Calendar icon opens a quick-picker: Today / Tomorrow / This week / Custom. Not a raw date input as the default UI.",
            concepts_used: ["conditional rendering", "controlled date input"],
          },
          {
            id: "P1d",
            title: "Inline edit",
            description: "Click title → editable text field. Click date pill → reopens the quick-picker.",
            concepts_used: ["conditional rendering", "focus management"],
          },
          {
            id: "P1e",
            title: "Complete with fade",
            description: "Checkbox click strikes through the title, fades over ~400ms, then the item moves to a collapsed Completed section.",
            concepts_used: ["CSS transitions", "setTimeout coordination with state"],
          },
          {
            id: "P1f",
            title: "Subtasks",
            description: "Flat subtasks array with parentId. Add/toggle/delete per parent. Progress badge (e.g. '2/5') on the parent task.",
            concepts_used: ["flat relational state", "array filter", "derived counts"],
            restriction: "Subtasks must NOT be nested inside task objects.",
          },
          {
            id: "P1g",
            title: "Delete",
            description: "Removes a task and cascades — its subtasks get removed too.",
            concepts_used: ["array filter", "cascading delete logic"],
          },
        ],
      },
      {
        id: "P2",
        title: "GoalTracker",
        difficulty: "medium",
        subparts: [
          {
            id: "P2a",
            title: "GoalCard",
            description: "Title, optional target date, progress bar.",
            concepts_used: ["JSX", "conditional styling"],
          },
          {
            id: "P2b",
            title: "Add + edit goal",
            description: "Add via controlled input. Click title to edit inline, same pattern as tasks.",
            concepts_used: ["controlled inputs", "conditional rendering"],
          },
          {
            id: "P2c",
            title: "Update progress",
            description: "+/- buttons, clamped 0–100.",
            concepts_used: ["state updates", "clamping"],
          },
        ],
      },
      {
        id: "P3",
        title: "FocusTimer",
        difficulty: "hard",
        subparts: [
          {
            id: "P3a",
            title: "useTimer hook",
            description: "Custom hook encapsulating countdown logic — seconds remaining, isRunning, start/pause/reset.",
            concepts_used: ["custom hooks", "useEffect", "setInterval", "cleanup"],
          },
          {
            id: "P3b",
            title: "Display + controls",
            description: "mm:ss display, start/pause/reset buttons. Must not double-start the interval on repeated clicks.",
            concepts_used: ["derived formatting", "guard conditions"],
            restriction: "No external timer library.",
          },
        ],
      },
      {
        id: "P4",
        title: "MoodBoard",
        difficulty: "medium",
        subparts: [
          {
            id: "P4a",
            title: "Grid layout",
            description: "CSS grid rendering color/image items.",
            concepts_used: ["CSS grid", "list rendering"],
          },
          {
            id: "P4b",
            title: "Add + remove item",
            description: "Input takes a hex color or image URL. Click an item to remove it.",
            concepts_used: ["controlled inputs", "array filter"],
          },
        ],
      },
      {
        id: "P5",
        title: "Dashboard",
        difficulty: "medium",
        subparts: [
          {
            id: "P5a",
            title: "Navigation",
            description: "Sidebar or tabs. activeSection state, persisted via useLocalStorage so it remembers where you left off.",
            concepts_used: ["lifting state up", "localStorage"],
          },
          {
            id: "P5b",
            title: "Shared layout",
            description: "Consistent header/nav/content structure across all four sections.",
            concepts_used: ["component composition", "CSS layout"],
          },
        ],
      },
      {
        id: "BONUS",
        title: "Focus-on-task linking",
        difficulty: "challenge",
        optional: true,
        description: "Dropdown in FocusTimer to select an incomplete task. Shows 'Focusing on: <task title>' during the session.",
        concepts_used: ["cross-component state", "derived UI"],
      },
    ],

    deliverables: {
      required_files: [
        "src/App.jsx",
        "src/hooks/useLocalStorage.js",
        "src/hooks/useTimer.js",
        "src/components/Dashboard.jsx",
        "src/components/TaskBoard.jsx",
        "src/components/GoalTracker.jsx",
        "src/components/FocusTimer.jsx",
        "src/components/MoodBoard.jsx",
      ],
      bonus_files: [],
      run_command: "npm run dev",
      minimum_scores_required: 0,
    },

    submission: {
      format: "Same 'assignmentFULLSTACK' repo. Same git workflow as A1/A2.",
      include_in_submission: [
        "Folder named 'assignment4' inside 'assignmentFULLSTACK'.",
        "README.md: state shape diagram (tasks/subtasks/goals/moodItems), what's done vs bonus, known bugs.",
        "Must actually persist across a hard refresh — this is graded by closing and reopening the browser, not just reading code.",
      ],
      do_not_submit: ["node_modules (use .gitignore)"],
    },
  },
  {
id: "BACKEND-A1",
title: "Cipher Backend MVP — Auth, Tasks, Goals & PostgreSQL",
course: "Backend Development",
runtime: "Node.js + Express + PostgreSQL",
difficulty: "hard",
estimated_time: "20–30 hours",
deadline: "2026-07-15",

problem_statement:
"Build the backend for Cipher. Create a production-style Express API with PostgreSQL, Prisma ORM, JWT authentication, and CRUD endpoints for Tasks and Goals.",

learning_objectives: [
"Learn Express application structure.",
"Learn REST API fundamentals.",
"Learn PostgreSQL and Prisma.",
"Learn JWT authentication.",
"Learn middleware and validation.",
"Build a backend for the Cipher frontend."
],

approach: [
"Set up PostgreSQL using Docker.",
"Create the Prisma schema.",
"Build authentication first.",
"Protect routes using JWT middleware.",
"Implement Tasks CRUD.",
"Implement Goals CRUD.",
"Test endpoints using Postman."
],

self_research: {
required: [
{
topic: "Express Middleware",
why: "Authentication and validation depend on middleware.",
hint: "Research req, res and next."
},
{
topic: "JWT Authentication",
why: "Users should stay logged in.",
hint: "Research jsonwebtoken."
},
{
topic: "Prisma Schema",
why: "Database tables are generated from schema.prisma.",
hint: "Research Prisma relations."
},
{
topic: "bcrypt",
why: "Passwords should be hashed.",
hint: "Research hash and compare."
}
]
},

parts: [
{
id: "P0",
title: "Project Setup",
difficulty: "medium",
subparts: [
{
id: "P0a",
title: "Initialize Project",
description: "Create Express application with TypeScript.",
concepts_used: ["express", "typescript"]
},
{
id: "P0b",
title: "Docker Database",
description: "Run PostgreSQL inside Docker.",
concepts_used: ["docker", "postgres"]
},
{
id: "P0c",
title: "Prisma Setup",
description: "Initialize Prisma and connect to PostgreSQL.",
concepts_used: ["prisma", "orm"]
}
]
},


{
  id: "P1",
  title: "Database Design",
  difficulty: "medium-hard",
  subparts: [
    {
      id: "P1a",
      title: "User Model",
      description: "Create User model.",
      concepts_used: ["prisma models"]
    },
    {
      id: "P1b",
      title: "Task Model",
      description: "Create Task model.",
      concepts_used: ["relations"]
    },
    {
      id: "P1c",
      title: "Goal Model",
      description: "Create Goal model.",
      concepts_used: ["relations"]
    },
    {
      id: "P1d",
      title: "Relations",
      description: "Users own tasks and goals.",
      concepts_used: ["foreign keys"]
    }
  ]
},

{
  id: "P2",
  title: "Authentication",
  difficulty: "hard",
  subparts: [
    {
      id: "P2a",
      title: "Register",
      description: "Create registration endpoint.",
      concepts_used: ["express", "bcrypt"]
    },
    {
      id: "P2b",
      title: "Login",
      description: "Create login endpoint.",
      concepts_used: ["jwt"]
    },
    {
      id: "P2c",
      title: "Password Hashing",
      description: "Hash passwords before storing.",
      concepts_used: ["bcrypt"]
    },
    {
      id: "P2d",
      title: "JWT Generation",
      description: "Generate JWT tokens.",
      concepts_used: ["jwt"]
    },
    {
      id: "P2e",
      title: "Protected Route",
      description: "Create GET /api/auth/me.",
      concepts_used: ["middleware"]
    }
  ]
},

{
  id: "P3",
  title: "Tasks API",
  difficulty: "hard",
  subparts: [
    {
      id: "P3a",
      title: "Create Task",
      description: "POST /api/tasks",
      concepts_used: ["crud"]
    },
    {
      id: "P3b",
      title: "Get Tasks",
      description: "GET /api/tasks",
      concepts_used: ["crud"]
    },
    {
      id: "P3c",
      title: "Update Task",
      description: "PATCH /api/tasks/:id",
      concepts_used: ["crud"]
    },
    {
      id: "P3d",
      title: "Delete Task",
      description: "DELETE /api/tasks/:id",
      concepts_used: ["crud"]
    }
  ]
},

{
  id: "P4",
  title: "Goals API",
  difficulty: "medium-hard",
  subparts: [
    {
      id: "P4a",
      title: "Create Goal",
      description: "POST /api/goals",
      concepts_used: ["crud"]
    },
    {
      id: "P4b",
      title: "Get Goals",
      description: "GET /api/goals",
      concepts_used: ["crud"]
    },
    {
      id: "P4c",
      title: "Update Goal",
      description: "PATCH /api/goals/:id",
      concepts_used: ["crud"]
    },
    {
      id: "P4d",
      title: "Delete Goal",
      description: "DELETE /api/goals/:id",
      concepts_used: ["crud"]
    }
  ]
},

{
  id: "P5",
  title: "Validation & Error Handling",
  difficulty: "medium",
  subparts: [
    {
      id: "P5a",
      title: "Input Validation",
      description: "Validate incoming requests.",
      concepts_used: ["zod"]
    },
    {
      id: "P5b",
      title: "Global Error Handler",
      description: "Centralize error handling.",
      concepts_used: ["middleware"]
    }
  ]
},

{
  id: "BONUS",
  title: "Focus Sessions",
  difficulty: "challenge",
  optional: true,
  description:
    "Store completed focus sessions and expose analytics endpoints.",
  concepts_used: ["postgres", "analytics"]
}


],

deliverables: {
required_files: [
"src/server.ts",
"src/routes/auth.ts",
"src/routes/tasks.ts",
"src/routes/goals.ts",
"src/middleware/auth.ts",
"prisma/schema.prisma",
"docker-compose.yml",
".env.example",
"README.md"
],
run_command: "npm run dev"
},

submission: {
format: "Folder named assignment5 inside assignmentFULLSTACK.",
include_in_submission: [
"Postman collection",
"Database schema diagram",
"README",
"API screenshots"
],
do_not_submit: [
"node_modules",
".env",
".next"
]
}
}


];
