import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import "./DissipationTestingFactSheet.css";

const DissipationTestingFactSheet = () => {
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
  };

  return (
    <div className="fact-sheet-container">
      <Fade>
        <div className="header-section">
          <h1 className="title">Dissipation Testing</h1>
        </div>
      </Fade>

      <div id="fact-sheet-content">
        <p className="overview">
          Dissipation testing is an in-situ testing method that measures the
          change in pore water pressure over time. It assesses the drainage and
          consolidation characteristics of soil, critical in many geotechnical
          fields.
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
                        <td>In-Situ Measurement</td>
                        <td>
                          Real-time measurement of pore water pressure decay
                          on-site.
                        </td>
                      </tr>
                      <tr>
                        <td>Use of CPTu Equipment</td>
                        <td>
                          Conducted with a piezocone penetrometer (CPTu)
                          measuring cone resistance, sleeve friction, and pore
                          pressure.
                        </td>
                      </tr>
                      <tr>
                        <td>Rapid Decision-Making</td>
                        <td>
                          Provides instantaneous results, facilitating quick
                          on-site decisions.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Fade>
            )}
          </div>

          <div
            id="process"
            className={`accordion-item ${isOpen.process ? "open" : ""}`}
          >
            <h2 className="heading" onClick={() => toggleSection("process")}>
              Testing Process
            </h2>
            {isOpen.process && (
              <Fade>
                <div className="content">
                  <p>
                    Dissipation testing involves advancing a CPTu probe to a
                    specific depth and pausing its movement. The test records
                    pore pressure over time as excess water dissipates, helping
                    to evaluate soil drainage and consolidation characteristics.
                  </p>
                </div>
              </Fade>
            )}
          </div>

          <div
            id="applications"
            className={`accordion-item ${isOpen.applications ? "open" : ""}`}
          >
            <h2
              className="heading"
              onClick={() => toggleSection("applications")}
            >
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
                        <td>Foundation Design</td>
                        <td>
                          Assesses soil drainage properties for stable
                          foundation design, especially in clay-rich soils.
                        </td>
                      </tr>
                      <tr>
                        <td>Slope Stability Analysis</td>
                        <td>
                          Evaluates soil consolidation behavior for slope and
                          embankment stability.
                        </td>
                      </tr>
                      <tr>
                        <td>Construction Monitoring</td>
                        <td>
                          Monitors pore pressure changes before, during, and
                          after construction to ensure stability.
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
    </div>
  );
};

export default DissipationTestingFactSheet;
