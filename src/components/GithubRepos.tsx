import { useEffect, useState } from "react";
import { CONTATOS } from "../data/conteudo";
import { spotlight } from "../lib/spotlight";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  updated_at: string;
};

type Status = "loading" | "ok" | "error";

export default function GithubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    let ativo = true;
    fetch(`https://api.github.com/users/${CONTATOS.githubUser}/repos?sort=updated&per_page=100`)
      .then((res) => {
        if (!res.ok) throw new Error("github api error");
        return res.json();
      })
      .then((data: Repo[]) => {
        if (!ativo) return;
        const originais = data.filter((r) => !r.fork).slice(0, 4);
        setRepos(originais);
        setStatus("ok");
      })
      .catch(() => ativo && setStatus("error"));

    return () => {
      ativo = false;
    };
  }, []);

  return (
    <section className="section" id="github">
      <div className="wrap">
        <div className="work-head reveal">
          <div>
            <div className="eyebrow">Open source</div>
            <h2 className="h2">Direto do meu GitHub.</h2>
          </div>
          <a href={CONTATOS.github} target="_blank" rel="noreferrer" className="badge group" style={{ fontSize: 13 }}>
            Ver perfil <span className="arrow">→</span>
          </a>
        </div>

        <div className="terminal reveal">
          <div className="terminal-bar">
            <i />
            <i />
            <i />
            <span className="terminal-title">rodrigo@shielddev — repos --updated</span>
          </div>
          <div className="terminal-body">
            {status === "loading" && <p className="terminal-line dim">$ buscando repositórios públicos…</p>}

            {status === "error" && (
              <p className="terminal-line dim">
                $ não consegui carregar agora — veja direto no{" "}
                <a href={CONTATOS.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                .
              </p>
            )}

            {status === "ok" && repos.length === 0 && (
              <p className="terminal-line dim">$ nenhum repositório público encontrado.</p>
            )}

            {status === "ok" &&
              repos.map((r) => (
                <a
                  key={r.id}
                  href={r.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="repo-row spot group"
                  onMouseMove={spotlight}
                >
                  <span className="repo-name">
                    <span className="repo-caret">›</span> {r.name}
                  </span>
                  <span className="repo-desc">{r.description ?? "Sem descrição."}</span>
                  <span className="repo-meta">
                    {r.language && <span className="repo-lang">{r.language}</span>}
                    <span className="repo-stars">★ {r.stargazers_count}</span>
                    <span className="arrow">→</span>
                  </span>
                </a>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
