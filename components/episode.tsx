import { EpisodePageProps } from '../pages/episodes/[slug]';
import { EpisodeType } from '../utils/episodes-handlers';
import { ComicImage } from './image';
import { Navigation } from './navigation';
import { TextComponentProps } from './text';
import { Text } from './text';

export type EpisodeProps = {
  title: TextComponentProps['title'];
  images: EpisodeType['images'];
  currentEpisodeNumber: EpisodePageProps['currentEpisodeNumber'];
  episodes: EpisodePageProps['episodes'];
};

export const Episode = (props: EpisodeProps) => {
  const { title, images, currentEpisodeNumber, episodes } = props;
  const altText =
    'First episode portrays a short-haired girl who is looking at the jar full of peanut butter. The jar is placed on the brown table. The girl says: Aww... we meet again my lady';
  return (
    <div className={'m-5 flex flex-col place-items-center gap-5'}>
      <Text title={title} />
      {images.map(image => {
        return (
          <ComicImage
            key={JSON.stringify(image)}
            imagePath={image}
            altText={altText}
          />
        );
      })}
      <Navigation episodes={episodes} currentEpisode={currentEpisodeNumber} />
    </div>
  );
};
