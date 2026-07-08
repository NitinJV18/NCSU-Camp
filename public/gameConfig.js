// public/gameConfig.js

export const GAME_ROLES = {
    BRAIN: {
        name: "The Brain (Academics & Data)",
        color: "#2B6CB0",
        tracker: "Academic Power",
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v12M6 12h12"/></svg>`
    },
    HEART: {
        name: "The Heart (Extracurriculars & Hobbies)",
        color: "#E53E3E",
        tracker: "Impact & Passion",
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
    },
    VOICE: {
        name: "The Voice (Essays & Authenticity)",
        color: "#D69E2E",
        tracker: "Unique Story Score",
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 19v4M8 23h8"/></svg>`
    },
    REALITY: {
        name: "The Reality Check (Strategy & Stress Control)",
        color: "#319795",
        tracker: "Mental Health & Budget",
        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`
    }
};

export const INITIAL_SYSTEM_PROMPT = `
You are the Game Master for the admissions simulation game "Inside Alex's Brain". 
Your job is to receive a decision prompt from a specific student role each round. Evaluate their choice, and output the response matching these exact rules:
1. Provide a realistic narrative outcome of their decision (2-3 sentences).
2. Explicitly specify metric adjustments for all four parameters using the format:
   [ACADEMIC_POWER: +/- X]
   [IMPACT_PASSION: +/- X]
   [UNIQUE_STORY: +/- X]
   [MENTAL_HEALTH_BUDGET: +/- X]
Keep changes balanced between -15 and +15 based on the quality and realism of the choice. Let's begin.
`;

export const GAME_ROUNDS = [
    {
        round: 1,
        act: "ACT I: THE SETUP (Junior Spring - Summer)",
        role: "BRAIN",
        scenario: "It is May of Junior Year. Highly selective colleges have officially brought back standardized test requirements. Alex takes a practice SAT and gets a decent score, but it sits below the 25th percentile for their top target universities. The next available official test date is June—the exact same week as high school final exams. The Problem: If Alex studies for the test now, their GPA might tank from exam stress. If they wait, they will have to spend their entire summer break studying.",
        goal: "Formulate a structured prep and test schedule that balances testing power against GPA preservation."
    },
    {
        round: 2,
        act: "ACT I: THE SETUP",
        role: "HEART",
        scenario: "It is July. Alex has no formal summer plans, and their activity resume looks hollow. Their friends are all enrolling in a flashy, expensive ($3,000) 'Pre-College Leadership Camp' hosted on an Ivy League campus. Alex's parents cannot afford this without taking on stress, and Alex feels deeply left behind and inadequate. The Problem: Paid elite summer camps are widely recognized by admissions officers as 'pay-to-play' and rarely add real admissions value.",
        goal: "Pitch a completely free, self-directed summer project, local job, or community initiative that showcases genuine, raw human impact."
    },
    {
        round: 3,
        act: "ACT I: THE SETUP",
        role: "REALITY",
        scenario: "It is late August. The Common App is officially open. Overwhelmed by peer pressure, Alex wants to adopt a 'lottery ticket' strategy and apply to 16 hyper-selective Top-30 universities. The Problem: This plan will cost over $1,200 in application fees, require tracking separate portals, and demand writing over 45 individual supplemental essays, virtually guaranteeing severe essay burnout by October.",
        goal: "Enforce structural boundaries to trim the list into a balanced, manageable portfolio of Reaches, Targets, and Safeties."
    },
    {
        round: 4,
        act: "ACT II: THE GRIND (Senior Fall)",
        role: "VOICE",
        scenario: "It is October. Alex finishes their first complete draft of the main personal statement. They chose a safe topic—a sports injury—and ran it through an AI text generator to 'clean it up.' The Problem: The essay reads like a robotic corporate brochure. It is full of sterile, cliché phrases like 'This adversity allowed me to synthesize my passion for perseverance.' It contains absolutely zero human vulnerability or genuine voice.",
        goal: "Tell the AI how you plan to completely dismantle the robotic draft, uncover an unconventional personal slice-of-life story, and introduce an authentic human tone."
    },
    {
        round: 5,
        act: "ACT II: THE GRIND",
        role: "REALITY",
        scenario: "It is late October, days before the November 1st Early deadlines. Alex is completely in love with a prestigious out-of-state university. Applying 'Early Decision' (ED) will more than double their statistical chances of admission. The Problem: Early Decision is a legally binding contract. If Alex gets in, they must enroll and immediately withdraw all other applications before they ever get a chance to see or compare financial aid packages from other universities.",
        goal: "Assess the structural risk. Decide whether to pull the high-stakes trigger on binding ED, or protect the family finances by utilizing non-binding Early Action (EA)."
    },
    {
        round: 6,
        act: "ACT II: THE GRIND",
        role: "BRAIN",
        scenario: "It is December. The final regular decision application deadlines are two weeks away. Alex's AP Chemistry teacher—who explicitly promised back in May to write Alex's primary letter of recommendation—has suddenly stopped replying to emails and has not uploaded the document. Meanwhile, Alex's senior winter grades are slipping due to sheer exhaustion. The Problem: A missing letter will stall the entire application, and a major grade drop right now will trigger a red flag for colleges viewing mid-year reports.",
        goal: "Provide a multi-step execution plan to professionalize communication with the ghosting teacher, handle the grade slip, and secure an emergency backup recommender."
    },
    {
        round: 7,
        act: "ACT III: THE VERDICT (Senior Spring)",
        role: "HEART",
        scenario: "It is late March. The admissions notifications hit Alex's inbox all at once. Alex receives a couple of safe options, two outright rejections, and a Waitlist notification from their absolute favorite target university. Alex feels completely defeated, assumes a waitlist is just a polite rejection, and wants to throw in the towel. The Problem: Waitlists are highly active. Doing nothing means a definitive rejection, but a lazy response won't move the needle.",
        goal: "Devise a tactical, high-impact counter-strategy to construct a Letter of Continued Interest (LOCI) that treats the waitlist as an active opportunity to show new growth."
    },
    {
        round: 8,
        act: "ACT III: THE VERDICT",
        role: "TEAM", // Special flag for combined final round
        scenario: "It is mid-April. May 1st National Commit Day is looming. Alex's waitlist push worked, and they were officially accepted to their dream out-of-state university—but the school offered zero financial aid, requiring Alex and their parents to take on a massive $90,000 in student loans. Concurrently, Alex was accepted into their in-state flagship university's Honors Program, coming with a full merit scholarship (meaning $0 out-of-pocket debt). The Problem: Choosing the prestigious name means absorbing lifelong financial pressure. Choosing the safety means giving up a dream brand.",
        goal: "Write a comprehensive, multi-perspective final prompt choosing Alex's destination, justifying how this balances prestige, financial health, and long-term professional freedom."
    }
];