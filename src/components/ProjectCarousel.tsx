import { useEffect, useRef, useState } from "react";
import type { Projeto } from "../data/conteudo";
import ProjectCard from "./ProjectCard";

const AUTOPLAY_MS = 4200;
const DRAG_THRESHOLD = 6;

export default function ProjectCarousel({ projetos }: { projetos: Projeto[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dragState = useRef({ active: false, moved: false, startX: 0, startScroll: 0 });
  const reduceMotion = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Reseta pro início sempre que a lista de projetos muda (ex.: troca de filtro).
  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0 });
  }, [projetos]);

  // Atualiza índice ativo (pros dots) e disponibilidade das setas conforme o scroll.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = track;
      setCanPrev(scrollLeft > 8);
      setCanNext(scrollLeft < scrollWidth - clientWidth - 8);

      let nearest = 0;
      let nearestDist = Infinity;
      slideRefs.current.forEach((el, i) => {
        if (!el) return;
        const dist = Math.abs(el.offsetLeft - scrollLeft);
        if (dist < nearestDist) {
          nearestDist = dist;
          nearest = i;
        }
      });
      setActiveIndex(nearest);
    };

    update();
    track.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(track);
    return () => {
      track.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [projetos]);

  // Autoplay: avança sozinho, volta ao início ao chegar no fim, pausa em hover/drag/foco.
  useEffect(() => {
    if (reduceMotion.current || paused || projetos.length < 2) return;
    const id = window.setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 8;
      if (atEnd) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        goTo(activeIndex + 1);
      }
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, activeIndex, projetos.length]);

  const goTo = (index: number) => {
    const el = slideRefs.current[Math.max(0, Math.min(index, projetos.length - 1))];
    el?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const track = trackRef.current;
    if (!track) return;
    dragState.current = { active: true, moved: false, startX: e.clientX, startScroll: track.scrollLeft };
    track.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    const state = dragState.current;
    if (!track || !state.active) return;
    const dx = e.clientX - state.startX;
    if (Math.abs(dx) > DRAG_THRESHOLD) state.moved = true;
    track.scrollLeft = state.startScroll - dx;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (track?.hasPointerCapture(e.pointerId)) track.releasePointerCapture(e.pointerId);
    dragState.current.active = false;
  };

  // Suprime o clique no link do card logo depois de um arraste.
  const onTrackClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragState.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      dragState.current.moved = false;
    }
  };

  return (
    <div
      className="proj-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="proj-track"
        ref={trackRef}
        role="region"
        aria-roledescription="carrossel"
        aria-label="Projetos"
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onTrackClickCapture}
      >
        {projetos.map((p, i) => (
          <div
            className="proj-slide"
            key={p.idx}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
          >
            <ProjectCard p={p} i={i} />
          </div>
        ))}
      </div>

      <div className="proj-carousel-controls">
        <button
          type="button"
          className="carousel-arrow"
          aria-label="Projeto anterior"
          disabled={!canPrev}
          onClick={() => goTo(activeIndex - 1)}
        >
          ‹
        </button>

        <div className="proj-dots" role="tablist" aria-label="Ir para o projeto">
          {projetos.map((p, i) => (
            <button
              key={p.idx}
              type="button"
              role="tab"
              className={`proj-dot${i === activeIndex ? " active" : ""}`}
              aria-selected={i === activeIndex}
              aria-label={`Ir para ${p.titulo}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <button
          type="button"
          className="carousel-arrow"
          aria-label="Próximo projeto"
          disabled={!canNext}
          onClick={() => goTo(activeIndex + 1)}
        >
          ›
        </button>
      </div>
    </div>
  );
}
