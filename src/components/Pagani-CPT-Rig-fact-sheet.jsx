import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import "./Pagani-CPT-Rig-fact-sheet.css";

const PaganiCPTRigFactSheet = () => {
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
          <h1 className="title">Pagani CPT Rig</h1>
        </div>
      </Fade>

      <p className="overview">
        The Pagani TG63-150 rig, utilized by Explore Geotechnical, is a highly
        versatile, fully hydraulic rig. Its compact design allows for easy
        transportation and accessibility in challenging terrains. The rig is
        equipped to handle a variety of in-situ testing methods, including Cone
        Penetration Testing (CPT), Seismic Cone Penetration Testing (SCPT),
        Dynamic Probing Super Heavy (DPSH), Flat Dilatometer Test (DMT), and
        Seismic Dilatometer Test (SDMT), as well as Direct Push Soil Sampling
        and Piezometer Installations.
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
                      <td>Rig weight</td>
                      <td>1.0 T (1.2 T with accessories)</td>
                    </tr>
                    <tr>
                      <td>Travel height</td>
                      <td>1.531 m</td>
                    </tr>
                    <tr>
                      <td>Working height</td>
                      <td>3.724 m</td>
                    </tr>
                    <tr>
                      <td>Width</td>
                      <td>1.11 m</td>
                    </tr>
                    <tr>
                      <td>Max. operating ram capacity</td>
                      <td>15 to 20 T</td>
                    </tr>
                    <tr>
                      <td>Max. travelling speed</td>
                      <td>2 km/h</td>
                    </tr>
                    <tr>
                      <td>Track material</td>
                      <td>Rubber</td>
                    </tr>
                    <tr>
                      <td>Track length</td>
                      <td>1.15 m</td>
                    </tr>
                    <tr>
                      <td>Track width</td>
                      <td>0.18 m</td>
                    </tr>
                    <tr>
                      <td>Footprint of tracks</td>
                      <td>1.15 m x 0.75 m</td>
                    </tr>
                    <tr>
                      <td>Max. ground bearing pressure</td>
                      <td>Tracking/testing: 26.9 kPa</td>
                    </tr>
                    <tr>
                      <td>Max. testing/travelling gradient</td>
                      <td>14 degrees</td>
                    </tr>
                    <tr>
                      <td>Noise output at 2 m</td>
                      <td>Testing – 76 dBA</td>
                    </tr>
                    <tr>
                      <td>Clamp arrangement</td>
                      <td>Push socket and pull pin</td>
                    </tr>
                    <tr>
                      <td>Ram stroke</td>
                      <td>1.3 m</td>
                    </tr>
                    <tr>
                      <td>Typical production</td>
                      <td>
                        Up to 50 m of standard CPTu testing per day, depending
                        on site conditions and access.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Fade>
          )}
        </div>

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
                  The testing process with the Pagani CPT Rig involves pushing a
                  cone-tipped probe into the ground using hydraulic pressure.
                  The rig records three primary measurements during testing:
                </p>
                <ul>
                  <li>
                    <strong>Cone Resistance (qc):</strong> Measures the force
                    required to push the cone through the soil, providing data
                    on soil density and strength.
                  </li>
                  <li>
                    <strong>Sleeve Friction (fs):</strong> Measures the friction
                    along the sleeve of the probe, aiding in soil
                    classification.
                  </li>
                  <li>
                    <strong>Pore Pressure (u2):</strong> Measured during
                    penetration, this parameter is useful for identifying soil
                    saturation levels.
                  </li>
                </ul>
                <p>
                  The collected data offers a detailed profile of subsurface
                  conditions, helping to assess soil properties for foundation
                  design, settlement predictions, and other geotechnical
                  applications.
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
                      <td>CPT and SCPT Testing</td>
                      <td>
                        Ideal for assessing soil stratigraphy, geotechnical
                        properties, and dynamic soil behavior through seismic
                        and penetration testing.
                      </td>
                    </tr>
                    <tr>
                      <td>DMT and SDMT Testing</td>
                      <td>
                        Used for settlement estimation and analysis of soil
                        stiffness, providing crucial data for foundation design,
                        construction, and seismic analysis.
                      </td>
                    </tr>
                    <tr>
                      <td>DPSH Testing</td>
                      <td>
                        Suitable for testing penetration resistance, especially
                        useful in determining soil compaction for various
                        geotechnical applications.
                      </td>
                    </tr>
                    <tr>
                      <td>Direct Push Soil Sampling</td>
                      <td>
                        Used for obtaining continuous soil samples, providing
                        precise subsurface profiles and geotechnical data
                        without extensive disruption.
                      </td>
                    </tr>
                    <tr>
                      <td>Piezometer Installations</td>
                      <td>
                        Ideal for monitoring groundwater pressure in
                        geotechnical and environmental investigations.
                      </td>
                    </tr>
                    <tr>
                      <td>Remote and Challenging Locations</td>
                      <td>
                        The rig's compact design and transportability make it
                        ideal for difficult-to-access sites such as riverbanks,
                        tidal environments, and embankments.
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

export default PaganiCPTRigFactSheet;
