import ContentListCard from "@/components/content-list-card";

export default function TopListsSection() {
  return (
    <div className="mx-8 text-slate-900 py-5">
      <div className="flex justify-between items-center pb-5">
        <div className="font-semibold text-3xl">Top ranking</div>
        <a href="/" className="text-xl underline font-semibold">
          View more
        </a>
      </div>

      <div className="grid gap-3 grid-cols-3">
        <ContentListCard />
        <ContentListCard />
        <ContentListCard />
      </div>
    </div>
  );
}
