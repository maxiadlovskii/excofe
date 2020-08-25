import React from 'react';

import { Loader } from '../Loader/Loader';
import { Failed } from '../Failed/Failed';


export const WithState = ({
  isFetching,
  isFailed,
  children
}) => (
  <>
    {isFetching && !isFailed && <Loader />}
    {isFailed && (
      <Failed />
    )}
    {!isFetching && !isFailed && children}
  </>
);

