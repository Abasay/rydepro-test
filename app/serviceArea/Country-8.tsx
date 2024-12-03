import React from "react";

const Country8: React.FC = () => {
  return (
        <>
             {/* Canada */}
          <div className="mb-6">
            <h3 className="text-[20px] font-[700] text-[#0E0E0E] mb-2 flex items-center">
            ARTARTICA
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
              <div>
                <h4 className="font-bold  text-[20px] text-[#0E0E0E]">Territories</h4>
                <ul className="font-[500] text-[16px] text-[#0E0E0E]">
                <li>🇦🇶 Adélie Land (claimed by France)</li>
                <li>🇦🇷 Argentine Antarctica (claimed by Argentina)</li>
                <li>🇦🇺 Australian Antarctic Territory (claimed by Australia)</li>
                <li>🇬🇧 British Antarctic Territory (claimed by the United Kingdom)</li>
                <li>🇨🇱 Chilean Antarctic Territory (claimed by Chile)</li>
                <li>🇳🇴 Peter I Island (claimed by Norway)</li>
                <li>🇳🇴 Queen Maud Land (claimed by Norway)</li>
                <li>🇳🇿 Ross Dependency (claimed by New Zealand)</li>
                </ul>
              </div>
            </div>
          </div>
        </>
  );
};

export default Country8;
