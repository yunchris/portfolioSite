import { useEffect } from "react";
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import { BiArrowBack } from "react-icons/bi";

const colors = {
  about: "#212d40",
  contact: "#d81159",
  portfolio: "#0081a7",
};

export default function Content({active}) {
  function scrollToTop() {
    const sidebar = document.getElementById("sidebar");
    const activeContent = document.getElementById("contentContainer");
    sidebar.style.display="flex"
    activeContent.style.display="none"
    sidebar.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function setColor(color) {
    document.documentElement.style.setProperty("--color-active", color);
    const activeContent = document.getElementById("contentContainer");
    setTimeout(() => {
      activeContent.classList.add("animate");
      activeContent.style.opacity = 1;
    }, 100);
  }
  
  useEffect(() => {
    setColor(colors[active]);
  }, [active])

  function currentContent() {
    switch (active) {
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
      <div id="scrollTop" className="scrollTop" onClick={scrollToTop}>
        <BiArrowBack height="30px" />
      </div>
      {currentContent()}
    </div>
  );
}
