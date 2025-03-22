export const Header = () => {
  return (
    <header>
      <div className="header_container">
        <div className="header_menu menu">
          <button className="menu_icon icon-menu" type="button">
            <span></span>
          </button>
          <nav className="menu_body">
            <ul className="menu_list">
              <li className="menu_item">
                <a href="" className="menu_link">
                  Menus
                </a>
              </li>
              <li className="menu_item">
                <a href="" className="menu_link">
                  About & Careers
                </a>
              </li>
              <li className="menu_item">
                <a href="" className="menu_link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <a
          href="#"
          className="header_logo text-white text-[32px] tracking-[-1.2px]"
        >
          debonaire
        </a>
        <a
          href=""
          className="header_book book px-[3px] relative text-white leading-1.31 text-center font-500 tracking-tighter after:content-[' '] after:absolute after:inset-0 after:top-[calc(100%+0.34375rem)] after:left-0 after:bg-[#F95454] after:h-0.5 after:w-full"
        >
          Book an Appoitment
        </a>
      </div>
    </header>
  );
};
