import { useState, type CSSProperties } from "react";
import { PROCESSO } from "../data/conteudo";
import { spotlight } from "../lib/spotlight";

export default function Processo() {
  const [aberto, setAberto] = useState(0);

  return (
    <section className="section" id="process">
      <div className="wrap">
        <div className="reveal">
          <div className="eyebrow">Como eu trabalho</div>
          <h2 className="h2">Do briefing ao deploy, sem surpresas.</h2>
        </div>

        <div className="steps reveal">
          {PROCESSO.map((etapa, idx) => {
            const isOpen = aberto === idx;
            return (
              <div
                className={`step spot reveal${isOpen ? " open" : ""}`}
                key={etapa.num}
                onMouseMove={spotlight}
                style={{ "--d": `${idx * 60}ms` } as CSSProperties}
              >
                <button
                  type="button"
                  className="step-head"
                  onClick={() => setAberto(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="step-num">{etapa.num}</span>
                  <span className="step-title">{etapa.titulo}</span>
                  <span className="step-chevron">{isOpen ? "−" : "+"}</span>
                </button>
                <div className="step-body">
                  <p>{etapa.descricao}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
