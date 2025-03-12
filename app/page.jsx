import BigCard from "@/components/BigCard";
import Cards from "@/components/Cards";
import Nav1 from "@/components/Nav1";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mxw-1440px mi-a">
      
      <Link href={"/page"}>Open Page</Link>
      <BigCard />
      <Cards />
    </div>
  );
}
