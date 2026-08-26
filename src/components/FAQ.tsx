import { useState, type CSSProperties } from "react";
import { FAQS } from "../data/conteudo";
import { spotlight } from "../lib/spotlight";

export default function FAQ() {
  const [abertos, setAbertos] = useState<Set<number>>(new Set([0]));

  const toggle = (idx: number) => {
    setAbertos((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="reveal">
          <div className="eyebrow">Dúvidas</div>
          <h2 className="h2">Perguntas frequentes.</h2>
        </div>

        <div className="faq-list">
          {FAQS.map((item, idx) => {
            const isOpen = abertos.has(idx);
            return (
              <div
                className={`faq-item spot reveal${isOpen ? " open" : ""}`}
                key={item.q}
                onMouseMove={spotlight}
                style={{ "--d": `${idx * 60}ms` } as CSSProperties}
              >
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
