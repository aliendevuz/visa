import Hero from "@/components/hero/Hero";
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <Link href={"/"}>Hello world!</Link>
            <Hero title="Success Story"/>
        </div>
    );
}