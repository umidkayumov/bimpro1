import Image from "next/image";
import {
  COURSE,
  PAYMENT_METHODS,
  PURCHASE_FEATURES,
} from "@/lib/course-detail";
import { CourseIcon } from "./CourseIcon";
import styles from "./PurchaseCard.module.css";

export default function PurchaseCard() {
  return (
    <aside id="sotib-olish" className={styles.card} aria-label="Kursni sotib olish">
      <div className={styles.video}>
        <Image
          src={COURSE.images.video}
          alt=""
          fill
          sizes="460px"
          className={styles.poster}
          priority
        />
        <div className={styles.shade} />
        <button type="button" className={styles.play} aria-label="Tanishuv videosini ko'rish">
          <span className={styles.triangle} />
        </button>
        <div className={styles.caption}>
          <span className={styles.captionLabel}>
            <span className={styles.liveDot} />
            Tanishuv videosini ko&apos;rish
          </span>
          <span className={styles.duration}>{COURSE.videoDuration}</span>
        </div>
      </div>

      <div className={styles.panel}>
        <div className={styles.priceRow}>
          <div className={styles.price}>
            <span className={styles.amount}>{COURSE.price}</span>
            <span className={styles.currency}>{COURSE.currency}</span>
            <s className={styles.oldPrice}>{COURSE.oldPrice}</s>
          </div>
          <span className={styles.discount}>{COURSE.discount}</span>
        </div>

        <div className={styles.installment}>
          <CourseIcon name="calendar" />
          <p>
            Muddatli to&apos;lov: {COURSE.monthlyPayment} so&apos;m/oy
            <small>Uzum Nasiya va Payme orqali foizsiz</small>
          </p>
        </div>

        <div className={styles.actions}>
          <a href="#" className={styles.buy}>
            Sotib olish
            <CourseIcon name="arrow-right" />
          </a>
          <a href="#dastur" className={styles.demo}>
            <CourseIcon name="demo-play" />
            Bepul demo darsni ko’rish
          </a>
        </div>

        <div>
          <h2 className={styles.listTitle}>KURS NIMALARNI O&apos;Z ICHIGA OLADI:</h2>
          <ul className={styles.features}>
            {PURCHASE_FEATURES.map((feature) => (
              <li key={feature}>
                <CourseIcon name="check-circle" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <ul className={styles.payments} aria-label="To'lov usullari">
          {PAYMENT_METHODS.map((method) => (
            <li key={method}>{method}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
