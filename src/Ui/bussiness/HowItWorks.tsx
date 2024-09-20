import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div
        className="how-it-works-section
      "
      >
        <h2 className="section-title">HOW IT WORKS</h2>
        <div className="steps-container">
          <div className="line"></div>

          <div className="step">
            <div className="circle">1</div>
            <p>Download the Dingpay app from your app store.</p>
            <div className="step-image">
              <img
                src="/assets/stepone.svg"
                alt="Step 1"
                className="step-img"
              />
            </div>
          </div>

          <div className="step">
            <div className="circle">2</div>
            <p>Complete our KYC requirements.</p>
            <div className="step-image">
              <img
                src="/assets/bussinesssteptwo.svg"
                alt="Step 2"
                className="step-img"
              />
            </div>
          </div>

          <div className="step">
            <div className="circle">3</div>
            <p>Accept payments instantly from your mobile device.</p>
            <div className="step-image">
              <img
                src="/assets/bussinessstepthree.svg"
                alt="Step 3"
                className="step-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
