import { FaCashRegister } from "react-icons/fa6";
import "../styles/Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";

export default function Header() {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isActive, setIsActive] = useState("home");
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>{
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  function handleDropdown() {
    setIsDropdown((prev) => !prev);
  }

  function handleClickMenu(menu) {
    setIsActive(menu);
  }
  return (
    <header className={isScroll ? "scrolled" : ""}>
      <div className="header-left">
        <FaCashRegister />
        <span>Smart Draft</span>
      </div>
      <nav className="header-right">
        <ul>
          <a
            href="#home"
            className={`${isActive === "home" ? "active" : ""}`}
            onClick={() => handleClickMenu("home")}
          >
            <li>Home</li>
          </a>
          <a
            href="#services"
            className={`${isActive === "services" ? "active" : ""}`}
            onClick={() => handleClickMenu("services")}
          >
            <li>Services</li>
          </a>
          <a
            href="#works"
            className={`${isActive === "works" ? "active" : ""}`}
            onClick={() => handleClickMenu("works")}
          >
            <li>Works</li>
          </a>
          <a
            href="#contact"
            className={`${isActive === "contact" ? "active" : ""}`}
            onClick={() => handleClickMenu("contact")}
          >
            <li>Contact</li>
          </a>
        </ul>
      </nav>

      <nav className="header-mobile">
        <span onClick={handleDropdown}>
          {isDropdown ? <CgClose /> : <GiHamburgerMenu />}
        </span>
          <ul className={isDropdown ? "active" : ""}>
            <a
              href="#home"
              className={`${isActive === "home" ? "active" : ""}`}
              onClick={() => handleClickMenu("home")}
            >
              <li>Home</li>
            </a>
            <a
              href="#services"
              className={`${isActive === "services" ? "active" : ""}`}
              onClick={() => handleClickMenu("services")}
            >
              <li>Services</li>
            </a>
            <a
              href="#works"
              className={`${isActive === "works" ? "active" : ""}`}
              onClick={() => handleClickMenu("works")}
            >
              <li>Works</li>
            </a>
            <a
              href="#contact"
              className={`${isActive === "contact" ? "active" : ""}`}
              onClick={() => handleClickMenu("contact")}
            >
              <li>Contact</li>
            </a>
          </ul>
      </nav>
    </header>
  );
}
