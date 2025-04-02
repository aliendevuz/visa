import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./ArrowButton.module.css";

export default function ArrowButton({text, url, className, isDark = false}) {
    return (
        <Link href={url} className={`${className} ${styles.button} ${isDark ? styles.color_foreground : styles.color_white}`}>
            <p>{text}</p>
            <FontAwesomeIcon icon={faArrowRight} size="16px" />
        </Link>
    );
}