import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl text-primary">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard />
        <CompanionCard />
        <CompanionCard />
      </section>
      <section className="home-section">
        <CompanionsList />
        <CTA />
      </section>
    </div>
  );
};

export default Page;
