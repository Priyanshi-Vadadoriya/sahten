import React from "react";
import Heading from "../../Components/Heading/Heading";
import { Link } from "react-router-dom";
import { blogData } from "../../Utils/Api";
import blog from "../../assets/img/Blogs/blog.png";

const Blogs = () => {
  return (
    <div>
      <div className="blogs-section">
        <Heading title="Blogs" subtitle="Home" subtitle2="Blogs" />

        <div className="container">
          <div className="row align-items-center ">
            <div className="col-sm-12 col-md-12 col-lg-7">
              <div className="blog-image">
                <Link to="/tabbouleh"><img src={blog} alt="" className="img-fluid"/></Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5">
              <div className="blog-info">
                <h2 className="display-7">Zaatar</h2>
                <p>
                  Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur tempus urna at
                  turpis condimentum lobortis. Ut commodo efficitur neque. Ut
                  diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
                </p>
                <div className="read-more-btn">
                  <button class="cssbuttons-io">
                    <span> <Link to="/tabbouleh">READ MORE</Link></span>
                  </button>
                </div>
               
              </div>
            </div>
          </div>

          <div className="blog-cards-section">
            <div className="row">
              {blogData.map((item) => {
                return (
                  <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="blog-card" >
                      <div className="blog-card-image">
                        <img src={item.image} alt="" className="img-fluid" />
                      </div>
                      <div className="blog-card-info">
                        <h5 className="display-7">{item.title}</h5>
                        <p>
                          {item.data}<Link to="/tabbouleh">more</Link>
                        </p>
                      </div>
                      
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
