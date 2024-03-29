import NavbarSection from "@/sections/navbar-section";
import SearchSection from "../sections/search-section";
import WelcomeSection from "../sections/welcome-section";
import TopListsSection from "@/sections/top-lists-section";

export default function HomepageLayout() {
  return (
    <main>
      <div
        className="top-layout bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/top-layout-bg.jpg)`,
        }}
      >
        <NavbarSection />
        <SearchSection />
      </div>

      <WelcomeSection />

      <div className="bg-white">
        <TopListsSection />
      </div>
    </main>
  );
}
