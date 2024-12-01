import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import "./Direct-Push-Soil-Sampling-fact-sheet.css";

const DirectPushSoilSamplingFactSheet = () => {
  const [isOpen, setIsOpen] = useState({
    features: false,
    testingProcess: false,
    applications: false,
  });

  const toggleSection = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
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
        {/* Key Features Section */}
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
                    <tr>
                      <td>Direct Push Sampling</td>
                      <td>
                        Achieves soil samples through direct push or percussion
                        drive, minimizing sample disturbance.
                      </td>
                    </tr>
                    <tr>
                      <td>Plastic Sample Liners</td>
                      <td>
                        Ensures sample containment and integrity for further
                        testing with 42mm diameter liners.
                      </td>
                    </tr>
                    <tr>
                      <td>Rapid Sampling</td>
                      <td>
                        Enables quick sample collection with minimal setup time.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Fade>
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
            <Fade>
              <div className="content">
                <p>
                  The Direct Push Soil Sampling process involves hydraulically
                  driving a sampling rod into the ground to collect soil. Key
                  steps include:
                </p>
                <ul>
                  <li>
                    <strong>Sealed Sampling:</strong> The soil is contained
                    within a sealed liner to prevent contamination.
                  </li>
                  <li>
                    <strong>Flexible Sampling:</strong> Enables continuous
                    sampling or discrete intervals based on project
                    requirements.
                  </li>
                  <li>
                    <strong>Preserved Samples:</strong> The collected soil is
                    preserved in liners for further analysis.
                  </li>
                </ul>
              </div>
            </Fade>
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
            <Fade>
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
                      <td>Environmental Surveys</td>
                      <td>
                        Suitable for contamination and environmental impact
                        assessments by providing undisturbed samples.
                      </td>
                    </tr>
                    <tr>
                      <td>Geotechnical Investigations</td>
                      <td>
                        Assists in analyzing soil structure and stratigraphy for
                        construction planning.
                      </td>
                    </tr>
                    <tr>
                      <td>Chemical Testing</td>
                      <td>
                        Provides sealed samples ideal for gas and liquid
                        analysis.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Fade>
          )}
        </div>
      </div>
    </div>
  );
};

export default DirectPushSoilSamplingFactSheet;
