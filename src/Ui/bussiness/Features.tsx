import React from "react";
import "./Features.css";

const Features: React.FC = () => {
  return (
    <section className="features">
      <div className="features-section">
        <div className="card-left">
          <div className="card-image-left">
            <img
              className="feature-img"
              src="/assets/bussinessOne.png"
              alt="bussiness-one-image"
            />
          </div>
          <div className="card-text-left">
            <div className="card-text-left-details">
              <h1>
                scale your
                <span className="card-text-left-bussiness-block">payments</span>
              </h1>
              <p>
                Whether you make transactions in thousands or millions, Dingpay
                is here to make receiving payments seamless.
              </p>
            </div>
          </div>
        </div>

        <div className="card-right">
          <div className="card-text-right">
            <div className="card-text-right-details">
              <h1>Make payments easier for customers</h1>
              <p>
                Boost customer satisfaction with seamless, sound-powered
                transactions. With Dingpay, payments are quick and secure, no
                extra hardware needed, just a customer’s mobile device.
              </p>
            </div>
          </div>

          <div className="card-image-right">
            <img
              className="feature-img-s"
              src="/assets/busssinessTwo.png"
              alt="features-two-image"
            />
          </div>
        </div>

        <div className="card-left">
          <div className="card-image-left">
            <img
              className="feature-img"
              src="/assets/bussinessThree.png"
              alt="features-three-image"
            />
          </div>
          <div className="card-text-left-business">
            <div className="card-text-left-details">
              <h1>
                Scale down on{" "}
                <span className="card-text-left-bussiness-block">hardware</span>
              </h1>
              <p>
                There is no need to keep on investing in expensive POS
                terminals. All you need is to turn your smartphone into a
                terminal.
              </p>
            </div>
          </div>
        </div>

        <div className="card-right">
          <div className="card-text-right">
            <div className="card-text-right-details">
              <h1>Be your own accountant</h1>
              <p>
                Track your revenue, payments and profits from the comfort of
                your phone.
              </p>
            </div>
          </div>

          <div className="card-image-right">
            <img
              className="feature-img-s"
              src="/assets/bussinessFour.png"
              alt="bussiness-four-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
