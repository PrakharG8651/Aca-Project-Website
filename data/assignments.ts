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
      "The oops concepts used are very important for upcoming parts.",
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
            description:
              "Accept name (string) and scores (number[]). Store as properties.",
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
            description:
              "Return A/B/C/D/F based on average. Document your scale in a comment.",
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
            description:
              "Name from argv[2], scores from argv[3+]. Convert to numbers.",
            concepts_used: ["process.argv", "type conversion"],
          },
          {
            id: "P2b",
            title: "Validate",
            description:
              "Less than 3 scores → error message + process.exit(1).",
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
            description:
              "Print name, scores, average (1 decimal), grade, high/low. Template literals only.",
            concepts_used: ["template literals", "toFixed()"],
            restriction: "No string concatenation with +.",
          },
          {
            id: "P3b",
            title: "Pass/fail + remark",
            description:
              "Ternary for PASS/FAIL (≥60). Switch-based getRemark(grade) function.",
            concepts_used: ["ternary", "switch"],
          },
          {
            id: "P3c",
            title: "Score breakdown",
            description:
              "Destructure into score1, score2, ...remaining. Display separately.",
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
      format:
        "Research how github works and git workflow, the 15 video in resource section is enough.",
      include_in_submission: [
        "Repo should be named 'assignmentFULLSTACK'.",
        "Make a folder 'assignment1', write all the code there and then push it to github.",
        "Make sure to use .gitignore.",
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
    deadline: "2026-06-13",

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
            description:
              "Async function. Load image with Jimp.read(). Extract bitmap.data, bitmap.width, bitmap.height.",
            concepts_used: ["async/await", "jimp"],
          },
          {
            id: "P1b",
            title: "Decode + return",
            description:
              "Pass pixel data to jsqr(). Throw Error('No QR code found') if result is null. Return result.data.",
            concepts_used: ["jsqr", "null check", "throw"],
          },
          {
            id: "P1c",
            title: "Standalone test",
            description:
              "Guard with if (require.main === module). Call decodeQR() on a local test image and log the output.",
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
            description:
              "Paste your raw IITK ID card QR string as a comment at the top of the file. Identify where the roll number is. This is mandatory.",
            concepts_used: ["research"],
          },
          {
            id: "P2b",
            title: "extractRollNumber(qrString)",
            description:
              "Regex-match all 6-digit sequences in the string. Return the first match as a string, or null if none found. No range logic here — that's isRegistered's job.",
            concepts_used: ["regex", "String.match()"],
          },
          {
            id: "P2c",
            title: "isRegistered(rollNumber)",
            description:
              "Return true if Number(rollNumber) is between 240001 and 240400 inclusive.",
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
            description:
              "On require, read attendance.json with try/catch. Start with {} if file doesn't exist.",
            concepts_used: ["fs.readFileSync", "try/catch", "module scope"],
          },
          {
            id: "P3b",
            title: "markPresent(rollNumber)",
            description:
              "If already in store: return { success: false, reason: 'already_marked', timestamp }. If not: add entry with new Date().toISOString(), write to disk, return { success: true }.",
            concepts_used: ["object lookup", "Date", "fs.writeFileSync"],
          },
          {
            id: "P3c",
            title: "getStats()",
            description:
              "Return { total, rollNumbers: sorted array }. Use Object.keys() and Array.sort().",
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
            description:
              "require('dotenv').config() on line 1. Init bot in polling mode. Handle /start.",
            concepts_used: ["dotenv", "node-telegram-bot-api", "polling"],
          },
          {
            id: "P4b",
            title: "Photo handler",
            description:
              "bot.on('photo'): take last item in msg.photo (highest res), download it, run decodeQR → extractRollNumber → isRegistered → markPresent. Reply with result.",
            concepts_used: ["bot.on()", "async/await", "module composition"],
          },
          {
            id: "P4c",
            title: "Error handling",
            description:
              "try/catch around the entire photo handler. Distinct reply for each case: no QR, no roll number, out of range, already marked (show original timestamp).",
            concepts_used: ["try/catch", "conditional replies"],
          },
          {
            id: "P4d",
            title: "/report",
            description:
              "bot.onText() for /report. Reply with getStats() output — total count + roll number list.",
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
      required_files: [
        "bot.js",
        "qr.js",
        "parser.js",
        "attendance.js",
        ".env.example",
        "package.json",
        "README.md",
      ],
      bonus_files: [
        "bot.js",
        "qr.js",
        "parser.js",
        "attendance.js",
        ".env.example",
        "package.json",
        "README.md",
      ],
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
];
