import anime from 'animejs';

export const createSvgAnimation = () =>
  anime({
    targets: 'svg path',
    autoplay: false,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuad',
    duration: 200,
    delay: function (_, i) {
      return i * 50;
    },
  });

export const createButtonDotsAnimation = (
  setAnimating: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  return anime({
    autoplay: false,
    targets: '.open-btn .btn-dot',
    scale: [
      { value: 0.1, easing: 'easeOutSine', duration: 200 },
      { value: 1, easing: 'easeInOutQuad', duration: 250 },
    ],
    delay: anime.stagger(50, {
      grid: [15, 5],
      from: 'center',
    }),
    begin: () => setAnimating(true),
    complete: () => setAnimating(false),
  });
};
