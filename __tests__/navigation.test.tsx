import { Navigation } from '../components/navigation';
import { render, screen } from '@testing-library/react';
import { getEpisodes } from '../utils/episodes-handlers';

describe('Navigation', () => {
  it('renders both arrows', () => {
    const episodes = getEpisodes();
    render(<Navigation episodes={episodes} currentEpisode={3} />);

    const leftArrow = screen.getByTestId('left-arrow');
    const rightArrow = screen.getByTestId('right-arrow');

    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();
  });

  describe('Right arrow', () => {
    it('redirects to the next episode', () => {
      const episodes = getEpisodes();
      render(<Navigation episodes={episodes} currentEpisode={3} />);

      const rightArrow = screen.getByTestId('right-arrow') as HTMLAnchorElement;
      expect(rightArrow.href).toContain('/episodes/4');
    });
  });

  describe('Left arrow', () => {
    it('redirects to the previous episode', () => {
      const episodes = getEpisodes();
      render(<Navigation episodes={episodes} currentEpisode={3} />);

      const leftArrow = screen.getByTestId('left-arrow') as HTMLAnchorElement;
      expect(leftArrow.href).toContain('/episodes/2');
    });
  });

  it('renders left arrow greyed', () => {
    const episodes = getEpisodes();
    render(<Navigation episodes={episodes} currentEpisode={1} />);

    const leftArrow = screen.getByTestId('left-arrow');
    const rightArrow = screen.getByTestId('right-arrow');

    expect(leftArrow.innerHTML).toContain('opacity-25');
    expect(rightArrow).toBeInTheDocument();
  });

  it('renders right arrow greyed', () => {
    const episodes = getEpisodes();
    render(<Navigation episodes={episodes} currentEpisode={5} />);

    const leftArrow = screen.getByTestId('left-arrow');
    const rightArrow = screen.getByTestId('right-arrow');

    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow.innerHTML).toContain('opacity-25');
  });
});