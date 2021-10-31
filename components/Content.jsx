import { useEffect } from "react";
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"

const colors = {
  about: "#212d40",
  portfolio: "#d81159",
  contact: "#0081a7",
};

export default function Content(active) {
  useEffect(() => {
    let activeContent = document.getElementById("contentContainer");
    
    setTimeout(() => {
      activeContent.style.backgroundColor = colors[active.active];
      activeContent.classList.add("animate")
      activeContent.style.opacity = 1;
    }, 100);
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
      {currentContent()}
    </div>
  );
}
