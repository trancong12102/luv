import type { FunctionComponent } from 'react';
import { Snowfall } from 'react-snowfall';

const images = Array.from({ length: 5 }, (_, i) => i + 1).map((i) => {
  const img = document.createElement('img');
  img.src = `/snowfall/snow${i}.png`;
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
