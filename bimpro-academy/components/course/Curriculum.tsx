import { CURRICULUM_SUMMARY, MODULES } from "@/lib/course-detail";
import { CourseIcon } from "./CourseIcon";
import SectionHeading from "./SectionHeading";
import styles from "./Curriculum.module.css";

type Module = (typeof MODULES)[number];

function ModuleSummary({ module, index }: { module: Module; index: number }) {
  return (
    <>
      <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
      <span className={styles.moduleText}>
        <span className={styles.titleRow}>
          <span className={styles.moduleTitle}>{module.title}</span>
          {"freeDemo" in module && <span className={styles.demoInline}>Bepul Demo</span>}
        </span>
        <span className={styles.moduleMeta}>{module.meta}</span>
      </span>
      <span className={styles.moduleSide}>
        {"freeDemo" in module && <span className={styles.demo}>Bepul Demo</span>}
        <CourseIcon name="chevron-down" className={styles.chevron} />
      </span>
    </>
  );
}

export default function Curriculum() {
  return (
    <section id="dastur" className={styles.section} aria-labelledby="curriculum-title">
      <div className="container">
      <div className={styles.inner}>
        <div className={styles.head}>
          <SectionHeading
            id="curriculum-title"
            variant="jakarta"
            eyebrow="BOSQICHMA-BOSQICH DASTUR"
            title="O'quv Dasturi: 4 ta Bosqichli Amaliy Modul"
            description="Har bir modul real bino ustida bajariladigan aniq muhandislik amaliyotlaridan iborat."
          />
          <p className={styles.summary}>{CURRICULUM_SUMMARY}</p>
        </div>

        <ul className={styles.modules}>
          {MODULES.map((module, index) => (
            <li key={module.title}>
              {"lessons" in module ? (
                <details className={styles.module} open={index === 0}>
                  <summary className={styles.moduleHead}>
                    <ModuleSummary module={module} index={index} />
                  </summary>
                  <ul className={styles.lessons}>
                    {module.lessons.map((lesson) => (
                      <li key={lesson.title} className={styles.lesson}>
                        <span className={styles.lessonTitle}>
                          <CourseIcon name="lesson-play" />
                          {lesson.title}
                        </span>
                        <span className={styles.lessonSide}>
                          <span className={styles.duration}>{lesson.duration}</span>
                          {"open" in lesson && (
                            <a href="#" className={styles.openLesson}>
                              Ochiq dars
                            </a>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <div className={styles.module}>
                  <div className={styles.moduleHead}>
                    <ModuleSummary module={module} index={index} />
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </section>
  );
}
