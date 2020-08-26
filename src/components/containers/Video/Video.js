import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { linkParams } from '../../../constants/routerLinks';
import { useQuery } from '../../../hooks';
import { videoModel } from '../../../constants/models';
import { videoSources } from '../../../constants';
import { Video } from '../../presentational/Video/Video';

import { Facebook } from './Facebook';
import { Youtube } from './Youtube';
import { Playbuzz } from './Playbuzz';

const VideoSourceComponents = ({
  [videoSources.FACEBOOK]: Facebook,
  [videoSources.YOUTUBE]: Youtube,
  [videoSources.PLAYBUZZ]: Playbuzz
});

export const VideoContainer = () => {
  const { [linkParams.VIDEO_ID]: videoId } = useParams();
  const { query: {
    [videoModel.TITLE]: title,
    [videoModel.SOURCE]: source
  } } = useQuery();

  const VideoSourceComponent = useMemo(() => VideoSourceComponents[source], [ source ]);

  return (
    <Video title={ title }>
      <VideoSourceComponent videoId={ videoId } />
    </Video>
  );
};
