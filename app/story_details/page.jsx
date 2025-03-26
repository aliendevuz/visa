import Hero from "@/components/hero/Hero";
import StoryDetails from "@/components/story_details/StoryDetails";

export default function Page() {
    return (
        <div className="d-f fd-c ai-c">
            <Hero title="Story Details"/>
            <StoryDetails />
        </div>
    );
}