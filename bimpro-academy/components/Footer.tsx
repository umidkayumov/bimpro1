import Link from "next/link";
import { Logo } from "./Icon";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="aloqa" className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Top Columns */}
        <div className={styles.topColumns}>
          {/* Brand Info */}
          <div className={styles.brandInfo}>
            <Link href="/" aria-label="BIMPro Academy bosh sahifa">
              <Logo />
            </Link>
            <p className={styles.brandDesc}>
              O&apos;zbekistonda arxitektura va loyihalash sohasini{" "}
              <br className={styles.hideMobile} />
              raqamlashtirish, ilg&apos;or BIM texnologiyalari va xalqaro{" "}
              <br className={styles.hideMobile} />
              standartlarni amaliyotga tatbiq etish markazi.
            </p>
            <p className={styles.standardText}>
              ISO 19650 &amp; O&apos;zbekiston QMQ / ShNK qoidalari asosida
            </p>
          </div>

          {/* Col 1: Platforma */}
          <div className={styles.column}>
            <h4 className={styles.colHeading}>PLATFORMA</h4>
            <ul className={styles.colList}>
              <li>
                <a href="#kurslar" className={styles.link}>
                  Barcha Kurslar
                </a>
              </li>
              <li>
                <a href="#biznes" className={styles.link}>
                  Biznes uchun (B2B)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Yo'nalishlar */}
          <div className={styles.column}>
            <h4 className={styles.colHeading}>YO&apos;NALISHLAR</h4>
            <ul className={styles.colList}>
              <li>
                <a href="#kurslar" className={styles.link}>
                  Revit MEP (OViK &amp; VK)
                </a>
              </li>
              <li>
                <a href="#kurslar" className={styles.link}>
                  Revit Architecture (AR)
                </a>
              </li>
              <li>
                <a href="#kurslar" className={styles.link}>
                  Revit Structure (KR)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Bog'lanish */}
          <div className={styles.column}>
            <h4 className={styles.colHeading}>BOG&apos;LANISH</h4>
            <ul className={styles.colList}>
              <li className={styles.contactItem}>
                <span className={styles.contactLabel}>Tel:</span>
                <a href="tel:+998936651625" className={styles.contactLink}>
                  +998 (93) 665 16 25
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactLabel}>Email:</span>
                <a href="mailto:info@bimpro.uz" className={styles.contactLink}>
                  info@bimpro.uz
                </a>
              </li>
              <li className={styles.address}>
                Toshkent shahri, Mirobod tumani,
                <br />
                Nukus ko&apos;chasi
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © 2026 BIMPro Academy. Barcha huquqlar himoyalangan.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>
              Maxfiylik siyosati
            </a>
            <a href="#" className={styles.bottomLink}>
              Foydalanish shartlari
            </a>
            <a href="#" className={styles.bottomLink}>
              Ommaviy oferta
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
