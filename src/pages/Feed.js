//** React Imports
import { useEffect, useState } from "react";

//** Components
import Header from "../Components/Header";
import FeedBody from "../Components/FeedBody";
import Footer from "../Components/Footer";

//** API
import { getStoryIds } from "../api/stories";

const Feed = () => {
  // State
  const [storyIds, setStoryIds] = useState([])
  const [storiesType, setStoriesType] = useState('new')
  const [currentPage, setCurrentPage] = useState(1)
  // Constants
  const storiesPerPage = 5  

  // Methods
  /**
   * Creates and returns a chunked array based on currentPage and storiesPerPage
   * to be used for frontend based pagination as API doesn't give paginated response
   * 
   * @returns Array
   */
  const getCurrentChunk = () => {
    const indexOfLastPostIds = currentPage * storiesPerPage;
    const indexOfFirstPostIds = indexOfLastPostIds - storiesPerPage;
    setCurrentPage(currentPage + 1)
    const currentPostIds = storyIds.slice(indexOfFirstPostIds, indexOfLastPostIds);
    return currentPostIds
  }

  // Effects
  useEffect(() => {
    getStoryIds(storiesType).then(storyIds => {
      setStoryIds(storyIds)
    })
  }, [])

  useEffect(() => {
    console.log(getCurrentChunk())
  }, [storiesType])

  // Template
  return (
    <div className="main-wrapper">
      <Header />

      <FeedBody
        setStoryTypeHandler={setStoriesType}
        storiesType={storiesType}
      />

      <Footer />
    </div>
  )
}

export default Feed
