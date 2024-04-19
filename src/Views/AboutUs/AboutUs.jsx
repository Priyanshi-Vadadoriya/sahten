import React from "react";
import card1 from "../../assets/img/AboutUs/about-card-img.png";
import card2 from "../../assets/img/AboutUs/about-card-img2.png";
import aboutImg1 from "../../assets/img/AboutUs/aboutus-img1.png";
import aboutImg2 from "../../assets/img/AboutUs/aboutus-img2.png";
import aboutImg3 from "../../assets/img/AboutUs/aboutus-img3.png";
import aboutImg4 from "../../assets/img/AboutUs/aboutus-img4.png";
import Heading from "../../Components/Heading/Heading";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <Heading title="About us" subtitle="Home"  subtitle2="About Us" />

      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="row ">
            <div className="col-6 about-img1">
                <img src={aboutImg1} alt="" className="img-fluid rounded " />
              </div>
              <div className="col-6">
                <img
                  src={aboutImg2}
                  alt=""
                  className="img-fluid rounded about-img "
                />
              </div>
              <div className="col-6">
                <img
                  src={aboutImg3}
                  alt=""
                  className="img-fluid rounded about-img2"
                />
              </div>
              <div className="col-6">
                <img src={aboutImg4} alt="" className="img-fluid rounded" />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="about-us-info">
              <h3 className="display-6">About us</h3>
              <p>
                Welcome to Saحten your premier destination for exploring the
                culinary delights of Lebanon. With a profound respect for
                tradition and a commitment to excellence, we showcase the
                diverse and flavorful dishes that define Lebanese cuisine. Our
                platform is dedicated to providing a comprehensive understanding
                of the cultural significance and exquisite tastes found within
                each recipe.
              </p>
            </div>
          </div>
        </div>

        <div className="how-it-works text-center mt-5">
          <h3 className="display-7">How it works</h3>
          <p>
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Nunc vulputate libero et velit interdum, ac aliquet odio
            <br /> mattis.
          </p>
        </div>

        <div className="about-us-cards">
          <div className="about-us-card margin-t">
            <div className="row align-items-center justify-content-center">
              <div className="col-sm-12 col-md-6 col-lg-6 my-2">
                <div className="about-us-card-img">
                  <img src={card1} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 my-2">
                <div className="about-us-card-info">
                  <h4>
                    Torem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </h4>
                  <p>
                    Torem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-us-card margin-y">
            <div className="row align-items-center justify-content-center">
              <div className="col-sm-12 col-md-6 col-lg-6 my-2">
                <div className="about-us-card-info">
                  <h4>
                    Torem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </h4>
                  <p>
                    Torem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 my-2">
                <div className="about-us-card-img">
                  <img src={card2} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
