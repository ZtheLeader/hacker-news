/**
 * Takes the story type and return the story IDs
 * 
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

/**
 * Takes a chunk of stories, maps through them to get their info,
 * resolves the promise and then sends back the response in the form of array
 * 
 * @param {array} storyIds 
 * @returns array
 */
export const getStoriesData = async storyIds => {
  const requestOptions = {
    method: 'GET',
  };
  const stories = storyIds.map(postId => fetch(`https://hacker-news.firebaseio.com/v0/item/${postId}.json`, requestOptions)
    .then(response => response.json())
    .catch(error => console.error(error)))

  const storiesDataResponse = await Promise.all(stories);
  return storiesDataResponse
}
