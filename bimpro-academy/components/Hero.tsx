import Image from "next/image";
import { Icon } from "./Icon";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section} aria-labelledby="hero-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={styles.text}>
            <span className={styles.badge}>Amaliy BIM ta’lim</span>
            <h1 id="hero-title" className={styles.title}>
              <span className={styles.accent}>BIM-loyihalash</span> va
              avtomatlashtirishni amalda o’rganing
            </h1>
            <p className={styles.lead}>
              BIM-loyihalash, qurilish boshqaruvi va avtomatlashtirish bo’yicha
              amaliy ta’lim platformasi. Zamonaviy dasturiy majmualar, tayyor
              shablonlar va real obyektlar ustida ishlash ko’nikmalari.
            </p>
          </div>

          <div className={styles.buttons}>
            <a href="#" id="hero-register" className={styles.primary}>
              Ro’yhatdan o’tish
              <Icon name="arrow-right" size={16} className={styles.arrow} />
            </a>
            <a href="#kurslar" id="hero-programs" className={styles.secondary}>
              O&apos;quv dasturlari
            </a>
          </div>

          <hr className={styles.divider} />

          <ul className={styles.features}>
            <li>
              <Icon name="badge-check" size={20} />
              O&apos;zbekiston QMQ/ShNK standartlari
            </li>
            <li>
              <Icon name="briefcase" size={20} />
              real obyektlar
            </li>
          </ul>
        </div>

        <div className={styles.illustrationWrap}>
          <Image
            src="/images/hero-banner.png"
            alt="BIM model, Revit MEP, HVAC, avtomatlashtirish algoritmi va zamonaviy loyihalash binosi"
            width={690}
            height={669}
            className={styles.illustration}
            priority
          />
        </div>
      </div>
    </section>
  );
}
