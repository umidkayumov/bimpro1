import { REVIEWS } from "@/lib/course-detail";
import { CourseIcon } from "./CourseIcon";
import SectionHeading from "./SectionHeading";
import styles from "./Testimonials.module.css";

const STAR_COUNT = 5;

export default function Testimonials() {
  return (
    <section id="fikrlar" className={styles.section} aria-labelledby="reviews-title">
      <div className="container">
        <div className={styles.inner}>
        <div className={styles.head}>
          <SectionHeading
            id="reviews-title"
            variant="jakarta"
            eyebrow="MUHANDISLAR FIKRI"
            title="Bitiruvchilarimiz nima deydi?"
            description="Haqiqiy loyihalarda ishlayotgan mutaxassislarning xolis bahosi."
          />
          <p className={styles.verified}>
            <CourseIcon name="verified-shield" />
            100% Tasdiqlangan sharhlar
          </p>
        </div>

        <ul className={styles.grid}>
          {REVIEWS.map((review) => (
            <li key={review.name}>
              <figure className={styles.card}>
                <div className={styles.cardBody}>
                  <div className={styles.stars} role="img" aria-label="5 yulduz">
                    {Array.from({ length: STAR_COUNT }, (_, i) => (
                      <CourseIcon key={i} name="star" />
                    ))}
                  </div>
                  <blockquote className={styles.quote}>{review.text}</blockquote>
                </div>
                <figcaption className={styles.author}>
                  <span className={styles.avatar}>{review.initials}</span>
                  <span>
                    <span className={styles.name}>{review.name}</span>
                    <span className={styles.role}>{review.role}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
}
