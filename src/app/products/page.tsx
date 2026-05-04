"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';

export default function ProductsPage() {
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
              { name: "Home", id: "/" },
              { name: "About", id: "/about" },
              { name: "Products", id: "/products" },
              { name: "Contact", id: "/#contact" },
            ]}
            brandName="Manufacturers"
          />
        </div>

        <div id="products" data-section="products">
          <FeatureCardNineteen
            title="Atlas Shingles: Premium Roofing Systems"
            description="Explore the technical benefits and durability specifications of our Atlas high-performance shingle lines."
            textboxLayout="split"
            useInvertedBackground={false}
            animationType="slide-up"
            features={[
              {
                tag: "Technology",                title: "CORE4 Technology",                subtitle: "Unmatched Strength",                description: "Atlas shingles are engineered with CORE4 technology to provide superior impact resistance and flexibility in extreme temperatures, ensuring long-term structural integrity.",                imageSrc: "http://img.b2bpic.net/free-photo/closeup-roof-house-made-wooden-tiles_169016-24989.jpg"
              },
              {
                tag: "Protection",                title: "3M Scotchgard™ Protector",                subtitle: "Algae Resistance",                description: "Our premium shingles feature genuine 3M Scotchgard™ to defend your roof against unsightly black streaks caused by algae, maintaining your home's curb appeal for decades.",                imageSrc: "http://img.b2bpic.net/free-photo/modern-house-architecture-navy-roof-wooden-soffit-blue-sky_626616-509.jpg"
              },
              {
                tag: "Specifications",                title: "High Wind Warranty",                subtitle: "Weather Endurance",                description: "Designed to meet the highest industry standards, these shingles provide exceptional wind uplift resistance and durability even in severe weather conditions common to North New Jersey.",                imageSrc: "http://img.b2bpic.net/free-photo/full-shot-smiley-man-working-roof_23-2149343672.jpg"
              }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            logoText="Manufacturers Roofing & Siding"
            columns={[
              { title: "Services", items: [{ label: "Roofing", href: "/#services" }, { label: "Siding", href: "/#services" }] },
              { title: "Company", items: [{ label: "About Us", href: "/about" }, { label: "Products", href: "/products" }, { label: "Contact", href: "/#contact" }] },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}