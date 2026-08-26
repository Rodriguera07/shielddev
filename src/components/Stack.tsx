import { useState } from "react";
import { STACK } from "../data/conteudo";
import { spotlight } from "../lib/spotlight";

export default function Stack() {
  const [ativo, setAtivo] = useState(0);

  return (
    <section className="section" id="stack">
      <div className="wrap">
        <div className="reveal">
          <div className="eyebrow">Stack</div>
          <h2 className="h2">Tecnologias que eu uso no dia a dia.</h2>
        </div>

        <div className="stack-tabs reveal">
          {STACK.map((grupo, idx) => (
            <button
              key={grupo.grupo}
              type="button"
              className={`stack-tab${idx === ativo ? " active" : ""}`}
              onClick={() => setAtivo(idx)}
            >
              {grupo.grupo}
            </button>
          ))}
        </div>

        <div className="stack-grid reveal">
          {STACK[ativo].itens.map((tech, idx) => (
            <div
              className="stack-item spot"
              key={`${ativo}-${tech}`}
              onMouseMove={spotlight}
              style={{ animationDelay: `${idx * 40}ms` }}
            >
              <span className="stack-dot" />
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
