import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { CONTATOS } from "../data/conteudo";
import { useMagnetic } from "../hooks/useMagnetic";
import { spotlight } from "../lib/spotlight";

export default function Contato() {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.25);

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="contact spot reveal" onMouseMove={spotlight}>
          <div className="eyebrow">Contato</div>
          <h2>Vamos tirar o seu projeto do papel.</h2>
          <a
            ref={ctaRef}
            href={CONTATOS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="cta whatsapp group"
          >
            <MessageCircle size={16} strokeWidth={2.4} />
            Chamar no WhatsApp <span className="arrow">→</span>
          </a>
          <div className="socials">
            <a href={CONTATOS.github} target="_blank" rel="noreferrer">
              <Github size={15} strokeWidth={2} />
              GitHub
            </a>
            <a href={CONTATOS.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={15} strokeWidth={2} />
              LinkedIn
            </a>
            <a href={CONTATOS.email}>
              <Mail size={15} strokeWidth={2} />
              E-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
