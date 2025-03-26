import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ArrowButton({text, url, isDark = false}) {
    return (
        <Link href={url} className={`bc-l b-0 pb-20px pi-30px br-50px fs-09r fw-5 ff-b d-f g-10px ai-c ${isDark ? "c-f" : "c-w"}`}>
            <p>{text}</p>
            <FontAwesomeIcon icon={faArrowRight} size="16px" />
        </Link>
    );
}