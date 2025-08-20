const badges = [
  "React Native", "Ionic", "Kotlin", "Swift",
  "React", "Node.js", "NestJS", "Next.js", "Vue.js", "Puppeteer",
  "AWS", "Azure", "GCP", "Docker", "Kubernetes", "SQL", "NoSQL", "Serverless",
  "Jira", "ClickUp", "Asana", "Trello",
  "QA Automation", "Xero", "QuickBooks", "Tally", "SAP"
];

export default function TechBadges() {
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((b) => (
        <span key={b} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/90">{b}</span>
      ))}
    </div>
  );
}
