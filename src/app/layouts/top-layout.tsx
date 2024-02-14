import TopSection from "../sections/top-section";

export default function TopLayout() {
  return (
    <div
      className="top-layout bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(/top-layout-bg.jpg)`,
      }}
    >
      <TopSection />
    </div>
  );
}
