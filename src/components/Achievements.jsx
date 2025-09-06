import React, { useState } from "react";
import DigicidesInternshipCertificate from "../assets/DigicidesInternshipCertificate.png";
import QuantMasterCertificate from "../assets/QuantMasterCertificate.jpg";

const Achievements = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const achievements = [
    {
      title: "Software Programming Intern - Digicides",
      description:
        "Completed internship at Digicides Marketing Services Pvt. Ltd.",
      details:
        "Worked on developing an interactive dashboard using HTML5, CSS3, Bootstrap 5, and Alpine.js. Enhanced UI/UX, performed load testing with Locust, Hurl, and Apache Bench, worked in Linux environment with Git/GitHub, and followed Agile sprint-based development.",
      year: "2025",
      category: "Internship",
      icon: "💼",
      certificate: DigicidesInternshipCertificate,
    },
    {
      title: "Summer Internship - II (Quant Masters)",
      description:
        "Successfully completed Summer Internship - II under NEP Scheme",
      details:
        "Completed 120 hours internship from 9th March 2024 to 30th June 2024, conducted by Quant Masters in collaboration with University of Visvesvaraya College of Engineering (UVCE). Learned coding in C++ and Data Structures & Algorithms (DSA), improved aptitude problem-solving, and enhanced professional soft skills.",
      year: "2024",
      category: "Internship",
      icon: "💼",
      certificate: QuantMasterCertificate,
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Achievements & Certificates
          </h2>
          <div className="w-24 h-1 bg-portfolio-primary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Key accomplishments, milestones, and certifications in my academic
            and professional journey
          </p>
        </div>

        {/* Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 rounded-lg"
            >
              {/* Certificate Thumbnail */}
              <div className="mb-4 relative">
                <img
                  src={achievement.certificate || "/placeholder.svg"}
                  alt={`${achievement.title} Certificate`}
                  className="w-full h-48 object-cover rounded-md shadow-md"
                />
                <button
                  onClick={() =>
                    setSelectedCertificate(achievement.certificate)
                  }
                  className="absolute bottom-2 right-2 bg-portfolio-primary text-white px-3 py-1 text-sm rounded-md shadow hover:bg-portfolio-primary/80 transition"
                >
                  View Certificate
                </button>
              </div>

              {/* Info */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-portfolio-primary/10 flex items-center justify-center text-2xl rounded-lg">
                    {achievement.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-portfolio-primary text-sm font-medium">
                      {achievement.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {achievement.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-700 font-medium mb-3">
                    {achievement.description}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {achievement.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Certificate Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]">
            <div className="relative max-w-5xl w-full p-4">
              {/* Close Button */}
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-400"
              >
                ✕
              </button>
              <img
                src={selectedCertificate}
                alt="Full Certificate"
                className="w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
