"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import styles from "./B2BSection.module.css";

const CHECKMARKS = [
  {
    title: "Departamentlar bo'yicha ixtisoslashtirilgan o'qitish",
    desc: "AR, KR, OViK, VK bo'limlari uchun alohida amaliy loyiha asosida darslar.",
  },
  {
    title: "O'zbekiston QMQ va Davlat Ekspertizasi talablari",
    desc: "Chizmalar va spetsifikatsiyalarning milliy ekspertiza qoidalariga to'liq mosligi.",
  },
  {
    title: "Korporativ .RTE shablonlar va BEP joriy etish",
    desc: "Kompaniyangiz uchun yagona BIM standarti va oilalar (family) kutubxonasini sozlash.",
  },
  {
    title: "Rahbariyat uchun monitoring va test hisobotlari paneli",
    desc: "Xodimlarning o'zlashtirish darajasi va amaliy imtihon ko'rsatkichlari nazorati.",
  },
];

export default function B2BSection() {
  const [fio, setFio] = useState("");
  const [company, setCompany] = useState("");
  const [teamSize, setTeamSize] = useState("5-10 muhandis");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="biznes" className={styles.section} aria-labelledby="b2b-heading">
      <div className={`container ${styles.inner}`}>
        {/* Left Column: Text & Features */}
        <div className={styles.left}>
          <div className={styles.header}>
            <span className={styles.tag}>Biznes va korporativ yechimlar</span>
            <div className={styles.titleWrap}>
              <h2 id="b2b-heading" className={styles.title}>
                Loyihalash tashkilotlari uchun korporativ BIM ta&apos;limi
              </h2>
              <p className={styles.subtitle}>
                Loyiha institutlari va qurilish kompaniyalari uchun: ish tezligini 3-5
                baravarga oshiring, xatolarni kamaytiring va xodimlarni QMQ/ShNK
                standartlari bo&apos;yicha o&apos;qiting.
              </p>
            </div>
          </div>

          <div className={styles.checkmarks}>
            {CHECKMARKS.map((item, index) => (
              <div key={index} className={styles.checkItem}>
                <div className={styles.checkIconWrap}>
                  <Icon name="check" size={16} />
                </div>
                <div className={styles.checkContent}>
                  <h3 className={styles.checkTitle}>{item.title}</h3>
                  <p className={styles.checkDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Lead Capture Form Card */}
        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <div className={styles.companyBadge}>
              <Icon name="building" size={14} />
              <span>KOMPANIYALAR UCHUN</span>
            </div>
            <h3 className={styles.formTitle}>Maxsus korporativ taklif oling</h3>
            <p className={styles.formSubtitle}>
              Jamoangiz hajmi va talablarini yozing. 24 soat ichida individual
              o&apos;qish rejasiniva tijorat taklifini tayyorlab beramiz.
            </p>
          </div>

          {submitted ? (
            <div className={styles.successMessage}>
              <div className={styles.checkIconWrap}>
                <Icon name="check" size={16} />
              </div>
              <h4>Taklif so&apos;rovingiz qabul qilindi!</h4>
              <p>Mutaxassisimiz 24 soat ichida siz bilan bog&apos;lanadi.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="fio" className={styles.label}>
                  F.I.O.
                </label>
                <input
                  id="fio"
                  type="text"
                  placeholder="Sardor Aliyev"
                  value={fio}
                  onChange={(e) => setFio(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="company" className={styles.label}>
                  KOMPANIYA NOMI
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="O'zo'girsanoatloyiha AJ"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.twoCols}>
                <div className={styles.inputGroup}>
                  <label htmlFor="teamSize" className={styles.label}>
                    MUHANDISLAR SONI
                  </label>
                  <div className={styles.selectWrap}>
                    <select
                      id="teamSize"
                      value={teamSize}
                      onChange={(e) => setTeamSize(e.target.value)}
                      className={styles.select}
                    >
                      <option value="1-5 muhandis">1-5 muhandis</option>
                      <option value="5-10 muhandis">5-10 muhandis</option>
                      <option value="10-25 muhandis">10-25 muhandis</option>
                      <option value="25+ muhandis">25+ muhandis</option>
                    </select>
                    <div className={styles.chevronIcon}>
                      <Icon name="chevron" size={16} />
                    </div>
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    TELEFON RAQAMI
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+998 (90) 123-45-67"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <button type="submit" id="b2b-submit" className={styles.submitBtn}>
                <span>Tijorat taklifini olish</span>
                <Icon name="arrow-form" size={16} />
              </button>
            </form>
          )}

          <div className={styles.securityRow}>
            <div className={styles.securityItem}>
              <Icon name="shield" size={16} />
              <span>Maxfiylik kafolatlangan (NDA)</span>
            </div>
            <div className={styles.securityItem}>
              <Icon name="zap" size={16} />
              <span>Bepul boshlang&apos;ich konsultatsiya</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
