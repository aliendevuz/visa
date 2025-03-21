import BigCard from "@/components/BigCard";
import Cards from "@/components/Cards";
import Nav from "@/components/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mxw-1800px mi-a">
      <BigCard />
      <Cards />
      <Link href={"/page"}>Open Page</Link>
    </div>
  );
}
