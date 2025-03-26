import H4 from "../H4";
import GrayP from "../GrayP";

export default function StoryTitles() {
  return (
    <div className="d-f fd-c g-16px">
      <GrayP
        classes="mxw-630px"
        text={
          "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis  viverra laoreet augue mattis fmentum ullamco rper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamc orper posuere viverra .Aliquam eros justo, posu Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobo rtis  viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere"
        }
      />
      <p className="mxw-630px"></p>
      <div className="d-f g-20px">
        <H4 text={"Visa Applied:"} />
        <GrayP text={"Visa Special"} />
      </div>
      <div className="d-f g-20px">
        <H4 text={"Visa Type:"} />
        <GrayP text={"10 years +"} />
      </div>
      <div className="d-f g-20px">
        <H4 text={"Approval:"} />
        <GrayP text={"adbs@gmail.com"} />
      </div>
    </div>
  );
}
