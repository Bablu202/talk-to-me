import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl text-primary">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="here comes the card name"
          topic="card topic"
          subject="science"
          duration={30}
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="here comes the card name"
          topic="card topic"
          subject="Literature"
          duration={45}
          color="#e5d0ff"
        />
        <CompanionCard
          id="789"
          name="here comes the card name"
          topic="card topic"
          subject="physics"
          duration={50}
          color="#bde7ff"
        />
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recentely completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
