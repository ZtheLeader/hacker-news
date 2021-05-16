const Footer = ({ loadMore }) => {
  return (
    <footer>
      <div className="footer-wrapper text-center">
        <button className="btn btn-success" onClick={loadMore}>Load More</button>
      </div>
      <div className="footer-logo">
        <img src={require("../assets/images/hackernews-footer.svg").default} alt="footer logo" />
      </div>
    </footer>
  )
}

export default Footer
