import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Hero({title}) {
    return (
        <div className="w-100p bc-lg br-50px">
            <div className="w-100p h-100p c-w bc-f o-80 h-462px br-50px pi-255px d-f pt-150px">
                <div className="d-f fd-c">
                    <h2 className="fs-5r">{title}</h2>
                    <div className="d-f ai-c fs-112r g-15px">
                        <Link href={"/"}>Home</Link>
                        <FontAwesomeIcon icon={faAngleRight} className="fs-1r"/>
                        <Link href={"#"}>{title}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}