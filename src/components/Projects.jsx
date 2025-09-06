import FocusLearn from "../assets/FocusLearn.png";
import PortfolioDashboard from "../assets/PortfolioDashboard.png";
import GenAI from "../assets/GenAI.png";
import SmartHome from "../assets/SmartHome.png";
import PosProject from "../assets/PosProject.png";

const Projects = () => {
  const projects = [
    {
      title: "FocusLearn - Personalized Learning Platform",
      description:
        "A comprehensive learning platform that allows users to create personalized learning journeys and avoid distractions for focused and structured learning using YouTube content.",
      image: FocusLearn,
      technologies: ["React", "TailwindCSS", "Express.js", "MySQL2", "JWT"],
      features: [
        "Custom journey creation with individual YouTube videos",
        "Automatic generation from playlist URLs",
        "Rich text editor for notes with download option",
        "Real-time progress tracking",
        "Public journey forking capability",
      ],
      githubUrl: "https://github.com/asifmohd01/FocusLearn",
      liveUrl: "#",
      category: "Full Stack",
      status: "Completed",
    },
    {
      title: "Gen.AI - Full Stack AI Application",
      description:
        "A complete AI SaaS platform built with the PERN stack, featuring authentication, subscription billing, and multiple AI-powered tools for text, image, and resume analysis.",
      image: GenAI,
      technologies: [
        "PostgreSQL",
        "Express.js",
        "React",
        "Node.js",
        "Clerk",
        "Neon",
      ],
      features: [
        "Secure user authentication with Clerk",
        "Subscription billing for premium features",
        "Serverless PostgreSQL database by Neon",
        "AI Article Generator with title & length input",
        "AI Blog Title Generator from keywords & category",
        "AI Image Generator using text prompts",
        "Background remover for images",
        "Image object remover by specifying object name",
        "Resume Analyzer with detailed AI analysis",
      ],
      githubUrl: "https://github.com/asifmohd01/gen.ai",
      liveUrl: "https://asif-gen-ai.vercel.app/",
      category: "Full Stack",
      status: "Completed",
    },

    {
      title: "WealthManager - Portfolio Analytics Dashboard",
      description:
        "A comprehensive portfolio analytics dashboard that helps investors track, analyze, and visualize their stock investments efficiently. Provides interactive charts, performance metrics, and key insights for informed decision-making.",
      image: PortfolioDashboard, // replace with actual image path
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
        "Chart.js",
      ],
      features: [
        "Real-time portfolio overview cards displaying total value, gain/loss, performance %, and number of holdings",
        "Interactive asset allocation visualizations by sector and market cap with hover effects",
        "Sortable and filterable holdings table with color-coded performance indicators",
        "Performance comparison chart showing portfolio vs Nifty 50 vs Gold over time",
        "Top performers section highlighting best and worst performing stocks",
        "Responsive, mobile-friendly design with interactive UI elements",
        "Error handling and loading states for smooth user experience",
      ],
      githubUrl: "https://github.com/asifmohd01/Portfolio-Dashboard",
      liveUrl: "https://portfolio-dashboard-jm9n.vercel.app/", // replace with deployed app URL
      category: "Full Stack",
      status: "Completed",
    },
    {
      title: "Smart Home Energy Monitoring System",
      description:
        "A web-based application that helps users track, analyze, and manage household energy consumption efficiently with real-time insights, cost estimation, and alerts to optimize usage.",
      image: SmartHome, // Replace with your imported image
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MySQL",
        "JWT",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      features: [
        "User authentication with secure login and registration",
        "Real-time energy tracking per device",
        "Interactive charts and graphs for energy trends",
        "Energy budgeting with usage limit alerts",
        "Historical data analysis of past consumption",
        "Device-wise monitoring for precise tracking",
        "Cost estimation based on electricity rates",
        "Alerts and notifications when thresholds are exceeded",
      ],
      githubUrl: "https://github.com/asifmohd01/smart-home-energy-snapshot",
      liveUrl: "#", // Update if deployed
      category: "Full Stack",
      status: "Completed",
    },
    {
      title: "Service Point of Sale (POS) System",
      description:
        "A modern, internationalized Point of Sale system designed for service-based businesses, simplifying transactions, enhancing customer experience, and providing essential tools for managing operations efficiently.",
      image: PosProject, // Replace with your imported screenshot/image variable
      technologies: [
        "React",
        "Tailwind CSS",
        "react-intl",
        "Framer Motion",
        "Lucide React",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      features: [
        "Multi-language support with react-intl for English, Spanish, Hindi, German, Russian, Kannada, and French",
        "Real-time currency conversion using a reliable API",
        "Shopping cart functionality with add, update, remove services and real-time total calculation",
        "Downloadable and printable receipts for transactions",
        "Basic analytics dashboard showing total sales, number of transactions, and popular services",
        "Service search and filtering by name and category",
        "Responsive design optimized for desktop, tablet, and mobile devices",
      ],
      githubUrl: "https://github.com/asifmohd01/pos-project",
      liveUrl: "https://asif-pos.vercel.app/", // Update if deployed
      category: "Full Stack",
      status: "Completed",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-portfolio-primary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world problem-solving projects showcasing full-stack
            development skills and modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-50 shadow-medium hover:shadow-strong transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-portfolio-primary text-white px-3 py-1 text-sm font-medium">
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-portfolio-primary/10 text-portfolio-primary text-sm font-medium border border-portfolio-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-portfolio-primary mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 text-white px-6 py-3 text-center font-medium shadow-soft hover:shadow-medium hover:bg-gray-700 transition-all duration-300"
                  >
                    View Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex-1 border-2 border-portfolio-primary text-portfolio-primary px-6 py-3 text-center font-medium hover:bg-portfolio-primary hover:text-white transition-all duration-300 shadow-soft hover:shadow-medium"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div
            className="p-8 rounded-lg shadow-purple transition-all duration-300"
            style={{
              background: "linear-gradient(to right, #8b5cf6, #9333ea)", // gradient
              boxShadow:
                "0 4px 15px rgba(139, 92, 246, 0.3), 0 8px 20px rgba(128, 0, 128, 0.2)", // purple shadow
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in My Work?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              I'm always working on new projects and learning new technologies.
              Check out my GitHub for more projects and contributions.
            </p>
            <a
              href="https://github.com/asifmohd01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#8b5cf6] px-8 py-3 font-semibold rounded-md shadow-soft hover:shadow-medium transition-all duration-300 transform hover:scale-105"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
