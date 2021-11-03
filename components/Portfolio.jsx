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

export default function Portfolio() {
  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.sitePic}>
        <Image src={onePager} alt="onePager" priority />
      </div>
      <div className={styles.sitePic}>
        <Image src={otmiri} alt="otmiri" priority />
      </div>
      <div className={styles.sitePic}>
        <Image src={mindscape} alt="mindscape" priority />
      </div>
      <div className={styles.sitePic}>
        <Image src={spaceball} alt="spaceball" priority />
      </div>
      <div className={styles.sitePic}>
        <Image src={atherton} alt="atherton" priority />
      </div>
      <div className={styles.sitePic}>
        <Image src={bestfresh} alt="bestfresh" priority />
      </div>
      <div className={styles.sitePic}>
        <Image src={vapenvibes} alt="vapenvibes" priority />
      </div>
      <div className={styles.sitePic}>
        <Image src={nudesushi} alt="nudesushi" priority />
      </div>
    </div>
  );
}