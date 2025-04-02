import Link from "next/link";
import styles from "./LinkButton.module.css";

export default function LinkButton({ title, href }) {
  return (
    <Link href={href} className={styles.button}>
      {title}
    </Link>
  );
}
