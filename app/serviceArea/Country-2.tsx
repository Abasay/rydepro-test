import React from "react";

const Country2: React.FC = () => {
  return (
        <>
             {/* Canada */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-2 flex items-center">
              SOUTH AMERICA
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
              <div>
                <h4 className="font-bold">Andean States</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Bolivia BO</li>
                  <li>Chile CL</li>
                  <li>Colombia CO</li>
                  <li>Ecuador EC</li>
                  <li>Peru PE</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold">Southern Cone</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Argentina AR</li>
                  <li>Chile CL</li>
                  <li>Paraguay PY</li>
                  <li>Unguay UY</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold">Northern South America</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Brazil BR</li>
                  <li>Guyana GY</li>
                  <li>Suriname SR</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold">Caribbean</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Colombia CO</li>
                  <li>Venezuela VE</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold">South America Territories</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Falkland Islands FK</li>
                  <li>French Guiana GF</li>
                  <li>South Georgia GS</li>
                  <li>South Sandwich</li>
                  <li>Islands</li>
                </ul>
              </div>
            </div>
          </div>
        </>
  );
};

export default Country2;
