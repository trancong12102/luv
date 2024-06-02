import type { FunctionComponent } from 'react';
import { Snowfall } from 'react-snowfall';
import snow1 from '../assets/snowfall/snow1.png';
import snow2 from '../assets/snowfall/snow2.png';
import snow3 from '../assets/snowfall/snow3.png';
import snow4 from '../assets/snowfall/snow4.png';
import snow5 from '../assets/snowfall/snow5.png';

const images = [snow1, snow2, snow3, snow4, snow5].map((src) => {
  const img = document.createElement('img');
  img.src = src;
  return img;
});

export const SnowfallScene: FunctionComponent = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-[1000] overflow-hidden pointer-events-none opacity-75">
      <Snowfall
        images={images}
        radius={[0.5, 100]}
        rotationSpeed={[-3, 3]}
        speed={[1, 3]}
        wind={[-5, 5]}
        snowflakeCount={50}
      />
    </div>
  );
};
