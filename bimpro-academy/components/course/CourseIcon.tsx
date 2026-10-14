import Image from "next/image";

/** Intrinsic [width, height] of every icon in /public/icons/course */
const ICON_SIZES = {
  "arrow-right": [20, 20],
  building: [18, 18],
  calc: [18, 18],
  calendar: [15, 17],
  "check-circle": [15, 17],
  "chevron-down": [12, 7],
  "chevron-right": [5, 8],
  clash: [20, 19],
  "cta-arrow": [12, 12],
  "cta-b2b": [15, 14],
  "cta-lock": [12, 16],
  "cta-quality": [17, 16],
  "cta-support": [15, 15],
  cube: [20, 20],
  "demo-play": [20, 20],
  freelancer: [22, 18],
  graduate: [22, 18],
  history: [14, 14],
  "lesson-play": [17, 17],
  "shield-badge": [13, 12],
  star: [15, 14],
  table: [18, 18],
  users: [18, 9],
  verified: [15, 14],
  "verified-shield": [16, 20],
} as const;

export type CourseIconName = keyof typeof ICON_SIZES;

export function CourseIcon({
  name,
  className,
}: {
  name: CourseIconName;
  className?: string;
}) {
  const [width, height] = ICON_SIZES[name];

  return (
    <Image
      src={`/icons/course/${name}.svg`}
      alt=""
      aria-hidden
      width={width}
      height={height}
      className={className}
      loading="eager"
      unoptimized
    />
  );
}
