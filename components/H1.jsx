import styles from "./H1.module.css";

export default function H1({ text, className }) {
  return <h1 className={`${styles.header1} ${className}`}>{text}</h1>;
}
