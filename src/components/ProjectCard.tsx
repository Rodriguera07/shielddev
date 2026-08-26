import { useState } from "react";
import type { Projeto } from "../data/conteudo";
import { spotlight } from "../lib/spotlight";

function MockUI({ variant = "browser" }: { variant?: "browser" | "phone" }) {
  if (variant === "phone") {
    return (
      <div className="mockui" style={{ width: "46%", borderRadius: 18, transform: "translateY(20px)" }}>
        <div className="body" style={{ padding: 14 }}>
          <div className="ln ac" style={{ width: "55%" }} />
          <div className="ln" style={{ width: "90%" }} />
          <div className="ln" style={{ width: "72%" }} />
          <div className="ln" style={{ width: "84%" }} />
          <div className="ln ac" style={{ width: "40%" }} />
        </div>
      </div>
    );
  }

  return (
    <div className="mockui">
      <div className="bar">
        <i />
        <i />
        <i />
      </div>
      <div className="body">
        <div className="ln ac" style={{ width: "40%" }} />
        <div className="ln" style={{ width: "88%" }} />
        <div className="ln" style={{ width: "66%" }} />
        <div className="ln" style={{ width: "78%" }} />
      </div>
    </div>
  );
}

export default function ProjectCard({ p, i }: { p: Projeto; i: number }) {
  const [imgFailed, setImgFailed] = useState(false);
  const linkProps = p.external ? { href: p.href, target: "_blank", rel: "noreferrer" } : { href: p.href };
  const hasImage = !!p.imagem && !imgFailed;

  return (
    <article className="proj spot reveal" onMouseMove={spotlight} style={{ "--d": `${i * 60}ms` } as React.CSSProperties}>
      {hasImage ? (
        <div className="thumb photo">
          <span className="idx">{p.idx}</span>
          <span className="cat">{p.categoria}</span>
          <img src={p.imagem} alt={p.titulo} loading="lazy" draggable={false} onError={() => setImgFailed(true)} />
          <span className="thumb-hover">
            <span className="thumb-hover-cta">
              {p.hrefLabel} <span className="arrow">→</span>
            </span>
          </span>
        </div>
      ) : (
        <div className="thumb" style={{ background: p.gradiente ?? "linear-gradient(135deg,#1f2937,#0f172a)" }}>
          <span className="idx">{p.idx}</span>
          <span className="cat">{p.categoria}</span>
          <MockUI variant={p.mock ?? "browser"} />
        </div>
      )}

      <div className="proj-info">
        <h3>{p.titulo}</h3>
        <p>{p.descricao}</p>
        <div className="tags">
          {p.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <a {...linkProps} className="view group">
          {p.hrefLabel} <span className="arrow">→</span>
        </a>
      </div>
    </article>
  );
}
