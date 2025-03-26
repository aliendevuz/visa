import styles from "./D1.module.css";

export default function D1({text}) {
    return (
        <h2 className={styles.header}>{text}</h2>
    );
}