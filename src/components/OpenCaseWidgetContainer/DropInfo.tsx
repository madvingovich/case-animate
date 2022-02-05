import { AnimeInstance } from 'animejs';
import React from 'react';
import GoodLuck from './GoodLuckSvg';
import { createSvgAnimation } from './helpers';
import { ICaseInfo } from './ICaseInfo';

interface IDropInfoProps {
  item: ICaseInfo | null;
  opening: boolean;
}

function DropInfo({ item, opening }: IDropInfoProps) {
  const svgAnimate = React.useRef({} as AnimeInstance);

  React.useEffect(() => {
    svgAnimate.current = createSvgAnimation();
  }, []);

  React.useEffect(() => {
    if (opening) {
      svgAnimate.current.play();
    }
  }, [opening]);

  return (
    <>
      <div className="w-full h-48 relative">
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            transform: 'translate(-50%, -50%)',
            opacity: opening ? 1 : 0,
            transition: '200ms',
          }}
        >
          <GoodLuck />
        </div>
        {item && !opening && (
          <div className="drop-item text-center">
            <img
              src={item.icon}
              alt="icon"
              height="100"
              className="block mx-auto h-32"
            />
            <h2>{item.fullTitle}</h2>
            <p>{item.price}$</p>
          </div>
        )}
      </div>
    </>
  );
}

export default DropInfo;
