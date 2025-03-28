import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ArrowButton from "./ArrowButton";

export default function Nav() {
    return (
        <nav className="d-f w-100p mb-30px jc-sb ai-c">
            <Link href={"/"} className="logo d-f g-20px ai-c">
                <img src="logo.svg" alt="logo" />
                <h2 className="ff-b fw-b fs-2r">RouteX</h2>
            </Link>
            <div>
                <ul className="d-f g-30px lst-n fw-b fs-1r">
                    <li className="d-f g-5px ai-c"><div>HOME</div><FontAwesomeIcon icon={faAngleDown} className="fs-06r" /></li>
                    <li className="d-f g-5px ai-c"><div>ABOUT US</div><FontAwesomeIcon icon={faAngleDown} className="fs-06r" /></li>
                    <li className="d-f g-5px ai-c"><div>SERVICES</div><FontAwesomeIcon icon={faAngleDown} className="fs-06r" /></li>
                    <li className="d-f g-5px ai-c"><div>PROJECTS</div><FontAwesomeIcon icon={faAngleDown} className="fs-06r" /></li>
                    <li className="d-f g-5px ai-c"><div>BLOG</div><FontAwesomeIcon icon={faAngleDown} className="fs-06r" /></li>
                    <li className="d-f g-5px ai-c"><div>PAGE</div><FontAwesomeIcon icon={faAngleDown} className="fs-06r" /></li>
                    <li className="d-f g-5px ai-c"><div>CONTACT</div><FontAwesomeIcon icon={faAngleDown} className="fs-06r" /></li>
                </ul>
            </div>
            <ArrowButton text="Get An Appointment" url="#" />
        </nav>
    );
}