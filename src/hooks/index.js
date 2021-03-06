import { useState, useEffect, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';

export const useIsMobile = (maxWidth = 768) => {
  const [ width, setWidth ] = useState(window.innerWidth);
  const [ isMobile, setIsMobile ] = useState(window.innerWidth <= maxWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  useEffect(() => {
    if (window.innerWidth <= maxWidth && !isMobile) {
      setIsMobile(true);
    }

    if (window.innerWidth > maxWidth && isMobile) {
      setIsMobile(false);
    }
  }, [ width, isMobile ]);

  return { isMobile };
};

export const useScripts = (urls, onLastLoad) => {
  useEffect(() => {
    const scripts = urls.map((url, i) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = false;
      document.body.appendChild(script);
      if (i === urls.length - 1) {
        script.onload = onLastLoad;
      }

      return script;
    });

    return () => {
      scripts.forEach(script => document.body.removeChild(script));
    };
  }, [ urls ]);
};

export const useQuery = location => {
  const { search, pathname } = useLocation();
  const { push } = useHistory();
  const [ query, setUrlQuery ] = useState(queryString.parse(location || search));
  useMemo(() => {
    setUrlQuery(queryString.parse(search));
  }, [ pathname, search ]);
  const addQuery = obj => {
    push(`${pathname}?${queryString.stringify({ ...query, ...obj })}`);
  };
  const setQuery = obj => {
    push(`${pathname}?${queryString.stringify(obj)}`);
  };
  const clearQuery = path => {
    push(path || pathname);
  };

  return ({ query, addQuery, setQuery, clearQuery });
};
