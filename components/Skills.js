import React from "react";

export default function Skills() {
  const skills = [
    {
      name: "Web Development",
      desc: "Building modern, responsive web applications",
      icon: "/dev.svg",
    },
    {
      name: "Canva Design",
      desc: "Creating sleek visuals, presentations, and social media content with Canva",
      icon: "/canva.svg",
    },
    {
      name: "Teaching",
      desc: "Sharing knowledge through clear, engaging instruction in tech and design",
      icon: "/teaching.svg",
    },
    {
      name: "UI Designing",
      desc: "Designing clean, intuitive user interfaces",
      icon: "/UI.svg",
    },
  ];

  return (
    <section id="skills" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((s, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={s.icon}
                alt={s.name}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {s.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center mt-2">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
