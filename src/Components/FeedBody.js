import StoryTypeFilters from "./StoryTypeFilters";
import Story from "./Story";
const FeedBody = ({ setStoryTypeHandler }) => {
  return (
    <main>
      <StoryTypeFilters
      setStoryTypeHandler={setStoryTypeHandler}
      />
      <div className="listing-wrapper">
        <div className="row">
          <div className="col-sm-12">
            <Story/>
            <Story/>
            <Story/>
            <Story/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default FeedBody
