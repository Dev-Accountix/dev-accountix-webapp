export default function ServicesTable() {
  const rows: [string, string][] = [
    ["Mobile Applications", "React Native, IONIC, Kotlin, Swift"],
    ["Web Applications", "React JS, Node JS, Nest JS, Next JS, Vue JS, Puppeteer"],
    ["Dev Ops & DB Management", "Serverless, AWS, AZURE, GCP, Docker, Kubernetes, SQL, No SQL"],
    ["Operations /BAU Activities", "Jira, Click Up, Asana, Trello"],
    ["QA", "Manual & Automation testing"],
    ["Accounting", "Xero, QuickBooks, Tally, SAP"]
  ];
  return (
    <div className="glass">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="px-4 py-3 md:py-4 md:px-6 font-semibold bg-brand-500/90 rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl">Modules</div>
        <div className="px-4 py-3 md:py-4 md:px-6 font-semibold bg-brand-500/90 rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl">Tech Expertise</div>
      </div>
      <div className="divide-y divide-white/10">
        {rows.map(([module, tech], idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-2">
            <div className="px-4 py-4 md:px-6 bg-white/[0.02]">{module}</div>
            <div className="px-4 py-4 md:px-6 bg-white/[0.04]">{tech}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
