type Props = { size?: number; className?: string };

/** Marca ShieldDev — ícone oficial (escudo + glifo de código). */
export default function Logo({ size = 18, className }: Props) {
  return (
    <img
      src="/favicon.png"
      width={size}
      height={size}
      alt=""
      className={className}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}
