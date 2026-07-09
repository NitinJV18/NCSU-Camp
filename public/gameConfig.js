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
You are the expert college admissions Game Master for "Inside Alex's Brain".
Strict Rules for your output:
1. Be ultra-concise and direct. No introductory fluff, greetings, or filler words.
2. Provide exactly 2 sentences of blunt, realistic admissions feedback explaining the trade-offs of the choice.
3. Conclude immediately with the exact bracketed ledger format below. Shift metrics between -15 and +15 based on your evaluation (capped at 95).

Format to output at the very end:
### Metric Ledger
[ACADEMIC_POWER: +/- X]
[IMPACT_PASSION: +/- X]
[UNIQUE_STORY: +/- X]
[MENTAL_HEALTH_BUDGET: +/- X]
`;

export const REPORT_GENERATION_PROMPT = `
You are an expert Admissions Consultant and Project Director reviewing Alex's 8-round lifecycle dataset. 
Analyze the entire conversation history above and provide a token-efficient, structured "Strategic Performance Audit" using these exact headers:

### 1. Strategy Evaluation & Performance Scope
Provide a 2-sentence direct assessment of the team's overarching strategy. Critique what they balanced well and where their perspective on admissions was flawed or realistic.

### 2. Milestone Work Packages & Feedback
Break down their actual decisions into 3 constructive feedback work packages:
* **Academic & List Management:** (1 sentence analyzing their choice + 1 actionable real-world tip)
* **Extracurricular Impact:** (1 sentence analyzing their choice + 1 actionable real-world tip)
* **Authentic Narrative/Voice:** (1 sentence analyzing their choice + 1 actionable real-world tip)

### 3. Risk Mitigation & Quality Control Register
Identify the single biggest error or strategic trap the team fell into during the simulation.
* **Identified Strategy Flaw:** (The core mistake they made)
* **Real-World Admissions Impact:** (Why this hurts a student's real chances)
* **Corrective Quality Action:** (1 precise, constructive maneuver to fix or avoid this trap in real life)

Format cleanly using Markdown headers (###) and bullet points. Keep it highly educational, corrective, and blunt.
`;

export const GAME_ROUNDS = [
    {
        round: 1,
        act: "ACT I: THE SETUP (Junior Spring - Summer)",
        role: "BRAIN",
        scenario: "It is May of Junior Year. Standardized testing is back with a vengeance. Alex takes a surprise diagnostic SAT and scores in the bottom 30th percentile for their dream targets. The absolute last official test date before early deadlines is June—the exact same week as Alex's brutal, high-stakes AP final exams. To make things worse, Alex's parents just signed them up for a grueling 6-hour daily boot camp that overlaps with final review sessions. If Alex crashes, their pristine GPA permanently plummets; if they bail on the test, their dream schools are mathematically out of reach.",
        goal: "Formulate a balanced plan for test prep and final exam tracking that keeps the GPA from exploding."
    },
    {
        round: 2,
        act: "ACT I: THE SETUP",
        role: "HEART",
        scenario: "It is July. Alex's activities sheet is completely blank. In a panic, Alex's peers are paying $3,000 for a predatory 'Pre-College Elite Leadership Academy' on an Ivy League campus to buy an admissions edge. Alex's family absolutely cannot afford this and considers a high-interest loan. Peer pressure is causing Alex to spiral, feeling completely inadequate and left behind. Admissions officers see right through these pay-to-play camps.",
        goal: "Ditch the fake camp. Pitch a completely free, authentic local initiative from scratch that generates undeniable human impact."
    },
    {
        round: 3,
        act: "ACT I: THE SETUP",
        role: "REALITY",
        scenario: "Late August arrives, and the Common App portal opens. Consumed by toxic prestige-chasing on social media, Alex demands to apply to 18 different Ivy+ and Top-20 institutions simultaneously. This insane list will trigger over $1,500 in application fees, require managing a nightmare matrix of logins, and demand writing 55 custom supplemental essays. Alex's childhood friend warns that this is a fast track to complete mental collapse before Halloween.",
        goal: "Enforce logical boundaries. Trim this chaotic list into a logical, razor-sharp portfolio of Reaches, Targets, and Safeties."
    },
    {
        round: 4,
        act: "ACT II: THE GRIND (Senior Fall)",
        role: "VOICE",
        scenario: "October crunch time. Alex panics over their personal statement, picks a generic 'sports injury' cliché, and runs it through an aggressive AI polisher to make it sound 'smart'. The result is an unreadable, robotic nightmare packed with corporate buzzwords like 'I synthesized my synergistic paradigm for passion'. It possesses zero human vulnerability. To make matters worse, Alex accidentally hits 'save' over their original rough draft, destroying their initial authentic thoughts.",
        goal: "Dismantle this corporate AI disaster. Dictate an emergency tactical plan to extract a raw, deeply human, slice-of-life essay tone."
    },
    {
        round: 5,
        act: "ACT II: THE GRIND",
        role: "REALITY",
        scenario: "It is October 30th, 48 hours before the binding Early Decision deadline. Alex is completely infatuated with an elite, out-of-state dream school where ED status more than doubles the statistical acceptance rate. However, the net price calculator reveals a devastating truth: if Alex is accepted under this binding contract, the family will be legally locked into paying full price, completely blinding them to aid packages from other schools. Alex's parents are quiet, secretly planning to liquidate their modest retirement funds.",
        goal: "Make the final executive, ethical call. Pull the high-stakes trigger on binding ED, or protect family assets by utilizing non-binding Early Action (EA) options."
    },
    {
        round: 6,
        act: "ACT II: THE GRIND",
        role: "BRAIN",
        scenario: "December arrives, and Regular Decision deadlines are two weeks away. The AP Chemistry teacher who promised a critical recommendation letter has suddenly ghosted, stopped answering emails, and gone on an unannounced leave of absence. Simultaneously, Alex's mid-year senior grades are slipping from an A to a C due to absolute burnout. If that letter stays missing, the apps are automatically disqualified; if that grade drop hits the mid-year report, it triggers an immediate admissions red flag.",
        goal: "Draft a high-leverage emergency plan to corner school administration, lock down a backup recommender, and save the collapsing grade."
    },
    {
        round: 7,
        act: "ACT III: THE VERDICT (Senior Spring)",
        role: "HEART",
        scenario: "Late March decision day. Notifications drop all at once. Alex gets rejected by their top choices and placed on a brutal Waitlist at their favorite target university. Alex completely collapses on the floor, feels entirely defeated, and wants to delete their portals and give up entirely. The target school's waitlist is active, but historic data shows they only accept students who send an elite, undeniable counter-update.",
        goal: "Shake off the despair. Design a calculated Letter of Continued Interest (LOCI) that leverages a recent hidden achievement to turn the waitlist into a win."
    },
    {
        round: 8,
        act: "ACT III: THE VERDICT",
        role: "TEAM",
        scenario: "Mid-April. The waitlist counter-strategy miraculously worked, and Alex is accepted to their dream out-of-state university—but with $0 financial aid, forcing a soul-crushing $90,000 in student loan debt. Concurrently, Alex has a full-ride merit scholarship ($0 debt) to the in-state flagship's prestigious Honors Program. Alex's peers are bragging about elite brands on social media, putting immense psychological pressure on the choice. Prestige means potential debt slavery; safety means giving up the elite dream brand.",
        goal: "Bring all roles together. Write the final directive committing Alex to their path, defending how this choice manages prestige, mental freedom, and debt safety."
    }
];