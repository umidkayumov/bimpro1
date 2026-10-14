import Image from "next/image";
import { INSTRUCTOR } from "@/lib/course-detail";
import styles from "./InstructorSection.module.css";

export default function InstructorSection() {
  return (
    <section id="oqituvchi" className={styles.section} aria-labelledby="instructor-name">
      <div className={`container ${styles.inner}`}>
        <Image
          src={INSTRUCTOR.photo}
          alt={INSTRUCTOR.name}
          width={200}
          height={200}
          className={styles.photo}
        />

        <div className={styles.bio}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>KURS MENTORI VA MUALLIFI</p>
            <h2 id="instructor-name" className={styles.name}>
              {INSTRUCTOR.name}
            </h2>
            <p className={styles.role}>{INSTRUCTOR.role}</p>
          </header>

          <blockquote className={styles.quote}>{INSTRUCTOR.quote}</blockquote>

          <dl className={styles.metrics}>
            {INSTRUCTOR.metrics.map((metric) => (
              <div key={metric.value}>
                <dt className={styles.metricValue}>{metric.value}</dt>
                <dd className={styles.metricLabel}>{metric.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
