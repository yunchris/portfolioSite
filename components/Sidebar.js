import Image from "next/image"
import styles from "../styles/Sidebar.module.css";
import Christopher from "../components/svg/Christopher";
import Yun from "../components/svg/Yun";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

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
        <div>ABOUT</div>
        <div>PORTFOLIO</div>
        <div>CONTACT</div>
      </div>
      <div className={styles.footer}>
        <FaGithub />
        <FaLinkedin />
        <HiOutlineMail />
      </div>
    </div>
  );
}
