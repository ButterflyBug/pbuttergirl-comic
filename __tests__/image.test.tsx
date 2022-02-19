import { render, screen } from '@testing-library/react';
import { ComicImage } from '../components/image';

fdescribe('Image', () => {
  fit('renders first episode with its alt attribute', () => {
    const altText =
      'First episode portrays a short-haired girl who is looking at the jar full of peanut butter.';
    render(
      <ComicImage
        imagePath={'/episodes/episode-1/Episode1.png'}
        altText={altText}
      />
    );
    const comicImage = screen.getByRole('img');
    expect(comicImage).toHaveAttribute('alt', altText);
  });
});
