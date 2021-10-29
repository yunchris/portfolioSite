import Image from "next/image"
import styles from "../styles/Sidebar.module.css";
import Christopher from "../components/svg/Christopher";
import Yun from "../components/svg/Yun";
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Image src="/monkey.svg" layout="fill" objectFit="fill" quality={100} />
      </div>
      <div>
        <Christopher />
      </div>
      <div>
        <Yun />
      </div>
      <div className={styles.navigation}>
        <div className={styles.link}>ABOUT</div>
        <div className={styles.link}>PORTFOLIO</div>
        <div className={styles.link}>CONTACT</div>
      </div>
      <div className={styles.footer}>
        <a href="https://github.com/yunchris" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/christopher-yun/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com/christopher.yun.77" target="_blank">
          <FaFacebookSquare />
        </a>
      </div>
    </div>
  );
}
