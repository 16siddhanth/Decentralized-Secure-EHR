import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/./AboutUs.css";
import hospitalImage from "../images/hospital.png"; // Import the hospital image
import NavBar from "./NavBar";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <div className="hospital-image-container">
        <img
          src={hospitalImage} // Use the imported hospital image
          alt="Hospital"
          className="hospital-image"
        />
      </div>

      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col text-custom-blue space-y-8 w-3/5 p-8 bg-gray-800 shadow-lg rounded-lg transition-transform duration-10000 ease-in-out transform hover:scale-105">
          <div className="space-y-4">
            <h1 className="text-lg font-mono text-center">About Us</h1> {/* Center align the "About Us" heading */}
            <div className="about-content text-left"> {/* Left align the content */}
            <h2>Who I Am</h2>
            <p>
              I am Siddhanth Pradhan, a third-year Computer Science and Engineering student passionate about technology and innovation. This project is a personal initiative to showcase my understanding of blockchain, smart contracts, and decentralized applications (DApps). As a solo developer, I am committed to revolutionizing the way Electronic Health Records (EHR) are managed using cutting-edge technologies.
            </p>

            <h2>What I Do</h2>
            <p>
              This EHR management system I’ve developed provides a comprehensive solution for Doctors, Patients, and Diagnostic Centers. Leveraging the power of Ethereum blockchain, I’ve integrated secure data storage and smart contracts to control access and manage data seamlessly.
            </p>

            <h3>For Doctors</h3>
            <p>
              Doctors can access their assigned patient list, view patient records and medical history, and write comments and treatment plans for patient care.
            </p>

            <h3>For Patients</h3>
            <p>
              Patients can view their own medical records and history, upload new medical records, test reports, and other documents, and control which doctors can access their information.
            </p>

            <h3>For Diagnostic Centers</h3>
            <p>
              Diagnostic Centers can view comments and treatment plans from doctors and upload EHR reports to patient records, streamlining the process of data sharing.
            </p>

            <h2>My Commitment</h2>
            <p>
              I am committed to ensuring the integrity and security of patient data. The system I’ve developed guarantees that only authorized users can access patient records. Patients have full control over who can access their medical data and can grant or revoke access as needed.
            </p>

            <h2>Contact Me</h2>
            <p>
              I’d love to hear from you! If you have any questions or feedback about my project, feel free to contact me via email at: 16siddhanth@gmail.com
            </p>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="flex justify-center">
        <button
          className="bg-teal-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110 hover:bg-gray-600"
          onClick={() => {
            navigate("/");
          }}
        >
          Back to Home Page
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
