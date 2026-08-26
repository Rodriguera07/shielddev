import { useScrollSpy } from "../hooks/useScrollSpy";

const SECTIONS = [
  { id: "top", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "stack", label: "Stack" },
  { id: "work", label: "Projetos" },
  { id: "github", label: "GitHub" },
  { id: "process", label: "Processo" },
  { id: "services", label: "Serviços" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contato" },
];

/** Navegação lateral por pontos: acompanha a seção ativa do hero ao footer. */
export default function SectionDots() {
  const active = useScrollSpy(SECTIONS.map((s) => s.id));

  return (
    <nav className="section-dots" aria-label="Navegação por seção">
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`section-dot${active === s.id ? " active" : ""}`}
          aria-label={s.label}
          aria-current={active === s.id ? "true" : undefined}
        >
          <span className="tip">{s.label}</span>
        </a>
      ))}
    </nav>
  );
}
