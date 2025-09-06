const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C++", level: 70 },
        { name: "Python", level: 30 },
        { name: "JavaScript", level: 80 },
      ],
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 90 },
        { name: "React.js", level: 70 },
        { name: "Bootstrap 5", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 70 },
        { name: "REST APIs", level: 70 },
        { name: "JWT Auth", level: 75 },
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 70 },
      ],
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: 60 },
        { name: "GitHub", level: 70 },
        { name: "Postman", level: 80 },
        { name: "Load Testing", level: 60 },
        // { name: "Apache Benchmark", level: 70 },
      ],
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-portfolio-primary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technical expertise across modern web development
            technologies and tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`${category.bgColor} p-6 shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2`}
            >
              <h3
                className={`text-xl font-bold ${category.textColor} mb-6 text-center`}
              >
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${
                            categoryIndex * 200 + skillIndex * 100
                          }ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 shadow-md transition-all duration-300 rounded-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Additional Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Agile Development",
                "Load Testing",
                "Linux Environment",
                "Version Control",
                "API Development",
                "Database Design",
                "Responsive Design",
                "Performance Optimization",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105 overflow-hidden"
                  style={{
                    background: "linear-gradient(to right, #8b5cf6, #9333ea)",
                    boxShadow:
                      "0 2px 8px rgba(186, 85, 211, 0.3), 0 4px 12px rgba(128, 0, 128, 0.3)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
