import type { CSSProperties } from "react";
import { useTilt } from "../hooks/useTilt";

type Vars = CSSProperties & { "--rot"?: string };

const SYMBOLS: { t: string; x: string; y: string; size: number; rot: number }[] = [
  { t: "</>", x: "20%", y: "16%", size: 60, rot: -8 },
  { t: "{ }", x: "52%", y: "8%", size: 44, rot: 6 },
  { t: "=>", x: "6%", y: "66%", size: 50, rot: -4 },
  { t: "#", x: "55%", y: "68%", size: 64, rot: 9 },
  { t: "( )", x: "30%", y: "80%", size: 38, rot: -6 },
];

const BADGES: { t: string; x: string; y: string; delay: number }[] = [
  { t: "React", x: "37%", y: "18%", delay: 0 },
  { t: "TypeScript", x: "3%", y: "52%", delay: 700 },
  { t: "Node.js", x: "44%", y: "40%", delay: 1400 },
  { t: "Next.js", x: "66%", y: "62%", delay: 300 },
  { t: "Tailwind CSS", x: "80%", y: "76%", delay: 1000 },
  { t: "PostgreSQL", x: "60%", y: "86%", delay: 1800 },
];

type TermTok = { t: string; c?: "kw" | "str" | "com" };
type TermLine = TermTok[];

const TERMINALS: { className: string; lines: TermLine[] }[] = [
  {
    className: "hero-mini-terminal hmt-1",
    lines: [
      [{ t: "$ ", c: "com" }, { t: "git commit -m " }, { t: '"ship it"', c: "str" }],
      [{ t: "$ ", c: "com" }, { t: "git push " }, { t: "origin", c: "kw" }, { t: " main" }],
    ],
  },
  {
    className: "hero-mini-terminal hmt-2",
    lines: [[{ t: "$ ", c: "com" }, { t: "npm create " }, { t: "shielddev@latest", c: "str" }]],
  },
];

function MiniTerminal({ className, lines }: { className: string; lines: TermLine[] }) {
  const tiltRef = useTilt<HTMLDivElement>(6);

  return (
    <div className={className} ref={tiltRef}>
      <div className="terminal-bar">
        <i />
        <i />
        <i />
      </div>
      <div className="hmt-body">
        {lines.map((line, i) => (
          <div key={i}>
            {line.map((tok, j) => (
              <span key={j} className={tok.c ? `tok-${tok.c}` : undefined}>
                {tok.t}
              </span>
            ))}
            {i === lines.length - 1 && <span className="code-cursor">▍</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Preenche o vazio do hero: grid de fundo, símbolos flutuando, badges de stack e mini terminais interativos. */
export default function HeroDecor() {
  return (
    <div aria-hidden="true">
      <div className="hero-grid" />

      {SYMBOLS.map((s, i) => (
        <span
          key={s.t + i}
          className="hero-symbol"
          style={
            {
              left: s.x,
              top: s.y,
              fontSize: s.size,
              "--rot": `${s.rot}deg`,
              animationDelay: `${i * 300}ms`,
            } as Vars
          }
        >
          {s.t}
        </span>
      ))}

      {BADGES.map((b) => (
        <span
          key={b.t}
          className="hero-tech-badge"
          style={{ left: b.x, top: b.y, animationDelay: `${b.delay}ms` }}
        >
          {b.t}
        </span>
      ))}

      {TERMINALS.map((term) => (
        <MiniTerminal key={term.className} className={term.className} lines={term.lines} />
      ))}
    </div>
  );
}
