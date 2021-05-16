//** React Imports
import { useEffect, useState } from "react";

//** Components
import Header from "../Components/Header";
import FeedBody from "../Components/FeedBody";
import Footer from "../Components/Footer";
import Story from "../Components/Story";

//** API
import { getStoryIds, getStoriesData } from "../api/stories";

//** Utils
import TimeAgo from 'react-timeago'
import { formatUnixTime, formatter } from "../utils/utils";

const Feed = () => {
  // State
  const [storyIds, setStoryIds] = useState([])
  const [storiesType, setStoriesType] = useState('new')
  const [stories, setStories] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  
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
    const indexOfLastStoriesIds = currentPage * storiesPerPage;
    const indexOfFirstStoriesIds = indexOfLastStoriesIds - storiesPerPage;
    setCurrentPage(currentPage + 1)
    const currentStoryIds = storyIds.slice(indexOfFirstStoriesIds, indexOfLastStoriesIds);
    return currentStoryIds
  }

  /**
   * Takes array of chunked storyIds, fetches their detail from getStoriesData 
   * and updates/ appends the setStories with newly created Stories.
   * 
   * @param {array} currentStoriesChunk 
   */
  const paginateStories = async currentStoriesChunk => {
    setLoading(true)
    const paginatedStories = await getStoriesData(currentStoriesChunk);
    const currentStoriesData = paginatedStories.map(story => (
      <Story
        key={story?.id}
        heading={story?.title}
        content={story?.type === 'job' ? story?.text : story?.url} // news don't have text in them
        time={<TimeAgo date={formatUnixTime(story?.time)} formatter={formatter} />}
        commentsCount={story?.type === 'job' ? '' : story?.descendants} // jobs don't have comments in them
        storyType={story?.type}
      ></Story>
    ))
    setStories([...stories, ...currentStoriesData])
    setLoading(false)
  }

  /**
   * Reuses the getCurrentChunk and paginateStories to Load more posts
   */
  const handleLoadMore = () => {
    const currentStoriesChunk = getCurrentChunk()
    paginateStories(currentStoriesChunk)
  }

  // Effects
  useEffect(() => {
    if (stories.length === 0) {
      setLoading(true)
      getStoryIds(storiesType).then((storyIds) => {
        setStoryIds(storyIds)
        setLoading(false)
      })
    }
  }, [])

  useEffect(() => {
    if (stories.length === 0  && currentPage === 1) {
      const currentStoriesChunk = getCurrentChunk();
      paginateStories(currentStoriesChunk)
    }
  }, [storyIds])

  useEffect(() => {
    setCurrentPage(1)
    setStories([])
    setLoading(true)
    getStoryIds(storiesType).then((storyIds) => {
      setStoryIds(storyIds)
      setLoading(false)
    })
  }, [storiesType])

  // Template
  return (
    <div className="main-wrapper">
      <Header />

      <FeedBody
        setStoryTypeHandler={setStoriesType}
        storiesType={storiesType}
        stories={stories}
      />

      <Footer
        loadMore={handleLoadMore}
        loading={loading}
        totalStories={storyIds.length}
        loadedStories={stories.length}
      />
    </div>
  )
}

export default Feed
