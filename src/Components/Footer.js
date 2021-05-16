const Footer = ({ loadMore, loading, totalStories, loadedStories }) => {
  return (
    <footer>
      {/* Hides the Load More button when there are no more stories */}
      {loadedStories !== totalStories &&
        <div className="footer-wrapper text-center">
        <button className="btn btn-success" onClick={loadMore}>{loading ? 'Loading..' : `Load More (${loadedStories}/${totalStories})`}</button>
      </div>}
      <div className="footer-logo">
        <img src={require("../assets/images/hackernews-footer.svg").default} alt="footer logo" />
      </div>
    </footer>
  )
}

export default Footer
