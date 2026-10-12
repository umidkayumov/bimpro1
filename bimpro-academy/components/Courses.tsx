"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import { COURSES, COURSE_TABS, type CourseCategory } from "@/lib/courses";
import styles from "./Courses.module.css";

export default function Courses() {
  const [active, setActive] = useState<"all" | CourseCategory>("all");
  const visible =
    active === "all" ? COURSES : COURSES.filter((c) => c.category === active);

  return (
    <section id="kurslar" className={`container ${styles.section}`} aria-labelledby="courses-title">
      <div className={styles.heading}>
        <span className={styles.tag}>O’quv dasturlari</span>
        <div className={styles.headingText}>
          <h2 id="courses-title" className={styles.title}>
            BIM bo’yicha amaliy kurslar
          </h2>
          <p className={styles.subtitle}>
            BIM texnologiyalarini real loyihalarda qo&apos;llashni o&apos;rganing. Soha
            mutaxassislari tomonidan tayyorlangan bazaviy va professional ta&apos;lim
            dasturlari.
          </p>
        </div>
      </div>

      {/* Tabs with scrollable container for mobile */}
      <div className={styles.tabsWrapper}>
        <div className={styles.tabs} role="tablist" aria-label="Kurs yo'nalishlari">
          {COURSE_TABS.map((tab) => {
            const selected = tab.id === active;
            return (
              <button
                key={tab.id}
                id={`course-tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="course-grid"
                className={`${styles.tab} ${selected ? styles.tabActive : ""}`}
                onClick={() => setActive(tab.id)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div id="course-grid" role="tabpanel" className={styles.grid} key={active}>
        {visible.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
