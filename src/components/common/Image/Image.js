import React from 'react';

import { useImageLoader } from '../../../hooks';
import { Loader } from '../Loader/Loader';
import { skeletons } from '../../../constants';

import styles from './Image.module.scss';


export const Image = ({ src, width, heightRation = 100 }) => {
  const [ isLoaded ] = useImageLoader(src);

  return (
    <div
      style={{
      width,
      position: 'relative',
      paddingTop: `${heightRation}%`,
      backgroundImage: isLoaded ? `url(${src})` : 'none',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
      }}
    >
      {
      !isLoaded && <div className={ styles.loader }><Loader type={ skeletons.IMAGE } /></div>
  }
    </div>
  );
};
