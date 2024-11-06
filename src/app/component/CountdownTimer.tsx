import React, { useEffect, useState } from "react";

interface countdowntimer{
  second?: number,
  size?: number,
  strokeBgColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
}

const CountdownTimer = ({second=0, size=0, strokeBgColor, strokeColor, strokeWidth}: countdowntimer) => {
  const milisecond  = second * 1000;
  const radius = size / 2
  const circumference = size * Math.PI

  const [isplaying, setIsPlaying] = useState(false)
  const [countdown, setCountdown] = useState(milisecond)

  // const hour = Math.floor(timeremaining/3600)
  // const minute = Math.floor((timeremaining % 3600) / 60)
  // const second = Math.floor(timeremaining % 60)
  return(
    <div className=""></div>
  )
}

export default CountdownTimer;