export default function Hackathons() {
  const hackathons = [
    {
      name: "ICP Hub Kenya Interuniversity Hackathon",
      role: "Hacker",
      organization: "ICP Hub Kenya",
      period: "March 2024",
      description: "Participated and won in the ICP Hub Kenya Interuniversity Hackathon with the flowchain project as a team."
    },
    {
      name: "TUM Multidisciplinary Week Web 3 Hackathon",
      role: "Hacker",
      organization: "ICP Hub Kenya & Web 3 Clubs",
      period: "March 2024",
      description: "Participated and won in the two hackathons hosted by the two groups with the loan managemen system."
    },
    {
      name: "ICP Hub Kenya Mega Hackathon 2024",
      role: "Hacker",
      organization: "ICP Hub Kenya",
      period: "Nov 2024",
      description: "Participated in the Mega Hackathon 2024 with the flowchain project as a team."
    },
    {
      name: "ICP Hub Kenya Memethon Hackerhouse",
      role: "Hacker",
      organization: "ICP Hub Kenya",
      period: "May 2024",
      description: "Participated in the Memethon Hackerhouse with a memecoin project called Dackcoin."
    }
  ];

  return (
    <div className="min-h-screen pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">HACKATHONS</h1>
          <p className="text-gray-400 mb-12">
            My journey through various hackathons and tech events, where I&apos;ve had 
            the opportunity to collaborate, innovate, and contribute to meaningful projects.
          </p>

          <div className="relative">
            {hackathons.map((hackathon, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm rounded-xl p-8 mb-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-white">{hackathon.name}</h3>
                  <span className="text-blue-400">{hackathon.period}</span>
                </div>
                <div className="text-blue-400 mb-2">
                  {hackathon.role} | {hackathon.organization}
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {hackathon.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-32 right-0 text-[12rem] font-bold text-white/5 select-none pointer-events-none">
          2024
        </div>
      </div>
    </div>
  );
}