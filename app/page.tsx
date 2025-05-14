import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen pt-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-blue-400">Hello !!!</p>
            <h1 className="text-5xl font-bold space-y-2">
              <div>I&apos;m Leone</div>
              <div>Munyao</div>
            </h1>
          </div>
          
          <div className="hero-badge">
            A BACK-END DEVELOPER
          </div>
          
          <p className="text-gray-400 max-w-lg">
            Hello, I&apos;m Leone Munyao, a Back-End and Smart Contract Developer passionate about 
            creating innovative blockchain solutions and efficient, back-end applications.
            I&apos;m passionate about using technology to solve problems and 
            build a better, more connected world.
          </p>
        </div>

        <div className="relative aspect-square max-w-xl mx-auto">
          <Image
            src="/images/leone2.jpeg"
            alt="Developer illustration"
            width={800}
            height={800}
            className="rounded-2xl object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
