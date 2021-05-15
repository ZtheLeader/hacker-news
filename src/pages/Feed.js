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
  

  // Methods

  // Effects
  useEffect(() => {
    getStoryIds(storiesType).then(storyIds => {
      setStoryIds(storyIds)
    })
  }, [])

  useEffect(() => {
    getStoryIds(storiesType).then(storyIds => {
      setStoryIds(storyIds)
    })
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
