import { render, screen, fireEvent } from '@testing-library/react';
import Feed from "../pages/Feed";
import LoadMore from "../Components/LoadMore";
import StoryTypeFilters from "../Components/StoryTypeFilters";

//Todo: Fix test descs, split in separate files
describe("Logos", () => {
  test('Check if Header Logo renders', () => {
    render(<Feed />);
    const headerLogo = screen.getByAltText(/hackernews-header-logo/i);
    expect(headerLogo).toHaveAttribute('src', 'hackernews.svg');
  });

  test('Check if Footer Logo renders', () => {
    render(<Feed />);
    const headerLogo = screen.getByAltText(/footer logo/i);
    expect(headerLogo).toHaveAttribute('src', 'hackernews-footer.svg');
  });
});

describe("Load More Button", () => {

  it("Renders Load More button if totalStories and loadedStories are not equal", () => {
    const loadMoreHandler = jest.fn();
    render(<LoadMore handleLoadMore={loadMoreHandler} loading={true} totalStories={40} loadedStories={20} />);

    const loadMoreButton = screen.getByTestId('load-more-button')
    expect(loadMoreButton).toBeInTheDocument()
  });

  it("Doesn't render button if totalStories and loadedStories are equal", () => {
    const loadMoreHandler = jest.fn();
    render(<LoadMore handleLoadMore={loadMoreHandler} loading={true} totalStories={40} loadedStories={40} />);

    const loadMoreButton = screen.queryByText('Load More (40/40)')
    expect(loadMoreButton).not.toBeInTheDocument()
  });

  it("Checks Button text if loading is true", () => {
    const loadMoreHandler = jest.fn();
    render(<LoadMore handleLoadMore={loadMoreHandler} loading={true} totalStories={40} loadedStories={20} />);

    expect(screen.getByTestId('load-more-button')).toHaveTextContent('Loading..');
  });

  it("handleLoadMore invokes function", () => {
    const loadMoreHandler = jest.fn();
    const { getByTestId } = render(<LoadMore handleLoadMore={loadMoreHandler} loading={false} totalStories={40} loadedStories={20} />);

    fireEvent.click(getByTestId((/load-more-button/i)))
    expect(loadMoreHandler).toHaveBeenCalled();
  });

});

describe("StoryTypeFilters", () => {
  it("Checks if correct class is applied to active button", () => {
    const setStoryTypeHandler = jest.fn();

    render(<StoryTypeFilters onChangeStoryType={setStoryTypeHandler} storiesType={'new'} />);
    expect(screen.getByTestId('new-stories')).toHaveClass('btn-success');

  });

  it("Checks if btn-success class is not applied to in-active button", () => {
    const setStoryTypeHandler = jest.fn();

    render(<StoryTypeFilters onChangeStoryType={setStoryTypeHandler} storiesType={'best'} />);
    expect(screen.getByTestId('new-stories')).not.toHaveClass('btn-success');

  });

  it("onChangeStoryType invokes setStoryTypeHandler function", () => {
    const setStoryTypeHandler = jest.fn();
    render(<StoryTypeFilters onChangeStoryType={setStoryTypeHandler} storiesType={'new'} />);

    fireEvent.click(screen.getByTestId('new-stories'))
    expect(setStoryTypeHandler).toHaveBeenCalled();

    fireEvent.click(screen.getByTestId('top-stories'))
    expect(setStoryTypeHandler).toHaveBeenCalled();
  });

});
