import styles from "./NotFound.module.css";
import LinkButton from "../LinkButton";
import H1 from "../H1";
import Text from "../Text";
import SearchBar from "./SearchBar";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <H1
        className={styles.header}
        text={"Oopps!Check Your Connection and Try Again"}
      />
      <Text
        className={styles.title}
        text={`Eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra`}
      />
      <SearchBar placeholder={"Search Here"} id={"search"}/>
      <LinkButton title={"Back to Home"} href={"/"} />
    </div>
  );
}
