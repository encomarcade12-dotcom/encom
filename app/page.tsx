import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Models from "@/components/sections/Models";
import Business from "@/components/sections/Business";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import FAQ from "@/components/sections/FAQ";
import Contacts from "@/components/sections/Contacts";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <Hero />
        <div className="section-divider mx-auto w-full max-w-7xl px-8" />
        <About />
        <div className="section-divider mx-auto w-full max-w-7xl px-8" />
        <Models />
        <div className="section-divider mx-auto w-full max-w-7xl px-8" />
        <Business />
        <div className="section-divider mx-auto w-full max-w-7xl px-8" />
        <Services />
        <div className="section-divider mx-auto w-full max-w-7xl px-8" />
        <Process />
        <div className="section-divider mx-auto w-full max-w-7xl px-8" />
        <Portfolio />
        <div className="section-divider mx-auto w-full max-w-7xl px-8" />
        <FAQ />
        <div className="section-divider mx-auto w-full max-w-7xl px-8" />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
