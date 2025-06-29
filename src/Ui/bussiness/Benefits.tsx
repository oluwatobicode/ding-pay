import "./Benefits.css";

const benefits = [
  {
    icon: "/assets/rocket.svg",
    title: "Faster checkouts",
    desc: "Complete every sale in seconds using inaudible sound signals. No swipes, no scanning—just sound.",
  },
  {
    icon: "/assets/verify.svg",
    title: "Merchant-grade security",
    desc: "We use end-to-end encryption and never store or expose your customers' payment credentials.",
  },
  {
    icon: "/assets/lock.svg",
    title: "Regulatory-compliant privacy",
    desc: "We only store what’s required to stay compliant and prevent fraud—nothing more, nothing less.",
  },
];

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="benefits-section">
        <h1>
          Modernize your business.
          <span className="benefits-section-span">
            {" "}
            Accept payments effortlessly.
          </span>
        </h1>

        <div className="benefits-details">
          {benefits.map((el, i) => (
            <div className="benefit-item" key={i}>
              <div className="icon-bg">
                <img src={el.icon} alt={el.title} />
              </div>
              <h2>{el.title}</h2>
              <p>{el.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
