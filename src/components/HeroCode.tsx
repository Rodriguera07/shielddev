import { useTilt } from "../hooks/useTilt";

type Tok = { t: string; c?: "kw" | "str" | "fn" | "com" };
type Line = Tok[];

const CODE: Line[] = [
  [
    { t: "type ", c: "kw" },
    { t: "Skill" },
    { t: " = " },
    { t: '"React"', c: "str" },
    { t: " | " },
    { t: '"TypeScript"', c: "str" },
    { t: " | " },
    { t: '"Node.js"', c: "str" },
    { t: ";" },
  ],
  [{ t: "const ", c: "kw" }, { t: "dev" }, { t: " = {" }],
  [{ t: "  name: " }, { t: '"Rodrigo Dantas"', c: "str" }, { t: "," }],
  [{ t: "  role: " }, { t: '"Web Developer"', c: "str" }, { t: "," }],
  [{ t: "  base: " }, { t: '"Bertioga, SP"', c: "str" }, { t: "," }],
  [{ t: "};" }],
  [
    { t: "export ", c: "kw" },
    { t: "function ", c: "kw" },
    { t: "build", c: "fn" },
    { t: "(ideia) {" },
  ],
  [{ t: "  return ", c: "kw" }, { t: "ideia.design().codar().publicar();" }],
  [{ t: "}" }],
  [],
  [{ t: "// status: disponível para novos projetos ✓", c: "com" }],
];

/** Painel de editor de código, flutuante no hero — a cara de "desenvolvedor" do site. */
export default function HeroCode() {
  const tiltRef = useTilt<HTMLDivElement>(7);

  return (
    <div className="hero-code" aria-hidden="true" ref={tiltRef}>
      <div className="terminal-bar">
        <i />
        <i />
        <i />
        <span className="terminal-title">shielddev.ts</span>
      </div>
      <pre className="hero-code-body">
        {CODE.map((line, i) => (
          <div className="cl" key={i} style={{ animationDelay: `${i * 130}ms` }}>
            {line.length === 0 ? (
              " "
            ) : (
              <>
                {line.map((tok, j) => (
                  <span key={j} className={tok.c ? `tok-${tok.c}` : undefined}>
                    {tok.t}
                  </span>
                ))}
                {i === CODE.length - 1 && <span className="code-cursor">▍</span>}
              </>
            )}
          </div>
        ))}
      </pre>
    </div>
  );
}
