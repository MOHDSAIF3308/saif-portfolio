import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Pricing from '@/components/Pricing';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Pricing />
        <Process />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}