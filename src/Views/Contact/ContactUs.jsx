import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <section>
      <div className="contact-us-section d-flex align-items-center justify-content-center">
        <div className="contact-us-form">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-7">
                <div className="contact-us">
                    <h3 className="display-7">Contact Us</h3>
                    <div className="form">
                        <div className="pt-3 mb-5">
                            <div><label for="name">Name</label></div>
                            <input type="text" className="input-field"/>
                        </div>
                        <div className=" mb-5">
                            <div><label for="name">Email</label></div>
                            <input type="email" className="input-field"/>
                        </div>
                        <div className="mb-4">
                            <div><label for="name">Phone</label></div>
                            <input type="phone" className="input-field"/>
                        </div>

                    </div>
                    <div className="d-flex justify-content-end">
                          <Link className="submit-btn ">SUBMIT</Link>
                        </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5">
                <div className="contact">
                    <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                    <div className="my-2">
                        <i class="fa-solid fa-location-arrow me-4"></i><Link>Greenville, Sc</Link>
                    </div>
                    <div className="my-2">
                        <i class="fa-solid fa-phone me-4"></i><Link>+1-833-722-6338</Link>
                    </div>
                    <div className="my-2">
                        <i class="fa-solid fa-location-dot me-4"></i><Link>Contact@101sbc.com</Link>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
