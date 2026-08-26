import { useEffect, useState } from "react";

/** Retorna o id da seção ativa com base na posição de scroll. */
export function useScrollSpy(ids: string[], offset = 140): string {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const onScroll = () => {
      const y = window.scrollY + offset;
      let current = sections[0];
      for (const sec of sections) {
        if (sec.offsetTop <= y) current = sec;
      }
      if (current) setActive(current.id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(","), offset]);

  return active;
}
