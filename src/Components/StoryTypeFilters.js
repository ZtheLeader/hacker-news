const StoryTypeFilters = ({ setStoryTypeHandler }) => {
  return (
    <div className="data-filter">
      <span><button className="btn btn-success" onClick={() => setStoryTypeHandler('new')}>New</button></span>
      <span><button className="btn btn-default" onClick={() => setStoryTypeHandler('past')}>Past</button></span>
    </div>
  )
}

export default StoryTypeFilters
