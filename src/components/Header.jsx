import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoMain from "../assets/explore_nb.png"; // Original logo for main page
import logoBlog from "../assets/Explore_Logo.png"; // Logo for blog page
import "./Header.css";

const Header = ({ onFactSheetClick, onContactClick }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBlogPreview, setShowBlogPreview] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const blogs = [
    {
      id: 1,
      title: "Understanding CPT: Cone Penetration Testing",
      description:
        "An introduction to Cone Penetration Testing (CPT), its applications, and key features.",
      link: "/blogs/understanding-cpt",
    },
    {
      id: 2,
      title: "Innovating CPT Testing: How AI is Transforming In-Situ Testing",
      description:
        "Explore how artificial intelligence is revolutionizing CPT and in-situ testing, making geotechnical investigations more efficient and accurate.",
      link: "/blogs/innovating-cpt-testing",
    },
    {
      id: 3,
      title: "CPT vs. DMT: A Comprehensive Comparison",
      description:
        "Learn the key differences, advantages, and applications of CPT and DMT testing in geotechnical projects.",
      link: "/blogs/cpt-vs-dmt",
    },
  ];

  // Determine the logo based on the current route
  const logo = location.pathname.startsWith("/blogs") ? logoBlog : logoMain;

  // Add a solid background to the header on the blog page
  const isBlogPage = location.pathname.startsWith("/blogs");
  const navbarStyle = isBlogPage
    ? {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }
    : { backgroundColor: "transparent" };

  const linkStyle = isBlogPage
    ? { color: "#2c3e50", fontWeight: "bold" }
    : { color: "white" };

  return (
    <header className="navbar" style={navbarStyle}>
      <Link to="/" className="logo">
        <img src={logo} alt="Explore Logo" />
      </Link>
      {isMobile ? (
        <>
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
          {isMenuOpen && (
            <div className="mobile-menu">
              <button
                onClick={() => {
                  toggleMenu();
                  onFactSheetClick("cpt");
                }}
              >
                CPT
              </button>
              <button
                onClick={() => {
                  toggleMenu();
                  onFactSheetClick("direct-push-soil");
                }}
              >
                Direct Push Soil Sampling
              </button>
              <button
                onClick={() => {
                  toggleMenu();
                  onFactSheetClick("dynamic-probe");
                }}
              >
                Dynamic Probe Super Heavy
              </button>
              <button
                onClick={() => {
                  toggleMenu();
                  onFactSheetClick("flat-dilatometer");
                }}
              >
                Flat Dilatometer Test
              </button>
              <button
                onClick={() => {
                  toggleMenu();
                  onFactSheetClick("pagani-cpt");
                }}
              >
                Pagani CPT Rig
              </button>
              <button
                onClick={() => {
                  toggleMenu();
                  onFactSheetClick("piezometer");
                }}
              >
                Piezometer Installation
              </button>
              <button
                onClick={() => {
                  toggleMenu();
                  onFactSheetClick("scpt");
                }}
              >
                Seismic CPT
              </button>
              <button
                onClick={() => {
                  toggleMenu();
                  onFactSheetClick("sdmt");
                }}
              >
                Seismic DMT
              </button>
              <button
                onClick={() => {
                  toggleMenu();
                  onFactSheetClick("dissipation-testing");
                }}
              >
                Dissipation Testing
              </button>
              <button
                onClick={() => {
                  toggleMenu();
                  onFactSheetClick("service-locate");
                }}
              >
                Service Locating
              </button>
              <button
                onClick={() => {
                  toggleMenu();
                  onFactSheetClick("excavator-mounted-rig");
                }}
              >
                Excavator Mounted CPT Rig
              </button>
              <button onClick={onContactClick}>Contact</button>
              <Link to="/blogs" className="blog-link">
                Blog
              </Link>
            </div>
          )}
        </>
      ) : (
        <nav className="nav-links">
          <div
            className="dropdown"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <button className="dropdown-btn" style={linkStyle}>
              Our Capabilities
            </button>
            {showDropdown && (
              <div className="dropdown-content">
                <Link to="#" onClick={() => onFactSheetClick("cpt")}>
                  CPT
                </Link>
                <Link
                  to="#"
                  onClick={() => onFactSheetClick("direct-push-soil")}
                >
                  Direct Push Soil Sampling
                </Link>
                <Link to="#" onClick={() => onFactSheetClick("dynamic-probe")}>
                  Dynamic Probe Super Heavy
                </Link>
                <Link
                  to="#"
                  onClick={() => onFactSheetClick("flat-dilatometer")}
                >
                  Flat Dilatometer Test
                </Link>
                <Link to="#" onClick={() => onFactSheetClick("pagani-cpt")}>
                  Pagani CPT Rig
                </Link>
                <Link to="#" onClick={() => onFactSheetClick("piezometer")}>
                  Piezometer Installation
                </Link>
                <Link to="#" onClick={() => onFactSheetClick("scpt")}>
                  Seismic CPT
                </Link>
                <Link to="#" onClick={() => onFactSheetClick("sdmt")}>
                  Seismic DMT
                </Link>
                <Link
                  to="#"
                  onClick={() => onFactSheetClick("dissipation-testing")}
                >
                  Dissipation Testing
                </Link>
                <Link to="#" onClick={() => onFactSheetClick("service-locate")}>
                  Service Locating
                </Link>
                <Link
                  to="#"
                  onClick={() => onFactSheetClick("excavator-mounted-rig")}
                >
                  Excavator Mounted CPT Rig
                </Link>
              </div>
            )}
          </div>

          {/* Blog Dropdown */}
          <div
            className="blog-dropdown"
            onMouseEnter={() => setShowBlogPreview(true)}
            onMouseLeave={() => setShowBlogPreview(false)}
          >
            <button className="dropdown-btn" style={linkStyle}>
              Blog
            </button>
            {showBlogPreview && (
              <div className="blog-preview-dropdown">
                {blogs.map((blog) => (
                  <div key={blog.id} className="blog-preview-card">
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                    <Link to={blog.link} className="blog-preview-link">
                      Read More
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            to="#"
            className="contact-link"
            style={linkStyle}
            onClick={onContactClick}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
