import { Achievement } from '../types';

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "academic-topper",
    title: "Academic Topper – 1st & 2nd Year (BCA)",
    context: "Marathwada Institute of Technology (MIT) / Dr. Babasaheb Ambedkar Marathwada University (BAMU). Achieved 9.64 SGPA in 2nd Year (96.4%) and 9.45 SGPA in 1st Year.",
    badge: "Academic Excellence",
    iconType: "trophy",
  },
  {
    id: "android-competition",
    title: "2nd Rank – Mobile App Development Competition",
    context: "Participated and secured 2nd rank in Smart Two-Wheeler / Four-Wheeler Service Management System Mobile Application at MIT CIDCO.",
    badge: "2nd Rank Winner",
    iconType: "award",
    documentUrl: "/certificates/cert-android-competition.pdf",
  },
  {
    id: "promote-to-product",
    title: "2nd Rank – AI-Challenge 2026 'From Prompt-To-Product'",
    context: "Awarded Certificate of Active Participation & 2nd Rank in One Day AI-Challenge 'From Prompt-To-Product' on 7 March 2026 at MIT CIDCO.",
    badge: "AI Product Innovation",
    iconType: "star",
    documentUrl: "/certificates/cert-ai-challenge.pdf",
  },
];
