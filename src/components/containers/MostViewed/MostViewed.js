import React, { useEffect, useCallback } from 'react';

import { List } from '../../presentational/List/List';
import { getVideos } from '../../../api/videos';
import { useFetch } from '../../../hooks/useFetch';

export const MostViewedContainer = () => {
  const [
    {
      isFetching,
      data
    },
    fetchData
  ] = useFetch(getVideos);
  useEffect(() => {
    fetchData();
  }, []);
  const onEndOfList = useCallback(() => {
    !isFetching && fetchData();
  }, [ fetchData, isFetching ]);

  return <List isFetching={ isFetching } videos={ data } onEndOfList={ onEndOfList } title="Most Viewed" />;
};
