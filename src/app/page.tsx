import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Vision } from "@/components/sections/Vision";
import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";
import { CorporateSolutions } from "@/components/sections/CorporateSolutions";
import { CapabilitiesSlider } from "@/components/sections/CapabilitiesSlider";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { SocialGallery } from "@/components/sections/SocialGallery";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Vision />
      <Services />
      <CTA />
      <CorporateSolutions />
      <CapabilitiesSlider />
      <Testimonials />
      <FAQ />
      <SocialGallery />
      <Footer />
    </main>
  );
}
