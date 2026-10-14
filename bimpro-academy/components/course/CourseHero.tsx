import Image from "next/image";
import {
  BADGES,
  BREADCRUMBS,
  COURSE,
  INSTRUCTOR,
  SOCIAL_PROOF,
  SPECS,
} from "@/lib/course-detail";
import { CourseIcon } from "./CourseIcon";
import styles from "./CourseHero.module.css";

const STAR_COUNT = 5;

export default function CourseHero() {
  const lastCrumb = BREADCRUMBS.length - 1;

  return (
    <div id="umumiy" className={styles.hero}>
      <nav aria-label="Breadcrumb">
        <ol className={styles.breadcrumbs}>
          {BREADCRUMBS.map((crumb, index) => (
            <li key={crumb} className={styles.crumb}>
              {index === lastCrumb ? (
                <span className={styles.current} aria-current="page">
                  {crumb}
                </span>
              ) : (
                <>
                  <a href="#">{crumb}</a>
                  <CourseIcon name="chevron-right" />
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <ul className={styles.badges}>
        {BADGES.map((badge) => (
          <li key={badge.label} className={styles.badge} data-tone={badge.tone}>
            {badge.tone === "level" && <span className={styles.dot} />}
            {"icon" in badge && <CourseIcon name={badge.icon} />}
            {badge.label}
          </li>
        ))}
      </ul>

      <h1 className={styles.title}>{COURSE.title}</h1>
      <p className={styles.summary}>{COURSE.summary}</p>

      <div className={styles.proof}>
        <div className={styles.proofItem}>
          <strong className={styles.rating}>{SOCIAL_PROOF.rating}</strong>
          <span className={styles.stars} aria-hidden>
            {Array.from({ length: STAR_COUNT }, (_, i) => (
              <CourseIcon key={i} name="star" />
            ))}
          </span>
          <span>{SOCIAL_PROOF.reviews}</span>
        </div>
        <span className={styles.separator} aria-hidden>
          •
        </span>
        <div className={styles.proofItem}>
          <CourseIcon name="users" />
          <span>{SOCIAL_PROOF.students}</span>
        </div>
        <span className={styles.separator} aria-hidden>
          •
        </span>
        <div className={styles.proofItem}>
          <CourseIcon name="history" />
          <span>{SOCIAL_PROOF.updated}</span>
        </div>
      </div>

      <div className={styles.author}>
        <Image
          src={INSTRUCTOR.photoSmall}
          alt={INSTRUCTOR.shortName}
          width={48}
          height={48}
          className={styles.avatar}
        />
        <div>
          <p className={styles.authorName}>
            {INSTRUCTOR.shortName}
            <CourseIcon name="verified" />
          </p>
          <p className={styles.authorRole}>{INSTRUCTOR.role}</p>
        </div>
      </div>

      <dl className={styles.specs}>
        {SPECS.map((spec) => (
          <div key={spec.label} className={styles.spec}>
            <dt>{spec.label}</dt>
            <dd>{spec.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
