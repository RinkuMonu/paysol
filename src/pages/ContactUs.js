import React from "react";
import "./styles/contact.css";
const ContactUs = () => {
  return (
    <div>
      <section className="page-title pb-0 border-0">
        <img
          src="/images/contact.svg"
          alt="Contact Us"
          className="full-width-image"
        />
      </section>

      <div className="page-content">
        <section className="pb-lg-0 z-index-1 pt-0">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-7 col-md-12 ps-lg-10 order-lg-1">
                <div className="theme-title">
                  <h2>Get In Touch</h2>
                </div>
                <div className="messages"></div>
                <div className="row">
                  <div className="col-md-4 ">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Phone"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mb-4">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Write Message"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button className="themeht-btn primary-btn mt-4">
                  <span>Submit</span>
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
              <div className="col-lg-5 col-md-12 mt-6 mt-lg-0">
                <div className="contact-box">
                  <div className="theme-title">
                    <h2>Contact Details</h2>
                  </div>
                  <ul className="contact-info list-unstyled">
                    <li>
                      <i className="bi bi-globe-americas fs-3"></i>
                      <div>
                        <span >
                          Visit Our Location
                        </span>
                        <b >
                          Finuniques Private Limited
                        </b>
                        <p>
                        Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur Rajasthan, India, 302017
                        </p>
                      </div>
                    </li>
                    <li>
                      <i className="bi bi-envelope fs-3 "></i>
                      <div>
                        <span >Send Us Email</span>
                        <a
                          href="mailto:info@finuniques.in"
                          className="text-decoration-none"
                        >
                          info@finuniques.in
                        </a>
                      </div>
                    </li>
                    <li className="">
                      <i className="bi bi-telephone-outbound fs-3 "></i>
                      <div>
                        <span>Phone No.</span>
                        <a
                          href="tel:9660339514"
                          className="text-decoration-none"
                        >
                          9660339514
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
