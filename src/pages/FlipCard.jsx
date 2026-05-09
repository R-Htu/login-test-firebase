import { useState } from "react";
import "./flipcard.css";
export default function FlipCard({ item }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`lm-flip-card${flipped ? " flipped" : ""}`}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="lm-flip-inner">

        <div className="lm-flip-face lm-flip-front">
          <img src={item.img} alt={item.lbl} loading="lazy" />
          <div className="lm-flip-front-overlay">
            <span className="lm-flip-front-label">{item.lbl}</span>
          </div>
        </div>

        <div className="lm-flip-face lm-flip-back">
          <div className="lm-emoji">{item.e}</div>
          <div className="lm-quote">"{item.quote}"</div>
          <div className="lm-attr">{item.attr}</div>
        </div>

      </div>
    </div>
  );
}
