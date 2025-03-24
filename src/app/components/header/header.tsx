export const Header = () => {
  return (
    <header>
      {/* TODO: fix mobile nav */}
      <div className="header_container py-9 grid grid-cols-[1fr_auto_1fr] items-center gap-3.5">
        <div className="header_menu menu justify-self-start self-center">
          <nav className="menu_body">
            <ul className="menu_list flex items-center gap-x-20 flex-wrap gap-y-1">
              <li className="menu_item">
                <a
                  href=""
                  className="menu_link text-white font-500 tracking-[-0.4px] leading-5"
                >
                  Menus
                </a>
              </li>
              <li className="menu_item">
                <a
                  href=""
                  className="menu_link  text-white font-500 tracking-[-0.4px] leading-5"
                >
                  About & Careers
                </a>
              </li>
              <li className="menu_item">
                <a
                  href=""
                  className="menu_link  text-white font-500 tracking-[-0.4px] leading-5"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <a
          href="#"
          className="header_logo text-white text-2xl md:text-3xl tracking-[-1.2px]"
        >
          debonaire
        </a>
        <a
          href=""
          className="header_book book justify-self-end self-center px-[3px] relative text-white leading-1.31 text-center font-500 tracking-tighter after:content-[' '] after:absolute after:inset-0 after:top-[calc(100%+0.34375rem)] after:left-0 after:bg-[#F95454] after:h-0.5 after:w-full"
        >
          Book an Appoitment
        </a>
      </div>
    </header>
  );
};
