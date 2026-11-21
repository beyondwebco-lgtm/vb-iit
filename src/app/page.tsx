import React from "react";
import HeroSection from "@/components/home/HeroSection";
import AcademyOverview from "@/components/home/AcademyOverview";
import LeadershipHighlight from "@/components/home/LeadershipHighlight";
import ProgramsPreview from "@/components/home/ProgramsPreview";
import AcademicPriorities from "@/components/home/AcademicPriorities";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AdmissionsCTA from "@/components/home/AdmissionsCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AcademyOverview />
      <LeadershipHighlight />
      <ProgramsPreview />
      <AcademicPriorities />
      <WhyChooseUs />
      <AdmissionsCTA />
    </>
  );
}
