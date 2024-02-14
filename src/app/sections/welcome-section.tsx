export default function WelcomeSection() {
  const menus = [
    {
      name: "Request for Quotation",
      url: "/",
    },
    {
      name: "Buyers Club benefits",
      url: "/",
    },
    {
      name: "Alibaba.com Logistics",
      url: "/",
    },
  ];
  return (
    <div className="p-8 bg-gray-200 text-gray-800 flex justify-between">
      <div className="text-xl font-semibold">Welcome to Alibaba.com</div>
      <div className="flex">
        {menus.map((menu) => (
          <a
            key={menu.name}
            href={menu.url}
            className="px-4 underline border border-r-2 border-r-gray-300 last:border-none"
          >
            {menu.name}
          </a>
        ))}
      </div>
    </div>
  );
}
