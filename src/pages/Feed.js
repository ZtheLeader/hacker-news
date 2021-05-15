const Feed = () => {
  return (
    <div className="main-wrapper">
      <header>
        <div className="nav">
          <img src={require("../assets/images/hackernews.svg").default} alt="hackernews-logo" />
        </div>
      </header>
      <main>
        <div className="listing-wrapper">
          <div className="row">
            <div className="col-sm-12">
              <div className="">
                1
              </div>
              <div className="">
                2
              </div>
              <div className="">
                3
              </div>
            </div>
          </div>
        </div>

      </main>
      <footer>
        <div className="footer-wrapper text-center">
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
