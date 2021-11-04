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
  onePager: { sitePic: onePager },
  otmiri: { sitePic: otmiri },
  mindscape: { sitePic: mindscape },
  spaceball: { sitePic: spaceball },
  atherton: { sitePic: atherton },
  bestfresh: { sitePic: bestfresh },
  vapenvibes: { sitePic: vapenvibes },
  nudesushi: { sitePic: nudesushi },
};

export default function Portfolio() {
  const [selectedSite, setSelectedSite] = useState("onePager")

  function selectSite(e){
    if (e.target.id !== selectedSite && e.target.id !== styles.overlay) setSelectedSite(e.target.id)
  }

  useEffect(() => {
    // const windowWidth = window.innerWidth
    // const displayWindow = document.getElementById(`display-${selectedSite}`)
    // const indexWindow = document.getElementById(selectedSite)
    // windowWidth < 800 ? displayWindow.scrollIntoView() : indexWindow.scrollIntoView(true)
  }, [selectedSite])

  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.siteDisplay}>
        <div className={styles.sitePic}>
          <Image
            id={`display-${selectedSite}`}
            src={siteDetails[selectedSite]?.sitePic}
            priority
            objectFit="contain"
          />
        </div>
      </div>
      <div id="siteIndex" className={styles.siteIndex}>
        {Object.keys(siteDetails).map((key) => {
          return (
            <div className={styles.sitePic} onClick={selectSite} key={key}>
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