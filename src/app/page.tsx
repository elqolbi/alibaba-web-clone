import TopSection from "./ui/top-section";

export default function Home() {
  return (
    <main
      className="top-layout bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(/top-layout-bg.jpg)`,
      }}
    >
      <TopSection />
    </main>
  );
}
