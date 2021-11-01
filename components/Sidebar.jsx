import { useEffect, useRef } from "react";
import styles from "../styles/Sidebar.module.css";
import Christopher from "./svg/Christopher";
import Yun from "./svg/Yun";
import Logo from "./svg/Logo";
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const colors = {
  about: "#212d40",
  portfolio: "#d81159",
  contact: "#0081a7",
};

export default function SideBar(active) {
  const currentColor = useRef(colors[active.active])

  function setWindowHeight() {
    const container = document.getElementById("container")
    let windowHeight = window.innerHeight;
    container.style.height = windowHeight + "px";
  }

  useEffect(() => {
    setWindowHeight();
    window.addEventListener("resize", setWindowHeight, false);
  }, []);

  useEffect(() => {
    currentColor.current = colors[active.active];
  }, [active])
  
  
  const handleClick = (e) => {
    // Sets new active component state
    active.setActive(e.target.id)
    
    let activeContent = document.getElementById("contentContainer");
    activeContent.style.display = "flex";

    // Hides content so it doesnt show before new component slide in animation
    if (active.active !== e.target.id) {
      activeContent.style.opacity = 0;
      activeContent.classList.remove("animate");
  
      // Modifies container bg for slide in animation effect
      let container = document.getElementById("container");
      container.style.backgroundColor = currentColor.current;
    }
  }

  const calculateStyles = (componentName) => {
    return (
      active.active === componentName 
      ? {color: "white", backgroundColor: "var(--color-active)"}
      : {color: "black", backgroundColor: "transparent"}
    )
  }

  const calculateMoonColor = () => {
    return active.active === "about" ? "#ffffff" : "#212d40";
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <Logo outermoonColor={calculateMoonColor()}/>
        </div>
        <div>
          <Christopher />
        </div>
        <div style={{ fill: "var(--color-active)" }}>
          <Yun />
        </div>
      </div>
      <div id="nav" className={styles.navigation}>
        <a href="#aboutChris"
          id="about"
          style={calculateStyles("about")}
          className={styles.about}
          onClick={handleClick}
        >
          ABOUT
        </a> 
        <a href="#contentContainer"
          id="portfolio"
          style={calculateStyles("portfolio")}
          className={styles.portfolio}
          onClick={handleClick}
        >
          PORTFOLIO
        </a>
        <a href="#contentContainer"
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
