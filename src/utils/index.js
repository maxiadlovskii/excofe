export const isObject = val => {
  if (val === null) {
    return false;
  }

  return typeof val === 'object';
};
export const additionsClasses = (additions = [], style) =>
  additions.reduce((res, addition) => {
    if (isObject(addition)) {
      const classes = Object.entries(addition).reduce((result, [ key, val ]) => (
        val ? [ ...result, style[key] ] : result
      ), []);

      return [ ...res, ...classes ];
    }

    return [ ...res, style[addition] ];
  }, []);
