import React from 'react';

import { skeletons } from '../../../constants';

import styles from './Loader.module.scss';
import { ImageSkeleton } from './Skeletons';


const SkeletonComponents = {
  [skeletons.IMAGE]: ImageSkeleton
};


export const Loader = ({ type }) => {
  const Component = type && SkeletonComponents[type];

  return <span className={ styles.wrapper }>{Component ? <Component /> : 'Loading...'}</span>;
};
