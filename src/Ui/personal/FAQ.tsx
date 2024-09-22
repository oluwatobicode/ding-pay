import React, { useState } from "react";
import "./FAQ.css";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

const faqItems = [
  {
    title: "How secure is Ding Pay?",
    desc: "Dingpay is as secure as any other POS transaction, even better. We use unique sound frequencies that are untraceable and inaudible to the human ear. We don't share your card details with merchants, and your actual card numbers aren't stored on your device or on Dingpay's servers. In short, Dingpay is not just secure, but you also are secure.",
  },
  {
    title: "Which banks support Ding Pay?",
    desc: "Ding Pay is currently working to be compatible with major credit and debit cards from banks in Nigeria, with more added all the time. View the banks that support Ding pay here.",
  },
  {
    title: "Does it cost extra to use Ding Pay?",
    desc: "No. Ding Pay does not charge any fees when you make payments in a store, or online.",
  },
  {
    title: "Can I use Ding Pay abroad?",
    desc: "Dingpay is currently available in Nigeria. We’re working on expanding to more countries sooner than you think. So stay tuned.",
  },
];

const FAQ: React.FC = () => {
  // Set initial state to 0 to open the first FAQ by default
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-section">
        <div className="faq-box">
          <h1 className="faq-box-title">FREQUENTLY ASKED QUESTIONS</h1>

          <div className="faq-section-box">
            {faqItems.map((el, i) => (
              <div className="questions-section" key={i}>
                <div className="question-each">
                  <div className="questions-align">
                    <h4>{el.title}</h4>
                    <button
                      onClick={() => toggleAccordion(i)}
                      className={`question-icon`}
                    >
                      {activeIndex === i ? <FiMinus /> : <FaPlus />}
                    </button>
                  </div>
                  <div
                    className={`answer ${activeIndex === i ? "active" : ""}`}
                    style={{
                      maxHeight: activeIndex === i ? "1000px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.6s ease",
                      padding: activeIndex === i ? "1rem" : "0 1rem",
                    }}
                  >
                    <p>{el.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="faq-image">
          <div className="faq-content">
            <h1>COMING SOON</h1>
            <div className="faq-content-into">
              <div className="app-play-store">
                <button className="cta-link">
                  <img
                    className="cta-icon"
                    src="/assets/app store.svg"
                    alt=""
                  />
                </button>
                <button className="cta-link">
                  <img
                    className="cta-icon"
                    src="/assets/play-store.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <img
              src="/assets/coming-soon-phone.svg"
              alt="coming-soon-phone"
              className="coming-soon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
