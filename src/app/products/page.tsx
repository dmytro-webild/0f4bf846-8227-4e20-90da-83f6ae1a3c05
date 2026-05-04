"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';

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
          <NavbarStyleApple
            navItems={[
              { name: "Home", id: "/" },
              { name: "About", id: "/about" },
              { name: "Products", id: "/products" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Manufacturers"
          />
        </div>

        <div id="products" data-section="products">
          <FeatureCardTwentyEight
            title="Atlas Shingles: Premium Roofing Systems"
            description="Explore the technical benefits and durability specifications of our Atlas high-performance shingle lines."
            textboxLayout="split"
            useInvertedBackground={false}
            animationType="slide-up"
            features={[
              {
                id: "1",                category: "Technology",                title: "CORE4 Technology",                subtitle: "Unmatched Strength",                value: "Atlas shingles are engineered with CORE4 technology to provide superior impact resistance and flexibility in extreme temperatures, ensuring long-term structural integrity."
              },
              {
                id: "2",                category: "Protection",                title: "3M Scotchgard™ Protector",                subtitle: "Algae Resistance",                value: "Our premium shingles feature genuine 3M Scotchgard™ to defend your roof against unsightly black streaks caused by algae, maintaining your home's curb appeal for decades."
              },
              {
                id: "3",                category: "Specifications",                title: "High Wind Warranty",                subtitle: "Weather Endurance",                value: "Designed to meet the highest industry standards, these shingles provide exceptional wind uplift resistance and durability even in severe weather conditions common to North New Jersey."
              }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterSimple
            columns={[
              { title: "Services", items: [{ label: "Roofing", href: "/" }, { label: "Siding", href: "/" }] },
              { title: "Company", items: [{ label: "About Us", href: "/about" }, { label: "Products", href: "/products" }, { label: "Contact", href: "/contact" }] },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}