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
    strokeLinecap = 'round'
  }: countdowntimer) => {
  const milisecond = duration * 1000;
  const radius = size / 2
  const circumference = size * Math.PI

  const [countdown, setCountdown] = useState(milisecond)

  const strokeDashOffset = circumference - (countdown / milisecond) * circumference;

  // const minute = Math.floor(duration % 60)
  const minute = ((countdown / 1000) / 60).toFixed()
  const seconds = (countdown / 1000).toFixed();


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
      <label htmlFor="" className='absolute text-5xl font-bold'>{minute} : {seconds}</label>
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