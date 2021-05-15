const StoryTypeFilters = ({ setStoryTypeHandler, storiesType }) => {
  return (
    <div className="data-filter">
      <span><button className={"btn " + (storiesType === 'new' ? "btn-success" : "btn-default")} onClick={() => setStoryTypeHandler('new')}>New</button></span>
      <span><button className={"btn " + (storiesType === 'past' ? "btn-success" : "btn-default")} onClick={() => setStoryTypeHandler('past')}>Past</button></span>
    </div>
  )
}

export default StoryTypeFilters
