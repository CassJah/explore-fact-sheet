import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import "./Direct-Push-Soil-Sampling-fact-sheet.css";

const DirectPushSoilSamplingFactSheet = () => {
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
    // Handle form submission logic (e.g., sending data to a backend)
  };

  return (
    <div className="fact-sheet-container">
      <Fade>
        <div className="header-section">
          <h1 className="title">Direct Push Soil Sampling System (DS-44)</h1>
        </div>
      </Fade>

      <p className="overview">
        The DS-44 Direct Push Soil Sampling System, employed by Explore
        Geotechnical, allows for rapid and efficient soil sampling up to depths
        of 15 meters. This system is ideal for environmental surveys,
        geotechnical investigations, and chemical testing applications.
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
                      <td>Continuous & Discrete Sampling</td>
                      <td>
                        Provides options for 1-meter continuous core samples or
                        discrete sampling at specific depths.
                      </td>
                    </tr>
                    <tr>
                      <td>Direct Push Sampling</td>
                      <td>
                        Achieves soil samples through direct push or percussion
                        drive, minimizing sample disturbance.
                      </td>
                    </tr>
                    <tr>
                      <td>Plastic Sample Liners</td>
                      <td>
                        42 mm diameter liners ensure sample containment and
                        integrity for further testing.
                      </td>
                    </tr>
                    <tr>
                      <td>Rapid Sampling</td>
                      <td>
                        Enables quick sample collection with minimal setup time.
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
                  During the Direct Push Soil Sampling process, a sampling rod
                  is hydraulically driven into the ground to the desired depth.
                  The sampler collects soil within a sealed liner to prevent
                  contamination. Sampling can be performed continuously or at
                  specific intervals, allowing for flexibility based on project
                  requirements. After reaching the target depth, the sample is
                  retrieved, sealed, and preserved for further analysis.
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
                      <td>Environmental Surveys</td>
                      <td>
                        Ideal for sampling soil layers for contamination and
                        environmental impact assessments.
                      </td>
                    </tr>
                    <tr>
                      <td>Geotechnical Investigations</td>
                      <td>
                        Obtains undisturbed samples for analyzing soil structure
                        and stratigraphy.
                      </td>
                    </tr>
                    <tr>
                      <td>Chemical Testing</td>
                      <td>
                        Sealable liners preserve samples for gas and liquid
                        testing, ideal for chemical analysis.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Fade>
          )}
        </div>

        {/* Contact Form Section */}
        {/* <div
          id="contact"
          className={`accordion-item ${isOpen.contact ? "open" : ""}`}
        >
          <h2 className="heading" onClick={() => toggleSection("contact")}>
            Contact Us
          </h2>
          {isOpen.contact && (
            <Fade>
              <div className="content">
                {isSubmitted ? (
                  <p className="success-message">
                    Thank you for contacting us! We will get back to you soon.
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label>Name:</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email:</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Subject:</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Message:</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="submit-button">
                      Submit
                    </button>
                  </form>
                )}
              </div>
            </Fade>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default DirectPushSoilSamplingFactSheet;
