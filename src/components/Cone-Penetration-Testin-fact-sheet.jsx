import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import "./Cone-Penetration-Testin-fact-sheet.css";

const ConePenetrationTestFactSheet = () => {
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
          <h1 className="title">Cone Penetration Testing (CPT)</h1>
        </div>
      </Fade>

      <div id="fact-sheet-content">
        <p className="overview">
          Explore Geotechnical specializes in Cone Penetration Testing (CPT),
          using Pagani's advanced compression-style probes to provide accurate,
          high-resolution data on subsurface soil conditions. CPT is an
          efficient method for determining soil stratigraphy, strength, and
          geotechnical properties without extensive site disruption.
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
                        <td>P-Cone 10cm²</td>
                        <td>
                          The 10cm² P-Cone is designed for use in softer soils
                          and shallow depths, typically up to 20 meters.
                        </td>
                      </tr>
                      <tr>
                        <td>P-Cone 15cm²</td>
                        <td>
                          The 15cm² P-Cone is designed for denser soils and
                          deeper penetration.
                        </td>
                      </tr>
                      <tr>
                        <td>Compression-Style Probes</td>
                        <td>
                          The compression-style design allows for high-accuracy
                          measurements by recording resistance at the cone tip
                          and along the shaft.
                        </td>
                      </tr>
                      <tr>
                        <td>Real-Time Data Collection</td>
                        <td>
                          The Pagani CPT system continuously collects data on
                          cone resistance (qc), sleeve friction (fs), and pore
                          pressure (u2), providing a detailed profile of soil
                          strength and stratigraphy.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Fade>
            )}
          </div>

          {/* Additional sections omitted for brevity */}
        </div>
      </div>
    </div>
  );
};

export default ConePenetrationTestFactSheet;
