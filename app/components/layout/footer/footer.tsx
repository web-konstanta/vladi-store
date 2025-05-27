const Footer = () => {
  return (
    <div className="bg-[#E8E2DB] px-[60px]">
      <div className="container m-auto">
        <div className="flex flex-col items-center justify-center py-10">
          <img src="/images/footer.png" alt="Footer" />
        </div>
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <h1 className="text-base text-[14px] font-semibold text-gray-800">PRIVACY POLICY</h1>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#about" className="px-2 py-1 text-[14px] font-semibold">
              ABOUT US
            </a>
            <a href="#products" className="px-2 py-1 text-[14px] font-semibold">
              PRODUCTS
            </a>
            <a href="#services" className="px-2 py-1 text-[14px] font-semibold">
              SERVICES
            </a>
          </nav>
          <div className="text-[14px] font-semibold">© VLADI, Inc. All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
