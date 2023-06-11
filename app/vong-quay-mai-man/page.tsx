"use client";

//@ts-ignore
// import { Wheel } from "https://cdn.jsdelivr.net/npm/spin-wheel@4.1.1/dist/spin-wheel-esm.js";
import { Howl } from "howler";
import { useCallback, useEffect, useRef } from "react";
//@ts-ignore
import WheelComponent from "react-wheel-of-prizes";
//@ts-ignore
import Winwheel from "winwheel";
import tickAudioSrc from "../../public/assets/sounds/tick.mp3";

interface WinWheelProps {
  defaultOption?: any;
  afterInit?: (winwheel: any) => void;
  pinImage?: string;
  centerImage?: string;
  borderWheelImage?: string;
  canvasStyle?: React.CSSProperties;
  pinStyles?: React.CSSProperties;
  centerStyles?: React.CSSProperties;
  borderWheelStyles?: React.CSSProperties;
}

export default function Page() {
  const wheelRef = useRef();

  const onFinished = (winner: any) => {
    console.log(winner);
  };

  // 3. Create the wheel in the container and initialise it with the props:

  useEffect(() => {
    //@ts-ignore
    wheelRef.current = new Winwheel(defaultOption);
  }, []);

  const sound = new Howl({
    src: [tickAudioSrc],
  });

  const playSound = useCallback(() => {
    sound.play();
  }, []);

  //   const playWinSound = useCallback(() => {
  //     winAudio.play();
  //   }, []);

  const startSpin = () => {
    // Ensure that spinning can't be clicked again while already running.

    // Begin the spin animation by calling startAnimation on the wheel object.
    //@ts-ignore
    wheelRef.current?.startAnimation();

    // Set to true so that power can't be changed and spin button re-enabled during
    // the current animation. The user will have to reset before spinning again.
  };

  const defaultOption = {
    canvasId: "my-wheel",
    outerRadius: 212, // Set outer radius so wheel fits inside the background.
    innerRadius: 75, // Make wheel hollow so segments dont go all way to center.
    textFontSize: 24, // Set default font size for the segments.
    textOrientation: "vertical", // Make text vertial so goes down from the outside of wheel.
    textAlignment: "outer", // Align text to outside of wheel.
    numSegments: 24, // Specify number of segments.
    // Define segments including colour and text.
    segments: [
      // font size and text colour overridden on backrupt segments.
      { fillStyle: "#ee1c24", text: "300" },
      { fillStyle: "#3cb878", text: "450" },
      { fillStyle: "#f6989d", text: "600" },
      { fillStyle: "#00aef0", text: "750" },
      { fillStyle: "#f26522", text: "500" },
      {
        fillStyle: "#000000",
        text: "BANKRUPT",
        textFontSize: 16,
        textFillStyle: "#ffffff",
      },
      { fillStyle: "#e70697", text: "3000" },
      { fillStyle: "#fff200", text: "600" },
      { fillStyle: "#f6989d", text: "700" },
      { fillStyle: "#ee1c24", text: "350" },
      { fillStyle: "#3cb878", text: "500" },
      { fillStyle: "#f26522", text: "800" },
      { fillStyle: "#a186be", text: "300" },
      { fillStyle: "#fff200", text: "400" },
      { fillStyle: "#00aef0", text: "650" },
      { fillStyle: "#ee1c24", text: "1000" },
      { fillStyle: "#f6989d", text: "500" },
      { fillStyle: "#f26522", text: "400" },
      { fillStyle: "#3cb878", text: "900" },
      {
        fillStyle: "#000000",
        text: "BANKRUPT",
        textFontSize: 16,
        textFillStyle: "#ffffff",
      },
      { fillStyle: "#a186be", text: "600" },
      { fillStyle: "#fff200", text: "700" },
      { fillStyle: "#00aef0", text: "800" },
      { fillStyle: "#ffffff", text: "LOOSE TURN", textFontSize: 12 },
    ],
    // Specify the animation to use.
    animation: {
      type: "spinToStop",
      duration: 10,
      spins: 15,
      // callbackFinished: alertPrize, // Function to call whent the spinning has stopped.
      callbackSound: playSound, // Called when the tick sound is to be played.
      soundTrigger: "pin", // Specify pins are to trigger the sound.
    },
    // Turn pins on.
    pins: {
      number: 24,
      fillStyle: "silver",
      outerRadius: 4,
    },
  };

  return (
    <>
      <div onClick={startSpin}>quay nè</div>
      <div className="woay-box-wheel">
        <div>
          <canvas width={800} height={800} id={"my-wheel"}>
            Canvas not supported, use another browser.
          </canvas>
          {/* {borderWheelImage && (
            <img
              style={borderWheelStyles}
              className="woay-border"
              src={borderWheelImage}
            />
          )} */}
          {/* {pinImage && (
            <img style={pinStyles} className="woay-arrow" src={pinImage} />
          )} */}
          {/* {centerImage && (
            <div className="btn-woay">
              <img
                style={centerStyles}
                className="woay-button-bg"
                src={centerImage}
                alt=""
              />
            </div>
          )} */}
        </div>
      </div>
    </>
  );
}
