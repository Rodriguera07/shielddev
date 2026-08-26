import { useEffect, useRef, useState } from "react";

/**
 * Anima de 0 até o número embutido em `value` (ex.: "20+", "98", "100%", "24h")
 * quando o elemento retornado entra na viewport. Preserva prefixo/sufixo não numérico.
 */
export function useCountUp(value: string, duration = 1100) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(value.replace(/\d+/, "0"));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/\d+/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseInt(match[0], 10);
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index ?? 0) + match[0].length);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    const animate = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(`${prefix}${Math.round(target * eased)}${suffix}`);
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          animate();
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return { ref, display };
}
