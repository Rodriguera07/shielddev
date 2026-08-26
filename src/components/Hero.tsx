import { useEffect, useRef, useState } from "react";
import { BRAND, CONTATOS, HERO_ROLES } from "../data/conteudo";
import { useMagnetic } from "../hooks/useMagnetic";
import HeroCode from "./HeroCode";
import HeroDecor from "./HeroDecor";

export default function Hero() {
  const [i, setI] = useState(0);
  const [fade, setFade] = useState(true);
  const codeRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.25);

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false);
      const t = setTimeout(() => {
        setI((v) => (v + 1) % HERO_ROLES.length);
        setFade(true);
      }, 280);
      return () => clearTimeout(t);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  // Parallax sutil do painel de código conforme a rolagem
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = heroRef.current?.offsetHeight ?? 800;
        const y = Math.min(window.scrollY, max);
        if (codeRef.current) {
          codeRef.current.style.transform = `translate(-50%, ${y * 0.12}px) rotate(3deg)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className="hero" id="top" ref={heroRef}>
      <HeroDecor />
      <div className="hero-code-wrap" ref={codeRef}>
        <HeroCode />
      </div>
      <div className="hero-fg">
        <div className="hero-body">
          <div className="hero-inner">
            <a href="#work" className="badge group">
              {BRAND} · Bertioga-SP
              <span className="arrow">→</span>
            </a>
            <h1>
              Eu crio{" "}
              <span className={`rotate-word${fade ? " show" : ""}`}>{HERO_ROLES[i]}</span>
            </h1>
            <p className="sub">Desenvolvimento web de alto desempenho.</p>
            <a
              ref={ctaRef}
              href={CONTATOS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="cta group"
            >
              Solicitar orçamento
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-hint">
        Role <span className="dot" />
      </div>
    </header>
  );
}
