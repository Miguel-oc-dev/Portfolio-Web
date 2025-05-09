import profileImage from "../assets/images/profilepic.jpg";

const AboutMe = () => {
  return (
    <section className="about-section bg-gradient-to-b from-[#0e0e1e] via-[#121629] to-[#0a0f1f] text-white py-20">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-center gap-12">
        
        {/* Texto */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-[#4ECCA3] relative inline-block mb-6">
            <span className="highlight">About Me</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            <span className="text-white font-semibold"> Software Engineer </span>            with experience in scalable web application development, specializing in JavaScript, 
            Node.js, React, and AWS. Strong knowledge of SQL and NoSQL databases, REST API development, and agile methodologies. 
            Passionate about system performance optimization, data security, and cloud computing.</p><br></br>
            <p className="text-lg leading-relaxed text-gray-300">
            Seeking to join on a development team to contribute to the creation of innovative technological solutions. 
            My background includes experience in software architecture, microservices, and CI/CD pipelines. 
            I have worked on projects involving cloud-based solutions, security enhancements, 
            and process automation to improve system efficiency and scalability.
          </p>
        </div>

        {/* Imagen */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#4ECCA3] to-[#a547ca] rounded-full blur-xl opacity-60 group-hover:opacity-90 transition duration-500"></div>
          <img
            src={profileImage}
            alt="Profile"
            className="relative w-72 h-72 object-cover rounded-full border-4 border-[#4e78cc] shadow-xl z-10"
          />
        </div>
      </div>

      <style jsx>{`
        .highlight {
          display: inline-block;
          position: relative;
        }
        .highlight::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 6px;
          background: linear-gradient(to right, #4ECCA3, #a547ca);
          z-index: -1;
          border-radius: 3px;
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
