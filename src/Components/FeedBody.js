import StoryTypeFilters from "./StoryTypeFilters";
import Story from "./Story";
const FeedBody = ({ setStoryTypeHandler, storiesType }) => {
  return (
    <main>
      <StoryTypeFilters
        setStoryTypeHandler={setStoryTypeHandler}
        storiesType={storiesType}
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
