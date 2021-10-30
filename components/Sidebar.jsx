import { useEffect } from "react";
import Image from "next/image"
import styles from "../styles/Sidebar.module.css";
import Chris from "./svg/Chris";
import Topher from "./svg/Topher";
import Yun from "./svg/Yun";
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const colors = {
  about: "#212d40",
  portfolio: "#d81159",
  contact: "#0496ff",
};

export default function SideBar(active) {
  useEffect(() => {
    let nav = document.getElementById('nav').children;

    for (let i = 0; i < nav.length; i++) {
      nav[i].style.color = "black"
      nav[i].style.backgroundColor = "transparent"
    }

    let currentElement = document.getElementById(`${active.active}`);
    currentElement.style.color = "white";
    currentElement.style.backgroundColor = colors[active.active];
  }, [active])

  const handleClick = (e) => {
    active.setActive(e.target.id)

    let container = document.getElementById("container");
    container.style.backgroundColor = colors[active.active];
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.names}>
        <div style={{ paddingTop: "2rem" }}>
          <Chris />
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
