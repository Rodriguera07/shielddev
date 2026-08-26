import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { CONTATOS } from "../data/conteudo";
import { useMagnetic } from "../hooks/useMagnetic";
import { spotlight } from "../lib/spotlight";

export default function Contato() {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.25);
  const githubRef = useMagnetic<HTMLAnchorElement>(0.25);
  const linkedinRef = useMagnetic<HTMLAnchorElement>(0.25);
  const emailRef = useMagnetic<HTMLAnchorElement>(0.25);

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
            <a ref={githubRef} href={CONTATOS.github} target="_blank" rel="noreferrer" className="social-github">
              <span className="social-icon">
                <Github size={15} strokeWidth={2} />
              </span>
              GitHub
            </a>
            <a ref={linkedinRef} href={CONTATOS.linkedin} target="_blank" rel="noreferrer" className="social-linkedin">
              <span className="social-icon">
                <Linkedin size={15} strokeWidth={2} />
              </span>
              LinkedIn
            </a>
            <a ref={emailRef} href={CONTATOS.email} className="social-email">
              <span className="social-icon">
                <Mail size={15} strokeWidth={2} />
              </span>
              E-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
