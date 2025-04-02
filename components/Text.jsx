import styles from "./Text.module.css";

export default function Text({text, className}) {
    return (
        <p className={`${styles.text} ${className}`}>{text}</p>
    );
}