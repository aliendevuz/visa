import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        <img src="logo.svg" alt="logo" />
        <h2 className={styles.name}>RouteX</h2>
      </Link>
      <div className={styles.drawer}>
        <FontAwesomeIcon icon={faXmark} className={styles.x}/>
        <ul className={styles.list}>
          <li>
            <div>HOME</div>
            <FontAwesomeIcon icon={faAngleDown} className={styles.small} />
          </li>
          <li>
            <div>ABOUT US</div>
            <FontAwesomeIcon icon={faAngleDown} className={styles.small} />
          </li>
          <li>
            <div>SERVICES</div>
            <FontAwesomeIcon icon={faAngleDown} className={styles.small} />
          </li>
          <li>
            <div>PROJECTS</div>
            <FontAwesomeIcon icon={faAngleDown} className={styles.small} />
          </li>
          <li>
            <div>BLOG</div>
            <FontAwesomeIcon icon={faAngleDown} className={styles.small} />
          </li>
          <li>
            <div>PAGE</div>
            <FontAwesomeIcon icon={faAngleDown} className={styles.small} />
          </li>
          <li>
            <div>CONTACT</div>
            <FontAwesomeIcon icon={faAngleDown} className={styles.small} />
          </li>
        </ul>
        <Link
          href="#"
          className={`${styles.button} ${styles.color_white} ${styles.mobile}`}
        >
          <p>Get An Appointment</p>
          <FontAwesomeIcon icon={faArrowRight} className={styles.size} />
        </Link>
      </div>
      <Link href="#" className={`${styles.button} ${styles.color_white}`}>
        <p>Get An Appointment</p>
        <FontAwesomeIcon icon={faArrowRight} className={styles.size} />
      </Link>
    </nav>
  );
}
