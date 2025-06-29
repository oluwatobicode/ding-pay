import React, { useState } from "react";
import "./FAQ.css";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

const faqItems = [
  {
    title: "What kind of phone do I need to use SonaPay Business?",
    desc: "Any iOS or Android phone with an active internet connection can run the app and accept payments.",
  },
  {
    title: "What phone does my customer need to make a payment?",
    desc: "Any smartphone that has the SonaPay Personal app installed can emit the payment sound.",
  },
  {
    title: "Are there any fees?",
    desc: "We charge a small transaction fee per payment. There are no setup or monthly fees.",
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
        <div className="bussiness-faq-box">
          <h1 className="faq-box-title">QUESTIONS? WE’VE GOT ANSWERS</h1>

          <div className="faqs-content">
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
        </div>

        <div className="bussiness-faq-image">
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
              src="/assets/business-illustration.svg"
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
