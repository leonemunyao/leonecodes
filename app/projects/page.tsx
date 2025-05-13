'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Belle Airport - SQL Datbase",
      year: "2025",
      description: "This is a SQLite Database System to manage airport operations including flights, reservations, and personnel management. It consists of 8 interconnected tables. The tables are; Airport Table, Flight Table, Departure Table, Pilot Table, Equip_Type Table, Passenger Table, Ticket Table and Reservation Table.",
      image: "/images/Airport.jpeg",
      link: "https://github.com/leonemunyao/Belle-Airport"
    },
    {
      title: "Weather Trend Analysis -  Data Analysis with Python",
      year: "2025",
      description: "This is a Python mini-project to perform basic weather data analysis and predict future weather patterns from the data provided. The main components are as follows; Data Loading(loading historical data from a CSV file), Analysis(predicting future trends using linear regression) and Visualization(plotting future trends with comparisons using matplotlib).",
      image: "/images/weather.jpeg",
      link: "https://github.com/leonemunyao/python-mini-project-group1"
    },
    {
      title: "Ecommerce Database and Backend",
      year: "2025",
      description: "This is a Database and Backend of an ecommerce platform where I have used PostgreSQL for Database, Prisma as the ORM, Language is TypeScript and Framework is Node.js with Express.js. The main aim of the project is to advance by backend development skills. Testing the Backend functionality is done using postman.",
      image: "/images/ecommerce.jpeg",
      link: "https://github.com/leonemunyao/Postgres-TS_Backend"
    },
    {
      title: "Portfolio Website",
      year: "2025",
      description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing my projects and professional experience.",
      image: "/images/Hello.png",
      link: "https://leonemunyao.netlify.app/"
    },
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
      image: "/images/livestock1.jpeg",
      link: "https://github.com/leonemunyao/Get_Rusty/tree/main/rust_smart_contract1/Livestock_Management/livestock_management"
    },
    {
      title: "Crop Yield System",
      year: "2024",
      description: "This is a Rust Smart Contract for crop yield system which enables a farmer to manage their crop details. Through this system a farmer can predict crop yield through analysing the weather conditions and other factors such as fertilizer application.",
      image: "/images/crops.jpeg",
      link: "https://github.com/leonemunyao/Get_Rusty/tree/main/rust_smart_contract1/Crop_Yield_System/crop_yield_system"
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