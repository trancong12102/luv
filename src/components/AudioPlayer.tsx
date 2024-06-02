import { IconButton } from '@material-tailwind/react';
import { type FunctionComponent, useState } from 'react';
import ReactPlayer from 'react-player';
import audioSrc from '../assets/audio.mp3';

export const AudioPlayer: FunctionComponent = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => setPlaying(!playing)}
        className={`rounded-full ${playing && 'animate-spin'}`}
        placeholder={'Play'}
        size={'lg'}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        onEnded={() => {
          console.log('ended');
        }}
      >
        <i className="gg-music text-white" />
      </IconButton>
      <div className="hidden">
        <ReactPlayer playing={playing} url={audioSrc} loop={true} />
      </div>
    </>
  );
};
