function Navbar() {
  return (
    <div className="bg-black text-white p-2">
      <nav>
        <ul className="grid grid-cols-3">
          <div>
            <li className="my-auto w-[86px]">
              <a href="">
                <img
                  className="w-[86px]"
                  src="https://www.boominatiworldwide.com/files/2022/11/Logo-1-150x125.png"
                />
              </a>
            </li>
          </div>

          <div className="my-auto">
            <li className="my-auto flex font-noto-serif">
              <ul className="text-xl flex gap-8">
                <li>
                  <a href="">MUSIC</a>
                </li>
                <li>
                  <a href="">VIDEOS</a>
                </li>
                <li>
                  <a href="">TOUR</a>
                </li>
                <li>
                  <a href="">SHOP</a>
                </li>
                <li>
                  <a href="">SIGN UP</a>
                </li>
                <li>
                  <a href="">CREDITS</a>
                </li>
              </ul>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
