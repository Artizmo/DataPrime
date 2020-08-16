import React from 'react';

const usePercentColors = percent => {
  const [color, setColor] = React.useState('red');
    
  React.useEffect(() => {
    if (percent) {
      if (percent===100) {
        setColor('#48A6A6')
      } else if (percent >= 50 && percent < 100) {
        setColor('#D8B151')
      } else {
        setColor('#D85B76')
      }
    }
  }, [percent]);

  return color;
}

export default usePercentColors;