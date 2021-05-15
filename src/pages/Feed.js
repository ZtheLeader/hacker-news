//** React Imports
import { useEffect, useState } from "react";

//** Components
import Header from "../Components/Header";
import FeedBody from "../Components/FeedBody";
import Footer from "../Components/Footer";

//** API
import { getStoryIds } from "../api/stories";

const Feed = () => {
  const [storyIds, setStoryIds] = useState([])
  const [storiesType, setStoriesType] = useState('new')

  useEffect(() => {
    getStoryIds(storiesType).then(storyIds => {
      setStoryIds(storyIds)
    })
  }, [])

  useEffect(() => {
    getStoryIds(storiesType).then(storyIds => {
      console.log(storiesType)
      setStoryIds(storyIds)
    })
  }, [storiesType])

  return (
    <div className="main-wrapper">
      <Header />

      <FeedBody
        setStoryTypeHandler={setStoriesType}

      />

      <Footer />
    </div>
  )
}

export default Feed
