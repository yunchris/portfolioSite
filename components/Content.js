import { useEffect } from "react";
import styles from "../styles/Content.module.css";

const colors = {
  about: "#212d40",
  portfolio: "#d81159",
  contact: "#0496ff",
};

export default function Content(active) {
  useEffect(() => {
    if (document) {
      let activeContent = document.getElementById("contentContainer");
      activeContent.classList.remove(styles.animate)
      setTimeout(() => {
        activeContent.style.backgroundColor = colors[active.active];
        activeContent.classList.add(styles.animate)
      }, 100);
    }
  }, [active])

  return (
    <div id="contentContainer" className={styles.contentContainer}>
    </div>
  )
}
