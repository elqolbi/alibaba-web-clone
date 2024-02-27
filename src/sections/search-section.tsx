import BadgeBubble from "../components/badge-bubble";
import SearchInput from "../components/search-input";

export default function SearchSection() {
  return (
    <div className="h-80 w-full box flex justify-center items-center">
      <div className="main-content w-4/5 box space-y-10">
        <div className="w-full flex justify-center space-x-10">
          <div className="text-4xl font-semibold underline underline-offset-8 decoration-orange-600 decoration-4">
            Products
          </div>
          <div className="text-4xl font-semibold">Manufacturers</div>
        </div>
        <SearchInput />
        <div className="w-full flex justify-center items-center space-x-10">
          <div className="text-lg">Frequently searched:</div>
          <BadgeBubble text="Keyword 1" size="xs" />
          <BadgeBubble text="Keyword 2" size="sm" />
          <BadgeBubble text="Keyword 3" size="md" />
          <BadgeBubble text="Keyword 4" size="lg" />
        </div>
      </div>
    </div>
  );
}
