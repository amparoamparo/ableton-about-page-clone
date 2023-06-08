import Image from "next/image";
import headerStyles from "./header.module.css";

export default function Header() {
  const leftNav = [
    "Live",
    "Push",
    "Note",
    "Link",
    "Shop",
    "Packs",
    "Help",
    "More +",
  ];

  const rightNav = ["Try Live for free", "Log in or register"];

  return (
    <>
      <div className={headerStyles.container}>
        <header>
          <Image
            src="ableton-hallmark.ef5355379032.svg"
            width={60}
            height={28}
            alt=""
          />
        </header>
        <div className={headerStyles.navGroup}>
          <nav>
            <ul className={headerStyles.navbar}>
              {leftNav.map((link, index) => {
                return (
                  <li className={headerStyles.navlink} key={index}>
                    {index !== leftNav.length - 1 ? (
                      <a href="#">{link}</a>
                    ) : (
                      <a href="#" className={headerStyles.orangeLink}>
                        {link}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
          <nav>
            <ul className={headerStyles.accountNavbar}>
              {rightNav.map((link, index) => {
                return (
                  <li className={headerStyles.navlink} key={index}>
                    {link.includes("Try") ? (
                      <a href="#" className={headerStyles.CTALink}>
                        {link}
                      </a>
                    ) : (
                      <a href="#" className={headerStyles.accountLink}>
                        {link}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
      <hr />
    </>
  );
}
