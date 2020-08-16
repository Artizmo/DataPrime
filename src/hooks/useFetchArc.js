import React from 'react';

const useFetchArc = percent => {
  const [degrees, setDegrees] = React.useState(0);
  const [maxDeg, setMaxDeg] = React.useState(false);
  const [startRads, setStartRads] = React.useState(0);
  const [endRads, setEndRads] = React.useState(0);
  const [over180, setOver180] = React.useState(0);

  React.useEffect(() => {
    if (percent) {
      setDegrees(percent/100*360);
      setMaxDeg(degrees === 360 ? true : false);
      setStartRads((degrees - 90) * Math.PI / 180);
      setEndRads((0 - 90) * Math.PI / 180);
      setOver180((degrees - 0 > 180) ? 1 : 0);
    }
  }, [percent, degrees])

  return {
    maxDeg,
    arc: { 
      x1: 20 + (18 * Math.cos(startRads)),
      y1: 20 + (18 * Math.sin(startRads)),
      x2: 20 + (18 * Math.cos(endRads)),
      y2: 20 + (18 * Math.sin(endRads)),
      over180
    }
  }
}

export default useFetchArc;