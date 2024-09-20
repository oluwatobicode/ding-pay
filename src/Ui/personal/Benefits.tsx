import "./Benefits.css";

const benefits = [
  {
    icon: "/assets/rocket.svg",
    title: "Make payment in a second",
    desc: "Every purchase or checkout requires your unique and untraceable authentication via sound frequencies. You alone call the shots.",
  },
  {
    icon: "/assets/verify.svg",
    title: "Your data is protected",
    desc: "We do not share your card details with merchants or store your card details. This way, no one has access to your details or whereabouts.",
  },
  {
    icon: "/assets/lock.svg",
    title: "Privacy",
    desc: "Your transaction information isn’t shared with anyone. We only store information for fraud protection, regulatory and troubleshooting purposes.",
  },
];

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="benefits-section">
        <h1>
          Experience the future of payments.
          <span className="benefits-section-span">
            {" "}
            It’s safe, seamless and simple.
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
