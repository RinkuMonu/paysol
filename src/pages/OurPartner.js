import React from "react";
import "./styles/ourpartner.css";
const OurPartener = () => {
  return (
    <div>
      <section className="page-title">
        <img
          src="/images/our-partenr.png"
          alt="Contact Us"
          className="full-width-image"
        />
      </section>
      <div class="page-content">
        <section class="pb0 partner">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-3 col-md-12 mt-6 mt-lg-0 ps-lg-10">
                <img src="images/axis-bank.jpg" alt="axis" />
              </div>
              <div class="col-lg-3 col-md-12 mt-6 mt-lg-0 ps-lg-10">
                <img src="images/federral.png" alt="federral" />
              </div>
              <div class="col-lg-3 col-md-12 mt-6 mt-lg-0 ps-lg-10">
                <img src="images/HDFC.png" alt="HDFC" />
              </div>
              <div class="col-lg-3 col-md-12 mt-6 mt-lg-0 ps-lg-10">
                <img src="images/ICICI.jpg" alt="ICICI" />
              </div>
              <div class="col-lg-3 col-md-12 mt-6 mt-lg-0 ps-lg-10">
                <img src="images/paytm-logo.png" alt="paytm" />
              </div>
              <div class="col-lg-3 col-md-12 mt-6 mt-lg-0 ps-lg-10">
                <img src="images/yes-bank.png" alt="yes" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurPartener;
