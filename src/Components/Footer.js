import LoadMore from "./LoadMore";
const Footer = ({ loadMore, loading, totalStories, loadedStories }) => {
  return (
    <footer>
      <LoadMore
        handleLoadMore={loadMore}
        loading={loading}
        totalStories={totalStories}
        loadedStories={loadedStories}
     />
      <div className="footer-logo">
        <img src={require("../assets/images/hackernews-footer.svg").default} alt="footer logo" />
      </div>
    </footer>
  )
}

export default Footer
