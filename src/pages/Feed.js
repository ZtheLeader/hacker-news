//** React Imports
import { useEffect, useState } from "react";

//** Components
import Header from "../Components/Header";
import FeedBody from "../Components/FeedBody";
import Footer from "../Components/Footer";

//** API
import { getStoryIds } from "../api/stories";

const Feed = () => {
  const [storyType, setStoryType] = useState('new')

  useEffect(() => {
    getStoryIds(storyType).then(r => console.log(r))
  }, [])

  return (
    <div className="main-wrapper">
      <Header />

      <FeedBody />

      <Footer />
    </div>
  )
}

export default Feed
