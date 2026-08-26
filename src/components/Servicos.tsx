import type { CSSProperties } from "react";
import { SERVICOS } from "../data/conteudo";
import { spotlight } from "../lib/spotlight";

export default function Servicos() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="reveal">
          <div className="eyebrow">Serviços</div>
          <h2 className="h2">Como eu posso te ajudar.</h2>
        </div>
        <div className="serv-grid">
          {SERVICOS.map((s, i) => (
            <div
              className="serv spot reveal"
              key={s.num}
              onMouseMove={spotlight}
              style={{ "--d": `${i * 70}ms` } as CSSProperties}
            >
              <div className="num">{s.num}</div>
              <h3>{s.titulo}</h3>
              <p>{s.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
