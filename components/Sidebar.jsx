import { useEffect } from "react";
import Image from "next/image"
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
  let currentColor = colors[active.active];

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
    currentColor = colors[active.active];
    const nav = document.getElementById('nav').children;

    for (let i = 0; i < nav.length; i++) {
      nav[i].style.color = "black"
      nav[i].style.backgroundColor = "transparent"
    }

    const currentElement = document.getElementById(`${active.active}`);
    currentElement.style.color = "white";
    currentElement.style.backgroundColor = currentColor;

    const logo = document.getElementById("logo");
    logo.style.fill = currentColor;

    const name = document.getElementById("yun");
    name.style.fill = currentColor;
  }, [active])

  const handleClick = (e) => {
    active.setActive(e.target.id)
    
    let container = document.getElementById("container");
    container.style.backgroundColor = currentColor;
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <Logo currentColor={currentColor} />
        </div>
        <div>
          <Christopher />
        </div>
        <div>
          <Yun />
        </div>
      </div>
      <div id="nav" className={styles.navigation}>
        <div id="about" className={styles.about} onClick={handleClick}>
          ABOUT
        </div>
        <div id="portfolio" className={styles.portfolio} onClick={handleClick}>
          PORTFOLIO
        </div>
        <div id="contact" className={styles.contact} onClick={handleClick}>
          CONTACT
        </div>
      </div>
      <div className={styles.footer}>
        <a href="https://github.com/yunchris" target="_blank" rel="noreferrer">
          <FaGithub color={currentColor} />
        </a>
        <a
          href="https://www.linkedin.com/in/christopher-yun/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin color={currentColor} />
        </a>
        <a
          href="https://www.facebook.com/christopher.yun.77"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare color={currentColor} />
        </a>
      </div>
    </div>
  );
}
