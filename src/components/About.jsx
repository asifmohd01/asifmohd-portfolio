import Image from "../assets/image.png";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Background & Goals
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a motivated Software Engineer and B.Tech graduate in
              Information Science and Engineering from University Visvesvaraya
              College of Engineering, Bengaluru, with a CGPA of 7.8. I have a
              strong passion for developing optimized and user-friendly software
              solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My goal is to collaborate with experienced development teams,
              enhance my technical skills, and contribute to the success of
              organizations through innovative software solutions. I have
              hands-on experience with modern web technologies and a proven
              track record of building real-world applications.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-purple-50 p-6 shadow-rich-md hover-shadow-lift transition-all duration-300">
                <h4 className="font-semibold text-purple-600 mb-2">
                  Education
                </h4>
                <p className="text-gray-700">
                  B.Tech Information Science and Engg.
                </p>
                <p className="text-sm text-gray-500">CGPA: 7.98 (2021-2025)</p>
              </div>
              <div className="bg-blue-50 p-6 shadow-rich-md hover-shadow-lift transition-all duration-300">
                <h4 className="font-semibold text-blue-600 mb-2">Location</h4>
                <p className="text-gray-700">Bangalore, India</p>
                <p className="text-sm text-gray-500">
                  Available for opportunities
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img
                src={Image}
                alt="Developer workspace"
                className="w-full max-w-md shadow-rich-xl hover-shadow-lift transition-all duration-500"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-400 shadow-rich-lg blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
