import Api from '../utils/api/apis.js';

export async function _fetch(url) {
  return await Api.get(url).then(response => response.data);
}

export async function _post(url, data = null, multipart = false) {
  return await Api.post(
    url,
    data,
    multipart ? { headers: { 'Content-Type': 'multipart/form-data' } } : '',
  ).then(response => response.data);
}

export function fetchPosts(type) {
  return _fetch(`${type}`);
}

export function savePosts(url, data) {
  return _post(url, data, true);
}
