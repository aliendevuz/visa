import BigCard from "@/components/BigCard";
import Cards from "@/components/Cards";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <BigCard />
      <Cards />
      <Link href={"/about_us"}>Open Page</Link>
      <Link href={"/about_us2"}>Open Page</Link>
    </div>
  );
}
