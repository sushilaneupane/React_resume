import React from "react";
import { FaUser, FaBriefcase, FaGraduationCap } from "react-icons/fa";


const RightColumn = () => {
  return (
    <div className="md:col-span-2 p-4">
      {/* Timeline + Content in a row */}
      <div className="flex flex-row items-start gap-8">
        {/* Timeline */}
        <div className="flex flex-col items-center w-5 min-h-screen relative">
          {/* First Item */}
          <div className="relative flex flex-col items-center mb-7">
            {/* Circle Icon */}
            <div className="w-7 h-7 rounded-full bg-black border-[3px] border-gray-800 flex items-center justify-center text-white z-10">
              <FaUser className="text-white" />
            </div>

            {/* Vertical Line */}
            <div className="absolute top-0 bottom-[-50px] w-[3px] bg-gray-800 z-0"></div>

            {/* Small Content Dot */}
            <div className="relative bg-gray-100 border-2 border-black w-3 h-3 rounded-full shadow-md my-6 z-10"></div>

          </div>

          {/* Second Item */}
          <div className="relative flex flex-col items-center my-10 mb-16">
            <div className="w-7 h-7 rounded-full bg-black border-[3px] border-gray-800 flex items-center justify-center text-white z-10">
              <FaBriefcase className="text-white" />
            </div>
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-[-60px] w-[3px] bg-gray-800 z-0"></div>

            {/* Multiple small timeline dots */}
            <div className="relative bg-gray-100 border-2 border-black w-3 h-3 rounded-full shadow-md my-12 z-10"></div>
            <div className="relative bg-gray-100 border-2 border-black w-3 h-3 rounded-full shadow-md my-12 z-10"></div>
            <div className="relative bg-gray-100 border-2 border-black w-3 h-3 rounded-full shadow-md my-12 z-10"></div>
          </div>

          {/* Third Item */}
          <div className="relative flex flex-col items-center my-10">
            {/* Circle Icon */}
            <div className="w-7 h-7 rounded-full bg-black border-[3px] border-gray-800 flex items-center justify-center text-white z-10">
              <FaGraduationCap className="text-white" />
            </div>

            {/* Vertical Line */}
            <div className="absolute top-0 bottom-[-40px] w-[3px] bg-gray-800 z-0"></div>

            {/* Small timeline dots */}
            <div className="relative bg-gray-100 border-2 border-black w-3 h-3 rounded-full shadow-md my-6 z-10"></div>
            <div className="relative bg-gray-100 border-2 border-black w-3 h-3 rounded-full shadow-md my-6 z-10"></div>
          </div>

        </div>

        <div className="flex-1">
          {/* Profile Section */}
          <div className="section profile mb-8">
            <h2 className="text-base font-semibold border-b-4 border-black pb-2 mb-3">
              PROFILE
            </h2>
            <p className="text-justify text-xs">
              Motivated and detail-oriented final-year B.Sc. CSIT student
              passionate about full-stack web development. Skilled in frontend
              and backend technologies with hands-on experience in responsive
              websites, APIs, and UI components. Eager to contribute to impactful
              projects in a dynamic team environment.
            </p>
          </div>

          {/* Projects Section */}
          <div className="section projects">
            <h2 className="text-base font-semibold border-b-4 border-black pb-2 mb-3">
              PROJECTS
            </h2>

            {/* Project 1 */}
            <div className="mb-4 border-b border-gray-300 pb-2">
              <h4 className="text-sm font-semibold mb-1">
                Personal Portfolio Website
              </h4>
              <a
                href="https://github.com/sushilaneupane/personal-website"
                className="ml-8 text-black-600 underline mb-2 block text-xs"
              >
                github.com/sushilaneupane/personal-website
              </a>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Developed a responsive website to showcase skills</li>
                <li>Ensured smooth UI/UX using Bootstrap grid system</li>
                <li>Tech Stack: HTML, CSS, Bootstrap</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="mb-4 border-b border-gray-300 pb-2">
              <h4 className="text-sm font-semibold mb-1">React Calculator</h4>
              <a
                href="https://github.com/sushilaneupane/React-calculator"
                className="ml-8 text-black-600 underline mb-2 block text-xs"
              >
                github.com/sushilaneupane/React-calculator
              </a>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Built a dynamic calculator app using React.js</li>
                <li>Used React hooks and reusable components</li>
                <li>Tech Stack: React.js</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="mb-4 border-b border-gray-300 pb-2">
              <h4 className="text-sm font-semibold mb-1">E-commerce Backend</h4>
              <a
                href="https://github.com/sushilaneupane/ecommerce-backend"
                className="ml-8 text-black-600 underline mb-2 block text-xs"
              >
                github.com/sushilaneupane/ecommerce-backend
              </a>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Designed scalable MySQL database architecture</li>
                <li>Built REST APIs with Node.js for listings, auth, orders</li>
                <li>Used JWT for authentication & Multer for uploads</li>
                <li>Tech Stack: Node.js, Express, MySQL, JWT, Multer</li>
              </ul>
            </div>

            {/* Project 4 */}
            <div className="mb-4 pb-2">
              <h4 className="text-sm font-semibold mb-1">
                E-commerce Frontend
              </h4>
              <a
                href="https://github.com/sushilaneupane/ecommerce-frontend"
                className="ml-8 text-black-600 underline mb-2 block text-xs"
              >
                github.com/sushilaneupane/ecommerce-frontend
              </a>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Created responsive e-commerce UI</li>
                <li>Integrated backend APIs with Axios</li>
                <li>Tech Stack: React.js, Bootstrap, Axios</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightColumn;
