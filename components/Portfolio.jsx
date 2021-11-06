import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Portfolio.module.css'

import atherton from "../public/sitePics/atherton.jpg";
import bestfresh from "../public/sitePics/bestfresh.jpg";
import mindscape from "../public/sitePics/mindscape.jpg";
import nudesushi from "../public/sitePics/nudesushi.jpg";
import onePager from "../public/sitePics/onePager.jpg";
import otmiri from "../public/sitePics/otmiri.jpg";
import spaceball from "../public/sitePics/spaceball.jpg";
import vapenvibes from "../public/sitePics/vapenvibes.jpg";

const siteDetails = {
  onePager: {
    sitePic: onePager,
    title: "OnePager",
    url: "https://onepager.vc/",
    techStack:
      "Next.js | Node.js | JavaScript | TypeScript | HTML5 | CSS3 | MySQL | AWS Cloud | Sanity.io | Chakra UI | Material UI | Stripe API | Google Analytics API | Google Maps API",
  },
  otmiri: {
    sitePic: otmiri,
    title: "OT Miri",
    url: "https://www.otmiri.com",
    techStack:
      "React.js | Redux | JavaScript | HTML5 | CSS3 | MySQL | WordPress | DonorBox API | Design | Branding | Content",
  },
  mindscape: {
    sitePic: mindscape,
    title: "Mindscape",
    url: "https://mind--scape.herokuapp.com/",
    techStack:
      "React.js | Redux | Ruby on Rails | JavaScript | HTML5 | CSS3 | PostgreSQL | Google Maps API",
  },
  spaceball: {
    sitePic: spaceball,
    title: "Space Ball",
    url: "https://space-ball.herokuapp.com/",
    techStack:
      "MongoDB | Express.js | React.js | Redux | Node.js | JavaScript | HTML5 | CSS3 | Socket.io | Matter.js | Canvas",
  },
  atherton: {
    sitePic: atherton,
    title: "William Atherton",
    url: "https://williamatherton.com/",
    techStack:
      "WordPress | JavaScript | HTML5 | CSS3 | Elementor | GeneratePress | Advanced Custom Fields | Sanity.io",
  },
  bestfresh: {
    sitePic: bestfresh,
    title: "Best Fresh Kratom",
    techStack:
      "WordPress | JavaScript | HTML5 | CSS3 | Elementor | GeneratePress | Advanced Custom Fields | Design | Branding",
  },
  vapenvibes: {
    sitePic: vapenvibes,
    title: "Island Vape-N-Vibes",
    techStack:
      "WordPress | JavaScript | HTML5 | CSS3 | Elementor | GeneratePress | Advanced Custom Fields | Design | Branding",
  },
  nudesushi: {
    sitePic: nudesushi,
    title: "Nude Sushi",
    techStack:
      "WordPress | JavaScript | HTML5 | CSS3 | WooCommerce | Stripe API | Advanced Custom Fields | Design | Branding",
  },
};

export default function Portfolio() {
  const [selectedSite, setSelectedSite] = useState("onePager")

  function selectSite(e){
    if (e.target.id !== selectedSite && e.target.id !== styles.overlay) {
      const siteDisplay = document.getElementById(styles.siteDisplay);
      setSelectedSite(e.target.id);
      siteDisplay.classList.remove(styles.animate);
      siteDisplay.style.display = "none";
    }
  }

  useEffect(() => {
    const siteDisplay = document.getElementById(styles.siteDisplay);
    siteDisplay.classList.add(styles.animate);
    siteDisplay.style.display = "flex";

    // Conditional scrolling based on device size
    const windowWidth = window.innerWidth;
    const displayWindow =
      windowWidth > 800
        ? document.getElementById(styles.overlay)
        : document.getElementById(styles.sitePicContainer);
    displayWindow.scrollIntoView({ behavior: "smooth" });
  }, [selectedSite])

  return (
    <div id={styles.portfolioContainer}>
      <div id={styles.siteDisplayContainer}>
        <div id={styles.siteDisplay} className={styles.animate}>
          <div id={styles.sitePicContainer}>
            <Image
              id={`display-${selectedSite}`}
              src={siteDetails[selectedSite]?.sitePic}
              priority
              objectFit="contain"
            />
          </div>
          <div
            id={styles.siteTitle}
          >{`${siteDetails[selectedSite]?.title}`}</div>
          <div
            id={styles.techStack}
          >{`${siteDetails[selectedSite]?.techStack}`}</div>
          {siteDetails[selectedSite]?.url && (
            <a
              href={siteDetails[selectedSite]?.url}
              target="_blank"
              rel="noreferrer"
            >
              <div id={styles.siteButton}>LIVE SITE</div>
            </a>
          )}
        </div>
      </div>
      <div id={styles.siteIndex}>
        {Object.keys(siteDetails).map((key) => {
          return (
            <div onClick={selectSite} key={key}>
              {key === selectedSite && (
                <div id={styles.overlay} className={styles.overlay} />
              )}
              <Image
                id={key}
                src={siteDetails[key].sitePic}
                priority
                objectFit="contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}