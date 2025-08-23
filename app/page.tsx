import { Footer } from "@/components/common/Footer";
import Header from "@/components/common/Header";
import TrustedBy from "@/components/common/TrustedBy";
import FormBuilderShowcase from "@/components/home/AllStart";
import Hero from "@/components/home/Hero";
import IntegrationsShowcase from "@/components/home/InteractionShowcase";
import LastingImpression from "@/components/home/LastingExpression";
import MainTabs from "@/components/home/MainTabs";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <Header />
      <Hero />
      <MainTabs />
      <TrustedBy />
      <FormBuilderShowcase />
      <LastingImpression />
      <IntegrationsShowcase />
      <TestimonialSlider />
      <Footer />
    </div>
  );
};

export default page;
