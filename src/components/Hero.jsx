"use client";

const Hero = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/AsifMohd_Resume.pdf"; // Path from public folder
    link.download = "Asif_Mohd_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Asif Mohd
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl">
              Motivated Software Engineer with a strong passion for developing
              optimized and user-friendly software solutions. Seeking
              opportunities to collaborate with experienced development teams
              and contribute to organizational success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={downloadResume}
                className="bg-purple-600 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Download Resume
              </button>

              <a
                href="https://github.com/asifmohd01"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg text-center"
              >
                View GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/asifmohd01/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-cyan-500 text-cyan-600 px-8 py-3 font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg text-center"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 border-purple-200">
                <img
                  src="/Asif_Image.jpeg" // Path from public folder
                  alt="Asif Mohd - Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-500/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
