import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-blue-700 w-full h-17.5 flex">
        {/*LOGO | Search Bar | Menu | User Statu (login , user , sgin up)*/}
        {/**/}
        {/*First div for logo and search bar */}
        <div className="flex">
          <div>
            <img src="" alt="TBV" />
          </div>
          <div>
            <input type="search" name="" id="" placeholder="Search" />
          </div>
        </div>

        {/**/}
        {/**/}
        {/**/}

        {/*Second div for menu and login status */}
        <div className="flex">
          <div>
            <button aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
              Menu
            </button>
            {isOpen && (
              <ul aria-label="Menu">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">DashBoard</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            )}
          </div>
          <div>
            <button>Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
