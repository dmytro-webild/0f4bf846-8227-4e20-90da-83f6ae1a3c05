"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
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
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Products",
          id: "#products",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Manufacturers"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "plain",
      }}
      title="Manufacturers Roofing & Siding"
      description="Premium roofing, siding, and ventilation systems installed with manufacturer-level expertise. 25+ years of experience protecting homes in North New Jersey."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-smiley-man-working-roof_23-2149343672.jpg",
          imageAlt: "House roofing",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-walking-roof_1321-1041.jpg",
          imageAlt: "Roofing system",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/long-shot-men-working-roof_23-2149343678.jpg",
          imageAlt: "Exterior siding",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-working-roof_23-2149343654.jpg",
          imageAlt: "Attic ventilation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/storage-house-with-cloudy-blue-sky-background_181624-16836.jpg",
          imageAlt: "Gutter installation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/view-stone-building-with-large-windows_23-2148252828.jpg",
          imageAlt: "Roof inspection",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/modern-house-architecture-navy-roof-wooden-soffit-blue-sky_626616-509.jpg",
          imageAlt: "House roofing",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-roof-house-made-wooden-tiles_169016-24989.jpg",
          imageAlt: "Roofing system",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-roofers-working-together-with-helmets_23-2149343707.jpg",
          imageAlt: "Exterior siding",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-beautiful-roof-wooden-house_23-2149343706.jpg",
          imageAlt: "Attic ventilation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-wooden-modern-house_23-2149343652.jpg",
          imageAlt: "Gutter installation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-working-with-protection-helmet_23-2149343636.jpg",
          imageAlt: "Roof inspection",
        },
      ]}
      buttons={[
        {
          text: "Schedule Inspection",
          href: "#contact",
        },
        {
          text: "Get Estimate",
          href: "#contact",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/man-with-helmet-working-roof-full-shot_23-2149343662.jpg",
          alt: "Roofer foreman",
        },
        {
          src: "http://img.b2bpic.net/free-photo/bearded-man-smoking-roof_1321-1036.jpg",
          alt: "Site supervisor",
        },
        {
          src: "http://img.b2bpic.net/free-photo/full-shot-worker-with-helmet-working-roof_23-2149343663.jpg",
          alt: "Safety officer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/construction-worker-doing-his-job-with-belt_23-2149343658.jpg",
          alt: "Customer support lead",
        },
        {
          src: "http://img.b2bpic.net/free-photo/full-shot-man-working-roof_23-2149343677.jpg",
          alt: "Technical engineer",
        },
      ]}
      avatarText="Trusted by 500+ local homeowners"
      marqueeItems={[
        {
          type: "text",
          text: "Atlas Certified",
        },
        {
          type: "text",
          text: "25+ Years Experience",
        },
        {
          type: "text",
          text: "Licensed & Insured",
        },
        {
          type: "text",
          text: "Emergency Response",
        },
        {
          type: "text",
          text: "Residential Specialists",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Roofing Done With a Manufacturer’s Mindset"
      description={[
        "Manufacturers Roofing & Siding was built on a simple principle: a home’s exterior system should be installed correctly the first time using proven products.",
        "With over 25 years of experience, we bring technical expertise to roofing, siding, and ventilation systems across North New Jersey.",
        "We specialize in the complete residential envelope—the systems that work together to protect your home’s structure.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Expert Knowledge",
          description: "Deep understanding of roofing, wall assemblies, and moisture management.",
          tag: "Expertise",
          imageSrc: "http://img.b2bpic.net/free-photo/photo-ground-texture-pattern_58702-15928.jpg",
        },
        {
          id: "f2",
          title: "System-Focused",
          description: "Every component is installed to work together for maximum performance.",
          tag: "Design",
          imageSrc: "http://img.b2bpic.net/free-photo/skateboard-rink-view_23-2148937901.jpg",
        },
        {
          id: "f3",
          title: "Premium Materials",
          description: "Using trusted products like Atlas Roofing shingles.",
          tag: "Quality",
          imageSrc: "http://img.b2bpic.net/free-photo/crop-woman-training-near-railings_23-2147786915.jpg",
        },
      ]}
      title="Why Homeowners Choose Us"
      description="Expert systems, premium materials, and prompt service."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Atlas",
          name: "Architectural Shingles",
          price: "High Performance",
          rating: 5,
          reviewCount: "500+",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-roof-house-made-wooden-tiles_169016-25417.jpg",
        },
        {
          id: "p2",
          brand: "Standard",
          name: "Attic Ventilation",
          price: "Energy Efficient",
          rating: 5,
          reviewCount: "300+",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-ventilation-system_23-2149388996.jpg",
        },
        {
          id: "p3",
          brand: "Systems",
          name: "Weather Barriers",
          price: "Moisture Protection",
          rating: 5,
          reviewCount: "400+",
          imageSrc: "http://img.b2bpic.net/free-photo/old-rusty-metallic-surface-close-up_23-2148846146.jpg",
        },
        {
          id: "p4",
          brand: "Systems",
          name: "Gutter Solutions",
          price: "Leaf Protection",
          rating: 5,
          reviewCount: "250+",
          imageSrc: "http://img.b2bpic.net/free-photo/man-working-roof-medium-shot_23-2149343644.jpg",
        },
        {
          id: "p5",
          brand: "Premium",
          name: "Underlayment Membranes",
          price: "Waterproofing",
          rating: 5,
          reviewCount: "600+",
          imageSrc: "http://img.b2bpic.net/free-photo/aerial-view-salt-salt-farm-ready-harvest-thailand_335224-1047.jpg",
        },
        {
          id: "p6",
          brand: "Exterior",
          name: "Siding Assemblies",
          price: "Curb Appeal",
          rating: 5,
          reviewCount: "350+",
          imageSrc: "http://img.b2bpic.net/free-photo/photo-wood-texture-pattern_58702-13150.jpg",
        },
      ]}
      title="Premium Roofing Systems"
      description="Trusted materials engineered for durability and weather protection."
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "s1",
          title: "Roof Replacement",
          description: "Full-service installation.",
          tag: "Roofing",
          imageSrc: "http://img.b2bpic.net/free-photo/roof-pattern_1203-2593.jpg",
        },
        {
          id: "s2",
          title: "Storm Repairs",
          description: "Fast damage restoration.",
          tag: "Emergency",
          imageSrc: "http://img.b2bpic.net/free-photo/metal-chimney-sky_1150-12608.jpg",
        },
        {
          id: "s3",
          title: "Siding Installation",
          description: "Professional exterior siding.",
          tag: "Siding",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-geometric-abstract-twist-background_1048-16965.jpg",
        },
      ]}
      title="Our Full Suite of Exterior Solutions"
      description="Comprehensive residential envelope services for North New Jersey."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Verified Homeowner",
          handle: "Local NJ",
          testimonial: "Professional, courteous, and prompt. Exceptional communication throughout the roof project.",
          imageSrc: "http://img.b2bpic.net/free-photo/tired-young-couple-are-sitting-floor-with-paint-brush-bucket-while-doing-repair-home_496169-751.jpg",
        },
        {
          id: "t2",
          name: "Bruce Fidler",
          handle: "NJ Homeowner",
          testimonial: "Honest recommendations, quality workmanship, and no pressure upselling. Excellent leaf guard work.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-man-choosing-color_23-2148903521.jpg",
        },
        {
          id: "t3",
          name: "Henry DeFina",
          handle: "NJ Homeowner",
          testimonial: "Great experience. Fast response before a major storm and project handled professionally.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-sitting-roof_23-2148748778.jpg",
        },
        {
          id: "t4",
          name: "Sarah Jenkins",
          handle: "NJ Homeowner",
          testimonial: "Very knowledgeable about attic ventilation and moisture management. Highly recommend.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-engineer-architect-shaking-hands_23-2148233783.jpg",
        },
        {
          id: "t5",
          name: "Mike Rivera",
          handle: "NJ Homeowner",
          testimonial: "Did a fantastic job on our siding. The attention to detail on weather barriers was impressive.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-holding-house-model-showing-winner-gesture-shirt-vest-hat-looking-happy-front-view_176474-30662.jpg",
        },
      ]}
      title="Customer Reviews"
      description="See why homeowners trust our exterior systems."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How long does a roof replacement take?",
          content: "Most roof replacements take 1-3 days depending on complexity.",
        },
        {
          id: "q2",
          title: "Do you offer free estimates?",
          content: "Yes, we provide fast, transparent estimates for all projects.",
        },
        {
          id: "q3",
          title: "Do you provide warranties?",
          content: "We use manufacturer-backed systems that provide comprehensive warranties.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/specialist-technician-professional-engineer-with-laptop-tablet-maintenance-checking-installing-solar-roof-panel-factory-rooftop-sunlight-engineers-team-survey-check-solar-panel-roof_609648-2202.jpg"
      mediaAnimation="slide-up"
      title="Common Questions"
      description="Answers to your roofing and siding queries."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Protect Your Home"
      description="Request your free exterior system inspection today."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Phone Number",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Describe your roofing or siding project...",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/architecture-concept-with-notepad-copyspace-right_23-2147813113.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Roofing",
              href: "#services",
            },
            {
              label: "Siding",
              href: "#services",
            },
            {
              label: "Ventilation",
              href: "#services",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      logoText="Manufacturers Roofing & Siding"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
