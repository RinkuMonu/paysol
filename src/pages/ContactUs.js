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
                          href="tel:+91 72970 26119"
                          className="text-decoration-none"
                        >
                          +91 72970 26119
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
          
            </div>
            <div className="row my-4">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3561.264701407029!2d75.869785!3d26.799699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQ3JzU4LjkiTiA3NcKwNTInMTEuMiJF!5e0!3m2!1sen!2sin!4v1724749044503!5m2!1sen!2sin"
                    width="100%" height="100%" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>

              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
