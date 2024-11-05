// // src/components/Sidebar.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faChartLine,
//   faMapMarkerAlt,
//   faTools,
//   faWater,
//   faWaveSquare,
//   faScrewdriver,
//   faHammer,
//   faTrowel,
//   faRulerVertical,
// } from "@fortawesome/free-solid-svg-icons";
// import sidebarImage from "../assets/Explore_Logo.png";
// import "./Sidebar.css"; // Import Sidebar-specific styles

// function Sidebar() {
//   return (
//     <nav className="sidebar">
//       <div className="sidebar-image-container">
//         <img src={sidebarImage} alt="Explore Logo" className="sidebar-image" />
//       </div>
//       <h2>Explore Fact Sheets</h2>
//       <ul>
//         <li>
//           <Link to="/">
//             <FontAwesomeIcon icon={faHome} className="icon" /> Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/cpt">
//             <FontAwesomeIcon icon={faChartLine} className="icon" /> Cone
//             Penetration Testing (CPT)
//           </Link>
//         </li>
//         <li>
//           <Link to="/direct-push-soil">
//             <FontAwesomeIcon icon={faTrowel} className="icon" /> Direct Push
//             Soil Sampling
//           </Link>
//         </li>
//         <li>
//           <Link to="/dynamic-probe">
//             <FontAwesomeIcon icon={faHammer} className="icon" /> Dynamic Probe
//             Super Heavy (DPSH)
//           </Link>
//         </li>
//         <li>
//           <Link to="/flat-dilatometer">
//             <FontAwesomeIcon icon={faScrewdriver} className="icon" /> Flat
//             Dilatometer Test (DMT)
//           </Link>
//         </li>
//         <li>
//           <Link to="/pagani-cpt">
//             <FontAwesomeIcon icon={faTools} className="icon" /> Pagani CPT Rig
//           </Link>
//         </li>
//         <li>
//           <Link to="/piezometer">
//             <FontAwesomeIcon icon={faRulerVertical} className="icon" />{" "}
//             Piezometer Installation
//           </Link>
//         </li>
//         <li>
//           <Link to="/scpt">
//             <FontAwesomeIcon icon={faWaveSquare} className="icon" /> Seismic
//             Cone Penetration Test (SCPT)
//           </Link>
//         </li>
//         <li>
//           <Link to="/sdmt">
//             <FontAwesomeIcon icon={faWaveSquare} className="icon" /> Seismic
//             Dilatometer Test (SDMT)
//           </Link>
//         </li>
//         <li>
//           <Link to="/dissipation-testing">
//             <FontAwesomeIcon icon={faWater} className="icon" /> Dissipation
//             Testing
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Sidebar;
