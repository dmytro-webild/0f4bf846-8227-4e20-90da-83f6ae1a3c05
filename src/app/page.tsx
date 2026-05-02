"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="large"
        background="noise"
        cardStyle="glass-depth"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "About", id: "/about" },
        { name: "Products", id: "/#products" },
        { name: "Services", id: "/#services" },
        { name: "Contact", id: "/#contact" },
      ]}
      brandName="Manufacturers"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{ variant: "plain" }}
      title="Manufacturers Roofing & Siding"
      description="Premium roofing, siding, and ventilation systems installed with manufacturer-level expertise. 25+ years of experience protecting homes in North New Jersey."
      leftCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/full-shot-smiley-man-working-roof_23-2149343672.jpg", imageAlt: "House roofing" },
        { imageSrc: "http://img.b2bpic.net/free-photo/man-walking-roof_1321-1041.jpg", imageAlt: "Roofing system" },
      ]}
      rightCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/modern-house-architecture-navy-roof-wooden-soffit-blue-sky_626616-509.jpg", imageAlt: "House roofing" },
        { imageSrc: "http://img.b2bpic.net/free-photo/closeup-roof-house-made-wooden-tiles_169016-24989.jpg", imageAlt: "Roofing system" },
      ]}
      buttons={[
        { text: "Schedule Inspection", href: "/#contact" },
        { text: "Get Estimate", href: "/#contact" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Bringing Manufacturer-Level Knowledge to Your Home"
      description={[
        "With over 25 years of experience as a building envelope manufacturer representative in North New Jersey, we bring unparalleled technical knowledge to every project. We don't just install; we educate, having spent years training local contractors on industry-leading installation best practices.",        "Our unique expertise lies in our dual perspective: product manufacturing and system installation. Our founder also owns Acro Blending & Packaging LLC, a toll manufacturer that provided critical materials for high-profile projects like the LGA Delta terminal terrazzo floors and Wawa locations across the East Coast.",        "When you choose us, you are choosing a partner who understands the chemistry and engineering of your roof and siding systems, ensuring professional, manufacturer-backed results for your home." 
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { id: "f1", title: "Expert Knowledge", description: "Deep understanding of roofing, wall assemblies, and moisture management.", tag: "Expertise", imageSrc: "http://img.b2bpic.net/free-photo/photo-ground-texture-pattern_58702-15928.jpg" },
      ]}
      title="Why Homeowners Choose Us"
      description="Expert systems, premium materials, and prompt service."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      columns={[
        { title: "Services", items: [{ label: "Roofing", href: "/#services" }, { label: "Siding", href: "/#services" }] },
        { title: "Company", items: [{ label: "About Us", href: "/about" }, { label: "Contact", href: "/#contact" }] },
      ]}
      logoText="Manufacturers Roofing & Siding"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}