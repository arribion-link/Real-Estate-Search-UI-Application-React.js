import "../css/HowItWorks.css";
import verifyIllustration from "../assets/verify-illustration.png";
import dealIllustration from "../assets/deal-illustration.png";
import searchIllustration from "../assets/search-illustration.png";
import { useState, useEffect, useRef } from "react";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Verify",
      desc: "Provide valid details of yourself and ensure secure transactions. Note that you will pay according to the property owner's preferences.",
      img: verifyIllustration,
      alt: "User verification illustration",
    },
    {
      id: 2,
      title: "Search Property",
      desc: "Search your desired property using our powerful search tools and filter based on location, price, size, type and other criteria such as internet connection.",
      img: searchIllustration,
      alt: "Property search illustration",
    },
    {
      id: 3,
      title: "Get Deals",
      desc: "Once you are satisfied with a property, you will be able to submit an order through our platform, where the owner will be notified directly and your order will be processed within 72 hours.",
      img: dealIllustration,
      alt: "Property deals illustration",
    },
  ];

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const stepTime = 5000;
  const intervalRef = useRef<number | null>(null);

  const stepColorClass = "step-black";
  const currentStep = steps[currentStepIndex];

  const playSteps = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = window.setInterval(() => {
        setCurrentStepIndex((prevIndex) =>
          prevIndex + 1 >= steps.length ? 0 : prevIndex + 1
        );
      }, stepTime);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, steps.length]);

  const handleStepClick = (stepId: number) => {
    setCurrentStepIndex(stepId - 1);
    setIsPlaying(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <section className="how-it-works-section">
      <div className="how-it-works-text-content">
        <button onClick={playSteps}>
          How it works {isPlaying ? "Pause" : "Play"}
        </button>
        <h2>How it works</h2>

        <ul className="steps">
          {steps.map((step) => (
            <li
              key={step.id}
              className={`step ${
                currentStep.id === step.id ? stepColorClass : ""
              }`}
              onClick={() => handleStepClick(step.id)}
            >
              <span>{`0${step.id}`}</span>
              <h5>{step.title}</h5>
              <div className="step-description">{step.desc}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="how-it-works-media-content">
        <img
          src={currentStep.img}
          alt={currentStep.alt}
          className="step-image"
        />
      </div>
    </section>
  );
}
