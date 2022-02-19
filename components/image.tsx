export type ComicImageProps = {
  imagePath: string;
  altText: string;
};

export const ComicImage = (props: ComicImageProps) => {
  const { imagePath, altText } = props;
  return (
    <div className={'max-w-max md:w-1/2'} data-testid="comic-image">
      <img src={imagePath} alt={altText} />
    </div>
  );
};
