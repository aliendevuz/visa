import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function OutlineButton({text, url, isDark = false}) {
    return (
        <Link href={url}>
            <div className={`pb-20px pi-30px br-50px fs-09r fw-5 ff-b b-1px-s-l ${isDark ? "c-f" : "c-w"}`}>
                <p>{text}</p>
            </div>
        </Link>
    );
}