import { useState } from 'react';
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

export default function Home() {
  const [active, setActive] = useState("about");

  return (
    <div id="container">
      <Head>
        <title>Christopher Yun</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta
          name="keywords"
          content="Christopher Yun, Software Engineer, Frontend Developer, Web Developer, Full Stack Engineer, Design, Founder"
        />
      </Head>
      <Sidebar active={active} setActive={setActive} />
      <Content active={active} setActive={setActive} />
    </div>
  );
}
