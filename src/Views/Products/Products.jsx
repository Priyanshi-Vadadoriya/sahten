import React from "react";
import Heading from "../../Components/Heading/Heading";
import { productData } from "../../Utils/Api";

const Products = () => {
  return (
    <div className="product-section">
      <Heading title="Products" subtitle="Home" subtitle2="Products" />

      <div className="container">
        <div className="product-cards">
          <div className="row">
          {
            productData.map((product) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <div className="product-card">
                    <div className="product-card-img">
                        <img src={product.image} alt="" className="img-fluid"/>
                    </div>
                    <div className="product-card-info">
                        <h3 className="ms-3 mt-3">{product.title}</h3>
                        <p className="ms-3">{product.data}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
