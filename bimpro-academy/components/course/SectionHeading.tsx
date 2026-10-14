import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  /** "geist" for the sections set in Geist, "jakarta" for the Plus Jakarta/Inter ones */
  variant?: "geist" | "jakarta";
  align?: "start" | "center";
  id?: string;
  children?: ReactNode;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  variant = "geist",
  align = "start",
  id,
  children,
}: Props) {
  return (
    <div className={styles.heading} data-variant={variant} data-align={align}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
      {children}
    </div>
  );
}
