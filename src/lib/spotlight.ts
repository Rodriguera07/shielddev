import type { MouseEvent } from "react";

/** Atualiza --x/--y no elemento para o glow acompanhar o cursor (ver classe .spot no CSS). */
export function spotlight(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--x", `${e.clientX - r.left}px`);
  el.style.setProperty("--y", `${e.clientY - r.top}px`);
}
