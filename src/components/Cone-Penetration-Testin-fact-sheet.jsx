import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import "./Cone-Penetration-Testin-fact-sheet.css";

const ConePenetrationTestFactSheet = () => {
  const [isOpen, setIsOpen] = useState({
    features: false,
    testingProcess: false,
    applications: false,
  });

  const toggleSection = (section) => {
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="fact-sheet-container">
      <div className="header-section">
        <h1 className="title">Cone Penetration Testing (CPT)</h1>
      </div>

      <p className="overview">
        Explore Geotechnical specializes in Cone Penetration Testing (CPT),
        using advanced compression-style probes to provide accurate,
        high-resolution data on subsurface soil conditions. CPT is an efficient
        method for determining soil stratigraphy, strength, and geotechnical
        properties without extensive site disruption.
      </p>

      <div className="accordion">
        {/* Key Features Section */}
        <div
          id="features"
          className={`accordion-item ${isOpen.features ? "open" : ""}`}
        >
          <h2 className="heading" onClick={() => toggleSection("features")}>
            Key Features
          </h2>
          {isOpen.features && (
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
                      Designed for use in softer soils and shallow depths,
                      typically up to 20 meters.
                    </td>
                  </tr>
                  <tr>
                    <td>P-Cone 15cm²</td>
                    <td>Designed for denser soils and deeper penetration.</td>
                  </tr>
                  <tr>
                    <td>Compression-Style Probes</td>
                    <td>
                      High-accuracy measurements by recording resistance at the
                      cone tip and along the shaft.
                    </td>
                  </tr>
                  <tr>
                    <td>Real-Time Data Collection</td>
                    <td>
                      Continuously collects data on cone resistance (qc), sleeve
                      friction (fs), and pore pressure (u2) to create detailed
                      soil profiles.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Testing Process Section */}
        <div
          id="testingProcess"
          className={`accordion-item ${isOpen.testingProcess ? "open" : ""}`}
        >
          <h2
            className="heading"
            onClick={() => toggleSection("testingProcess")}
          >
            Testing Process
          </h2>
          {isOpen.testingProcess && (
            <div className="content">
              <p>
                The Cone Penetration Testing (CPT) process involves
                hydraulically pushing a cone-tipped probe into the ground while
                measuring:
              </p>
              <ul>
                <li>
                  <strong>Cone Resistance (qc):</strong> Measures the force
                  required to push the cone through soil layers.
                </li>
                <li>
                  <strong>Sleeve Friction (fs):</strong> Measures friction along
                  the probe’s shaft.
                </li>
                <li>
                  <strong>Pore Pressure (u2):</strong> Monitors water pressure
                  within the soil during penetration.
                </li>
              </ul>
              <p>
                The collected data allows for precise determination of soil
                stratigraphy and mechanical properties.
              </p>
            </div>
          )}
        </div>

        {/* Applications Section */}
        <div
          id="applications"
          className={`accordion-item ${isOpen.applications ? "open" : ""}`}
        >
          <h2 className="heading" onClick={() => toggleSection("applications")}>
            Applications
          </h2>
          {isOpen.applications && (
            <div className="content">
              <table className="applications-table">
                <thead>
                  <tr>
                    <th>Application</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Foundation Design</td>
                    <td>
                      Provides crucial data for determining the soil bearing
                      capacity, ensuring safe and efficient foundation design.
                    </td>
                  </tr>
                  <tr>
                    <td>Soil Stratigraphy</td>
                    <td>
                      Identifies variations in soil layers to assist in
                      geotechnical investigations.
                    </td>
                  </tr>
                  <tr>
                    <td>Ground Improvement Verification</td>
                    <td>
                      Assesses the effectiveness of soil stabilization
                      techniques by analyzing changes in soil strength and
                      density.
                    </td>
                  </tr>
                  <tr>
                    <td>Seismic Site Classification</td>
                    <td>
                      Evaluates subsurface conditions for seismic analysis and
                      site classification.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConePenetrationTestFactSheet;
