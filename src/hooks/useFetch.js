import { useMemo, useReducer } from 'react';

import { CANCELED, CLEAR_ALL, CLEAR_ERROR, FAILED, REQUEST, SUCCESS } from '../constants/actions';
import { isObject } from '../utils';

const initialFetchState = {
  isFetching: false,
  isFailed: false,
  isSuccess: false,
  data: [],
  error: null
};

const dispatcher = ({ fetcher, dataTransformer, dispatch }) => async(...params) => {
  try {
    dispatch({ type: REQUEST });
    const response = await fetcher(...params);
    const payload = dataTransformer(response);
    dispatch({ type: SUCCESS, payload });

    return Promise.resolve(payload);
  } catch (error) {
    if (error && error.message === 'Canceled by client') {
      dispatch({ type: CANCELED, payload: error });

      return Promise.resolve(error);
    }
    dispatch({ type: FAILED, payload: error });

    return Promise.reject(error);
  }
};

const fetchReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST:
      return {
        ...state,
        isFetching: true,
        isFailed: false,
        isSuccess: false
      };
    case SUCCESS:
      return {
        ...state,
        isFetching: false,
        isSuccess: true,
        data: payload
      };
    case FAILED:
      return {
        ...state,
        isFetching: false,
        isFailed: true,
        error: payload
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    case CLEAR_ALL:
      return initialFetchState;
    case CANCELED:
      return state;
    default:
      throw new Error();
  }
};
export const useFetch = (fetcher, dataTransformer = d => d.data) => {
  const [ state, dispatch ] = useReducer(fetchReducer, initialFetchState);
  const fetchData = dispatcher({ fetcher, dataTransformer, dispatch });
  function clearError() {
    dispatch({ type: CLEAR_ERROR });
  }
  function clearAll() {
    dispatch({ type: CLEAR_ALL });
  }

  return [
    state,
    fetchData,
    { clearError, clearAll }
  ];
};
