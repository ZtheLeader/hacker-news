/**
 * Takes the story type and return the story IDs
 * @param {string} storiesType 
 * @returns 
 */
export const getStoryIds = async storiesType => {
  const requestOptions = {
    method: 'GET',
  };

  const response = await fetch(`https://hacker-news.firebaseio.com/v0/${storiesType}stories.json`, requestOptions)
    .then(response => response)
    .catch((error) => {
    console.error(error)
  })
  const storyIds = await response.json()
  return storyIds
}

