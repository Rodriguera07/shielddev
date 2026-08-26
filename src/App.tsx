import { useEffect } from "react";
import ScrollProgress from "./components/ScrollProgress";
import SectionDots from "./components/SectionDots";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Stack from "./components/Stack";
import Projetos from "./components/Projetos";
import GithubRepos from "./components/GithubRepos";
import Processo from "./components/Processo";
import Servicos from "./components/Servicos";
import FAQ from "./components/FAQ";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  useEffect(() => {
    // Sempre volta pro topo ao carregar/atualizar a página (navegadores restauram
    // a posição do scroll por padrão, o que atrapalha em recarregamentos).
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (window.location.hash) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    // Sombra da navbar ao rolar
    const nav = document.getElementById("nav");
    const onScroll = () => nav?.classList.toggle("small", window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    // Reveal das seções ao entrar na viewport — observa .reveal já presentes
    // e também os que surgem depois (ex.: cards remontados ao trocar filtro).
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && (e.target as HTMLElement).setAttribute("data-in", "")
        ),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches(".reveal")) io.observe(node);
          node.querySelectorAll?.(".reveal").forEach((el) => io.observe(el));
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <SectionDots />
      <Navbar />
      <Hero />
      <Sobre />
      <Stack />
      <Projetos />
      <GithubRepos />
      <Processo />
      <Servicos />
      <FAQ />
      <Contato />
      <Footer />
      <BackToTop />
    </>
  );
}
