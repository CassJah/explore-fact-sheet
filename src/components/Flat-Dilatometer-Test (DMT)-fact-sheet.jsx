import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import "./Flat-Dilatometer-Test (DMT)-fact-sheet.css";

const FlatDilatometerTestFactSheet = () => {
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
          <h1 className="title">Flat Dilatometer Test (DMT)</h1>
        </div>
      </Fade>

      <p className="overview">
        At Explore Geotechnical, we specialize in advanced ground investigation
        methods, and the Flat Dilatometer Test (DMT) is a key in-situ soil
        testing technique we utilize. The DMT provides critical insights into
        soil stiffness, strength, and lateral earth pressure, ensuring accurate
        data for geotechnical evaluations. With its flat, circular steel
        membrane, the DMT delivers precise measurements on deformability, making
        it an essential tool in our ground investigations.
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
                      <td>In-Situ Measurement of Soil Parameters</td>
                      <td>
                        The DMT captures critical data on geotechnical
                        parameters such as constrained modulus (M), coefficient
                        of earth pressure (K<sub>0</sub>), and undrained shear
                        strength (S<sub>u</sub>), directly in the field.
                      </td>
                    </tr>
                    <tr>
                      <td>Testing Depth</td>
                      <td>
                        Explore Geotechnical utilizes the DMT for depths of up
                        to 30+ meters, suitable for a wide range of soils, from
                        soft clays to dense sands.
                      </td>
                    </tr>
                    <tr>
                      <td>Precision and Accuracy</td>
                      <td>
                        Our DMT tests offer unparalleled accuracy, particularly
                        in measuring lateral stress, making it invaluable for
                        understanding soil behavior in foundation design and
                        settlement analysis.
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
              <div className="content fade-in">
                <p>
                  The Flat Dilatometer Test (DMT) involves inserting a flat
                  blade into the soil using a penetration rig. At each test
                  depth, the blade's membrane is inflated, and two critical
                  pressure readings are taken:
                </p>
                <div>
                  <p>
                    <strong>A-reading:</strong> The lift-off pressure where the
                    membrane begins to expand.
                  </p>
                  <p>
                    <strong>B-reading:</strong> The pressure required to move
                    the membrane 1.1 mm against the soil.
                  </p>
                </div>
                <p>
                  These readings provide information on in-situ lateral stress
                  and soil stiffness. Our DMT tests are typically conducted at
                  intervals of 200 mm to capture continuous soil profiles,
                  allowing for precise ground condition assessments.
                </p>
                <p>
                  Following data collection, results are analyzed to derive
                  parameters like constrained modulus, undrained shear strength,
                  and earth pressure coefficient, essential for comprehensive
                  geotechnical evaluations.
                </p>
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
                      <td>Settlement Prediction</td>
                      <td>
                        At Explore Geotechnical, we use DMT data to accurately
                        predict settlement potential for both shallow and deep
                        foundations.
                      </td>
                    </tr>
                    <tr>
                      <td>Lateral Earth Pressure Measurement</td>
                      <td>
                        Our DMT tests provide essential data for the design of
                        retaining walls and underground structures by measuring
                        lateral earth pressure.
                      </td>
                    </tr>
                    <tr>
                      <td>Soil Improvement Verification</td>
                      <td>
                        We also use the DMT to verify the effectiveness of
                        ground improvement techniques, such as preloading and
                        compaction, ensuring soil stability and suitability for
                        construction.
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

export default FlatDilatometerTestFactSheet;
