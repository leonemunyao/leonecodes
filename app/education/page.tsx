export default function Education() {
  const education = [
    {
      title: "Software Engineering",
      institution: "ALX Africa",
      period: "Aug 2023 - Aug 2024"
    },
    {
      title: "Bachelor of Science in Statistics and Computer Science",
      institution: "Technical University of Mombasa",
      period: "Sep 2020 - Aug 2024"
    },
    {
      title: "Cyber Security Essential 1 and Introduction to Cyber Security",
      institution: "Cisco Networking Academy",
      period: "Apr 2022 - Aug 2022"
    }
  ];

  return (
    <div className="min-h-screen pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">EDUCATION</h1>
          <p className="text-gray-400 mb-12">
            My educational journey has equipped me with a strong foundation in 
            software development and blockchain technology, preparing me for the 
            challenges of modern development.
          </p>

          <div className="relative">
            {education.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3 className="timeline-title">{item.title}</h3>
                  <div className="timeline-subtitle">{item.institution}</div>
                  <div className="timeline-date">{item.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}