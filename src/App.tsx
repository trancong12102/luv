import './App.css';
import { useEffect, useState } from 'react';
import HeartIcon from './assets/heart.svg';
import { AudioPlayer } from './components/AudioPlayer.tsx';
import { Background } from './components/Background.tsx';
import { DateIcon } from './components/DateIcon.tsx';
import { ImageSlider } from './components/ImageSlider.tsx';
import { SnowfallScene } from './components/SnowfallScene.tsx';

const calculateDiff = (): {
  days: number;
  hours: number;
  minutes: number;
} => {
  const now = new Date();
  const start = new Date(import.meta.env.VITE_START_DATE);
  const diff = start.getTime() - now.getTime();
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  return { days: d, hours: h, minutes: m };
};

const diff = calculateDiff();

function App() {
  const [days, setDays] = useState(diff.days);
  const [hours, setHours] = useState(diff.hours);
  const [minutes, setMinutes] = useState(diff.minutes);

  useEffect(() => {
    const interval = setInterval(() => {
      const { days: d, hours: h, minutes: m } = calculateDiff();
      setDays(d);
      setHours(h);
      setMinutes(m);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen text-gray-800 flex items-center justify-center">
      <Background />
      <SnowfallScene />
      <div className="max-w-screen-sm w-full flex items-center flex-col">
        <div className="pt-3">
          <ImageSlider />
        </div>
        <div className="pt-4 text-lg">the times we together</div>
        <div className="flex flex-row">
          <DateIcon value={days} unit={'days'} />
          <DateIcon value={hours} unit={'hours'} />
          <DateIcon value={minutes} unit={'min'} />
        </div>
        <div className="pt-5">
          <img
            src={HeartIcon}
            alt="I Love You"
            className="object-contain h-12"
          />
        </div>
        <div className="flex items-center text-xl pt-2 text-gray-900">
          CONG.T <div className="text-pink text-7xl px-1 pr-2">&</div>
          H.TRANG
        </div>
        <div className="pt-1">
          <AudioPlayer />
        </div>
      </div>
    </div>
  );
}

export default App;
