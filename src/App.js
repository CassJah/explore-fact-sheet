import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConePenetrationTestFactSheet from "./components/Cone-Penetration-Testin-fact-sheet";
import DirectPushSoilSamplingFactSheet from "./components/Direct-Push-Soil-Sampling-fact-sheet";
import DynamicProbeSuperHeavyFactSheet from "./components/Dynamic-Probe-Super-Heavy-(DPSH)-fact-sheet";
import FlatDilatometerTestFactSheet from "./components/Flat-Dilatometer-Test (DMT)-fact-sheet";
import PaganiCPTRigFactSheet from "./components/Pagani-CPT-Rig-fact-sheet";
import PiezometerInstallationFactSheet from "./components/Piezometer-Installation-fact-sheet";
import SeismicConePenetrationTestFactSheet from "./components/Seismic-Cone-Penetration-Test (SCPT)-fact-sheet";
import SeismicDilatometerTestFactSheet from "./components/Seismic-Dilatometer-Test (SDMT)-fact-sheet";
import DissipationTestingFactSheet from "./components/DissipationTestingFactSheet";
import ServiceLocateFactSheet from "./components/Service-locate";
import ExcavatorMountedRigFactSheet from "./components/ExcavatorMountedRig";
import Modal from "./components/Modal";
import Home from "./components/home";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import Footer from "./components/Footer"; // Import the Footer component

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeContent, setActiveContent] = useState(null);

  const openFactSheetSelectionModal = () => {
    setActiveContent("fact-sheet-selection");
    setIsModalOpen(true);
  };

  const openFactSheetModal = (factSheet) => {
    setActiveContent(factSheet);
    setIsModalOpen(true);
  };

  const openContactModal = () => {
    setActiveContent("contact");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveContent(null);
  };

  return (
    <Router>
      <div className="app-container">
        <Header
          onFactSheetClick={openFactSheetModal}
          onContactClick={openContactModal}
        />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <Home onViewServicesClick={openFactSheetSelectionModal} />
              }
            />
          </Routes>

          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            isFactSheet={activeContent !== "contact"}
          >
            {activeContent === "fact-sheet-selection" && (
              <div className="fact-sheet-list">
                <button onClick={() => openFactSheetModal("cpt")}>
                  Cone Penetration Testing (CPT)
                </button>
                <button onClick={() => openFactSheetModal("direct-push-soil")}>
                  Direct Push Soil Sampling
                </button>
                <button onClick={() => openFactSheetModal("dynamic-probe")}>
                  Dynamic Probe Super Heavy (DPSH)
                </button>
                <button onClick={() => openFactSheetModal("flat-dilatometer")}>
                  Flat Dilatometer Test (DMT)
                </button>
                <button onClick={() => openFactSheetModal("pagani-cpt")}>
                  Pagani CPT Rig
                </button>
                <button onClick={() => openFactSheetModal("piezometer")}>
                  Piezometer Installation
                </button>
                <button onClick={() => openFactSheetModal("scpt")}>
                  Seismic Cone Penetration Test (SCPT)
                </button>
                <button onClick={() => openFactSheetModal("sdmt")}>
                  Seismic Dilatometer Test (SDMT)
                </button>
                <button
                  onClick={() => openFactSheetModal("dissipation-testing")}
                >
                  Dissipation Testing
                </button>
                <button onClick={() => openFactSheetModal("service-locate")}>
                  Service Locating/Service Report Markout
                </button>
                <button
                  onClick={() => openFactSheetModal("excavator-mounted-rig")}
                >
                  Excavator Mounted CPT Rig
                </button>
              </div>
            )}
            {activeContent === "cpt" && <ConePenetrationTestFactSheet />}
            {activeContent === "direct-push-soil" && (
              <DirectPushSoilSamplingFactSheet />
            )}
            {activeContent === "dynamic-probe" && (
              <DynamicProbeSuperHeavyFactSheet />
            )}
            {activeContent === "flat-dilatometer" && (
              <FlatDilatometerTestFactSheet />
            )}
            {activeContent === "pagani-cpt" && <PaganiCPTRigFactSheet />}
            {activeContent === "piezometer" && (
              <PiezometerInstallationFactSheet />
            )}
            {activeContent === "scpt" && (
              <SeismicConePenetrationTestFactSheet />
            )}
            {activeContent === "sdmt" && <SeismicDilatometerTestFactSheet />}
            {activeContent === "dissipation-testing" && (
              <DissipationTestingFactSheet />
            )}
            {activeContent === "service-locate" && <ServiceLocateFactSheet />}
            {activeContent === "excavator-mounted-rig" && (
              <ExcavatorMountedRigFactSheet />
            )}
            {activeContent === "contact" && <ContactForm />}
          </Modal>
        </div>
        <Footer /> {/* Add Footer here */}
      </div>
    </Router>
  );
}

export default App;
