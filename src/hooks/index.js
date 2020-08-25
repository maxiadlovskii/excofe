import { useState, useEffect } from 'react';

export const useImageLoader = path => {
  const [ isLoaded, setIsLoaded ] = useState(false);
  const loadImage = () => {
    const image = new Image();
    image.onload = () => {
      setIsLoaded(true);
    };
    image.src = path;
  };
  useEffect(loadImage, []);

  return [ isLoaded ];
};
