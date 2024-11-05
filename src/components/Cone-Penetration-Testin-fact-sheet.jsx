import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import "./Cone-Penetration-Testin-fact-sheet.css";

const ConePenetrationTestFactSheet = () => {
  const [isOpen, setIsOpen] = useState({
    features: false,
    process: false,
    applications: false,
    contact: false,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleSection = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));

    document.getElementById(section).scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // You can add additional form submission code here.
  };

  return (
    <div className="fact-sheet-container">
      <Fade>
        <div className="header-section">
          <h1 className="title">Cone Penetration Testing (CPT)</h1>
        </div>
      </Fade>

      <div id="fact-sheet-content">
        <p className="overview">
          Explore Geotechnical specializes in Cone Penetration Testing (CPT),
          using Pagani's advanced compression-style probes to provide accurate,
          high-resolution data on subsurface soil conditions. CPT is an
          efficient method for determining soil stratigraphy, strength, and
          geotechnical properties without extensive site disruption.
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
                        <td>P-Cone 10cm²</td>
                        <td>
                          The 10cm² P-Cone is designed for use in softer soils
                          and shallow depths, typically up to 20 meters.
                        </td>
                      </tr>
                      <tr>
                        <td>P-Cone 15cm²</td>
                        <td>
                          The 15cm² P-Cone is designed for denser soils and
                          deeper penetration.
                        </td>
                      </tr>
                      <tr>
                        <td>Compression-Style Probes</td>
                        <td>
                          The compression-style design allows for high-accuracy
                          measurements by recording resistance at the cone tip
                          and along the shaft.
                        </td>
                      </tr>
                      <tr>
                        <td>Real-Time Data Collection</td>
                        <td>
                          The Pagani CPT system continuously collects data on
                          cone resistance (qc), sleeve friction (fs), and pore
                          pressure (u2), providing a detailed profile of soil
                          strength and stratigraphy.
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
                    The CPT probe is hydraulically pushed into the ground,
                    measuring the resistance at the cone tip and along the
                    friction sleeve. The system also records pore pressure as
                    the probe penetrates through different soil layers.
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
                          CPT data offers vital insights into soil bearing
                          capacity, enabling the safe design of foundations.
                        </td>
                      </tr>
                      <tr>
                        <td>Soil Stratigraphy</td>
                        <td>
                          Identifies variations in soil layers, offering crucial
                          information for construction and site planning.
                        </td>
                      </tr>
                      <tr>
                        <td>Ground Improvement Verification</td>
                        <td>
                          Evaluates the success of soil stabilization techniques
                          by monitoring changes in soil strength and density.
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

export default ConePenetrationTestFactSheet;
