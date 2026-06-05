/**
 * Deterministic twinkling starfield + occasional shooting stars.
 * Sits behind dark "night sky" sections.
 */
export function Starfield({
  count = 48,
  shootingStars = 2,
  className = "",
}: {
  count?: number;
  shootingStars?: number;
  className?: string;
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {Array.from({ length: count }).map((_, i) => {
        const size = 1 + ((i * 7) % 3);
        return (
          <span
            key={i}
            className="absolute rounded-full bg-moon animate-twinkle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              animationDelay: `${(i * 0.27) % 4}s`,
              opacity: 0.7,
            }}
          />
        );
      })}
      {Array.from({ length: shootingStars }).map((_, i) => (
        <span
          key={`s-${i}`}
          className="shooting-star"
          style={{
            top: `${10 + i * 28}%`,
            left: `${5 + i * 20}%`,
            animation: `shoot ${6 + i * 2}s ease-in ${i * 4}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
