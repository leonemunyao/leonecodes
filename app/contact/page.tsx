import { Github, Linkedin, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const contactInfo = [
    {
      icon: Linkedin,
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/leonemunyao/',
      text: 'linkedin.com/in/leonemunyao'
    },
    {
      icon: ExternalLink,
      title: 'Hashnode',
      link: 'https://hashnode.com/@leonecode',
      text: 'https://hashnode.com/@leonecode'
    },
    {
      icon: Github,
      title: 'Github',
      link: 'https://github.com/leonemunyao',
      text: 'github.com/leonemunyao'
    },
    {
      icon: ExternalLink,
      title: 'Linktree',
      link: 'https://linktr.ee/leonemunyao',
      text: 'linktr.ee/leonemunyao'
    }
  ];

  return (
    <div className="min-h-screen pt-32 px-6 font-['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">GET IN TOUCH</h1>
        <p className="text-blue-400 text-lg mb-16">Let&apos;s Work Together</p>

        <div className="grid md:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <Link href={item.link} key={index} target="_blank" rel="noopener noreferrer">
              <div className="contact-card">
                <item.icon className="contact-icon" />
                <h2 className="contact-title">{item.title}</h2>
                <p className="contact-text">{item.text}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-32 mb-8">
          <p className="text-gray-400">PORTFOLIO 2025</p>
        </div>
      </div>
    </div>
  );
}