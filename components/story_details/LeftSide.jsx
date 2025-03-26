import StoryTitles from "./StoryTitles";
import H1 from "../H1";
import ArrowButton from "../ArrowButton";
import OutlineButton from "../OutlineButton";

export default function LeftSide() {
  return (
    <div className="d-f fd-c ai-fs g-30px">
      <H1 text={"Visa  Got Approved for Eygpt "} />
      <img src="quote.svg" alt="Quotes" />
      <StoryTitles />
      <div className="d-f g-30px">
        <ArrowButton text={"Apply For Visa"} url={"#"} isDark={true} />
        <OutlineButton
          text={"Read More Stories"}
          url={"/success_story"}
          isDark={true}
        />
      </div>
    </div>
  );
}
