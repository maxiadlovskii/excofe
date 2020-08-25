import axios from 'axios'
import { handleError } from './failors'
import qs from 'query-string'

export const transportService = async (path, options) => {
    let { origin, pathname, search } = new URL(path);
    if (options.method && options.method.toUpperCase() === 'GET' && options.query) {
        const urlQueryString = qs.stringify(options.query);
        if (urlQueryString) {
            search = search ? `${search}&${urlQueryString}` : `?${urlQueryString}`
        }
    }
    const url = `${origin}${pathname}${search}`;
    const defaultHeaders = !options.notJson
        ? {
              'Content-Type': 'application/json'
          }
        : {};

    return await axios({
        url,
        method: options.method,
        credentials: 'same-origin',
        mode: 'cors',
        cache: 'default',
        headers: {
            ...defaultHeaders,
            ...options.headers
        },
        data: options.data || {}
    })
        .then(async response => await response.data)
        .catch(async response => handleError(response))
};
