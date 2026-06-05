export interface CohortMember {
  sno: number;
  name: string;
  rollNumber: string;
  registeredAt: string; // ISO date-time string
}

export const cohortMembers: CohortMember[] = [
  { sno: 1, name: "Shubham Rajak", rollNumber: "251046", registeredAt: "2026-05-24T12:01:30" },
  { sno: 2, name: "Srishti Gupta", rollNumber: "241043", registeredAt: "2026-05-24T12:04:24" },
  { sno: 3, name: "Sangita Kumari", rollNumber: "240930", registeredAt: "2026-05-24T12:05:40" },
  { sno: 4, name: "Shivanshu Jaiswara", rollNumber: "240985", registeredAt: "2026-05-24T12:06:58" },
  { sno: 5, name: "Sayantan Mondal", rollNumber: "250996", registeredAt: "2026-05-24T12:25:09" },
  { sno: 6, name: "Daksh Saijwal", rollNumber: "240318", registeredAt: "2026-05-24T12:27:19" },
  { sno: 7, name: "Shiva Sri Sarkani", rollNumber: "240936", registeredAt: "2026-05-24T12:28:56" },
  { sno: 8, name: "Anju Kanwar", rollNumber: "250141", registeredAt: "2026-05-24T13:19:27" },
  { sno: 9, name: "Arijit Vishwakarma", rollNumber: "240175", registeredAt: "2026-05-24T13:32:34" },
  { sno: 10, name: "Eragandula Nehasri", rollNumber: "240384", registeredAt: "2026-05-24T14:41:29" },
  { sno: 11, name: "Jishnu G", rollNumber: "250489", registeredAt: "2026-05-24T14:43:13" },
  { sno: 12, name: "Aadi Chhajed", rollNumber: "240004", registeredAt: "2026-05-24T14:58:39" },
  { sno: 13, name: "Ayush Kumar", rollNumber: "240239", registeredAt: "2026-05-24T14:58:59" },
  { sno: 14, name: "Yogesh Rewar", rollNumber: "241213", registeredAt: "2026-05-24T15:01:39" },
  { sno: 15, name: "Laukik Krishna Joshi", rollNumber: "240592", registeredAt: "2026-05-24T15:04:30" },
  { sno: 16, name: "Kushal Jain", rollNumber: "240587", registeredAt: "2026-05-24T15:19:09" },
  { sno: 17, name: "Sanjay R", rollNumber: "240934", registeredAt: "2026-05-24T15:35:42" },
  { sno: 18, name: "Prakhar Gupta", rollNumber: "240765", registeredAt: "2026-05-24T15:55:17" },
  { sno: 19, name: "Rajveer Singh", rollNumber: "240839", registeredAt: "2026-05-24T16:12:23" },
  { sno: 20, name: "Saket Pratap Singh", rollNumber: "240909", registeredAt: "2026-05-24T16:22:53" },
  { sno: 21, name: "Aditya V Natekar", rollNumber: "240070", registeredAt: "2026-05-24T16:33:03" },
  { sno: 22, name: "Shubh Sahu", rollNumber: "251043", registeredAt: "2026-05-24T17:16:14" },
  { sno: 23, name: "Rakshit Gupta", rollNumber: "250877", registeredAt: "2026-05-24T18:44:55" },
  { sno: 24, name: "Ramith Gowda B M", rollNumber: "240846", registeredAt: "2026-05-24T19:04:20" },
  { sno: 25, name: "Prathu Agarwal", rollNumber: "240782", registeredAt: "2026-05-24T19:07:39" },
  { sno: 26, name: "Aditi", rollNumber: "250057", registeredAt: "2026-05-24T19:08:00" },
  { sno: 27, name: "Riyan Shaik", rollNumber: "251001", registeredAt: "2026-05-24T19:14:55" },
  { sno: 28, name: "Pawan Dhamune", rollNumber: "250339", registeredAt: "2026-05-24T19:18:14" },
  { sno: 29, name: "Kushagra Nayak", rollNumber: "240586", registeredAt: "2026-05-24T19:57:53" },
  { sno: 30, name: "Manasvi Bansal", rollNumber: "240617", registeredAt: "2026-05-24T20:34:14" },
  { sno: 31, name: "Krishna Ranjan Singh", rollNumber: "250568", registeredAt: "2026-05-24T20:45:04" },
  { sno: 32, name: "Khushi Yadav", rollNumber: "250540", registeredAt: "2026-05-24T21:02:02" },
  { sno: 33, name: "Shrushti", rollNumber: "241004", registeredAt: "2026-05-24T21:15:06" },
  { sno: 34, name: "Arihant Sharma", rollNumber: "240174", registeredAt: "2026-05-24T21:45:27" },
  { sno: 35, name: "Rudransh Mishra", rollNumber: "240892", registeredAt: "2026-05-24T22:05:46" },
  { sno: 36, name: "Gopal Moranya", rollNumber: "240404", registeredAt: "2026-05-24T22:30:48" },
  { sno: 37, name: "Mastha Samhitha", rollNumber: "240634", registeredAt: "2026-05-24T23:13:08" },
  { sno: 38, name: "Chandan Jangir", rollNumber: "240294", registeredAt: "2026-05-25T00:26:52" },
  { sno: 39, name: "Jaiwant N", rollNumber: "240483", registeredAt: "2026-05-25T00:36:43" },
  { sno: 40, name: "Akshat Agarwal", rollNumber: "240084", registeredAt: "2026-05-25T00:43:58" },
  { sno: 41, name: "Amit Singh", rollNumber: "240109", registeredAt: "2026-05-25T00:45:48" },
  { sno: 42, name: "Shubham Rajak", rollNumber: "251046", registeredAt: "2026-05-25T01:31:44" },
  { sno: 43, name: "Mayur", rollNumber: "240643", registeredAt: "2026-05-25T02:26:10" },
  { sno: 44, name: "Lavanya Prakash", rollNumber: "250601", registeredAt: "2026-05-25T04:01:01" },
  { sno: 45, name: "Ishaan Gupta", rollNumber: "250458", registeredAt: "2026-05-25T04:12:56" },
  { sno: 46, name: "Gourav Bajwa", rollNumber: "240407", registeredAt: "2026-05-25T19:03:44" },
  { sno: 47, name: "Gaikwad Shivam Pradeep", rollNumber: "240391", registeredAt: "2026-05-25T19:27:58" },
  { sno: 48, name: "Arun Chauhan", rollNumber: "240198", registeredAt: "2026-05-25T20:42:32" },
  { sno: 49, name: "B Mukund Advaith", rollNumber: "240253", registeredAt: "2026-05-25T20:53:49" },
  { sno: 50, name: "Bhav Agarwal", rollNumber: "240266", registeredAt: "2026-05-25T22:06:29" },
  { sno: 51, name: "Abhishek", rollNumber: "240040", registeredAt: "2026-05-25T22:09:14" },
  { sno: 52, name: "Ankalugari Ravi Kiran", rollNumber: "250142", registeredAt: "2026-05-25T22:47:23" },
  { sno: 53, name: "Prince Meena", rollNumber: "240796", registeredAt: "2026-05-25T23:04:12" },
  { sno: 54, name: "Rudresh Kumar", rollNumber: "240893", registeredAt: "2026-05-26T10:23:42" },
  { sno: 55, name: "Pothuri Gouthami", rollNumber: "250786", registeredAt: "2026-05-27T12:11:10" },
  { sno: 56, name: "Vanshika Singh", rollNumber: "251164", registeredAt: "2026-05-29T02:36:36" },
  { sno: 57, name: "Rinku Raj", rollNumber: "240866", registeredAt: "2026-05-31T17:15:47" },
  { sno: 58, name: "Aryan", rollNumber: "240204", registeredAt: "2026-05-31T17:51:43" },
];

// Deduplicated list (by roll number, keeping earliest registration)
export function getUniqueCohortMembers(): CohortMember[] {
  const seen = new Map<string, CohortMember>();
  for (const member of cohortMembers) {
    if (!seen.has(member.rollNumber)) {
      seen.set(member.rollNumber, member);
    }
  }
  const unique = Array.from(seen.values());
  // Re-number
  return unique.map((m, i) => ({ ...m, sno: i + 1 }));
}
