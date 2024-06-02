import { Carousel } from '@material-tailwind/react';
import type { FunctionComponent } from 'react';

const images = Array.from({ length: 6 }, (_, i) => i + 1).map((i) => {
  return {
    src: `/slider/IMG_${i}.jpeg`,
    alt: `image ${i}`,
  };
});

const Arrow: FunctionComponent<{
  handle: () => void;
  type: 'prev' | 'next';
}> = ({ handle, type }) => {
  return (
    <button
      type="button"
      onClick={handle}
      className={`absolute w-16 h-full ${
        type === 'prev' ? 'left-0' : 'right-0'
      }`}
    />
  );
};

export const ImageSlider: FunctionComponent = () => {
  return (
    <Carousel
      className="w-60 h-80 border-8"
      placeholder={'Slider'}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      autoplay={true}
      autoplayDelay={3000}
      loop={true}
      navigation={() => <div />}
      nextArrow={({ handleNext }) => <Arrow handle={handleNext} type="next" />}
      prevArrow={({ handlePrev }) => <Arrow handle={handlePrev} type="prev" />}
    >
      {images.map(({ src, alt }) => (
        <img
          src={src}
          alt={alt}
          key={alt}
          className="h-full w-full object-cover"
        />
      ))}
    </Carousel>
  );
};
