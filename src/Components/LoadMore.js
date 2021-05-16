/* Hides the Load More button when there are no more stories */
const LoadMore = ({ handleLoadMore, loading, totalStories, loadedStories }) => {
  return (
    <>
      {loadedStories !== totalStories &&
        <div className="footer-wrapper text-center">
          <button className="btn btn-success" onClick={handleLoadMore}>{loading ? 'Loading..' : `Load More (${loadedStories}/${totalStories})`}</button>
        </div>}
    </>
  )
}

export default LoadMore
