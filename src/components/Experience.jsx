const Experience = () => {
  const experiences = [
    {
      title: "Software Programming Intern",
      company: "Digicides Marketing Services Pvt. Ltd.",
      duration: "June 2025 - Aug 2025",
      location: "Remote",
      type: "Internship",
      description:
        "Contributed to the development of interactive dashboards and enhanced user experience through modern web technologies and performance optimization.",
      responsibilities: [
        "Developed interactive dashboard using HTML5, CSS3, Bootstrap 5, and Alpine.js",
        "Enhanced UI by refining layout, typography, and responsiveness for seamless user experience",
        "Performed comprehensive load testing with Locust, Hurl, and Apache Bench (ab)",
        "Worked efficiently in Linux environment using Git/GitHub for version control",
        "Followed Agile sprint-based development process for project management",
        "Collaborated with development team to implement best practices and code standards",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "Bootstrap 5",
        "Alpine.js",
        "Linux",
        "Git",
        "GitHub",
        "Locust",
        "Apache Bench",
      ],
      achievements: [
        "Successfully improved dashboard performance through optimization techniques",
        "Implemented responsive design patterns for better user experience",
        "Gained hands-on experience with load testing and performance monitoring tools",
      ],
    },
  ];

  const education = [
    {
      degree: "B.Tech, Information Science and Engineering",
      institution: "University Visvesvaraya College of Engineering, Bengaluru",
      duration: "2021 - 2025",
      cgpa: "7.98",
      //   status: "Current",
    },
    {
      degree: "Pre-University Education (Class 11 & 12)",
      institution: "Govt. Higher Secondary School, Khanna Chargal, Jammu",
      duration: "2019 - 2021",
      percentage: "91.8%",
      achievement: "Secured top position in 12th grade with distinction",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-portfolio-primary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional experience and educational background in software
            development and engineering
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white p-8 shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h4>
                    <h5 className="text-lg font-semibold text-portfolio-primary mb-2">
                      {exp.company}
                    </h5>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <div className="w-2 h-2 bg-portfolio-primary mr-2"></div>
                        {exp.duration}
                      </span>
                      <span className="flex items-center">
                        <div className="w-2 h-2 bg-portfolio-secondary mr-2"></div>
                        {exp.location}
                      </span>
                      <span className="flex items-center">
                        <div className="w-2 h-2 bg-portfolio-accent mr-2"></div>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="mb-6">
                  <h6 className="font-semibold text-gray-800 mb-3">
                    Key Responsibilities:
                  </h6>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-portfolio-primary mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h6 className="font-semibold text-gray-800 mb-3">
                    Technologies Used:
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-portfolio-primary/10 text-portfolio-primary text-sm font-medium border border-portfolio-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h6 className="font-semibold text-gray-800 mb-3">
                    Key Achievements:
                  </h6>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h4>
                    <h5 className="text-portfolio-primary font-semibold mb-2">
                      {edu.institution}
                    </h5>
                    <p className="text-gray-600 text-sm mb-2">{edu.duration}</p>
                  </div>
                  {edu.status && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 text-xs font-medium">
                      {edu.status}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  {edu.cgpa && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">CGPA:</span>
                      <span className="text-portfolio-primary font-bold">
                        {edu.cgpa}
                      </span>
                    </div>
                  )}
                  {edu.percentage && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">
                        Percentage:
                      </span>
                      <span className="text-portfolio-primary font-bold">
                        {edu.percentage}
                      </span>
                    </div>
                  )}
                  {edu.achievement && (
                    <div className="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-400">
                      <p className="text-yellow-800 text-sm font-medium">
                        {edu.achievement}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
