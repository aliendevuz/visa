import styles from "./Hero.module.css";
import D1 from "./D1";
import Path from "./Path";

export default function Hero({ title }) {
  return (
    <div className={styles.container}>
      <D1 text={title} />
      <Path path={title} />
    </div>
  );
}