import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Courses from "@/components/Courses";
import B2BSection from "@/components/B2BSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Courses />
        <B2BSection />
      </main>
      <Footer />
    </>
  );
}
