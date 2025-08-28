import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub } from "react-icons/fa";


const LeftColumn = () => {
  return (
    <div className="bg-gray-200 mt-7 p-6 space-y-6 md:col-span-1">
      
         <div>
      <h2 className="text-black font-semibold border-b-4 border-black pb-1 mb-3">
        CONTACT
      </h2>

      <p className="flex items-center mb-2">
        <FaPhone className="text-black mr-2 text-xs" />
        9863476766
      </p>

   
      <p className="flex items-center mb-2 text-xs">
        <FaEnvelope className="text-black mr-2" />
        sushilaneupane2001@gmail.com
      </p>

      <p className="flex items-center mb-2 text-xs">
        <FaMapMarkerAlt className="text-black mr-2 " />
        Kathmandu, Nepal
      </p>

      <p className="flex items-center mb-2">
        <FaGithub className="text-black mr-2" />
        <a
          href="https://github.com/sushilaneupane"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black-700 underline text-xs"
        >
          github.com/sushilaneupane
        </a>
      </p>
    </div>
      <div>
        <h2 className="text-black text-xm font-semibold border-b-4 border-black pb-1 mb-3">SKILLS</h2>
        <ul className="list-disc list-inside space-y-1  text-xs">
          <li>Frontend: HTML, CSS, JavaScript, React.js, Bootstrap</li>
          <li>Backend: Node.js, Express.js</li>
          <li>Database: MySQL</li>
          <li>Tools: Git & GitHub</li>
          <li>REST APIs, JWT</li>
          <li>Multer</li>
        </ul>
      </div>


      <div>
        <h2 className="text-black text-xm font-semibold border-b-4 border-black pb-1 mb-3">LANGUAGES</h2>
        <ul className="list-disc list-inside space-y-1 text-xs">
          <li>Nepali</li>
          <li>English</li>
        </ul>
      </div>

      <div>
        <h2 className="text-black font-semibold border-b-4 border-black pb-1 mb-3 text-xm">EDUCATION</h2>
        <div className="mb-3">
          <span className="font-bold text-xs">Padma Kanya Multiple Campus</span>
          <p className="text-xs">B.Sc. in Computer Science and Information Technology (CSIT) Tribhuvan University 2022 – Present</p>
        </div>
        <div className="mb-3">
          <span className="font-bold text-xs">Liverpool International College</span>
          <p className="text-xs">NEB (+2 Science) | Kathmandu, Nepal 2018 – 2020</p>
        </div>
        <div className="mb-3">
          <span className="font-bold text-xs">Janata Mavi School</span>
          <p className="text-xs">Secondary Education Examination (SEE) | Bagdula, Pyuthan | 2007 – 2017</p>
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
