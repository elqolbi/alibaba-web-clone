import LogoNavbar from "@/components/logo-navbar";

export default function NavbarSection() {
  const menusLeft = [
    {
      name: "All Categories",
      url: "/",
    },
    {
      name: "Featured selections",
      url: "/",
    },
    {
      name: "Trade Assurance",
      url: "/",
    },
  ];
  const menusRight = [
    {
      name: "Buyer Central",
      url: "/",
    },
    {
      name: "Help Center",
      url: "/",
    },
    {
      name: "Get the app",
      url: "/",
    },
    {
      name: "Become a supplier",
      url: "/",
    },
  ];
  return (
    <>
      <div className="mx-8 pb-1 pt-3">
        <div className="p-3 flex justify-between items-center">
          <LogoNavbar />
          <div className="flex">
            <a
              href="/"
              className="px-4 underline border border-r-2 border-r-gray-300 last:border-none"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>

      <div className="mx-8 text-white flex justify-between">
        <div className="flex">
          {menusLeft.map((menuLeft) => (
            <a key={menuLeft.name} href={menuLeft.url} className="px-3">
              {menuLeft.name}
            </a>
          ))}
        </div>
        <div className="flex">
          {menusRight.map((menuRight) => (
            <a key={menuRight.name} href={menuRight.url} className="px-3">
              {menuRight.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
