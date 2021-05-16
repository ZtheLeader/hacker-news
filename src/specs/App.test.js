import { render, screen, fireEvent } from '@testing-library/react';
import Feed from "../pages/Feed";
import LoadMore from "../Components/LoadMore";

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
  
  it("onClick invokes function", () => {
  const loadMoreHandler = jest.fn();
  const { getByTestId } = render(<LoadMore handleLoadMore={loadMoreHandler} loading={false} totalStories={40} loadedStories={20} />);

  fireEvent.click(getByTestId((/load-more-button/i)))
  expect(loadMoreHandler).toHaveBeenCalled();
  });
});
