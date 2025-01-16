
import React from "react";
import "./Footer.css"; // Create a CSS file for the styles or inline styles if preferred

function Footer() {
  return (
    <footer className="footer">
      {/* Primary Footer Section */}
      <div className="primary-footer">
        <div className="container">
          <div className="row">
            {/* Connect With Us Section */}
            <div className="col-lg-4 col-md-5 mt-6 mt-md-0">
              <h5>Connect With Us</h5>
              <ul className="media-icon list-unstyled">
                <li className="d-flex">
                <img src="/assets/Home/world.png" width={33} alt="location" className="flaticon-facebook-app-symbol" />

                  <p className="mb-0" style={{color:"#fff"}}>
                    Madhapur Village, Gafoor Nagar, Hyderabad, Telangana - 500081
                  </p>
                </li>
                <li>
                <img src="/assets/Home/send-mail.png" width={33} alt="location" className="flaticon-facebook-app-symbol" />

                  <a href="mailto:info@paysguru.com">info@paysguru.com</a>
                </li>
                <li>
                <img src="/assets/Home/phone-call.png" width={33} alt="location" className="flaticon-facebook-app-symbol" />

                  <a href="tel:+9059400261">9059400261</a>
                </li>
              </ul>
            </div>

            {/* Other Links Section */}
            <div className="col-lg-4 col-md-8 mt-6 mt-lg-0">
              <div className="row">
                {/* Privacy, Terms, Refund Links */}
                <div className="col-md-6 footer-menu">
                  <h5>Other Links</h5>
                  <ul className="list-unstyled w-100">
                    <li>
                      <a href="/PrivacyPolicy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/TermsAndCondition">Terms Conditions</a>
                    </li>
                    <li>
                      <a href="/RefundPolicy">Refund Cancellation</a>
                    </li>
                  </ul>
                </div>
                {/* Pages Links */}
                <div className="col-md-6 mt-5 mt-md-0 footer-menu">
                  <h5>Pages</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/BBPS">BBPS</a>
                    </li>
                    <li>
                      <a href="/Services">Services</a>
                    </li>
                    <li>
                      <a href="/OurPartner">Our Partners</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="col-lg-4 col-md-7 pe-lg-8">
              <h5>Social Media</h5>
              <ul className="list-inline ps-0 ms-0 footer-social">
                <li className="list-inline-item">
                  <a href="#">
                  <i class="bi bi-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                  <i class="bi bi-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                  <i class="bi bi-twitter-x"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                  <i class="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Footer Section */}
      <div className="secondary-footer">
        <div className="container">
          <div className="copyright">
            <div className="row align-items-center">
              <div className="col-md-12 text-center">
                © 2024 @Paysguru. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Background */}
      <div
        className="dark-bg ht-bg-move"
        style={{
          transformOrigin: "50% 50%",
          transform: "scale(0.95, 1)",
          borderRadius: "30px",
        }}
      ></div>
    </footer>
  );
}

export default Footer;

