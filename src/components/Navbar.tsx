import { useEffect, useState } from "react";
import Logo from "./Logo";
import { BRAND, NAV } from "../data/conteudo";
import { useScrollSpy } from "../hooks/useScrollSpy";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(NAV.map((n) => n.href.replace("#", "")));
  const active = `#${activeId}`;

  // fecha o menu mobile ao trocar pra desktop
  useEffect(() => {
    const onResize = () => window.innerWidth > 640 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className="nav" id="nav">
      <a href="#top" className="brand-mark" aria-label={BRAND}>
        <div className="logo-circle">
          <Logo size={18} />
        </div>
        <span className="brand-name">{BRAND}</span>
      </a>

      <button
        type="button"
        className={`burger${open ? " open" : ""}`}
        aria-expanded={open}
        aria-controls="nav-pill"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`nav-backdrop${open ? " show" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div className={`pill${open ? " pill-open" : ""}`} id="nav-pill">
        {NAV.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={[item.cta ? "cta-mini" : "", active === item.href ? "active" : ""]
              .filter(Boolean)
              .join(" ")}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
