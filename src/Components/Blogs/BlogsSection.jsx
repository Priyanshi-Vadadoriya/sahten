import React from "react";
import { HomeBlogData } from "../../Utils/Api";
import { Link } from "react-router-dom";

const BlogsSection = () => {
  return (
    <div className="home-page-blog-section">
      <div className="container">
      <div className="heading mt-4">
            <h2 className="display-5 mb-4">Blogs</h2>
        </div>
        <div className="blog-cards-section">
          <div className="row">
            {HomeBlogData.map((item) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <div className="blog-card">
                    <div className="blog-card-image">
                      <img src={item.image} alt="" className="img-fluid" />
                      <div className="blog-card-info">
                        <h5 className="display-7 mb-3">{item.title}</h5>
                        <p>
                          {item.data}
                        </p>
                        <div className="read-more-btn">
                            <Link>read more</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
