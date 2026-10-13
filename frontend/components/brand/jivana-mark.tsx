import { useId } from "react";

import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  size?: number;
  /** Light mark on dark backgrounds (footer bands, hero overlays). */
  inverted?: boolean;
};

/** Aurora triskelion — three care paths converging on a living center (Jīvana). */
export function JivanaMark({ className, size = 28, inverted = false }: Props) {
  const uid = useId().replace(/:/g, "");
  const auroraId = `jivana-aurora-${uid}`;
  const glowId = `jivana-glow-${uid}`;

  const arc = (
    <path
      d="M16 8.25a7.75 7.75 0 0 1 6.7 11.65"
      stroke="currentColor"
      strokeWidth="2.15"
      strokeLinecap="round"
      fill="none"
    />
  );

  const symbol = (
    <>
      <g>{arc}</g>
      <g transform="rotate(120 16 16)">{arc}</g>
      <g transform="rotate(240 16 16)">{arc}</g>
      <circle cx="16" cy="16" r="2.4" fill="currentColor" />
      <circle cx="16" cy="16" r="5.25" stroke="currentColor" strokeWidth="1" opacity="0.28" fill="none" />
    </>
  );

  if (inverted) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("shrink-0 text-white", className)}
        aria-hidden
      >
        {symbol}
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0 text-white", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id={auroraId} x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="oklch(0.48 0.16 285)" />
          <stop offset="0.45" stopColor="oklch(0.52 0.14 245)" />
          <stop offset="1" stopColor="oklch(0.62 0.12 195)" />
        </linearGradient>
        <radialGradient
          id={glowId}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(16 14) rotate(90) scale(14)"
        >
          <stop stopColor="white" stopOpacity="0.35" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="32" height="32" rx="10" fill={`url(#${auroraId})`} />
      <rect width="32" height="32" rx="10" fill={`url(#${glowId})`} />
      {symbol}
    </svg>
  );
}
