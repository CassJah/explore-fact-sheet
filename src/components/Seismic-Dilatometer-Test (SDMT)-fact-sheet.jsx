import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import "./Seismic-Dilatometer-Test (SDMT)-fact-sheet.css";

const SeismicDilatometerTestFactSheet = () => {
  const [isOpen, setIsOpen] = useState({
    features: false,
    applications: false,
    testingProcess: false, // Added Testing Process section
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
          <h1 className="title">Seismic Dilatometer Test (SDMT)</h1>
        </div>
      </Fade>

      <p className="overview">
        At Explore Geotechnical, the Seismic Dilatometer Test (SDMT) enhances
        the capabilities of the traditional DMT by integrating seismic sensors.
        This test measures shear wave velocity alongside standard geotechnical
        parameters, offering comprehensive insights into static and dynamic soil
        properties. SDMT is particularly suited for seismic hazard assessments
        and understanding soil behavior in earthquake-prone regions.
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
                      <td>Dual Data Collection</td>
                      <td>
                        Provides traditional DMT data along with seismic
                        measurements (shear wave velocity), enhancing the scope
                        of subsurface profiling.
                      </td>
                    </tr>
                    <tr>
                      <td>Accurate Shear Wave Velocity</td>
                      <td>
                        The SDMT uses two receivers, achieving repeatability
                        within 1%. The data includes shear wave (Vs) and
                        optional compression wave (Vp) velocities.
                      </td>
                    </tr>
                    <tr>
                      <td>Small and Working Strain Moduli</td>
                      <td>
                        The test provides small strain modulus (G<sub>0</sub>)
                        and working strain modulus (M<sub>DMT</sub>), essential
                        for constructing accurate G-γ curves.
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
                  The SDMT probe is advanced vertically, stopping at depth
                  intervals (typically 0.5m or 1.0m). For each depth, a hammer
                  strikes a beam to generate shear waves, which are recorded by
                  dual receivers in the probe, providing shear wave velocity
                  (Vs) data in real-time.
                </p>
                <p>
                  <strong>Data Processing:</strong> Vs is calculated as the
                  ratio of the difference in distance between the source and
                  receivers to the wave arrival time. This data yields precise
                  Vs profiles, which are essential for analyzing soil behavior
                  under seismic loading.
                </p>
                <p>
                  If conducting tests in non-penetrable soils, a borehole
                  backfilled with fine gravel allows for Vs testing, maintaining
                  high-quality data across diverse soil types.
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
                      <td>Seismic Hazard Assessment</td>
                      <td>
                        Ideal for evaluating seismic hazards, such as
                        liquefaction potential and earthquake resilience,
                        providing critical data for design.
                      </td>
                    </tr>
                    <tr>
                      <td>Dynamic Soil Properties</td>
                      <td>
                        Used in designing foundations for structures subjected
                        to dynamic loads, like bridges and tall buildings,
                        requiring precise Vs profiles.
                      </td>
                    </tr>
                    <tr>
                      <td>Advanced Geotechnical Profiling</td>
                      <td>
                        The SDMT combines static and seismic data to create
                        comprehensive soil profiles, enhancing the accuracy of
                        geotechnical designs.
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

export default SeismicDilatometerTestFactSheet;
