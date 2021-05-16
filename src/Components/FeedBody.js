import StoryTypeFilters from "./StoryTypeFilters";
const FeedBody = ({ stories, setStoryTypeHandler, storiesType }) => {
  return (
    <main>
      <StoryTypeFilters
        onChangeStoryType={setStoryTypeHandler}
        storiesType={storiesType}
      />
      <div className="listing-wrapper">
        <div className="row">
          <div className="col-sm-12">
            {stories}
          </div>
        </div>
      </div>
    </main>
  )
}

export default FeedBody
