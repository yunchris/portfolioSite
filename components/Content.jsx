import { useEffect } from "react";
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import { BsArrowUpCircle } from "react-icons/bs";

const colors = {
  about: "#212d40",
  portfolio: "#d81159",
  contact: "#0081a7",
};

export default function Content(active) {
  function scrollToTop() {
    let sidebarTop = document.getElementById("sidebar");
    sidebarTop.scrollIntoView();
  }

  function setColor(color) {
    document.documentElement.style.setProperty("--color-active", color);
    let activeContent = document.getElementById("contentContainer");
    setTimeout(() => {
      activeContent.classList.add("animate");
      activeContent.style.opacity = 1;
    }, 100);
  }
  
  useEffect(() => {
    setColor(colors[active.active]);
  }, [active])

  function currentContent() {
    switch (active.active) {
      case "about":
        return <About />
      case "portfolio":
        return <Portfolio />
      case "contact":
        return <Contact />
      default:
        return;
    }
  }

  return (
    <div id="contentContainer" className="contentContainer">
      <div className="scrollTop" onClick={scrollToTop}>
        <BsArrowUpCircle />
      </div>
      {currentContent()}
    </div>
  );
}
