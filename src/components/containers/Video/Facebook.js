import React, { useCallback, useState } from 'react';

import { useScripts } from '../../../hooks';

export const Facebook = ({ videoId }) => {
  const [ loaded, setLoaded ] = useState(false);
  const onLoadScript = useCallback(() => setLoaded(true), [ setLoaded ]);
  useScripts([ 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2' ], onLoadScript);

  return (
    <div>
      <div id="fb-root" />
      {loaded && (
        <div
          className="fb-video"
          dataHref={ `https://www.facebook.com/video/embed?video_id=${videoId}` }
          dataWidth="500"
        />
      )}
    </div>
  );
};
