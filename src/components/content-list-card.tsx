export default function ContentListCard() {
  return (
    <div className="bg-gray-100 p-5 rounded-lg">
      {/* Title */}
      <div className="text-semibold text-xl font-bold pb-5 border-b-2 border-gray-300">
        Single Sided Adhesive Paper
      </div>
      {/* Content */}
      <div className="grid grid-cols-1 gap-5 py-5">
        <div className="content-wrapper flex gap-4 items-center">
          <div className="ordering-number font-bold">#1</div>
          <div className="img-container w-32 h-32">
            <img
              src="/product1.png"
              alt="Product 1"
              className="w-full h-full"
            />
          </div>
          <div className="content-title">Title</div>
        </div>

        <div className="content-wrapper flex gap-4 items-center">
          <div className="ordering-number font-bold">#1</div>
          <div className="img-container w-32 h-32">
            <img
              src="/product1.png"
              alt="Product 1"
              className="w-full h-full"
            />
          </div>
          <div className="content-title">Title</div>
        </div>
      </div>
    </div>
  );
}
