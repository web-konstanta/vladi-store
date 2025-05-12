const Header = () => {
  return (
    <header className="bg-[#DCCFBF] shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">VLADI</h1>
        <nav className="space-x-8">
          <a href="#" className="font-seimbold">
            PRODUCTS
          </a>
          <a href="#" className="font-seimbold">
            SERVICES
          </a>
          <a href="#" className="font-seimbold">
            ABOUT US
          </a>
        </nav>
        <button className="bg-[#333231] rounded-xl cursor-pointer text-white px-8 py-2">
          CONTACT US
        </button>
      </div>
    </header>
  );
};

export default Header;
