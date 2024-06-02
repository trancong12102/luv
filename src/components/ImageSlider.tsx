import { Carousel } from '@material-tailwind/react';
import type { FunctionComponent } from 'react';
import img1Src from '../assets/slider/IMG_1.jpeg';
import img2Src from '../assets/slider/IMG_2.jpeg';
import img3Src from '../assets/slider/IMG_3.jpeg';
import img4Src from '../assets/slider/IMG_4.jpeg';
import img5Src from '../assets/slider/IMG_5.jpeg';
import img6Src from '../assets/slider/IMG_6.jpeg';

const images = [img1Src, img2Src, img3Src, img4Src, img5Src, img6Src].map(
  (src, i) => {
    return {
      src,
      alt: `image ${i}`,
    };
  },
);

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
