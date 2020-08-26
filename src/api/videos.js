import { transportService } from '../services/transport';
import { API_SERVICE } from '../constants/api';

export const getVideos = (pageSize = 10) => transportService(`${API_SERVICE}videos`, {
  method: 'GET',
  query: {
    pageSize
  }
});
