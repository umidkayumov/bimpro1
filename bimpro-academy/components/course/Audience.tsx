import { AUDIENCE } from "@/lib/course-detail";
import { CourseIcon } from "./CourseIcon";
import SectionHeading from "./SectionHeading";
import styles from "./Audience.module.css";

export default function Audience() {
  return (
    <section className={styles.section} aria-labelledby="audience-title">
      <div className={`container ${styles.inner}`}>
        <SectionHeading
          id="audience-title"
          eyebrow="MAQSADLI AUDITORIYA"
          title="Bu kurs kimlar uchun eng foydali?"
          description="Muhandislik darajangizdan qat'i nazar, loyiha topshirish tezligini oshirishni istaganlar uchun."
        />

        <ul className={styles.grid}>
          {AUDIENCE.map((persona) => (
            <li key={persona.title} className={styles.card}>
              <div className={styles.body}>
                <span className={styles.icon}>
                  <CourseIcon name={persona.icon} />
                </span>
                <h3 className={styles.title}>{persona.title}</h3>
                <p className={styles.text}>{persona.text}</p>
              </div>
              <p className={styles.result}>{persona.result}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
