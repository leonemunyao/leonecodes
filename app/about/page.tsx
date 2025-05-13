import Image from 'next/image';

export default function About() {
  const skills = [
    'Debugging',
    'Shell Navigation',
    'Rust',
    'Git',
    'Linux',
    'Postman',
    'SQL',
    'C Programming',
    'Python',
    'PostgreSQL',
    'RESTful APIs',
    'TypeScript'
  ];

  return (
    <div className="min-h-screen pt-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square max-w-xl">
          <Image
            src="/images/leone1.jpeg"
            alt="Developer working"
            width={800}
            height={800}
            className="rounded-2xl object-cover brightness-75"
            priority
          />
        </div>

        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold">MY BIOGRAPHY</h1>
            <p className="text-gray-400 leading-relaxed">
              Leone is a Back-End Developer with a passion for creating impactful web and 
              blockchain applications. His goal is to leverage technology to solve real-world 
              problems and deliver high-quality, reliable code.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Skills & Interest</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}