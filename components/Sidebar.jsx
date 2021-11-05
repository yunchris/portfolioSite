import { useEffect, useRef } from "react";
import styles from "../styles/Sidebar.module.css";
import Christopher from "./svg/Christopher";
import Yun from "./svg/Yun";
import Logo from "./svg/Logo";
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const colors = {
  about: "#212d40",
  contact: "#d81159",
  portfolio: "#0081a7",
};

export default function SideBar({ active, setActive }) {
  const currentColor = useRef(colors[active]);
  const logo = useRef(null);

  function setResponsiveDisplay() {
    const activeContent = document.getElementById("contentContainer");
    const sidebar = document.getElementById("sidebar");
    const container = document.getElementById("container");
    container.style.height = window.innerHeight + "px";
    if (window.innerWidth > 800) {
      activeContent.style.display = "flex"
      sidebar.style.display = "flex"
    }
  }

  function normalizeLogoRotation() {
    setTimeout(() => {
      logo.current.classList.remove(styles.spedUpRotation);
    }, 1000);
  }

  useEffect(() => {
    logo.current = document.getElementById("logo");
    setResponsiveDisplay();
    window.addEventListener("resize", setResponsiveDisplay, false);
  }, []);

  useEffect(() => {
    currentColor.current = colors[active];
    normalizeLogoRotation();
    const yun = document.getElementById("yun");
    for (let i = 0; i < yun.children.length; i++) {
      yun.children[i].classList.remove(styles.invisible);
    }
  }, [active]);

  const handleClick = (e) => {
    // Sets new active component state
    setActive(e.target.id);

    const activeContent = document.getElementById("contentContainer");
    const sidebar = document.getElementById("sidebar");
    if (window.innerWidth < 800) {
      sidebar.style.display = "none"
      activeContent.style.display = "flex"
    }

    if (active !== e.target.id) {
      // Speeds up logo rotation
      logo.current.classList.add(styles.spedUpRotation);

      // Hides content so it doesnt show before new component slide in animation
      activeContent.style.opacity = 0;
      activeContent.classList.remove("animate");

      // Modifies container bg for slide in animation effect
      const container = document.getElementById("container");
      container.style.backgroundColor = currentColor.current;

      const yun = document.getElementById("yun");
      for (let i = 0; i < yun.children.length; i++) {
        yun.children[i].classList.add(styles.invisible);
      }
    }
  };

  const calculateStyles = (componentName) => {
    return active === componentName
      ? { color: "white", backgroundColor: "var(--color-active)" }
      : { color: "#212d40", backgroundColor: "transparent" };
  };

  const calculateMoonColor = () => {
    return active === "about" ? "#ffffff" : "#212d40";
  };

  return (
    <div id="sidebar" className={styles.sidebar}>
      <div className={styles.top}>
        <div className={styles.logo} id="logo">
          <Logo outermoonColor={calculateMoonColor()} />
        </div>
        <div>
          <Christopher />
        </div>
        <div>
          <Yun styles={styles} />
        </div>
      </div>
      <div id="nav" className={styles.navigation}>
        <a
          id="about"
          style={calculateStyles("about")}
          className={styles.about}
          onClick={handleClick}
        >
          ABOUT
        </a>
        <a
          id="portfolio"
          style={calculateStyles("portfolio")}
          className={styles.portfolio}
          onClick={handleClick}
        >
          PORTFOLIO
        </a>
        <a
          id="contact"
          style={calculateStyles("contact")}
          className={styles.contact}
          onClick={handleClick}
        >
          CONTACT
        </a>
      </div>
      <div className={styles.footer}>
        <a href="https://github.com/yunchris" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/christopher-yun/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/christopher.yun.77"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare />
        </a>
      </div>
    </div>
  );
}
