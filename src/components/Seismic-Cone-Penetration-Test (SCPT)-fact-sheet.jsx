import React, { useState } from "react";
import { Fade } from "react-awesome-reveal"; // For animations
import "./Seismic-Cone-Penetration-Test (SCPT)-fact-sheet.css"; // CSS file for styles

const SeismicConePenetrationTestFactSheet = () => {
  const [isOpen, setIsOpen] = useState({
    features: false,
    testingProcess: false, // Added testing process section
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
          <h1 className="title">Seismic Cone Penetration Test (SCPT)</h1>
        </div>
      </Fade>

      <p className="overview">
        At Explore Geotechnical, we utilize the Seismic Cone Penetration Test
        (SCPT) to provide a comprehensive analysis of both soil stratigraphy and
        seismic wave velocities. This dual-function test integrates seismic
        sensors with traditional CPT, allowing us to capture crucial data on
        soil stiffness, stratigraphy, and liquefaction potential, particularly
        in seismically active regions.
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
                      <td>Seismic and Geotechnical Data in One Test</td>
                      <td>
                        The SCPT simultaneously measures both the mechanical
                        properties of the soil and the velocity of seismic waves
                        (shear and compressional), providing comprehensive data
                        in a single test.
                      </td>
                    </tr>
                    <tr>
                      <td>Testing Depth</td>
                      <td>
                        Explore Geotechnical conducts SCPT tests at depths
                        exceeding 30 meters, depending on the soil conditions,
                        to gather critical geotechnical data.
                      </td>
                    </tr>
                    <tr>
                      <td>Wave Velocity</td>
                      <td>
                        SCPT accurately records shear wave velocity (Vs), which
                        is essential for calculating dynamic soil properties
                        such as shear modulus and damping characteristics.
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
                  The Seismic Cone Penetration Test (SCPT) combines standard
                  cone penetration testing with seismic wave measurement. The
                  cone is hydraulically pushed into the soil, recording cone
                  resistance, sleeve friction, and pore pressure.
                </p>
                <p>
                  <strong>Seismic Data Collection:</strong> At specific
                  intervals, an external hammer strike is used to generate
                  seismic waves. Sensors embedded in the cone measure the travel
                  time of these waves through soil layers, providing both
                  compressional (P-wave) and shear (S-wave) velocities.
                </p>
                <p>
                  This data is essential for evaluating soil stiffness and
                  liquefaction potential, offering invaluable information for
                  earthquake-resistant design and soil behavior analysis in
                  seismically active regions.
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
                      <td>Earthquake Engineering</td>
                      <td>
                        At Explore Geotechnical, SCPT is a crucial test for
                        evaluating liquefaction potential and ground response
                        during seismic events, ensuring earthquake resilience
                        for structures.
                      </td>
                    </tr>
                    <tr>
                      <td>Foundation Design</td>
                      <td>
                        SCPT provides vital data for the design of
                        earthquake-resistant foundations by measuring the
                        stiffness and density of subsurface soil layers.
                      </td>
                    </tr>
                    <tr>
                      <td>Soil Stiffness Analysis</td>
                      <td>
                        Ideal for projects where a detailed understanding of
                        subsurface soil behavior under dynamic loading is
                        required, such as in tall building foundations and
                        bridge supports.
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

export default SeismicConePenetrationTestFactSheet;
