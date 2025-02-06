export default function Experience() {
  const experiences = [
    {
      company: "Web 3 Hackathons",
      position: "Hacker |",
      period: "Jan 2024 - Present",
      description: "I have participated and won in various Web 3 Hackathons which include, ICP Hub Kenya Interuniversity Hackathon, TUM Multidisciplinary Web 3 Hackathon, ICP Hub Kenya Memethon Hackerhouse and the ICP Hub Kenya 2024 Mega Hackathon. My particpation in these hackathons has contributed to my growth as a Web 3 Developer."
    },
    {
      company: "TUM Developers Club",
      position: "Social Media Manager",
      period: "Jul 2023 - Aug 2024",
      description: "Curated and shared development courses, ensuring members had access to valuable learning resources for their tech growth. Promoted tech events, including hackathons and workshops, boosting member engagement and event participation. Maintained community standards by overseeing the club group rules to ensure discussions remained focused on technology."
    },
    {
      company: "Swahilipot Hub Foundation",
      position: "Software Developer Intern",
      period: "Sep 2023 - Dec 2023",
      description: "Building and maintaining the Pwani Innovation Week 2023 Platform. Updating essential details including delegates list, logos and adding live X engagement. Backend Development using Django to develop a feedback platform, allowing users to submit activity-based feedback as part of my internship project. Contributed as a Tech Volunteer during significant events, including Pwani Innovation Week 2023 and the Global Opportunity Youth Network Summit 2023."
    }
  ];

  return (
    <div className="min-h-screen pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">EXPERIENCE</h1>
          <p className="text-gray-400 mb-12">
            Professional experience in software development, focusing on blockchain 
            technology and web applications.
          </p>

          <div className="relative">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3 className="timeline-title">{exp.company}</h3>
                  <div className="timeline-subtitle">
                    {exp.position} | {exp.period}
                  </div>
                  <p className="mt-3 text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-32 right-0 text-[12rem] font-bold text-white/5 select-none pointer-events-none">
          2023 - 2024
        </div>
      </div>
    </div>
  );
}