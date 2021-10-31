import Image from "next/image"
import styles from "../styles/About.module.css";
import {HiOutlineDownload} from 'react-icons/hi'

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.icons}>
        <i className="devicon-javascript-plain colored" />
        <i className="devicon-nodejs-plain colored" />
        <i className="devicon-react-original-wordmark colored" />
        <i className="devicon-nextjs-original" />
        <i className="devicon-typescript-plain colored" />
        <i className="devicon-ruby-plain-wordmark colored" />
        <i className="devicon-mysql-plain-wordmark colored" />
        <i className="devicon-postgresql-plain-wordmark colored" />
        <i className="devicon-mongodb-plain-wordmark colored" />
        <i className="devicon-jquery-plain-wordmark colored" />
        <i className="devicon-webpack-plain colored" />
        <i className="devicon-html5-plain-wordmark colored" />
        <i className="devicon-css3-plain-wordmark colored" />
        <i className="devicon-sass-original colored" />
        <i className="devicon-chrome-plain-wordmark colored" />
        <i className="devicon-heroku-line-wordmark colored" />
        <i className="devicon-git-plain colored" />
        <i className="devicon-amazonwebservices-original colored" />
        <i className="devicon-visualstudio-plain colored" />
        <i className="devicon-wordpress-plain" />
      </div>
      <div className={styles.twoColumn}>
        <div className={styles.greeting}>
          <div className={styles.greetHeader}>
            Hi. I'm Chris. Welcome to my site.
          </div>
          <div className={styles.profile}>
            <Image
              src="/profile.jpeg"
              width="150px"
              height="150px"
              objectFit="contain"
            />
          </div>
          <div className={styles.greetHeader}>
            I am...
          </div>
        </div>
        <a href="/Christopher_Yun_Resume.pdf" download target="_blank">
          <div className={styles.resume}>
            <HiOutlineDownload />
            RESUME
          </div>
        </a>
      </div>
    </div>
  );
}
