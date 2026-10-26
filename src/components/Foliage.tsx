const leaves = [
  { left: "-2%", top: "8%", size: 180, rotate: -35, delay: 0, opacity: 0.18 },
  { left: "8%", top: "62%", size: 120, rotate: 20, delay: 1.2, opacity: 0.12 },
  { left: "42%", top: "-10%", size: 140, rotate: 160, delay: 2.1, opacity: 0.1 },
  { left: "86%", top: "4%", size: 200, rotate: 30, delay: 0.6, opacity: 0.16 },
  { left: "92%", top: "58%", size: 130, rotate: -20, delay: 1.8, opacity: 0.12 },
  { left: "64%", top: "78%", size: 110, rotate: 200, delay: 2.6, opacity: 0.1 },
];

export default function Foliage({ className = "text-white" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {leaves.map((leaf, i) => (
        <svg
          key={i}
          viewBox="0 0 100 160"
          className="leaf-sway absolute"
          style={
            {
              left: leaf.left,
              top: leaf.top,
              width: leaf.size,
              opacity: leaf.opacity,
              animationDelay: `${leaf.delay}s`,
              "--r": `${leaf.rotate}deg`,
            } as React.CSSProperties
          }
        >
          <path d="M50 158C50 158 4 118 4 64 4 26 26 4 50 2c24 2 46 24 46 62 0 54-46 94-46 94Z" fill="currentColor" />
          <path d="M50 150V20M50 60 28 40M50 84 22 62M50 108 26 88M50 60l22-20M50 84l28-22M50 108l24-20" stroke="var(--forest)" strokeOpacity="0.35" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      ))}
    </div>
  );
}
