'use client';
import { useState } from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const About = () => {
  const [activeSection, setActiveSection] = useState("Introduction");

  const renderContent = () => {
    switch (activeSection) {
      case "Introduction":
        return (
          <div className="flex-grow flex flex-col items-center justify-center px-12 py-8 bg-white">
            <div className="flex flex-col items-center mb-8" style={{ gap: "0px" }}>
              <img
                src="/voblogo.jpg"
                alt="Veteran Owned Business"
                style={{ height: "218.84px", width: "300px", objectFit: "cover" }}
                className="h-24"
              />
              <span className="text-gray-600 text-lg font-medium mt-2" style={{ color: "#4A5568" }}>
                Veteran Owned Business
              </span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-left w-full max-w-2xl">
              <h2 className="font-bold mb-4" style={{ fontSize: "24px" }}>
                Our Mission is Simple
              </h2>
              <p className="text-gray-600 leading-relaxed mb-2" style={{ fontSize: "18px" }}>
                To create a seamless, efficient, and sustainable transportation
                experience tailored to your needs.
              </p>
              <p className="text-gray-600 leading-relaxed" style={{ fontSize: "18px" }}>
                Leveraging the latest technology and innovative solutions, we
                bring you the future of mobility.
              </p>
            </div>
          </div>
        );
      case "Brief Introduction":
        return (
          <div className="text-left w-full max-w-2xl">
            <h2 className="font-bold mb-4" style={{ fontSize: "24px" }}>
              Who we Are?
            </h2>
            <h3 className="font-bold mb-4" style={{ fontSize: "24px" }}>
              Brief Introduction
            </h3>
            <p className="text-gray-600 leading-relaxed mb-2" style={{ fontSize: "18px" }}>
              As a U.S. <strong>Military Veteran-Owned Business</strong>, we
              uphold the highest standards, embodying the values of{" "}
              <em>integrity, discipline,</em> and <em>excellence</em> learned
              in the military. Our commitment to these principles ensures that
              every ride with RYDEPRO is{" "}
              <strong>safe, reliable, and exceptional</strong>.
            </p>
          </div>
        );
        case "Superior Service Quality and User Experience":
          return (
            <div className="text-left w-full max-w-2xl">
              <h2 className="font-bold mb-4" style={{ fontSize: "24px" }}>
                Superior Service Accessibility
              </h2>
              <h3 className="font-bold mb-4" style={{ fontSize: "24px" }}>
              Superior Service Quality and User Experience
              </h3>
              <p className="text-gray-600 leading-relaxed mb-2" style={{ fontSize: "18px" }}>
                We're committed to making every ride great for you. From faster response times to more
                comfortable and eco-friendly vehicles, we prioritize your comfort and convenience.
                </p>

                Our fleet includes:

                <ul className="list-disc ml-8 mt-4 text-gray-600">
                <li>Fuel-efficient vehicles (gas, fuel, diesel)</li>
                <li>Electric vehicles</li>
                <li>Autonomous Vehicles</li>
              </ul>
              </div>
          );
          case "Accessibility for All":
            return (
              <div className="text-left w-full max-w-2xl ">
                <h2 className="font-bold mb-4" style={{ fontSize: "24px" }}>
                Superior Service Accessibility
                </h2>
                <h3 className="font-bold mb-4" style={{ fontSize: "24px" }}>
              Superior Service Quality and User Experience
              </h3>
              <p className="text-gray-600 leading-relaxed mb-2" style={{ fontSize: "18px" }}>
                We're committed to making every ride great for you. From faster response times to more
                comfortable and eco-friendly vehicles, we prioritize your comfort and convenience.
                </p>

                Our fleet includes:

                <ul className="list-disc ml-8 mt-4 text-gray-600">
                <li>Fuel-efficient vehicles (gas, fuel, diesel)</li>
                <li>Electric vehicles</li>
                <li>Autonomous Vehicles</li>
              </ul>

            <h4 className="font-bold mb-4" style={{ fontSize: "24px" }}>
              Accessibility for All
            </h4>
                <p className="text-gray-600 leading-relaxed mb-2" style={{ fontSize: "18px" }}>
                  We believe transportation should be accessible to everyone. Our services cater to individuals
                  with diverse needs, including those with disabilities. We offer features like wheelchairs-
                  accessible vehicles (coming soon) and in-app options to request special assistance, ensuring
                  everyone can travel with ease and dignity. We comply with the Americans with Disabilities Act
                  and the Convention on the Rights of Persons with Disabilities (CRPD).
                </p>
              </div>
            );
      default:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md text-center w-full max-w-2xl">
            <h2 className="font-bold mb-4" style={{ fontSize: "24px" }}>
              Welcome to RYDEPRO
            </h2>
            <p className="text-gray-600 leading-relaxed" style={{ fontSize: "18px" }}>
              Select a topic from the sidebar to learn more about our mission and values.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section
        className="relative flex justify-center items-center bg-cover bg-center h-[30vh]"
        style={{
          backgroundImage: "url('usbanner.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold">
            Who We Are - Evolving a New Era of On-Demand Transportation
          </h1>
          <p className="mt-4">
            At RYDEPRO Inc., we’re changing the way you think about on-demand
            transportation.
          </p>
        </div>
      </section>

      <section className="flex-grow flex bg-gray-50">
        <aside className="bg-white py-8 px-6 ml-4" style={{ width: "280px" }}>
          <nav>
            <ul className="space-y-4">
              <li
                className={`text-lg font-semibold cursor-pointer ${
                  activeSection === "Introduction" ? "text-black underline" : "text-gray-600"
                }`}
                onClick={() => setActiveSection("Introduction")}
              >
                Introduction
              </li>
              <li>
                <div>
                  <span
                    className={`cursor-pointer ${
                      activeSection === "Brief Introduction" ? "text-black underline" : "text-gray-600"
                    }`}
                    onClick={() => setActiveSection("Brief Introduction")}
                  >
                    Who We Are
                  </span>
                  {activeSection === "Brief Introduction" && (
                    <ul className="ml-4 mt-2 space-y-2">
                      <li
                        className={`text-gray-600 hover:text-black cursor-pointer ${
                          activeSection === "Brief Introduction" ? "underline" : ""
                        }`}
                        onClick={() => setActiveSection("Brief Introduction")}
                      >
                        Brief Introduction
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <div>
                  <span
                   className={`cursor-pointer ${
                    activeSection === "Superior Service Quality and User Experience" ? "text-black underline" : "text-gray-600"
                  }`}
                  onClick={() => setActiveSection("Superior Service Quality and User Experience")}
                  >
                    Superior Service Accessibility
                    </span>
                    {["Superior Service Quality and User Experience", "Accessibility for All"].includes(activeSection) && (
                    <ul className="ml-4 mt-2 space-y-2">
                      <li
                        className={`text-gray-600 hover:text-black cursor-pointer ${
                          activeSection === "Superior Service Quality and User Experience" ? "underline" : ""
                        }`}
                        onClick={() => setActiveSection("Superior Service Quality and User Experience")}
                      >
                        Superior Service Quality and User Experience
                      </li>
                      <li
                        className={`text-gray-600 hover:text-black cursor-pointer ${
                          activeSection === "Accessibility for All" ? "underline" : ""
                        }`}
                        onClick={() => setActiveSection("Accessibility for All")}
                      >
                        Accessibility for All
                      </li>
                    </ul>
                        )}
                        </div>
                        </li>
              <li className="text-gray-600 hover:text-black cursor-pointer">
                Diverse and Well Maintained Fleet
              </li>
              <li className="text-gray-600 hover:text-black cursor-pointer">
                Customer Value and Engagement
              </li>
              <li className="text-gray-600 hover:text-black cursor-pointer">
                Innovation and Technology
              </li>
              <li className="text-gray-600 hover:text-black cursor-pointer">
                Market Strategy and Expansion
              </li>
              <li className="text-gray-600 hover:text-black cursor-pointer">
                Sustainability and Security
              </li>
              <li className="text-gray-600 hover:text-black cursor-pointer">
                Safety and Compliance
              </li>
            </ul>
          </nav>
        </aside>

        <div className="flex-grow flex flex-col items-start px-12 py-8 bg-white">
          {renderContent()}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
