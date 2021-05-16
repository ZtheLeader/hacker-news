import { render, screen, fireEvent } from '@testing-library/react';
import Feed from "../pages/Feed";
import LoadMore from "../Components/LoadMore";
import StoryTypeFilters from "../Components/StoryTypeFilters";
import Story from "../Components/Story";
import FeedBody from "../Components/FeedBody";


describe("Logos", () => {
  test('Tests if Header Logo renders', () => {
    render(<Feed />);
    const headerLogo = screen.getByAltText(/hackernews-header-logo/i);
    expect(headerLogo).toHaveAttribute('src', 'hackernews.svg');
  });

  test('Tests if Footer Logo renders', () => {
    render(<Feed />);
    const headerLogo = screen.getByAltText(/footer logo/i);
    expect(headerLogo).toHaveAttribute('src', 'hackernews-footer.svg');
  });
});

describe("LoadMore", () => {

  it("Renders Load More button only if totalStories and loadedStories are not equal", () => {
    const loadMoreHandler = jest.fn();
    const { rerender } = render(<LoadMore handleLoadMore={loadMoreHandler} loading={true} totalStories={40} loadedStories={20} />);

    const loadMoreButton = screen.getByTestId('load-more-button')
    expect(loadMoreButton).toBeInTheDocument()

    rerender(<LoadMore handleLoadMore={loadMoreHandler} loading={true} totalStories={40} loadedStories={40} />);

    expect(screen.queryByText('Load More (40/40)')).not.toBeInTheDocument()
  });

  it("Evaluates Load More button text based on loading prop", () => {
    const loadMoreHandler = jest.fn();
    const { rerender } = render(<LoadMore handleLoadMore={loadMoreHandler} loading={true} totalStories={40} loadedStories={20} />);

    expect(screen.getByTestId('load-more-button')).toHaveTextContent('Loading..');

    rerender(<LoadMore handleLoadMore={loadMoreHandler} loading={false} totalStories={40} loadedStories={20} />);
    expect(screen.queryByText('Load More (20/40)')).toBeInTheDocument()
  });

  it("handleLoadMore invokes the function loadMoreHandler", () => {
    const loadMoreHandler = jest.fn();
    const { getByTestId } = render(<LoadMore handleLoadMore={loadMoreHandler} loading={false} totalStories={40} loadedStories={20} />);

    fireEvent.click(getByTestId((/load-more-button/i)))
    expect(loadMoreHandler).toHaveBeenCalled();
  });

});

describe("StoryTypeFilters", () => {
  it("Checks if correct class is applied to active button", () => {
    const setStoryTypeHandler = jest.fn();

    const { rerender } = render(<StoryTypeFilters onChangeStoryType={setStoryTypeHandler} storiesType={'new'} />);
    expect(screen.getByTestId('new-stories')).toHaveClass('btn-success');

    rerender(<StoryTypeFilters onChangeStoryType={setStoryTypeHandler} storiesType={'best'} />);
    expect(screen.getByTestId('new-stories')).not.toHaveClass('btn-success');
  });

  it("Checks onChangeStoryType invokes setStoryTypeHandler function", () => {
    const setStoryTypeHandler = jest.fn();
    render(<StoryTypeFilters onChangeStoryType={setStoryTypeHandler} storiesType={'new'} />);

    fireEvent.click(screen.getByTestId('new-stories'))
    expect(setStoryTypeHandler).toHaveBeenCalled();

    fireEvent.click(screen.getByTestId('top-stories'))
    expect(setStoryTypeHandler).toHaveBeenCalled();
  });

});

describe("Story", () => {
  test('Tests if comments count renders correctly', () => {
    const { rerender } = render(<Story key={1} title={'Title Text'} body={'Body Text'} time={"Time"} commentsCount={30} storyType={"story"} />);
    expect(screen.getByTestId('story-comments')).toHaveTextContent('30 Comments');

    rerender(<Story key={1} title={'Title Text'} body={'Body Text'} time={"Time"} commentsCount={30} storyType={"job"} />);
    expect(screen.queryByText('30 Comments')).not.toBeInTheDocument();

  });

});

describe("FeedBody", () => {
  test('Tests if Story component as rendered in FeedBody', () => {
    const storyTypeHandler = jest.fn();
    const stories = <Story key={1} title={'Title Text'} body={'Body Text'} time={"Time"} commentsCount={30} storyType={"story"} />
    const { getByText } = render(<FeedBody setStoryTypeHandler={storyTypeHandler} storiesType={'new'} stories={stories}/>);

    expect(getByText(/Body Text/i)).toBeInTheDocument();
  });

});
