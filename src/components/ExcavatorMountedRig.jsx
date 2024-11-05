import React, { useState } from "react";
import "./ExcavatorMountedRig.css";
import excavatorRigImage from "../assets/excavator-rig.jpg.JPG";

const ExcavatorMountedRig = () => {
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
      <div className="image-header-container">
        <img
          src={excavatorRigImage}
          alt="Excavator Mounted CPT Rig"
          className="excavator-image"
        />
        <h1 className="title">Excavator Mounted CPT Rig</h1>
      </div>

      <p className="overview">
        The Excavator Mounted CPT Rig is a highly specialized solution for
        geotechnical testing in challenging locations, especially effective in
        isolated landslide sites. This rig allows for in-situ testing without
        extensive planning or site preparation, making it an ideal choice for
        environments where accessibility is limited.
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
                    <td>Access Flexibility</td>
                    <td>
                      Allows testing on-site without the need for additional
                      track-mounted rigs or pre-prepared tracks, minimizing
                      environmental impact.
                    </td>
                  </tr>
                  <tr>
                    <td>Direct Push Drilling</td>
                    <td>
                      Capable of direct push drilling and augering, enhancing
                      adaptability to various soil conditions.
                    </td>
                  </tr>
                  <tr>
                    <td>Real-Time Excavation</td>
                    <td>
                      Facilitates on-the-fly excavation, enabling access
                      adjustments as testing progresses.
                    </td>
                  </tr>
                  <tr>
                    <td>Excavator Requirements</td>
                    <td>
                      <ul>
                        <li>
                          <strong>7-10 Tonne Machine:</strong> 45mm pin
                          diameter, 290mm center to center, max width of 300mm
                          for hitch and thumb.
                        </li>
                        <li>
                          <strong>8-16 Tonne Machine (Ideal Setting):</strong>{" "}
                          65mm pin diameter, 420mm center to center, max width
                          of 300mm for hitch, thumb, and tilt rams.
                        </li>
                        <li>
                          <strong>15-25 Tonne Machine:</strong> 80mm pin
                          diameter, 470mm center to center, max width of 300mm
                          for hitch and thumb.
                        </li>
                        <li>
                          Hydraulic plumbing required down the boom with ½, ¾
                          inch snap-on, or 1-inch screw-on fittings.
                        </li>
                        <li>
                          Fixed hitch with no tilt rams, max width of 450mm.
                        </li>
                      </ul>
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
                The testing process for the Excavator Mounted CPT Rig involves:
              </p>
              <ul>
                <li>
                  <strong>In-situ CPT Testing:</strong> The rig is designed to
                  conduct cone penetration tests directly at landslide sites or
                  inaccessible locations, reducing the need for extensive
                  preparation.
                </li>
                <li>
                  <strong>Data Collection Efficiency:</strong> The rig operator
                  ensures that all relevant testing data is meticulously
                  recorded in real-time, streamlining the process and reducing
                  the need for additional site visits.
                </li>
                <li>
                  <strong>Adaptable Excavation:</strong> The rig can remove
                  gravel fill or boulders as needed to facilitate testing,
                  enabling accurate measurements in diverse soil conditions.
                </li>
              </ul>
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
                    <td>Landslide Testing</td>
                    <td>
                      Ideal for isolated landslide sites where traditional rigs
                      face accessibility challenges.
                    </td>
                  </tr>
                  <tr>
                    <td>Geotechnical Exploration</td>
                    <td>
                      Efficiently collects data in hard-to-reach areas without
                      additional mobilization.
                    </td>
                  </tr>
                  <tr>
                    <td>On-the-spot Excavation</td>
                    <td>
                      Enables excavation around boulders and obstacles, ensuring
                      consistent testing quality across various terrains.
                    </td>
                  </tr>
                  <tr>
                    <td>Direct Push Soil Sampling</td>
                    <td>
                      Suitable for collecting undisturbed soil samples and
                      conducting additional subsurface investigations.
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

export default ExcavatorMountedRig;
