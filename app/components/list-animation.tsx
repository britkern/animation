import {
  FadeIn,
  FadeOut,
  SlideInTop,
  SlideInBottom,
  SlideOutTop,
  SlideOutBottom,
  ZoomIn,
  ZoomOut,
  Rotate90,
  Rotate180,
  Rotate360,
  FlipHorizontal,
  FlipVertical,
  Bounce,
  Swing,
  Wobble,
  Pulse,
  Shake,
  Tada,
  Jump,
  Hang,
  RollIn,
  RollOut,
  Float,
  Sink,
  Flash,
  Jiggle,
  RubberBand,
} from "./animations";

const animations = [
  FadeIn,
  FadeOut,
  SlideInTop,
  SlideInBottom,
  SlideOutTop,
  SlideOutBottom,
  ZoomIn,
  ZoomOut,
  Rotate90,
  Rotate180,
  Rotate360,
  FlipHorizontal,
  FlipVertical,
  Bounce,
  Swing,
  Wobble,
  Pulse,
  Shake,
  Tada,
  Jump,
  Hang,
  RollIn,
  RollOut,
  Float,
  Sink,
  Flash,
  Jiggle,
  RubberBand,
];

const ListAnimation = () => {
  return (
    <div className="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2 lg:grid-cols-4">
      {animations.map((Animation, index) => {
        return (
          <div key={index} className="mb-4">
            <Animation />
          </div>
        );
      })}
    </div>
  );
};

export default ListAnimation;
