import { render, screen, fireEvent } from '@testing-library/react';
import Feed from "../pages/Feed";

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
