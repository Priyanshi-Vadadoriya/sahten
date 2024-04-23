import React from "react";
import { PopularDishes } from "../../Utils/Api";
import { Link } from "react-router-dom";

const PopularDishe = () => {
  return (
    <div className="popular-dishes-section">
      <div className="container">
        <div className="heading">
            <h2 className="display-5 mb-3">Popular Dishes</h2>
        </div>
        <div className="product-cards">
          <div className="row">
            {PopularDishes?.map((product) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <div className="product-card">
                    <div className="product-card-img">
                      <img src={product.image} alt="" className="img-fluid" />
                    </div>
                    <div className="product-card-info">
                      <h3 className="ms-3 mt-3">{product.title}</h3>
                      <p className="ms-3">{product.data}</p>
                        <div className="view-more-btn">
                            <Link to="/tabbouleh">view more</Link>
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

export default PopularDishe;
