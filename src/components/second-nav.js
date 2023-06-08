import secondNavStyles from "./second-nav.module.css";

export default function SecondNav() {
  const secondNavLinks = ["About", "Jobs", "Apprenticeships"];

  return (
    <nav className={secondNavStyles.container}>
      <ul className={secondNavStyles.navbar}>
        {secondNavLinks.map((link, index) => {
          return (
            <li className={secondNavStyles.navlink} key={index}>
              {link.includes("About") ? (
                <a href="#" className={secondNavStyles.orangeLink}>
                  {link}
                </a>
              ) : (
                <a href="#">{link}</a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
