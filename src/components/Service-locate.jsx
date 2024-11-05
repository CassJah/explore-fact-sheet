import React, { useState } from "react";
import "./Service-locate.css";

const ServiceLocate = () => {
  const [isOpen, setIsOpen] = useState({
    features: false,
    applications: false,
    testingProcess: false,
  });

  const toggleSection = (section) => {
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="fact-sheet-container">
      <div className="header-section fade-in">
        <h1 className="title">Service Locating / Service Report Markout</h1>
      </div>

      <p className="overview">
        Explore Geotechnical employs a range of advanced tools, including the
        IDS Opera Duo, Spectra Geospatial SP80, Radiodetection RD8200 Cable
        Locator, and Radiodetection TX5 Transmitter, to ensure accurate
        positioning and mapping of underground utilities. These tools facilitate
        safe excavation and construction activities by delivering precise,
        real-time results.
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
            <div className="content fade-in">
              <table className="features-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dual Frequency Antenna</td>
                    <td>
                      The IDS Opera Duo offers a 250 and 700 MHz antenna for
                      detecting both shallow and deep utilities in a single
                      scan.
                    </td>
                  </tr>
                  <tr>
                    <td>Advanced GNSS Receiver</td>
                    <td>
                      The Spectra SP80 uses Z-Blade technology to combine
                      multiple GNSS signals for maximum accuracy.
                    </td>
                  </tr>
                  <tr>
                    <td>Precision Locator and Transmitter</td>
                    <td>
                      The Radiodetection RD8200 Cable Locator, combined with the
                      TX5 Transmitter, delivers high-precision utility location
                      with multi-frequency capabilities, making it suitable for
                      complex underground environments.
                    </td>
                  </tr>
                  <tr>
                    <td>Fault-Find and Inductive Mode</td>
                    <td>
                      The TX5 Transmitter includes Fault-Find and induction
                      modes, enabling enhanced detection of faults and signals
                      in underground infrastructure.
                    </td>
                  </tr>
                  <tr>
                    <td>Real-Time Results</td>
                    <td>
                      Both tools provide immediate, easy-to-interpret visual
                      outputs, supporting quick decision-making.
                    </td>
                  </tr>
                  <tr>
                    <td>Weatherproof Design</td>
                    <td>
                      Ruggedized casing with IP65 protection for all devices,
                      ensuring reliable performance in challenging field
                      conditions.
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
            <div className="content fade-in">
              <p>
                Service locating with the combined capabilities of the IDS Opera
                Duo, Spectra SP80, RD8200 Locator, and TX5 Transmitter follows a
                systematic process to ensure accuracy:
              </p>
              <ul>
                <li>
                  <strong>GNSS Positioning:</strong> The Spectra SP80 ensures
                  precise geographical positioning with multi-GNSS tracking for
                  mapping underground utilities effectively.
                </li>
                <li>
                  <strong>Dual-Frequency Scanning:</strong> The Opera Duo’s
                  dual-frequency antenna captures shallow and deep utilities in
                  one pass, providing comprehensive subsurface data.
                </li>
                <li>
                  <strong>High Precision Fault Location:</strong> Using the TX5
                  Transmitter with the RD8200 Locator allows operators to detect
                  faults and accurately locate utilities in complex underground
                  networks.
                </li>
                <li>
                  <strong>Real-Time Data Interpretation:</strong> Each device
                  displays results instantly, giving operators immediate insight
                  into utility locations, depths, and fault locations.
                </li>
              </ul>
              <p>
                The combination of GNSS accuracy, radar, and precision locating
                tools enables Explore Geotechnical to deliver reliable service
                locating results for safe testing.
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
            <div className="content fade-in">
              <table className="applications-table">
                <thead>
                  <tr>
                    <th>Application</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Utility Detection</td>
                    <td>
                      Identifies underground utilities like pipes and cables,
                      distinguishing both metallic and non-metallic materials.
                    </td>
                  </tr>
                  <tr>
                    <td>Fault Detection</td>
                    <td>
                      The TX5 Transmitter allows operators to identify and trace
                      faults in underground networks, enhancing infrastructure
                      safety.
                    </td>
                  </tr>
                  <tr>
                    <td>Real-Time Mapping</td>
                    <td>
                      Provides accurate, real-time mapping of subsurface
                      objects, supporting safer excavation practices.
                    </td>
                  </tr>
                  <tr>
                    <td>Environmental Surveying</td>
                    <td>
                      Enables detection of bedrock and other environmental
                      layers, useful for geotechnical projects.
                    </td>
                  </tr>
                  <tr>
                    <td>Remote Monitoring</td>
                    <td>
                      With SMS and email alerts, the Spectra SP80 facilitates
                      remote monitoring, particularly in unmanned areas.
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

export default ServiceLocate;
