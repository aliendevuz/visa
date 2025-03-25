import Hero from "@/components/Hero";
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <Link href={"/"}>Hello world!</Link>
            <Hero title="About Us" path="About Us"/>
        </div>
    );
}