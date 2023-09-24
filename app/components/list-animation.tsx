"use client";
import { useState } from "react";
import {
  FadeIn,
  FadeOut,
  FadeInUp,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeOutUp,
  FadeOutDown,
  FadeOutLeft,
  FadeOutRight,
  SlideInTop,
  SlideInBottom,
  SlideInLeft,
  SlideInRight,
  SlideOutTop,
  SlideOutBottom,
  SlideOutLeft,
  SlideOutRight,
  SlideRotateIn,
  SlideRotateOut,
  ZoomIn,
  ZoomOut,
  Rotate90,
  Rotate180,
  Rotate360,
  RotateIn,
  RotateOut,
  SpinClockwise,
  SpinAntiClockwise,
  FlipHorizontal,
  FlipVertical,
  FlipX,
  FlipY,
  FlipInX,
  FlipInY,
  FlipOutX,
  FlipOutY,
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
  Sway,
  Flash,
  Jiggle,
  Blink,
  Pop,
  Heartbeat,
  ExpandHorizontally,
  ContractHorizontally,
  ExpandVertically,
  ContractVertically,
  RubberBand,
} from "./animations";

const animations = [
  { component: FadeIn, category: "Fading", name: "Fade In" },
  { component: FadeOut, category: "Fading", name: "Fade Out" },
  { component: FadeInUp, category: "Fading", name: "Fade In Up" },
  { component: FadeInDown, category: "Fading", name: "Fade In Down" },
  { component: FadeInLeft, category: "Fading", name: "Fade In Left" },
  { component: FadeInRight, category: "Fading", name: "Fade In Right" },
  { component: FadeOutUp, category: "Fading", name: "Fade Out Up" },
  { component: FadeOutDown, category: "Fading", name: "Fade Out Down" },
  { component: FadeOutLeft, category: "Fading", name: "Fade Out Left" },
  { component: FadeOutRight, category: "Fading", name: "Fade Out Right" },
  { component: SlideInTop, category: "Sliding", name: "Slide In Top" },
  { component: SlideInBottom, category: "Sliding", name: "Slide In Bottom" },
  { component: SlideInLeft, category: "Sliding", name: "Slide In Left" },
  { component: SlideInRight, category: "Sliding", name: "Slide In Right" },
  { component: SlideOutTop, category: "Sliding", name: "Slide Out Top" },
  { component: SlideOutBottom, category: "Sliding", name: "Slide Out Bottom" },
  { component: SlideOutLeft, category: "Sliding", name: "Slide Out Left" },
  { component: SlideOutRight, category: "Sliding", name: "Slide Out Right" },
  { component: SlideRotateIn, category: "Sliding", name: "Slide Rotate In" },
  { component: SlideRotateOut, category: "Sliding", name: "Slide Rotate Out" },
  { component: ZoomIn, category: "Zooming", name: "Zoom In" },
  { component: ZoomOut, category: "Zooming", name: "Zoom Out" },
  { component: Rotate90, category: "Rotating", name: "Rotate 90" },
  { component: Rotate180, category: "Rotating", name: "Rotate 180" },
  { component: Rotate360, category: "Rotating", name: "Rotate 360" },
  { component: RotateIn, category: "Rotating", name: "Rotate In" },
  { component: RotateOut, category: "Rotating", name: "Rotate Out" },
  { component: SpinClockwise, category: "Spinning", name: "Spin Clockwise" },
  {
    component: SpinAntiClockwise,
    category: "Spinning",
    name: "Spin Anti-Clockwise",
  },
  { component: FlipHorizontal, category: "Flipping", name: "Flip Horizontal" },
  { component: FlipVertical, category: "Flipping", name: "Flip Vertical" },
  { component: FlipX, category: "Flipping", name: "Flip X" },
  { component: FlipY, category: "Flipping", name: "Flip Y" },
  { component: FlipInX, category: "Flipping", name: "Flip In X" },
  { component: FlipInY, category: "Flipping", name: "Flip In Y" },
  { component: FlipOutX, category: "Flipping", name: "Flip Out X" },
  { component: FlipOutY, category: "Flipping", name: "Flip Out Y" },
  { component: Bounce, category: "Bouncing", name: "Bounce" },
  { component: Swing, category: "Swinging", name: "Swing" },
  { component: Wobble, category: "Wobbling", name: "Wobble" },
  { component: Pulse, category: "Pulsing", name: "Pulse" },
  { component: Shake, category: "Shaking", name: "Shake" },
  { component: Tada, category: "Misc", name: "Tada" },
  { component: Jump, category: "Misc", name: "Jump" },
  { component: Hang, category: "Misc", name: "Hang" },
  { component: RollIn, category: "Rolling", name: "Roll In" },
  { component: RollOut, category: "Rolling", name: "Roll Out" },
  { component: Float, category: "Misc", name: "Float" },
  { component: Sink, category: "Misc", name: "Sink" },
  { component: Sway, category: "Misc", name: "Sway" },
  { component: Flash, category: "Flashing", name: "Flash" },
  { component: Jiggle, category: "Misc", name: "Jiggle" },
  { component: Blink, category: "Blinking", name: "Blink" },
  { component: Pop, category: "Popping", name: "Pop" },
  { component: Heartbeat, category: "Pulsing", name: "Heartbeat" },
  {
    component: ExpandHorizontally,
    category: "Expanding",
    name: "Expand Horizontally",
  },
  {
    component: ContractHorizontally,
    category: "Contracting",
    name: "Contract Horizontally",
  },
  {
    component: ExpandVertically,
    category: "Expanding",
    name: "Expand Vertically",
  },
  {
    component: ContractVertically,
    category: "Contracting",
    name: "Contract Vertically",
  },
  { component: RubberBand, category: "Stretching", name: "Rubber Band" },
];

type Type = "div" | "text";

const ListAnimation = () => {
  const [type, setType] = useState<Type>("div");

  return (
    <div>
      <div>
        <div onClick={() => setType("div")}>div</div>
        <div onClick={() => setType("text")}>text</div>
      </div>
      <div className="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2 lg:grid-cols-4">
        {animations.map((animation, index) => {
          return (
            <div key={index} className="mb-4 flex items-center flex-col">
              <div className="">
                <animation.component type={type} />
              </div>
              <span className="inline-flex mt-2">{animation.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListAnimation;
