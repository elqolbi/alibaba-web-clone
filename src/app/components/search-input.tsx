export default function SearchInput() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-8 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-indigo-500 text-gray-900"
      />
      <button className="absolute top-0 right-0 mt-4 mr-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400 hover:text-indigo-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.5 18.5l2.5 2.5"
          />
        </svg>
      </button>
    </div>
  );
}
