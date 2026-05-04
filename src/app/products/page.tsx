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
            title="Our Premium Roofing Solutions"
            description="Discover high-performance roofing materials engineered for durability and aesthetics."
            textboxLayout="split"
            useInvertedBackground={false}
            features={[
              {
                tag: "Performance",                title: "Atlas Shingles",                subtitle: "Industry-leading roofing protection",                description: "Atlas shingles are designed to withstand harsh weather conditions while maintaining superior curb appeal for years to come.",                imageSrc: "http://img.b2bpic.net/free-photo/closeup-roof-house-made-wooden-tiles_169016-24989.jpg"
              },
              {
                tag: "Technology",                title: "3M Scotchgard™",                subtitle: "Stain and algae resistant technology",                description: "Our products featuring 3M Scotchgard™ protection ensure your roof stays looking new by resisting unsightly black streaks caused by algae growth.",                imageSrc: "http://img.b2bpic.net/free-photo/modern-house-architecture-navy-roof-wooden-soffit-blue-sky_626616-509.jpg"
              },
              {
                tag: "Premium Choice",                title: "Pinnacle Sun Shingle",                subtitle: "Luxury architectural profile",                description: "The Pinnacle Sun line offers a dimensional, heavy-duty appearance with deep shadows and refined textures that elevate your home's exterior.",                imageSrc: "http://img.b2bpic.net/free-photo/full-shot-smiley-man-working-roof_23-2149343672.jpg"
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