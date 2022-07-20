import React, { useState } from "react";
import "./header.css";
import LogoImg from "../../img/navLogo.png";
import { CgMenu, CgClose } from "react-icons/cg";
import { useNavigate,Link } from "react-router-dom";

const Header = () => {
    const nevigate=useNavigate();
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  const nav=()=>{
    nevigate('/');
  }
  return (
    <>
      {/* navbar */}
      <div className={menu ? "background-bg" : null} onClick={()=>setMenu(false)}></div>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="navLogoImg">
              <img onClick={nav} src={LogoImg} alt="/" />

              <h2>টিএমএসএস পলিটেকনিক ইন্সটিটিউট
                <br />
                <span className="sub-plase-name">হরিশপুর নাটোর-২১০৬৬</span>
              </h2>
            </div>
            {menu ? (
              <div className="menu-icon" onClick={handleMenu}>
                <CgClose className="menu-icon-logo2" />
              </div>
            ) : (
              <div className="menu-icon" onClick={handleMenu}>
                <CgMenu className="menu-icon-logo" />
              </div>
            )}

            <ul className="navUl">
              <li>
                <Link to="/">হোম</Link>
              </li>
              <li>
                <Link to="/about">
                  আমাদের সম্পর্কে <i className="fa-solid fa-angle-down"></i>
                </Link>
              </li>
              <li>
                <a href="/">
                  কোর্স <i className="fa-solid fa-angle-down"></i>
                </a>
              </li>

              <li>
                <a href="/">
                  নোটিশ <i className="fa-solid fa-angle-down"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  রেজাল্ট <i className="fa-solid fa-angle-down"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  ফ্যাসিলিটি <i className="fa-solid fa-angle-down"></i>
                </a>
              </li>
              <li>
                <a onClick={()=>setMenu(false)} href="/">যোগাযোগ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* mobile */}

      <ul className={menu ? "navUl3" : "navUl2"}>
        <li>
          <a href="/">হোম</a>
        </li>
        <li>
          <a href="/">
            আমাদের সম্পর্কে <i className="fa-solid fa-angle-down"></i>
          </a>
        </li>
        <li>
          <a href="/">
            কোর্স <i className="fa-solid fa-angle-down"></i>
          </a>
        </li>

        <li>
          <a href="/">
            নোটিশ <i className="fa-solid fa-angle-down"></i>
          </a>
        </li>
        <li>
          <a href="/">
            রেজাল্ট <i className="fa-solid fa-angle-down"></i>
          </a>
        </li>
        <li>
          <a href="/">
            ফ্যাসিলিটি <i className="fa-solid fa-angle-down"></i>
          </a>
        </li>
        <li>
          <a href="/">যোগাযোগ</a>
        </li>
      </ul>
    </>
  );
};

export default Header;
