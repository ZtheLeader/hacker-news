const Feed = () => {
  return (
    <div className="main-wrapper">
      <header>
        <div className="nav">
          <img src={require("../assets/images/hackernews.svg").default} alt="hackernews-logo" />
        </div>
      </header>
      <main>
        <div class="data-filter">
          <span><button class="btn btn-success">New</button></span>
          <span><button class="btn btn-default">Past</button></span>
        </div>
        <div className="listing-wrapper">
          <div className="row">
            <div className="col-sm-12">

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Lorem Ipsum is simply dummy text.</h5>
                  <p className="card-text truncate">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled</p>
                  <p className="card-footer">
                    <span>1 min ago</span>
                    <span>50 Comments</span>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Lorem Ipsum is simply dummy text.</h5>
                  <p className="card-text truncate">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled</p>
                  <p className="card-footer">
                    <span>1 min ago</span>
                    <span>50 Comments</span>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Lorem Ipsum is simply dummy text.</h5>
                  <p className="card-text truncate">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled</p>
                  <p className="card-footer">
                    <span>1 min ago</span>
                    <span>50 Comments</span>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Lorem Ipsum is simply dummy text.</h5>
                  <p className="card-text truncate">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled</p>
                  <p className="card-footer">
                    <span>1 min ago</span>
                    <span>50 Comments</span>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Lorem Ipsum is simply dummy text.</h5>
                  <p className="card-text truncate">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled</p>
                  <p className="card-footer">
                    <span>1 min ago</span>
                    <span>50 Comments</span>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Lorem Ipsum is simply dummy text.</h5>
                  <p className="card-text truncate">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled</p>
                  <p className="card-footer">
                    <span>1 min ago</span>
                    <span>50 Comments</span>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Lorem Ipsum is simply dummy text.</h5>
                  <p className="card-text truncate">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled</p>
                  <p className="card-footer">
                    <span>1 min ago</span>
                    <span>50 Comments</span>
                  </p>
                </div>
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
