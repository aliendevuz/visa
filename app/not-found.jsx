import Hero from "@/components/Hero";
import Link from "next/link";

export default function NotFount() {
  return (
    <div className="d-f fd-c ai-c">
      <Hero title={"404 Error"} />
      <div className="h-100px"></div>
      <div className="ta-c d-f fd-c ai-c">
        <h1 className="fs-312r">
          Oopps!Check Your Connection<br></br>and Try Again
        </h1>
        <div className="h-20px"></div>
        <p className="fw-3 c-fg">
          Eros justo, posuere loborti viverra laoreet matti ullamcorper posuere
          viverra .Aliquam eros justo,<br></br>posuere lobortis, viverra laoreet
          augue mattis fermentum ullamcorper viverra
        </p>
        <div className="h-40px"></div>
        <div className="mxw-630px w-100p">
          <div className="d-f g-10px bc-ba br-40px jc-sb ai-c fw-2 w-100p">
            <input
              type="text"
              id="search"
              placeholder="Search Here"
              className="clear-input2 fs-1r ml-20px w-100p"
            />
            <button className="d-f jc-c ai-c h-60px ar-1-1 br-50p b-0 bc-l">
              <img src="search.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="h-60px"></div>
        <Link href={"/"} className="bc-l b-0 pb-20px pi-30px br-50px fs-09r fw-5 ff-b d-f g-10px c-w">
          Back to Home
        </Link>
      </div>
      <div className="h-80px"></div>
      <img src="Frame.png" alt="Not found" />
      <div className="h-120px"></div>
    </div>
  );
}
