import React from "react";

const Country4: React.FC = () => {
  return (
        <>
             {/* Canada */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-2 flex items-center">
              EUROPE
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
              <div>
                <h4 className="font-bold">Northern Europe</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                    <li>🇩🇰 Denmark DK</li>
                    <li>🇪🇪 Estonia EE</li>
                    <li>🇫🇮 Finland FI</li>
                    <li>🇮🇸 Iceland IS</li>
                    <li>🇮🇪 Ireland IE</li>
                    <li>🇯🇪 Jersey JE</li>
                    <li>🇱🇻 Latvia LV</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold">Southern Europe</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                <li>🇦🇱 Albania AL</li>
                <li>🇦🇩 Andorra AD</li>
                <li>🇧🇦 Bosnia and Herzegovina BA</li>
                <li>🇭🇷 Croatia HR</li>
                <li>🇨🇾 Cyprus CY</li>
                <li>🇬🇮 Gibraltar GI</li>
                <li>🇬🇷 Greece GR</li>
                <li>🇮🇹 Italy IT</li>
                <li>🇲🇰 North Macedonia MK</li>
                <li>🇲🇹 Malta MT</li>
                <li>🇲🇪 Montenegro ME</li>
                <li>🇵🇹 Portugal PT</li>
                <li>🇸🇲 San Marino SM</li>
                <li>🇷🇸 Serbia RS</li>
                <li>🇸🇮 Slovenia SI</li>
                <li>🇪🇸 Spain ES</li>
                <li>🇻🇦 Vatican City State (Holy See) VA</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold">Western Europe</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                <li>🇦🇹 Austria AT</li>
                <li>🇧🇪 Belgium BE</li>
                <li>🇫🇷 France FR</li>
                <li>🇩🇪 Germany DE</li>
                <li>🇱🇮 Liechtenstein LI</li>
                <li>🇱🇺 Luxembourg LU</li>
                <li>🇲🇨 Monaco MC</li>
                <li>🇳🇱 Netherlands NL</li>
                <li>🇨🇭 Switzerland CH</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold">Eastern Europe</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                <li>🇧🇾 Belarus BY</li>
                <li>🇧🇬 Bulgaria BG</li>
                <li>🇨🇿 Czech Republic CZ</li>
                <li>🇭🇺 Hungary HU</li>
                <li>🇲🇩 Moldova MD</li>
                <li>🇵🇱 Poland PL</li>
                <li>🇷🇴 Romania RO</li>
                <li>🇷🇺 Russia RU</li>
                <li>🇸🇰 Slovakia SK</li>
                <li>🇺🇦 Ukraine UA</li>
                <li>🇽🇰 Kosovo XK</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold">Territories</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                <li>🇦🇽 Aland Islands AX</li>
                <li>🇫🇴 Faroe Islands FO</li>
                <li>🇬🇬 Guernsey and Alderney GG</li>
                <li>🇸🇯 Svalbard and Jan Mayen Islands SJ</li>
                <li>🇮🇲 Isle of Man (a Crown dependency of the UK)</li>
                <li>🇯🇪 Jersey (a Crown dependency of the UK)</li>
                <li>🇸🇯 Svalbard and Jan Mayen Islands (part of Norway)</li>

                </ul>
              </div>
            </div>
          </div>
        </>
  );
};

export default Country4;
