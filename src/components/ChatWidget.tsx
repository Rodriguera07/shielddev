import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { BRAND, CONTATOS } from "../data/conteudo";
import Logo from "./Logo";

const TEASER_DELAY_MS = 3500;
const MENSAGEM_PADRAO = "Oi! Vim pelo seu portfólio e quero conversar sobre um projeto.";
const TIPOS_PROJETO = ["Site institucional", "Landing page", "Loja virtual", "Sistema sob medida", "Outro"];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [tipoProjeto, setTipoProjeto] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  // Balão de convite espontâneo, uma vez por visita.
  useEffect(() => {
    const id = window.setTimeout(() => setTeaser(true), TEASER_DELAY_MS);
    return () => window.clearTimeout(id);
  }, []);

  // Fecha com Esc ou clique fora do painel.
  useEffect(() => {
    if (!open) return;
    setTeaser(false);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointerDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!panelRef.current?.contains(target) && !toggleRef.current?.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [open]);

  const mensagem = tipoProjeto
    ? `Oi! Vim pelo seu portfólio. Quero um projeto de "${tipoProjeto}" e gostaria de conversar sobre os detalhes.`
    : MENSAGEM_PADRAO;
  const waHref = `${CONTATOS.whatsapp}?text=${encodeURIComponent(mensagem)}`;

  return (
    <div className="chat-widget">
      {teaser && !open && (
        <div className="chat-teaser" role="status">
          <button
            type="button"
            className="chat-teaser-close"
            aria-label="Dispensar mensagem"
            onClick={() => setTeaser(false)}
          >
            <X size={12} />
          </button>
          <p>👋 Precisa de ajuda com seu projeto? Fala comigo!</p>
        </div>
      )}

      {open && (
        <div className="chat-panel" ref={panelRef} role="dialog" aria-modal="true" aria-label={`Chat com ${BRAND}`}>
          <div className="chat-panel-head">
            <span className="chat-avatar">
              <Logo size={22} />
            </span>
            <div>
              <div className="chat-panel-name">{BRAND}</div>
              <span className="chat-online">
                <span className="status-dot" />
                Online agora
              </span>
            </div>
            <button type="button" className="chat-close" aria-label="Fechar chat" onClick={() => setOpen(false)}>
              <X size={16} />
            </button>
          </div>

          <div className="chat-panel-body">
            <div className="chat-bubble">
              Oi! 👋 Sou o Rodrigo. Me conta rapidinho sobre o seu projeto que te respondo direto no WhatsApp.
            </div>

            <div className="chat-bubble">Que tipo de projeto você precisa?</div>

            <div className="chat-options" role="group" aria-label="Tipo de projeto">
              {TIPOS_PROJETO.map((tipo) => (
                <button
                  key={tipo}
                  type="button"
                  className={`filter-tab chat-option${tipoProjeto === tipo ? " active" : ""}`}
                  aria-pressed={tipoProjeto === tipo}
                  onClick={() => setTipoProjeto(tipoProjeto === tipo ? null : tipo)}
                >
                  {tipo}
                </button>
              ))}
            </div>

            {tipoProjeto && <div className="chat-bubble user">{tipoProjeto}</div>}
          </div>

          <a href={waHref} target="_blank" rel="noreferrer" className="chat-cta">
            <Send size={15} strokeWidth={2.2} />
            Continuar no WhatsApp
          </a>
        </div>
      )}

      <button
        type="button"
        ref={toggleRef}
        className={`chat-bubble-btn${open ? " open" : ""}`}
        aria-label={open ? "Fechar chat" : "Abrir chat"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} strokeWidth={2.2} />}
      </button>
    </div>
  );
}
