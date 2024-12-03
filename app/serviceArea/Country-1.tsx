import React from "react";

const Country1: React.FC = () => {
  return (
    <div className="">
      {/* Container for all continents */}
      <div className="space-y-8">
        {/* North America Section */}
        <div>
          <h2 className="text-[24px] font-[700] text-[#0e0e0e] mb-4">NORTH AMERICA</h2>

          {/* United States */}
          <div className="mb-6">
            <h3 className="text-[20px] font-[700] text-[#0E0E0E] mb-2 flex items-center">
              🇺🇸 United States US
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
              <div>
                <h4 className="font-bold text-[20px] text-[#0E0E0E]">Southeast</h4>
                <ul className="font-[500] text-[16px] text-[#0E0E0E]">
                <li>Alabama</li>
                <li>Arkansas</li>
                <li>Florida</li>
                <li>Georgia</li>
                <li>Kentucky</li>
                <li>Louisiana</li>
                <li>Mississippi</li>
                <li>North Carolina</li>
                <li>South Carolina</li>
                <li>Tennessee</li>
                <li>Central Colorado</li>
                <li>Kansas</li>
                <li>Montana</li>
                <li>Nebraska</li>
                <li>North Dakota</li>
                <li>South Dakota</li>
                <li>Wyoming</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[20px] text-[#0E0E0E]">Midwest</h4>
                <ul className="font-[500] text-[16px] text-[#0E0E0E]">
                <li>Illinois</li>
                <li>Indiana</li>
                <li>Iowa</li>
                <li>Michigan</li>
                <li>Minnesota</li>
                <li>Missouri</li>
                <li>Ohio</li>
                <li>Wisconsin</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[20px] text-[#0E0E0E]">Mid Atlantic</h4>
                <ul className="font-[500] text-[16px] text-[#0E0E0E]">
                <li>Delaware</li>
                <li>District of Columbia</li>
                <li>Maryland</li>
                <li>New Jersey</li>
                <li>New York</li>
                <li>Pennsylvania</li>
                <li>Virginia</li>
                <li>West Virginia</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[20px] text-[#0E0E0E]">North East</h4>
                <ul className="font-[500] text-[16px] text-[#0E0E0E]">
                <li>Connecticut</li>
                <li>Maine</li>
                <li>Massachusetts</li>
                <li>New Hampshire</li>
                <li>Rhode Island</li>
                <li>Vermont</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[20px] text-[#0E0E0E]">South</h4>
                <ul className="font-[500] text-[16px] text-[#0E0E0E]">
                  <li>Texas</li>
                  <li>Oklahoma</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[20px] text-[#0E0E0E]">Central</h4>
                <ul className="font-[500] text-[16px] text-[#0E0E0E]">
                <li>Colorado</li>
                <li>Kansas</li>
                <li>Montana</li>
                <li>Nebraska</li>
                <li>North Dakota</li>
                <li>South Dakota</li>
                <li>Wyoming</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[20px] text-[#0E0E0E]">Southwest</h4>
                <ul className="font-[500] text-[16px] text-[#0E0E0E]">
                <li>Arizona</li>
                <li>New Mexico</li>
                <li>Neveda</li>
                <li>Utah</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[20px] text-[#0E0E0E]">West Coast</h4>
                <ul className="font-[500] text-[16px] text-[#0E0E0E]">
                  <li>California</li>
                  <li>Oregon</li>
                  <li>Washington</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[20px] text-[#0E0E0E]">Northwest</h4>
                <ul className="font-[500] text-[16px] text-[#0E0E0E]">
                <li>Idaho</li>
                <li>Montana</li>
                <li>Washington</li>
                <li>Wyoming</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Canada */}
          <div className="mb-6">
            <h3 className="text-[20px] font-[700] text-[#0E0E0E] mb-2 flex items-center">
              🇨🇦 Canada CA
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div>
                <h4 className="font-bold text-[20px] text-[#0E0E0E]">Pacific</h4>
                <ul className="font-[500] text-[16px] text-[#0E0E0E]">
                  <li>British Columbia</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[20px] text-[#0E0E0E]">Prairies</h4>
                <ul className="font-[500] text-[16px] text-[#0E0E0E]">
                  <li>Alberta</li>
                  <li>Saskatchewan</li>
                  <li>Manitoba</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[20px] text-[#0E0E0E]">Central Canada</h4>
                <ul className="font-[500] text-[16px] text-[#0E0E0E]">
                  <li>Ontario</li>
                  <li>Quebec</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[20px] text-[#0E0E0E]">Atlantic Canada</h4>
                <ul className="font-[500] text-[16px] text-[#0E0E0E]">
                <li>New Brunswick</li>
                <li>Newfoundland and Labrador</li>
                <li>Nova Scotia</li>
                <li>Prince Edward Island</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[20px] text-[#0E0E0E]">Canadian Territories</h4>
                <ul className="font-[500] text-[16px] text-[#0E0E0E]">
                <li>Yukon</li>
                <li>Whitehorse</li>
                <li>Northwest Territories</li>
                <li>Yellowknife, Inuvik</li>
                <li>Nunavut</li>
                <li>Iqaluit, Rankin Inlet</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bermuda */}
          <div className="mb-6">
            <h3 className="text-[20px] font-[700] text-[#0E0E0E] mb-2 flex items-center">
              🇧🇲 Bermuda BM
            </h3>
            <ul className="font-[500] text-[16px] text-[#0E0E0E]">
            <li>Devonshire DEV</li>
            <li>Hamilton HA</li>
            <li>Paget PAG</li>
            <li>Pembroke PEM</li>
            <li>Saint {`George's`} SGE</li>
            <li>Sandys SAN</li>
            <li>{`Smith's`} SMI</li>
            <li>Southampton SOU</li>
            <li>Warwick WAR</li>

            </ul>
          </div>

             {/* United Stated Minorv */}
    {/* Canada */}
    <div className="mb-6">
            <h3 className="text-[20px] font-[700] text-[#0E0E0E] mb-2 flex items-center">
            🇺🇲 United States Minor Outlying Islands UM
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
              <div>
                <h4 className="font-bold text-[20px] text-[#0E0E0E]">United States Minor Outlying Island</h4>
                <ul className="font-[500] text-[16px] text-[#0E0E0E]">
                <li>Baker Island 81</li>
                <li>Howland Island 84</li>
                <li>Jarvis Island 86</li>
                <li>Johnston Atoll 67</li>
                <li>Kingman Reef 89</li>
                <li>Midway Islands 71</li>
                <li>Navassa Island 76</li>
                <li>Palmyra Atoll 95</li>
                <li>Wake Island 79</li>
                </ul>
              </div>
            </div>
          </div>

              {/* Canada */}
              <div className="mb-6">
            <h3 className="text-[20px] font-[700] text-[#0E0E0E] mb-2 flex items-center">
            Mexico MX
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
              <div>
                <h4 className="font-bold text-[20px] text-[#0E0E0E]">Northern Mexico</h4>
                <ul className="font-[500] text-[16px] text-[#0E0E0E]">
                <li>Baja California BCN</li>
                <li>Baja California Sur BCS</li>
                <li>Chihuahua CHH</li>
                <li>Coahuila de Zaragoza COA</li>
                <li>Durango DUR</li>
                <li>Nuevo León NLE</li>
                <li>Sinaloa SIN</li>
                <li>Sonora SON</li>
                <li>Tamaulipas TAM</li>
                <li>Zacatecas ZAC</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[20px] text-[#0E0E0E]">Central Mexico</h4>
                <ul className="font-[500] text-[16px] text-[#0E0E0E]">
                <li>Aguascalientes AGU</li>
                <li>Ciudad de México CMX</li>
                <li>Estado de México MEX</li>
                <li>Guanajuato GUA</li>
                <li>Hidalgo HID</li>
                <li>Jalisco JAL</li>
                <li>Morelos MOR</li>
                <li>Puebla PUE</li>
                <li>Querétaro QUE</li>
                <li>San Luis Potosí SLP</li>
                <li>Tlaxcala TLA</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[20px] text-[#0E0E0E]">Southern Mexico</h4>
                <ul className="font-[500] text-[16px] text-[#0E0E0E]">
                <li>Chiapas CHP</li>
                <li>Guerrero GRO</li>
                <li>Michoacán de Ocampo MIC</li>
                <li>Oaxaca OAX</li>
                <li>Tabasco TAB</li>
                <li>Veracruz de Ignacio de la Llave VER</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[20px] text-[#0E0E0E]">Southeast and Yucatán Peninsula</h4>
                <ul className="font-[500] text-[16px] text-[#0E0E0E]">
                <li>Campeche CAM</li>
                <li>Colima COL</li>
                <li>Nayarit NAY</li>
                <li>Quintana Roo ROO</li>
                <li>Yucatán YUC</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country1;
