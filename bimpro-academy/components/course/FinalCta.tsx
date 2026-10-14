import { FINAL_CTA } from "@/lib/course-detail";
import { CourseIcon } from "./CourseIcon";
import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section className={styles.section} aria-labelledby="cta-title">
      <div className={styles.glow} aria-hidden />

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.badge}>{FINAL_CTA.badge}</p>
          <h2 id="cta-title" className={styles.title}>
            {FINAL_CTA.title}
          </h2>
          <p className={styles.text}>{FINAL_CTA.text}</p>
          <ul className={styles.guarantees}>
            {FINAL_CTA.guarantees.map((item) => (
              <li key={item.label}>
                <CourseIcon name={item.icon} />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.actions}>
          <a href="#sotib-olish" className={styles.buy}>
            {FINAL_CTA.buyLabel}
            <CourseIcon name="cta-arrow" />
          </a>
          <a href="#" className={styles.b2b}>
            <CourseIcon name="cta-b2b" />
            {FINAL_CTA.b2bLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
