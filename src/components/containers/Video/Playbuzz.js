import React, {useCallback, useState} from 'react';
import {useScripts} from "../../../hooks";

export const Playbuzz = ({ videoId }) => {
  const [ loaded, setLoaded ] = useState(false);
  const onLoadScript = useCallback(() => setLoaded(true), [ setLoaded ]);
  useScripts([ '/playbuzz.js' ], onLoadScript);

  return (
    loaded && (
      <div
        className="playbuzz"
        data-id={ videoId }
        data-show-share="false"
        data-show-info="false"
        data-comments="false"
      />
    )
  );
};
