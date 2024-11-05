import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import "./Direct-Push-Soil-Sampling-fact-sheet.css";

const DirectPushSoilSamplingFactSheet = () => {
  const [isOpen, setIsOpen] = useState({
    features: false,
    process: false,
    applications: false,
  });

  const toggleSection = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));

    document.getElementById(section).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="fact-sheet-container">
      <Fade>
        <div className="header-section">
          <h1 className="title">Direct Push Soil Sampling System (DS-44)</h1>
        </div>
      </Fade>

      <p className="overview">
        The DS-44 Direct Push Soil Sampling System, employed by Explore
        Geotechnical, allows for rapid and efficient soil sampling up to depths
        of 15 meters. This system is ideal for environmental surveys,
        geotechnical investigations, and chemical testing applications.
      </p>

      <div className="accordion">
        <div
          id="features"
          className={`accordion-item ${isOpen.features ? "open" : ""}`}
        >
          <h2 className="heading" onClick={() => toggleSection("features")}>
            Key Features
          </h2>
          {isOpen.features && (
            <Fade>
              <div className="content">
                <table className="features-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Continuous & Discrete Sampling</td>
                      <td>
                        Provides options for 1-meter continuous core samples or
                        discrete sampling at specific depths.
                      </td>
                    </tr>
                    {/* Additional table rows omitted for brevity */}
                  </tbody>
                </table>
              </div>
            </Fade>
          )}
        </div>

        {/* Additional sections omitted for brevity */}
      </div>
    </div>
  );
};

export default DirectPushSoilSamplingFactSheet;
