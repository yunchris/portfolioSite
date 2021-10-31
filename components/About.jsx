import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.greeting}></div>
      <div className={styles.twoColumn}>
        <div className={styles.icons}>
          <i className="devicon-javascript-plain colored" />
          <i className="devicon-nodejs-plain colored" />
          <i className="devicon-react-original-wordmark colored" />
          <i className="devicon-nextjs-original" />
          <i className="devicon-typescript-plain colored" />
          <i className="devicon-ruby-plain-wordmark colored" />
          <i className="devicon-rails-plain-wordmark colored" />
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
        <div className={styles.resume}></div>
      </div>
    </div>
  );
}
