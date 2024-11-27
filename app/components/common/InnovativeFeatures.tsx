"use client";
import { useState } from "react";
import Image from "next/image";

const InnovativeFeatures: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const features = [
    {
      title: "AI Vehicle Coming Soon",
      description: "Get ready for the future with our AI-powered vehicles.",
    },
    {
      title: "Multi-Modal Integration",
      description:
        "Seamlessly integrate your app with other transportation services.",
    },
    {
      title: "Innovative Payment Coming Soon",
      description:
        "Blockchain technology and SEC-approved stable coins.",
    },
  ];

  return (
    <section className="flex flex-col items-center">
      {/* Features Section */}
        <h2 className="text-sm uppercase tracking-widest">Features</h2>
        <h1 className="text-[2.5rem]">Innovative Features</h1>

        <div className="flex ms:flex-wrap lg:flex-row items-center justify-between w-full text-white px-8 py-16 gap-8">
            <div className="flex flex-col gap-8 w-full lg:w-1/2">

                <div className="flex flex-col gap-6">
                {features.map((feature, index) => (
                  <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`p-4 flex flex-col gap-3 border-l-2 transition ${
                    activeIndex === index
                      ? "border-white bg-gradient-to-r from-white/10 to-transparent"
                      : "border-transparent"
                  } cursor-pointer`}
                >
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
                ))}
                </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <Image
                src="/mockrocket.png"
                alt="RydePro Mobile"
                width={266}
                height={531}
                className="block"
                />
            </div>
        </div>

    </section>
  );
};

export default InnovativeFeatures;
