import './ImageSlider.css';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
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

export const ImageSlider: FunctionComponent = () => {
  const [emblaRef, _emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [Autoplay()],
  );

  return (
    <section className="embla max-w-40 h-auto border-8 border-white bg-white">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map(({ src, alt }) => (
            <div className="embla__slide" key={alt}>
              <div className="w-full h-full flex items-end justify-center">
                <img
                  src={src}
                  alt={alt}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    // <Carousel
    //   className="w-44 h-64 border-8 bg-white"
    //   placeholder={'Slider'}
    //   onPointerEnterCapture={() => {}}
    //   onPointerLeaveCapture={() => {}}
    //   autoplay={true}
    //   autoplayDelay={3000}
    //   loop={true}
    //   navigation={() => <div />}
    //   nextArrow={({ handleNext }) => <Arrow handle={handleNext} type="next" />}
    //   prevArrow={({ handlePrev }) => <Arrow handle={handlePrev} type="prev" />}
    // >
    //   {images.map(({ src, alt }) => (
    //     <img
    //       src={src}
    //       alt={alt}
    //       key={alt}
    //       className="h-full w-full object-cover"
    //     />
    //   ))}
    // </Carousel>
  );
};
