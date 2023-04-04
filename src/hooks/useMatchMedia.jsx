import { useEffect, useState } from 'react';

const useMediaQuery = (mq) => {
  const [match, setMatch] = useState(false);

  const handleOrientationChange = (mql) => {
    setMatch(mql.matches);
  };

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mq);

    mediaQueryList.onchange = handleOrientationChange;

    handleOrientationChange(mediaQueryList);

    return () => void (mediaQueryList.onchange = null);
  }, [mq]);

  return match;
};

export default useMediaQuery;
