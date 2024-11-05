import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import "./Piezometer-Installation-fact-sheet.css";

const PiezometerInstallationFactSheet = () => {
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

    document.getElementById(section).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="fact-sheet-container">
      <Fade>
        <div className="header-section">
          <h1 className="title">Piezometer Installation</h1>
        </div>
      </Fade>

      <p className="overview">
        Explore Geotechnical installs both Standpipe and Vibrating Wire
        Piezometers using our Pagani CPT rigs. These piezometers are essential
        tools for monitoring groundwater levels and pore water pressures,
        providing crucial data for various geotechnical applications. Our
        installation methods ensure accurate readings and long-term stability in
        groundwater monitoring projects.
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
                      <td>Standpipe Piezometer</td>
                      <td>
                        Cost-effective and reliable, Standpipe Piezometers
                        monitor water levels over time, ideal for applications
                        where long-term monitoring is required.
                      </td>
                    </tr>
                    <tr>
                      <td>Vibrating Wire Piezometer</td>
                      <td>
                        Highly accurate, suited for precise measurements of pore
                        water pressure, particularly for sensitive projects
                        requiring real-time data.
                      </td>
                    </tr>
                    <tr>
                      <td>Direct Push or Drop-In Installation</td>
                      <td>
                        Piezometers can be directly pushed into the soil or
                        lowered into pre-drilled holes depending on ground
                        conditions, ensuring versatility.
                      </td>
                    </tr>
                    <tr>
                      <td>Water Level Indicators</td>
                      <td>
                        Measurements are obtained with water level indicators
                        using probes connected to graduated cables or tapes,
                        providing precise readings.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Fade>
          )}
        </div>

        {/* New Testing Process Section */}
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
              <div className="content fade-in">
                <p>
                  The installation of piezometers involves carefully positioning
                  the device to ensure accurate groundwater monitoring. For
                  Standpipe Piezometers, a porous tip is placed at the bottom of
                  the installation, with the riser pipe extending to the
                  surface. For Vibrating Wire Piezometers, the piezometer is
                  pushed into the soil or lowered into pre-drilled holes,
                  depending on ground conditions.
                </p>
                <p>
                  <strong>Measurement Process:</strong>
                  After installation, groundwater levels or pore pressures are
                  measured using water level indicators or data loggers. The
                  Vibrating Wire Piezometers provide real-time data, ideal for
                  continuous monitoring, while Standpipe Piezometers are
                  manually monitored over time.
                </p>
                <p>
                  The data collected is critical for applications such as slope
                  stability, groundwater management, and construction dewatering
                  projects.
                </p>
              </div>
            </Fade>
          )}
        </div>

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
                      <td>Slope Stability Evaluation</td>
                      <td>
                        Monitors pore water pressure to evaluate slope stability
                        and understand water's impact on soil behavior.
                      </td>
                    </tr>
                    <tr>
                      <td>Ground Improvement Verification</td>
                      <td>
                        Monitors effectiveness of techniques like vertical
                        drains, sand drains, and dynamic compaction for ground
                        stability.
                      </td>
                    </tr>
                    <tr>
                      <td>Dewatering Schemes</td>
                      <td>
                        Essential for dewatering projects, tracking water levels
                        during excavation and tunneling operations.
                      </td>
                    </tr>
                    <tr>
                      <td>Earth Fill Dams and Embankments</td>
                      <td>
                        Supports dam and embankment projects by monitoring pore
                        pressure variations, ensuring performance and stability.
                      </td>
                    </tr>
                    <tr>
                      <td>Containment Systems</td>
                      <td>
                        Used in monitoring water levels in containment systems
                        like landfills and tailings dams, ensuring environmental
                        protection.
                      </td>
                    </tr>
                    <tr>
                      <td>Pumping Tests and Water Drawdown</td>
                      <td>
                        Measures water level changes during pumping tests,
                        assessing the impact of groundwater extraction on the
                        surrounding area.
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

export default PiezometerInstallationFactSheet;
