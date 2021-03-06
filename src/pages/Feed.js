/* eslint-disable react-hooks/exhaustive-deps */
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
  //** State
  const [storyIds, setStoryIds] = useState([])
  const [storiesType, setStoriesType] = useState('new')
  const [stories, setStories] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  
  //** Constants
  const storiesPerPage = 10

  //** Methods

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
        title={story?.title}
        body={story?.type === 'job' ? story?.text : story?.url} // news don't have text in them
        time={<TimeAgo date={formatUnixTime(story?.time)} formatter={formatter} />}
        commentsCount={story?.type === 'job' ? '' : story?.descendants} // jobs don't have comments in them
        storyType={story?.type}
      ></Story>
    ))
    setStories([...stories, ...currentStoriesData])
    setLoading(false)
  }

  /**
   * Reuses the getCurrentChunk and paginateStories to Load More posts
   */
  const handleLoadMore = () => {
    const currentStoriesChunk = getCurrentChunk()
    paginateStories(currentStoriesChunk)
  }

  //** Effects
  // To keep the code modular, structured and clear separation of concerns,
  // I've used separate Effects for each case and in fact, this is what React official docs suggests.

  /**
   * Runs on initial Render to get the storyIds based on storiesType
   */
  useEffect(() => {
    if (stories.length === 0) {
      setLoading(true)
      getStoryIds(storiesType).then((storyIds) => {
        setStoryIds(storyIds)
        setLoading(false)
      })
    }
  }, [])

  /**
   * As the storyIds update, it gets the paginated stories
   */
  useEffect(() => {
    if (stories.length === 0  && currentPage === 1) {
      const currentStoriesChunk = getCurrentChunk();
      paginateStories(currentStoriesChunk)
    }
  }, [storyIds])

  /**
   * Whenever the storiesType changes, it gets the first stories based on storiesPerPage.
   */
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
