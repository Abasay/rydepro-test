import React from "react";
import { NextPage } from "next";
import { FaRoute, FaShieldAlt, FaChartLine, FaUserCheck } from "react-icons/fa";

const About = () => {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="bg-black text-white px-4 py-6 flex justify-between items-center">
        <div className="text-lg font-semibold">RYDEPRO</div>
        <div className="flex items-center space-x-4">
          <button className="hidden sm:block">Login</button>
          <button className="hidden sm:block bg-blue-600 px-4 py-2 rounded text-white">
            Sign Up
          </button>
          <button className="sm:hidden">
            <span className="text-lg">☰</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white px-4 py-16"
        style={{
          backgroundImage: "url('/path-to-flag-background.jpg')",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-4xl font-bold">
            Who We Are - Evolving a New Era of On-Demand Transportation
          </h1>
          <p className="mt-4">
            At RYDEPRO Inc., we're changing the way you think about on-demand
            transportation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="px-4 py-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar Navigation */}
          <aside>
            <ul className="space-y-4 text-gray-700">
              <li className="font-semibold text-black">Introduction</li>
              <li className="font-semibold text-black">Who We Are</li>
              <li>Brief Introduction</li>
              <li className="font-semibold text-black">
                Superior Service Accessibility
              </li>
              <li className="font-semibold text-black">Diverse and Well Maintained Fleet</li>
              <li className="font-semibold text-black">Customer Value and Engagement</li>
              <li className="font-semibold text-black">Innovation and Technology</li>
              <li className="font-semibold text-black">Market Strategy and Expansion</li>
              <li className="font-semibold text-black">Sustainability and Security</li>
              <li className="font-semibold text-black">Safety and Compliance</li>
            </ul>
          </aside>

          {/* Main Section */}
          <section className="col-span-2 space-y-6">
            {/* Who We Are */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Who we are?</h2>
              <h3 className="text-xl font-semibold mb-2">Brief Introduction</h3>
              <p className="text-gray-600 leading-relaxed">
                As a U.S. <strong>Military Veteran-Owned Business</strong>, we
                uphold the highest standards, embodying the values of{" "}
                <em>integrity, discipline,</em> and <em>excellence</em> learned
                in the military. Our commitment to these principles ensures that
                every ride with RYDEPRO is{" "}
                <strong>safe, reliable, and exceptional</strong>.
              </p>
            </div>
            </section>

            {/* Superior Service Accessibility Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Superior Service Accessibility
              </h2>
              <h3 className="text-xl font-semibold mb-2">
                Superior Service Quality and User Experience
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We're committed to making every ride great for you. From faster
                response times to more comfortable and eco-friendly vehicles, we
                prioritize your comfort and convenience.
              </p>
              <ul className="list-disc ml-8 mt-4 text-gray-600">
                <li>Fuel-efficient vehicles (gas, fuel, diesel)</li>
                <li>Electric vehicles</li>
                <li>Autonomous Vehicles</li>
              </ul>
              <h4 className="text-2xl font-bold mb-3">
                Accessibility for All
              </h4>
              <p className="text-gray-600 leading-relaxed">
              We believe transportatio should be accessible to everyone. Our services cater
               to individuals with diverse needs, including those with disabilities. We offer
                features like heelchairs-acessible vehicles (coming soon) and in-app options to
                request special assistance, ensuring everyone can travel with ease and dignity. 
                We comply with the Americans with Disabilities Act and the Convention on the Rights of Persons with Disabilities (CRPD).
              </p>
            </div>

            {/* Diverse and Well Maintained Fleet Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
              Diverse and Well Maintained Fleet
              </h2>
              <p className="text-gray-600 leading-relaxed">
              Our fleet caters to a wide range of preferences and income levels, ensuring that we have
                the perfect vehicle for every need. We offer an extensive selection of vehicle classes, including
              </p>
              <h3 className="text-2xl font-bold mb-3">
                1. Traditional Fleet
              </h3>
              <ul className="list-disc ml-8 mt-4 text-gray-600">
              <li>Sedans: Ideal for daily commutes and business professionals who value comfort and style</li>
                <li>Minivans: Perfect for family outings and group travel, providing ample luxury andd convenience</li>
                <li>Executive SUVs: Desidned for business professionals who prioritize luxury and sophistication</li>
                <li>Luxury Sedans: Offering a premium travel experience with top-of-the-line features and elegance</li>
                <li>Sprinters and Charter Buses: Excellent for a accommodating larger gropus with comfort and efficiency</li>
                <li>Transit Shuttle Buses: Reliable and efficient for high-capacity routes, ensuring smooth and timely transportation</li>
              </ul>

              <h4 className="text-2xl font-bold mb-3">
               2.Electric Fleet
              </h4>
              <p className="text-gray-600 leading-relaxed">
              In addition  we are proud to offer a variety of electric vehicles to meet the increasing
               demand for eco-friendly transportation options:
              </p>
              <ul className="list-disc ml-8 mt-4 text-gray-600">
                <li>Electric Sedans: Combining modern designs with energy efficiency, perfect for electric power</li>
                <li>Electric SUVs: Coming soon in 2025, offering spacious interiors and the benefits of electric power</li>
                <li>Electric Luxury Vehicles: For those seeking a susitainable yet luxurious travel experiences</li>
                <li>Electric Minivans with plug-in Hybrid: Ideal for families looking for an eco-friendly and versatile option</li>
                <li>Electric Buses: Providing a green solution for larger groups and high-capacity routes.</li>
                <li>Transit Shuttle Buses: Offering the flexibility of both electric and gasoline power for extended</li>
              </ul>
              </div>

              
            {/* Customer Value and Engagement Section */}
            <section
            id="Customer Value"
            className="mb-8">

              <h2 className="text-2xl font-bold mb-4">
              Customer Value and Engagement
              </h2>
              <h3 className="text-2xl font-bold mb-3">
              Customer Pricing and Attractive Incentives
              </h3>
              <p className="text-gray-600 leading-relaxed">
              We offer competitive pricing and attractive incentives to both riders and drivers. Our loyalty and promotions
               ensure you get the best value for your money while our drivers enjoy higher payouts and flexible working conditions.
              </p>
              <h4 className="text-2xl font-bold mb-3">
              Customer Centric Approach
              </h4>
              <p className="text-gray-600 leading-relaxed">
              Our customer-centric approach sets us apart. We listen to you and continously improve our services
               based on your feedback. Our 24/7 customer support team is always ready to assist with any inquiries
                or issues, ensuring a smooth and enjoyable experience foe every rider.
              </p>
              <h5 className="text-2xl font-bold mb-3">
              Community Engagement and Social Responsibility
              </h5>
              <p className="text-gray-600 leading-relaxed">
              We're committed to giving back to the communities we serve. Through various community programs and
               partnerships with local charities, we strive to make a positive impact
              </p>
              </section>

              {/* Innovation and Technology Section */}
              <section id="technology"
              className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                Innovation and Technology
                </h2>
                {/* Cutting Edge of Technology Subsection */}
                <h3 className="text-2xl font-bold mb-3">
                    Cutting Edge Technology
                </h3>
                <p className="text-gray-600 leading-relaxed">
                We're the <strong className="font-semibold">cutting edge of technology </strong> using advanced algorithms, blockchain, and smart city tech
                 to make sure you get the <strong> fastest, most efficient ride </strong> every time.
                </p>
                {/* AI for Competitive Edge Subsection */}
                <h3 className="text-xl font-semibold mb-3">
                    Aritificial Intelligence for a Competitive Edge
                </h3>
                <p className="text-gray-600 leading-relaxed">
                AI is the core of our operations, helping us innovate and sta efficient. With AI, we can:
                </p>

                {/* AI Benefits List */}
                <ul className="space-y-6">
                    <li className="flex items-center">
                        <FaRoute
                        className="text-blue-500 mr-3" />
                        <span>
                            <strong>Optimize Routes</strong> Find the best routes using real-time traffic data
                            and historical travel times.
                        </span>
                    </li>
                    <li className="flex items-center">
                        <FaShieldAlt
                        classname="text-green-500 mr-3" />
                        <span>
                            <strong>Enhanced Safety:</strong>
                            Monitor driver behaviour, detect potential hazards, and provide real-time alerts
                        </span>
                    </li>
                    <li className="flex items-center">
                        <FaChartLine
                        className="text-yellow-500 mr-3" />
                        <span>
                            <strong>Demand Forecasting:</strong>
                            Predicts future demands by analysing historical data and market trends.
                        </span>
                    </li>
                    <li className="flex items-center">
                        <FaUserCheck
                        className="text-purple-500 mr-3" />
                        <span>
                            <strong>Personalized User Experience:</strong>
                            Tailored ride options ased on your preferences and past behaviour,making your experience even better.
                        </span>
                    </li>
                </ul>
              </section>

            {/* Market Strategy and Expansion Section */}
            <section id="Market"
             className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                Market Strategy and Expansion
                </h2>
                {/* Market Penetration and Reach Subsection */}
                <h3 className="text-2xl font-bold mb-3">
                    Market Penetration and Reach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    We're starting with a focused approach in a select markets,but our vision is global.
                    We aim to establish a strong presence by addressing the unique needs of each community we serve 
                    before expanding our reach to new horizons.
                </p>
                {/* Strategic and Global Partnerships Subsectio */}
                <h4 className="text-2xl font-bold mb-3">
                    Strategic and Global Partnerships
                </h4>
                <p className="text-gray-600 leading-relaxed">
                    We believe in the power of collaboration. By forming strategic local to global partnerships. We provide exclusive offers and seamless travel experiences. Our Partnerships
                    ensure that our services are always available to those who need them most. We're always looking for neew partnerships with organizations worldwide, aiming to cater to every
                    income level and need. Whether you are a low-income individual, middle-class professional, or part of the upper class, we have tailored solutions for you.
                </p>
                {/* Future Vision and Goals Subsection */}
                <h5 className="text-2xl font-bold mb-3">
                    Future Vision and Goals
                </h5>
                <p className="text-gray-600 leading-relaxed">
                    Our Vision for the future includes expanding to new markets, introducing innovative services, and cntinously improving our technology. We aim to be the global leader in on-demand
                    transportation, setting new standards for excellence and sustainability.
                </p>
          </section>

            {/* Sustainability and Security Section */}
            <section id="Security"
             className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
                Sustainability and Security
            </h2>

            {/* Sustainability and Social Impact Subsection */}
            <h3 className="text-2xl font-bold mb-3">
                Sustainability and Social Impact
            </h3>
            <p className="text-gray-600 leading-relaxed">
                Sustainability is at the heart of what we do. We're committed to reducing our carbon footprint and contributing to a reener planet. Our initiatives are designed to make a positive impact on the environment and the communities we serve.
            </p>
            {/* Data Privacy and Security Subsection */}
            <h4 className="text-2xl font-bold mb-3">
                Data Privacy and Security
            </h4>
            <p className="text-gray-600 leading-relaxed">
                We're committed to protecting your privacy and ensuring the confidentiality of your information. All conversatio and interactions during rides are kept strictly confidential. We do not allow drivers or operators to post any information online.
                The data we collect from users and drivers is strictly maintained and protected against unauthorized access. We adhere to all relevant data privacy laws and regulations, including those in the US, Europe, and other regions. We do not sell
                information and ensue that all data is handled with the utmost care and security 
            </p>
            </section>

        {/* Safety and compliance Section */}
        <section id="Safety"
         className="mb-8">
            <h2 className="text-2xl font-bold mb-3">
                Safety and Compliance
            </h2>
            {/* Rigorous Backgroud Checks and Safety Subsection */}
            <h3 className="text-2xl font-bold mb-3">
            Rigorous Backgroud Checks and Safety
            </h3>
            <p className="text-gray-600 leading-relaxed">
                Safety is our tpo priority. All out teams, including operators, undergo extensive three phase background checks,
                 including Department of Justice (DOJ) and FBI fingerprinting. We meticulously review driving records and criminal
                  histories to ensure our platform is safe for oth riders and drivers. Our rigorous safety protocols and continous
                   monitoring create a secure environment for everyone.
            </p>
            {/* Regulatory Compliance and Safety Subsection */}
            <h4 className="text-2xl font-bold mb-3">
                Regulatory Compliance and Safety
            </h4>
            <p className="text-gray-600 leading-relaxed">
            Safety is our tpo priority. All out teams, including operators, undergo extensive three phase background checks,
             including Department of Justice (DOJ) and FBI fingerprinting. We meticulously review driving records and criminal
              histories to ensure our platform is safe for oth riders and drivers. Our rigorous safety protocols and continous
               monitoring create a secure environment for everyone. 
            </p>
            </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 mt-12 text-center text-gray-600 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold mb-4">About Us</h3>
              <p>
                At RYDEPRO Inc., we go beyond traditional transportation
                services, harnessing advanced technology to redefine on-demand
                mobility.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>Promotions</li>
                <li>Contact Us</li>
                <li>Partner</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Get the App</h3>
              <div className="flex space-x-4">
                <img
                  src="/path-to-app-store-badge.png"
                  alt="App Store"
                  className="h-10"
                />
                <img
                  src="/path-to-google-play-badge.png"
                  alt="Google Play"
                  className="h-10"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="mt-6">
          © 2024 Katab Enterprises Inc. All Rights Reserved. RYDEPRO®
        </p>
      </footer>
    </div>
  );
};

export default About;
