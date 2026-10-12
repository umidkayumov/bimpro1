import styles from "./Stats.module.css";

const STATS = [
  {
    value: "250+",
    title: "Bo’lajak BIM mutaxassislar",
    text: "Amaliy va zamonaviy metodologiya bo'yicha ta'lim olayotgan muhandislar.",
  },
  {
    value: "8 ta",
    title: "Yo’naltiriligan o’quv dasturlari",
    text: "AR (Arxitektura), KR (Konstruksiya), VK (Suv va kanalizatsiya) va OVIK (Isitish va ventilatsiya) bo'yicha amaliy kurslar.",
  },
  {
    value: "100%",
    title: "QMQ / SHNK Standartlari",
    text: "O'zbekiston normativlariga moslashtirilgan kurslar va tayyor shablonlar.",
  },
  {
    value: "3-5x",
    title: "Loyihalash tezligi",
    text: "Avtomatlashtirish va tayyor shablonlar orqali rutina ishlardan xalos bo'lasiz.",
  },
];

export default function Stats() {
  return (
    <section
      id="biz-haqimizda"
      className={`container ${styles.section}`}
      aria-labelledby="stats-title"
    >
      <h2 id="stats-title" className={styles.title}>
        BIMPro Academy — amaliyotga yo&apos;naltirilgan zamonaviy ta&apos;lim
        platformasi.
      </h2>
      <div className={styles.grid}>
        {STATS.map((s) => (
          <article key={s.value} className={styles.card}>
            <p className={styles.value}>{s.value}</p>
            <div className={styles.cardText}>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
