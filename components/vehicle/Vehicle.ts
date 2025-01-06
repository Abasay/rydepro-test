// Vehicle.ts
import premiumSedan from "@/public/premium-sedan.png";
import premiumElectricSedan from "@/public/Premium-Electric-Sedan.png";
import premiumMinivan from "@/public/premiumMini.png";
import executiveSudan from "@/public/ExecutiveSudan.png";
import executiveElecSudan from "@/public/Executive-Electric-Sedan.png";
import executiveMini from "@/public/ExecutiveSUV.png";
import luxurySudan from "@/public/LuxurySudan.png";
import luxuryElec from "@/public/Luxury-Electric-Sedan.png";
import luxuryMini from "@/public/LuxurySUV.png";
import commercialTrans from "@/public/TransitVan.png";
import commercialSprint from "@/public/Sprinter.png";
import commercialBus from "@/public/Bus.png";

import { StaticImageData } from "next/image";
// Define the shape of the vehicle data
export interface VehicleInfo {
  image: string | StaticImageData;
  passengers: number | string;
  luggage: string;
  times: string[];
}

export interface VehicleData {
  [tier: string]: {
    [type: string]: VehicleInfo;
  };
}

// Centralized vehicle data
export const vehicleData: VehicleData = {
  PREMIUM: {
    Sedan: {
      image: premiumSedan,
      passengers: 3,
      luggage: "Varies",
      times: [
        "60 mins - Airport Domestic 🛫",
        "60 mins - Airport International 🌍",
      ],
    },
    "Electric Sedan": {
      image: premiumElectricSedan,
      passengers: 3,
      luggage: "Varies",
      times: ["60 mins - Airport Domestic 🛫", "5 mins - Intercity 🏙️"],
    },
    Minivan: {
      image: premiumMinivan,
      passengers: 5,
      luggage: "Varies",
      times: ["65 mins - Cruises 🛳️", "7 mins - Intercity 🏙️"],
    },
  },
  EXECUTIVE: {
    Sedan: {
      image: executiveSudan,
      passengers: 3,
      luggage: "Varies",
      times: ["70 mins - Airport Domestic 🛫", "70 mins - Cruises 🛳️"],
    },
    "Electric Sedan": {
      image: executiveElecSudan,
      passengers: 3,
      luggage: "Varies",
      times: ["70 mins - Airport International 🌍", "8 mins - Intercity 🏙️"],
    },
    SUV: {
      image: executiveMini,
      passengers: 6,
      luggage: "Varies",
      times: ["75 mins - Cruises 🛳️", "10 mins - Intercity 🏙️"],
    },
  },
  LUXURY: {
    Sedan: {
      image: luxurySudan,
      passengers: 3,
      luggage: "Varies",
      times: ["80 mins - Airport Domestic 🛫", "80 mins - Cruises 🛳️"],
    },
    "Electric Sedan": {
      image: luxuryElec,
      passengers: 3,
      luggage: "Varies",
      times: ["80 mins - Airport International 🌍", "15 mins - Intercity 🏙️"],
    },
    SUV: {
      image: luxuryMini,
      passengers: 6,
      luggage: "Varies",
      times: ["90 mins - Cruises 🛳️", "15 mins - Intercity 🏙️"],
    },
  },
  "COMMERCIAL BUSES": {
    "Transit Van": {
      image: commercialTrans,
      passengers: "Customized",
      luggage: "Varies",
      times: [
        "Customized - Airport International 🌍",
        "Customized - Intercity 🏙️",
      ],
    },
    Sprinters: {
      image: commercialSprint,
      passengers: "Customized",
      luggage: "Varies",
      times: [
        "Customized - Airport International 🌍",
        "Customized - Intercity 🏙️",
      ],
    },
    Minivan: {
      image: commercialBus,
      passengers: "Customized",
      luggage: "Varies",
      times: [
        "Customized - Airport International 🌍",
        "Customized - Intercity 🏙️",
      ],
    },
  },
};
