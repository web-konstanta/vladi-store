const Footer = () => {
  return (
    <div className="bg-[#E8E2DB] px-4 md:px-[60px]">
      <div className="container m-auto">
        <div className="flex flex-col items-center justify-center py-6">
          <img src="/images/footer.png" alt="Footer" className="h-auto max-w-full" />
        </div>

        <div className="flex flex-col items-center justify-center gap-4 py-6 text-center md:flex-row md:justify-between md:text-left">
          <h1 className="text-[14px] font-semibold text-gray-800">PRIVACY POLICY</h1>

          <nav className="flex flex-col items-center gap-2 md:flex-row md:gap-8">
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
