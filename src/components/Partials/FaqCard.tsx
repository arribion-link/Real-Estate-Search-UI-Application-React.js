import { useEffect, useState } from "react";

type faq = {
  question: string;
  answer: string;
};
type FaqProps = {
  faq: faq;
};
export default function FaqCard({ faq }: FaqProps) {
  const { question, answer } = faq;
  const [isExpanded, setIsExpanded] = useState(false);
  const [showFeedBackMenu, setShowFeedBackMenu] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  useEffect(() => {
    let timer: number | undefined;

    if (isExpanded) {
      timer = window.setTimeout(() => {
        setShowFeedBackMenu(true);
      }, 3000);
    } else {
      setShowFeedBackMenu(false);
    }

    return () => clearTimeout(timer);
  }, [isExpanded]);

  return (
    <div className={`faq-card flx col ${isExpanded ? "expanded" : ""}`}>
      <h3 onClick={handleClick}>{question}</h3>
      {isExpanded && (
        <>
          <p>{answer}</p>
          {showFeedBackMenu && (
            <div className="faq-feedback">
              <p>Was this helpful?</p>
              <div className="options flx">
                <span></span>
                <span title="Yes, I like it">👍</span>
                <span title="Not really">👎</span>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
