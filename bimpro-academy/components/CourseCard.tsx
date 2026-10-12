import Image from "next/image";
import { Icon } from "./Icon";
import type { Course } from "@/lib/courses";
import styles from "./CourseCard.module.css";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className={styles.card} id={`course-${course.id}`}>
      <div className={styles.media}>
        <Image
          src="/images/cube.svg"
          alt=""
          aria-hidden
          width={112}
          height={125}
          className={styles.cube}
          unoptimized
        />
        <span className={`${styles.badge} ${styles.badgeLeft}`}>{course.level}</span>
        <span
          className={`${styles.badge} ${styles.badgeRight} ${
            course.tag.variant === "new" ? styles.badgeNew : ""
          }`}
        >
          {course.tag.label}
        </span>
      </div>

      <div className={styles.body}>
        <div className={styles.info}>
          <p className={styles.meta}>
            <span>{course.categoryLabel}</span>
            <span aria-hidden>•</span>
            <span>{course.rating}</span>
          </p>
          <div className={styles.info}>
            <div className={styles.copy}>
              <h3
                className={`${styles.title} ${
                  course.titleTone === "neutral" ? styles.titleNeutral : ""
                }`}
              >
                {course.title}
              </h3>
              <p className={styles.desc}>{course.description}</p>
            </div>
            <div className={styles.time}>
              <span className={styles.timeItem}>
                <Icon name="clock" size={12} />
                {course.hours}
              </span>
              <span className={styles.dot} aria-hidden>
                •
              </span>
              <span className={styles.timeItem}>
                <Icon name="book" size={12} />
                {course.lessons}
              </span>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.action}>
          <div className={styles.price}>
            <span className={styles.priceLabel}>Kurs narxi</span>
            <span className={`${styles.priceValue} ${course.free ? styles.free : ""}`}>
              {course.price}
            </span>
          </div>
          <a href="#" className={styles.button} id={`course-${course.id}-cta`}>
            {course.cta}
            <Icon name="arrow-right" size={16} className={styles.arrow} />
          </a>
        </div>
      </div>
    </article>
  );
}
