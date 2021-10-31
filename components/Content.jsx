import { useEffect } from "react";
import About from "./About"

const colors = {
  about: "#212d40",
  portfolio: "#d81159",
  contact: "#0081a7",
};

export default function Content(active) {
  useEffect(() => {
    if (document) {
      let activeContent = document.getElementById("contentContainer");
      activeContent.style.opacity = 0;
      activeContent.classList.remove("animate")
      setTimeout(() => {
        activeContent.style.backgroundColor = colors[active.active];
        activeContent.classList.add("animate")
      }, 100);
      setTimeout(() => {
        activeContent.style.opacity = 1;
      }, 200);
    }
  }, [active])

  function currentContent() {
    switch (active.active) {
      case "about":
        return <About />
      default:
        break;
    }
  }

  return (
    <div id="contentContainer" className="contentContainer">
      {currentContent()}
    </div>
  );
}
