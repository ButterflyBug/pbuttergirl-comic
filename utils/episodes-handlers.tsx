import glob from 'glob';
import { groupBy } from 'lodash';

export type EpisodeType = ReturnType<typeof getEpisodes>[0];

export function getEpisodes() {
  const episodes = glob.sync('./public/episodes/episode-*/*.png');
  const groupedList = groupBy(episodes, groupFunction);

  return Object.entries(groupedList).map(([key, value], index) => {
    const images = value.map(item => item.replace('./public/', '/')).sort();
    const slug = (index + 1).toString();
    return {
      slug,
      name: (key.charAt(0).toUpperCase() + key.slice(1)).replace('-', ' '),
      images,
    };
  });
}

export const groupFunction = (episodePath: string) => {
  return episodePath.split('/')[3];
};
