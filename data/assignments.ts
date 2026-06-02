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
        "make a folder inside it github 'assignment1', write all the code there. "
      ],
      do_not_submit: ["node_modules"],
    },
  },
];
