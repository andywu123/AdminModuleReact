import axios from 'axios';
const ROOT_URL = 'http://maps.roads.maryland.gov/MDBridgesInBlackAndWhite/resources/content?contentID=70&configID=1';

export const FETCH_CONTENT = 'FETCH_CONTENT';

export function fetchContent() {
  const url = `${ROOT_URL}`;
  const request = axios.get(url);

  return {
    type: FETCH_CONTENT,
    payload: request
  };
}
