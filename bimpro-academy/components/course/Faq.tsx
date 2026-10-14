import { FAQ } from "@/lib/course-detail";
import { CourseIcon } from "./CourseIcon";
import SectionHeading from "./SectionHeading";
import styles from "./Faq.module.css";

export default function Faq() {
  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-title">
      <div className={`container ${styles.inner}`}>
        <SectionHeading
          id="faq-title"
          align="center"
          eyebrow="SAVOL-JAVOBLAR"
          title="Ko'p so'raladigan savollar"
          description="Kurs bo'yicha eng muhim texnik va tashkiliy tafsilotlar."
        />

        <div className={styles.list}>
          {FAQ.map((item) => (
            <details key={item.question} className={styles.item}>
              <summary className={styles.question}>
                {item.question}
                <CourseIcon name="chevron-down" className={styles.chevron} />
              </summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
