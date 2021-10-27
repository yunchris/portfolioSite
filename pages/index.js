import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Christopher from '../components/Christopher'
import Yun from '../components/Yun'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Christopher Yun</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta
          name="keywords"
          content="Christopher Yun, Software Engineer, Frontend Developer, Web Developer, Full Stack Engineer, Design, Founder"
        />
      </Head>

      <main className={styles.home}>
        <div className={styles.first}>
          <Christopher />
        </div>
        <div className={styles.second}>
          <div className={styles.menu}>
            <div className={styles.about}>
              <div className={styles.menuTextAbout}>about</div>
              <div className={styles.aboutColor} />
            </div>
            <div className={styles.contact}>
              <div className={styles.menuTextContact}>contact</div>
              <div className={styles.contactColor} />
            </div>
            <div className={styles.work}>
              <div className={styles.menuTextWork}>portfolio</div>
              <div className={styles.workColor} />
            </div>
          </div>
          <div className={styles.yun}>
            <Yun />
          </div>
        </div>
      </main>
    </div>
  );
}
