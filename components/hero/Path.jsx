import styles from "./Path.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Path({ path }) {
  return (
    <div className={styles.container}>
      <Link href={"/"}>Home</Link>
      <FontAwesomeIcon icon={faAngleRight} className={styles.icon_size} />
      <Link href={"#"}>{path}</Link>
    </div>
  );
}