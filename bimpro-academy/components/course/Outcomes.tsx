import { OUTCOMES } from "@/lib/course-detail";
import { CourseIcon } from "./CourseIcon";
import SectionHeading from "./SectionHeading";
import styles from "./Outcomes.module.css";

export default function Outcomes() {
  return (
    <section id="konikmalar" className={styles.section} aria-labelledby="outcomes-title">
      <div className={`container ${styles.inner}`}>
        <SectionHeading
          id="outcomes-title"
          eyebrow="AMALIY KO'NIKMALAR"
          title="Ushbu kursda nimalarni o'rganasiz?"
          description="Nazariya emas, bevosita O'zbekiston loyihalash institutlari talablariga mos amaliy ko'nikmalar va real loyiha yechimlari."
        />

        <ul className={styles.list}>
          {OUTCOMES.map((item) => (
            <li key={item.title} className={styles.card}>
              <span className={styles.icon} data-tint={item.tint}>
                <CourseIcon name={item.icon} />
              </span>
              <div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
