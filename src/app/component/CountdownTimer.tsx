import { useEffect, useState, FC, useMemo } from 'react';

interface countdowntimer {
  duration?: number,
  size?: number,
  strokeBgColor?: string;
  strokeGradientStart?: string,
  strokeGradientEnd?: string,
  strokeColor?: string;
  strokeWidth?: number;
  onComplete?: VoidFunction;
  initialDuration?: number
  strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit' | undefined;
}

const CountdownTimer = (
  {
    duration = 0,
    size = 0,
    strokeBgColor,
    strokeGradientStart,
    strokeGradientEnd,
    strokeWidth,
    onComplete,
    strokeLinecap = 'round',
    initialDuration=duration
  }: countdowntimer) => {
  const totalmilisecond = duration * 1000;
  const radius = size / 2
  const circumference = size * Math.PI

  const initialCountdown = initialDuration * 1000;
  const [countdown, setCountdown] = useState(initialCountdown)

  const strokeDashOffset = circumference - (countdown / totalmilisecond) * circumference;

  // const minute = Math.floor(duration % 60)
  const totalSeconds = Math.ceil(countdown / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;


  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 10);
      } else {
        clearInterval(interval);
        onComplete && onComplete();
      }
    }, 10);
    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <div className="flex relative justify-center items-center">
      <label htmlFor="" className='absolute text-5xl font-bold'>{minutes} : {seconds}</label>
      <div className="-rotate-90 ">
        <svg className='overflow-visible mt-5 ml-5' style={{height: size + 20, width : size + 20}}>

          <defs>
            <linearGradient id='primary-grad' x1={"0%"} x2={"100%"} y1={"0%"} y2={"0%"}>
              <stop offset={"0%"} stopColor={strokeGradientStart} />
              <stop offset={"100%"} stopColor={strokeGradientEnd} />
            </linearGradient>
          </defs>
          <circle
            fill="none"
            r={radius}
            cx={radius}
            cy={radius}
            // className='z-0'
            stroke={strokeBgColor}
            strokeWidth={strokeWidth}
            strokeLinecap={strokeLinecap}
            strokeDasharray={circumference}
          />
          <circle
            fill="none"
            r={radius}
            cx={radius}
            cy={radius}
            className='z-10'
            stroke={"url(#primary-grad)"}
            strokeWidth={strokeWidth}
            strokeLinecap={strokeLinecap}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashOffset}
          />
        </svg>
      </div>
    </div>
  )
}

export default CountdownTimer;