import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "Understanding CPT: Cone Penetration Testing",
      description:
        "An introduction to Cone Penetration Testing (CPT), its applications, and key features.",
      fullText:
        "Cone Penetration Testing (CPT) is a vital geotechnical method that offers precise insights into subsurface conditions, enabling efficient construction planning and risk mitigation...",
      link: "/blogs/understanding-cpt",
    },
    {
      id: 2,
      title: "Innovating CPT Testing: How AI is Transforming In-Situ Testing",
      description:
        "Explore how artificial intelligence is revolutionizing CPT and in-situ testing, making geotechnical investigations more efficient and accurate.",
      fullText:
        "Artificial Intelligence is transforming the geotechnical industry by automating processes, enhancing predictive analytics, and enabling real-time decision-making for CPT testing...",
      link: "/blogs/innovating-cpt-testing",
    },
    {
      id: 3,
      title: "CPT vs. DMT: A Comprehensive Comparison",
      description:
        "Learn the key differences, advantages, and applications of CPT and DMT testing in geotechnical projects.",
      fullText:
        "Cone Penetration Testing (CPT) and Dilatometer Testing (DMT) are two essential methods in geotechnical engineering, providing vital data for foundation design, liquefaction assessment, and more...",
      link: "/blogs/cpt-vs-dmt",
    },
  ];

  const openPreviewModal = (blog) => {
    setCurrentBlog(blog);
    setPreviewModalOpen(true);
  };

  const closePreviewModal = () => {
    setPreviewModalOpen(false);
    setCurrentBlog(null);
  };

  return (
    <div className="blog-container">
      <h1 className="blog-title">Our Blog</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h2 className="blog-card-title">{blog.title}</h2>
            <p className="blog-card-description">{blog.description}</p>
            <div className="blog-card-actions">
              <button
                className="blog-card-link"
                onClick={() => openPreviewModal(blog)}
              >
                Preview
              </button>
              <Link to={blog.link} className="blog-card-link">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {previewModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closePreviewModal}>
              &times;
            </button>
            <h2 className="modal-title">{currentBlog?.title}</h2>
            <p className="modal-text">{currentBlog?.fullText}</p>
            <Link to={currentBlog?.link} className="blog-read-more">
              Read Full Blog
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
