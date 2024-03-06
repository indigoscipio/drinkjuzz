import HeroSection from "./sections/HeroSection";
import MissionSection from "./sections/MissionSection";
import MenuSection from "./sections/MenuSection";
import CommitmentSection from "./sections/CommitmentSection";
import LocationSection from "./sections/LocationSection";
import BeliefSection from "./sections/BeliefSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BeliefSection />
      <MissionSection />
      <MenuSection />
      <CommitmentSection />
      <LocationSection />
    </main>
  );
}
