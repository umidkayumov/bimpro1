import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseSubNav from "@/components/course/CourseSubNav";
import CourseHero from "@/components/course/CourseHero";
import PurchaseCard from "@/components/course/PurchaseCard";
import Outcomes from "@/components/course/Outcomes";
import Curriculum from "@/components/course/Curriculum";
import InstructorSection from "@/components/course/InstructorSection";
import Audience from "@/components/course/Audience";
import Testimonials from "@/components/course/Testimonials";
import Faq from "@/components/course/Faq";
import FinalCta from "@/components/course/FinalCta";
import { COURSE } from "@/lib/course-detail";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `${COURSE.title} — BIMPro Academy`,
  description: COURSE.summary,
};

export default function RevitMepCoursePage() {
  return (
    <>
      <Header />
      <CourseSubNav />
      <main className={styles.main}>
        <div className={`container ${styles.courseGrid}`}>
          <div className={styles.heroArea}>
            <CourseHero />
          </div>
          <div className={styles.sidebarArea}>
            <PurchaseCard />
          </div>
          <div className={styles.outcomesBg} aria-hidden="true" />
          <div className={styles.outcomesArea}>
            <Outcomes />
          </div>
          <div className={styles.curriculumArea}>
            <Curriculum />
          </div>
        </div>
        <InstructorSection />
        <Audience />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
