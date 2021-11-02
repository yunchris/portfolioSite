import Image from "next/image"
import styles from "../styles/About.module.css";
import { FiDownload } from "react-icons/fi";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.icons}>
        <i className="devicon-javascript-plain colored" />
        <i className="devicon-nodejs-plain colored" />
        <i className="devicon-typescript-plain colored" />
        <i className="devicon-ruby-plain-wordmark colored" />
        <i className="devicon-react-original-wordmark colored" />
        <i className="devicon-nextjs-original" />
        <i className="devicon-jquery-plain-wordmark colored" />
        <i className="devicon-mysql-plain-wordmark colored" />
        <i className="devicon-postgresql-plain-wordmark colored" />
        <i className="devicon-mongodb-plain-wordmark colored" />
        <i className="devicon-html5-plain-wordmark colored" />
        <i className="devicon-css3-plain-wordmark colored" />
        <i className="devicon-git-plain colored" />
        <i className="devicon-webpack-plain colored" />
        <i className="devicon-heroku-line-wordmark colored" />
        <i className="devicon-amazonwebservices-original colored" />
        <i className="devicon-visualstudio-plain colored" />
        <i className="devicon-wordpress-plain" />
      </div>
      <div className={styles.aboutContent}>
        <div className={styles.aboutTop}>
          <div id="aboutChris" className={styles.greeting}>
            <div className={styles.greetHeader}>
              Hi. I&apos;m Chris. Welcome to my site.
            </div>
            <div className={styles.profile}>
              <Image
                src="/profile.jpeg"
                layout="fill"
                objectFit="contain"
                alt="profile"
              />
            </div>
            <div className={styles.rotatingWords}>SOFTWARE ENGINEER</div>
          </div>
          <div className={styles.resume}>
            <a href="/Christopher_Yun_Resume.pdf" download target="_blank">
              <FiDownload style={{ paddingTop: "5px" }} />
              RESUME
            </a>
          </div>
        </div>
        <div className={styles.aboutBottom}>
          <div className={styles.aboutCopy}>
            <p>
              I began my career by duct-taping bits of code together and starting
              my first business while still in college. Since then, my goal has
              remained unchanged:
            </p>
            <p>- IMPROVE DAILY AT CREATING SOLUTIONS -</p>
            <p style={{marginBottom: '0rem'}}>
              Since 2006, I have honed my programming chops, enjoyed learning
              new languages & frameworks and have actively sought interesting 
              projects that could benefit from my experience.  My work history 
              entails startups, project management, marketing, branding and design.
              I strive daily to improve my domain of expertise and optimize.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
