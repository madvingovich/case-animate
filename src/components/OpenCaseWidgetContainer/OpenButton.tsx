import anime, { AnimeInstance } from 'animejs';
import React from 'react';
import { createButtonDotsAnimation } from './helpers';

interface ButtonProps {
  onClick: () => void;
  loading: boolean;
}

function OpenButton({ onClick, loading }: ButtonProps) {
  const [animating, setAnimating] = React.useState(false);

  const buttonAnimate = React.useRef({} as AnimeInstance);

  React.useEffect(() => {
    buttonAnimate.current = createButtonDotsAnimation(setAnimating);
  }, []);

  const animate = () => {
    onClick();
    buttonAnimate.current.play();
    anime({
      targets: '.open-btn',
      scale: 0.95,
      duration: 100,
      direction: 'alternate',
      easing: 'easeInOutSine',
    });
  };
  return (
    <button
      onClick={animate}
      disabled={animating || loading}
      className="open-btn mx-auto mb-5 relative bg-emerald-400 flex flex-wrap rounded-xl overflow-hidden shadow-md"
      style={{ width: '150px', height: '50px' }}
    >
      <span
        className="absolute top-1/2 left-1/2 text-white tracking-widest z-50"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        {loading ? '...' : 'OPEN'}
      </span>
      {Array(75)
        .fill(null)
        .map((_, index) => (
          <span
            key={index}
            data-index={index}
            className="btn-dot bg-indigo-700"
            style={{ width: 10, height: 10 }}
          />
        ))}
    </button>
  );
}

export default OpenButton;
