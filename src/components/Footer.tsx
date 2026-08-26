import type { CSSProperties } from "react";
import { BRAND, CONTATOS, NAV } from "../data/conteudo";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-grid">
        <div className="foot-col foot-brand reveal">
          <a href="#top" aria-label={BRAND} className="foot-logo-wrap">
            <img
              src="/shielddev-logo-horizontal.png"
              alt={`${BRAND} — Web Developer`}
              className="foot-logo"
            />
          </a>
          <p>Desenvolvimento web de alto desempenho, sob medida pro seu projeto.</p>
          <span className="status-badge">
            <span className="status-dot" />
            Disponível para novos projetos
          </span>
        </div>

        <div className="foot-col reveal" style={{ "--d": "60ms" } as CSSProperties}>
          <div className="foot-title">Navegação</div>
          <div className="foot-links">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="foot-col reveal" style={{ "--d": "120ms" } as CSSProperties}>
          <div className="foot-title">Contato</div>
          <div className="foot-links">
            <a href={CONTATOS.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={CONTATOS.email}>E-mail</a>
            <a href={CONTATOS.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={CONTATOS.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="wrap foot-bottom">
        <span>© {new Date().getFullYear()} {BRAND} · Rodrigo Dantas</span>
        <span className="foot-made">Feito à mão com React, TypeScript & Tailwind.</span>
      </div>
    </footer>
  );
}
