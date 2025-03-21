import Link from "next/link";
import { faFacebookF, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function () {
  return (
    <footer className="w-100p bc-b2 mt-a p-r d-f fd-c c-w ai-c">
      <img
        src="map.svg"
        alt="world map"
        className="p-a bm-0 l-52p t-tx--50p zi-0"
      />
      <div className="p-r zi-1 w-100p">
        <div className="mxw-1280px w-100p mi-315px">
          <div className="d-f jc-sb mb-30px">
            <div className="d-f ai-c g-20px mb-20px">
              <div className="w-80px ar-1-1 bc-l br-50p o-h d-f jc-c ai-c">
                <img src="currency.svg" alt="Currency" />
              </div>
              <h2 className="fs-30px fw-5">
                Need Any Support For<br></br>Tour And Visa?
              </h2>
            </div>
            <div className="bc-lc w-1px"></div>
            <div className="d-f ai-c g-20px mb-20px">
              <div className="w-80px ar-1-1 bc-l br-50p o-h d-f jc-c ai-c">
                <img src="flight.svg" alt="Flight" />
              </div>
              <h2 className="fs-30px fw-5">
                Are You Ready For Get<br></br>Started Travelling?
              </h2>
            </div>
          </div>
        </div>
        <div className="bc-lc w-100p h-1px"></div>
        <div className="mxw-1280px w-100p mi-315px mb-84px d-f jc-sb">
          <div className="d-f fd-c g-40px">
            <Link href={"/"} className="logo d-f g-20px ai-c">
              <img src="logo_colorized.svg" alt="logo" />
              <h2 className="ff-b fw-b fs-18r">RouteX</h2>
            </Link>
            <p className="fw-2 lh-2">Corporate business typically refers to<br></br>large-scale mansola it enterprises or<br></br>organizat</p>
            <div className="d-f g-25px">
              <Link href={"https://facebook.com"}><FontAwesomeIcon icon={faFacebookF} size="15px" /></Link>
              <Link href={"https://instagram.com"}><FontAwesomeIcon icon={faInstagram} size="15px" /></Link>
              <Link href={"https://x.com"}><FontAwesomeIcon icon={faXTwitter} size="15px" /></Link>
              <Link href={"https://linkedin.com"}><FontAwesomeIcon icon={faLinkedin} size="15px" /></Link>
            </div>
          </div>

          <div className="d-f fd-c g-40px">
            <h3 className="fw-5 fs-14r">Services</h3>
            <div className="d-f fd-c g-20px">
              <div className="d-f g-15px">
                <FontAwesomeIcon icon={faCheck} className="c-l" />
                <p className="fs-1r fw-2">Mistakes To Avoid</p>
              </div>
              <div className="d-f g-15px">
                <FontAwesomeIcon icon={faCheck} className="c-l" />
                <p className="fs-1r fw-2">Your Startup</p>
              </div>
              <div className="d-f g-15px">
                <FontAwesomeIcon icon={faCheck} className="c-l" />
                <p className="fs-1r fw-2">Knew About Fonts</p>
              </div>
              <div className="d-f g-15px">
                <FontAwesomeIcon icon={faCheck} className="c-l" />
                <p className="fs-1r fw-2">Knew About Fonts</p>
              </div>
            </div>
          </div>
          
          <div className="d-f fd-c g-40px">
            <h3 className="fw-5 fs-14r">Useful Link</h3>
            <div className="d-f fd-c g-20px">
              <div className="d-f g-15px">
                <FontAwesomeIcon icon={faCheck} className="c-l" />
                <p className="fs-1r fw-2">Latest News</p>
              </div>
              <div className="d-f g-15px">
                <FontAwesomeIcon icon={faCheck} className="c-l" />
                <p className="fs-1r fw-2">Careers</p>
              </div>
              <div className="d-f g-15px">
                <FontAwesomeIcon icon={faCheck} className="c-l" />
                <p className="fs-1r fw-2">General Inquiries</p>
              </div>
              <div className="d-f g-15px">
                <FontAwesomeIcon icon={faCheck} className="c-l" />
                <p className="fs-1r fw-2">Case Studies</p>
              </div>
            </div>
          </div>
          
          <div className="d-f fd-c g-35px">
            <h3 className="fw-5 fs-14r">Subscribe Our Newsletter</h3>
            <p className="fw-2 lh-2">Corporate business typically refers to<br></br>large-scale mansola it.</p>
            <div className="d-f g-10px bc-ib br-40px jc-sb ai-c b-1px-s-w20 fw-2">
              <input type="email" id="email" placeholder="Enter Email" className="clear-input fs-1r ml-20px"/>
              <button className="d-f jc-c ai-c w-58px ar-1-1 br-50p b-0 bc-l">
                <img src="send.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="bc-lc w-100p h-1px"></div>
        <div className="mxw-1280px w-100p mi-315px mb-34px d-f jc-sb o-80 fw-2">
          <p>© Yoursitename 2024 | All Rights Reserved</p>
          <div className="d-f g-40px">
            <Link href={"#"}>Trams & Condition</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
