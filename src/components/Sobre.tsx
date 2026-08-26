import type { CSSProperties } from "react";
import { CHIPS, STATS } from "../data/conteudo";
import { useCountUp } from "../hooks/useCountUp";
import { spotlight } from "../lib/spotlight";

function Stat({ v, l, i }: { v: string; l: string; i: number }) {
  const { ref, display } = useCountUp(v);
  return (
    <div
      className="stat spot reveal"
      ref={ref}
      onMouseMove={spotlight}
      style={{ "--d": `${i * 80}ms` } as CSSProperties}
    >
      <div className="v">{display}</div>
      <div className="l">{l}</div>
    </div>
  );
}

export default function Sobre() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="about reveal">
          <div>
            <div className="eyebrow">Sobre</div>
            <h2 className="h2">
              Desenvolvedor web focado em sites rápidos, bonitos e que convertem.
            </h2>
            <p className="lead">
              Sou o Rodrigo, desenvolvedor web por trás da Shield Dev. Crio sites, portfólios,
              landing pages e sistemas sob medida — do design à publicação. Código limpo, foco em
              performance e um visual que representa a sua marca de verdade.
            </p>
            <div className="chips">
              {CHIPS.map((c) => (
                <span className="chip" key={c}>
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="stats">
            {STATS.map((s, i) => (
              <Stat key={s.l} v={s.v} l={s.l} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
