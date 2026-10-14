import Image from "next/image";
import { COURSE, SUB_NAV } from "@/lib/course-detail";
import styles from "./CourseSubNav.module.css";

export default function CourseSubNav() {
  return (
    <div className={styles.wrap}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.course}>
          <Image
            src={COURSE.images.thumb}
            alt=""
            width={40}
            height={40}
            className={styles.thumb}
          />
          <div className={styles.meta}>
            <p className={styles.title}>{COURSE.shortTitle}</p>
            <p className={styles.price}>{COURSE.price} so&apos;m</p>
          </div>
        </div>

        <nav className={styles.nav} aria-label="Kurs bo'limlari">
          <ul className={styles.links}>
            {SUB_NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.link}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#sotib-olish" className={styles.join}>
          <span className={styles.joinFull}>Hoziroq a’zo bo’lish</span>
          <span className={styles.joinShort}>A’zo bo’lish</span>
        </a>
      </div>
    </div>
  );
}
