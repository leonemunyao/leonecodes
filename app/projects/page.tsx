'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Flowchain",
      year: "2024",
      description: "Flowchain is a decentralized application built on the Internet Computer Protocol blockchain layer. Its main aim is to allow users to manage their logistics in one platform.",
      image: "/images/flowchain.png",
      link: "https://6irrc-aqaaa-aaaah-aq4za-cai.icp0.io/"
    },
    {
      title: "Livestock Management System",
      year: "2024",
      description: "This is a Rust Smart Contract for Livestock Management System which enables a farmer to manage his cattle farm with ease. This system has incorporated the basic CRUD operations. Through the system, a farmer records cattle breed, age, height, health records, update health status and medical records.",
      image: "/images/livestock.png",
      link: "https://github.com/leonemunyao/Get_Rusty/tree/main/rust_smart_contract1/Livestock_Management/livestock_management"
    },
    {
      title: "Portfolio Website",
      year: "2025",
      description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing my projects and professional experience.",
      image: "/images/Hello.png",
      link: "https://leonemunyao.netlify.app/"
    },
    {
      title: "Crop Yield System",
      year: "2024",
      description: "This is a Rust Smart Contract for crop yield system which enables a farmer to manage their crop details. Through this system a farmer can predict crop yield through analysing the weather conditions and other factors such as fertilizer application.",
      image: "/images/cropyield.png",
      link: "https://github.com/leonemunyao/Get_Rusty/tree/main/rust_smart_contract1/Crop_Yield_System/crop_yield_system"
    },
    {
      title: "Loan Management System",
      year: "2024",
      description: "This is a loan management system built on the Internet Computer Protocol blockchain layer.",
      image: "/images/loanmanagement.png",
      link: "https://github.com/leonemunyao/defiloan"
    }
  ];

  return (
    <div className="min-h-screen pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-6">PROJECTS</h1>
          <p className="text-gray-400 max-w-2xl">
            A collection of my work in blockchain development, smart contracts, and web applications. 
            Each project represents a unique challenge and solution in the world of decentralized technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link 
              href={project.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-black/40 transition-all duration-300">
                <div className="relative aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-blue-400">{project.year}</span>
                      <ExternalLink className="w-4 h-4 text-blue-400" />
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="absolute top-32 right-0 text-[12rem] font-bold text-white/5 select-none pointer-events-none">
          2024
        </div>
      </div>
    </div>
  );
}