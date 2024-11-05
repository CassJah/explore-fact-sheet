import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import "./Dynamic-Probe-Super-Heavy-(DPSH)-fact-sheet.css";

const DynamicProbeSuperHeavyFactSheet = () => {
  const [isOpen, setIsOpen] = useState({
    overview: false,
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
          <h1 className="title">Dynamic Probe Super Heavy (DPSH)</h1>
        </div>
      </Fade>

      <p className="overview">
        The Dynamic Probe Super Heavy (DPSH) test is a continuous dynamic
        probing method that drives a solid 90° cone using a drop hammer. This
        test records blow counts for each 100mm penetration and provides
        continuous profiling, offering valuable insights into ground conditions.
        Unlike the SPT, DPSH performs testing continuously from the surface to
        refusal, capturing detailed stratigraphy.
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
                      <td>Continuous Testing</td>
                      <td>
                        DPSH offers continuous testing from the ground surface,
                        providing a comprehensive profile of ground conditions
                        without missing intervals.
                      </td>
                    </tr>
                    <tr>
                      <td>Hammer Consistency</td>
                      <td>
                        Uses the same hammer weight and drop height as the SPT,
                        ensuring consistent force application.
                      </td>
                    </tr>
                    <tr>
                      <td>Torque Measurement</td>
                      <td>
                        Torque readings at regular depth intervals allow for
                        skin friction corrections, enhancing data accuracy.
                      </td>
                    </tr>
                    <tr>
                      <td>Cost-Effective and Efficient</td>
                      <td>
                        Operates without the need for anchoring, making it a
                        quick and economical choice for ground profiling.
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
                <p className="process">
                  In the DPSH test, a solid 90° cone attached to a rod string is
                  driven into the ground using a drop hammer with a standardized
                  weight and height. The test records the number of hammer blows
                  required for every 100mm of penetration. As the test
                  progresses, torque readings are taken at regular intervals to
                  account for skin friction on the rods. This process continues
                  until the cone reaches refusal, providing continuous data on
                  soil resistance and stratigraphy. The blow count can be
                  correlated to other tests like SPT for comparative analysis.
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
                      <td>Ground Profiling</td>
                      <td>
                        Ideal for identifying soil layers and establishing depth
                        to rock or harder surfaces.
                      </td>
                    </tr>
                    <tr>
                      <td>Correlation with CPT</td>
                      <td>
                        Enables switching to CPT for further data collection
                        after driving through gravel layers.
                      </td>
                    </tr>
                    <tr>
                      <td>Dynamic Cone Resistance Calculation</td>
                      <td>
                        The DPSH data can be correlated with SPT N-values and
                        dynamic cone resistance (qd), useful for geotechnical
                        analysis.
                      </td>
                    </tr>
                    <tr>
                      <td>Site Investigation</td>
                      <td>
                        Provides preliminary data for projects requiring basic
                        ground assessment.
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

export default DynamicProbeSuperHeavyFactSheet;
