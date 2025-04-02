import styles from "./SearchBar.module.css";

export default function SearchBar({id, placeholder}) {
  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          className={styles.input}
        />
        <button className={styles.button}>
          <img src="search.svg" alt="Search" />
        </button>
      </div>
    </div>
  );
}
