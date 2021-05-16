/**
 * 
 * In the Task detail we're asked to filter `New` and `Top` stories but in Mockup there are New and Past stories.
 * According to the available API: https://github.com/HackerNews/API#new-top-and-best-stories,
 * Only New, Top and Best stories are available to be fetched
 * So I'm implementing New/Top/Best stories to resolve any confusion
 */

const StoryTypeFilters = ({ onChangeStoryType, storiesType }) => {
  return (
    <div className="data-filter">
      <span><button data-testid="new-stories" className={"btn " + (storiesType === 'new' ? "btn-success" : "btn-default")} onClick={() => onChangeStoryType('new')}>New</button></span>
      <span><button data-testid="top-stories" className={"btn " + (storiesType === 'top' ? "btn-success" : "btn-default")} onClick={() => onChangeStoryType('top')}>Top</button></span>
      <span><button className={"btn " + (storiesType === 'best' ? "btn-success" : "btn-default")} onClick={() => onChangeStoryType('best')}>Best</button></span>
    </div>
  )
}

export default StoryTypeFilters
