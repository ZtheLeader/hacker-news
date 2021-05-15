const Feed = () => {
  return (
    <div className="main-wrapper">
      <header>
        <div className="nav">
          <img src={require("../assets/images/hackernews.svg").default} alt="hackernews-logo" />
        </div>
      </header>
      <main>

      </main>
      <footer>
        <div className="text-center">
          <button className="btn btn-success">Load More</button>
        </div>
        <div className="footer-logo">
          <img src={require("../assets/images/hackernews-footer.svg").default} alt="footer logo" />
        </div>
      </footer>
    </div>
  )
}

export default Feed
