import { useMemo, useState } from "react";
import { PROJETOS } from "../data/conteudo";
import ProjectCarousel from "./ProjectCarousel";

export default function Projetos() {
  const categorias = useMemo(
    () => ["Todos", ...Array.from(new Set(PROJETOS.map((p) => p.categoria)))],
    []
  );
  const [filtro, setFiltro] = useState("Todos");
  const filtrados = filtro === "Todos" ? PROJETOS : PROJETOS.filter((p) => p.categoria === filtro);

  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="work-head reveal">
          <div>
            <div className="eyebrow">Projetos</div>
            <h2 className="h2">O que eu já criei.</h2>
          </div>
          <div className="filter-tabs">
            {categorias.map((c) => (
              <button
                key={c}
                type="button"
                className={`filter-tab${filtro === c ? " active" : ""}`}
                aria-pressed={filtro === c}
                onClick={() => setFiltro(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {filtrados.length > 0 ? (
          <ProjectCarousel key={filtro} projetos={filtrados} />
        ) : (
          <p className="lead">Nenhum projeto nessa categoria ainda.</p>
        )}
      </div>
    </section>
  );
}
