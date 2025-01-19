const Header = () => {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">LEFT</div>

      <div className="flex items-center gap-2 px-4">
        <div className="hidden md:flex">SEARCH</div>
        USER NAV
      </div>
    </header>
  );
};

export default Header;
