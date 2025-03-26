import LeftSide from "./LeftSide";
import RightSide from "./RightSide";``

export default function StoryDetails({title}) {
    return (
        <div className="mt-100px mbt-120px d-f g-60px">
            <LeftSide />
            <RightSide />
        </div>
    );
}