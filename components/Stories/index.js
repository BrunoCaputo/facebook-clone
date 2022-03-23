import { STORIES } from "./constants/stories-data";
import { StoryCard } from "../StoryCard";

export function Stories() {
  const stories = STORIES;

  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}
