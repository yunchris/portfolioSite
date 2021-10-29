import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'

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

      <main>
        <Sidebar />
      </main>
    </div>
  );
}
