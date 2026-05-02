"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function AboutPage() {
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
              { name: "Products", id: "/#products" },
              { name: "Services", id: "/#services" },
              { name: "Contact", id: "/#contact" },
            ]}
            brandName="Manufacturers"
          />
        </div>

        <div id="about" data-section="about">
          <TextSplitAbout
            useInvertedBackground={false}
            title="Our Story & Expertise"
            description={[
              "With over 25 years of experience as a building envelope manufacturer representative in North New Jersey, we bring unparalleled technical knowledge to every project.",              
              "Our founder spent years training local contractors in North New Jersey, emphasizing proper product selection combined with expert installation as the foundation of building longevity.",              
              "Through his leadership at Acro Blending & Packaging LLC, he brings a deep understanding of wall systems, product manufacturing, and high-level industry standards directly to your residential project."
            ]}
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