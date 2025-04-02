import Hero from "@/components/hero/Hero";
import styles from "./not-found.module.css";
import NotFound from "@/components/not_found/NotFound";

export default function NotFount() {
  return (
    <div className={styles.container}>
      <Hero title={"404 Error"} />
      <NotFound />
      <img src="404.png" alt="Not found" />
    </div>
  );
}
