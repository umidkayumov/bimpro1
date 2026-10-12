import Image from "next/image";

type IconName =
  | "arrow-right"
  | "arrow-form"
  | "badge-check"
  | "book"
  | "briefcase"
  | "building"
  | "check"
  | "chevron"
  | "clock"
  | "shield"
  | "zap";

export function Icon({
  name,
  size,
  className,
}: {
  name: IconName;
  size: number;
  className?: string;
}) {
  return (
    <Image
      src={`/icons/${name}.svg`}
      alt=""
      aria-hidden
      width={size}
      height={size}
      className={className}
      unoptimized
    />
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.svg"
      alt="BIMPro Academy"
      width={160}
      height={42}
      className={className}
      priority
      unoptimized
    />
  );
}
