import fetch from 'isomorphic-unfetch';
import { server } from './server';

const BASE_URL = server;

const getDefaultOptions = () => {
  return {
    method: 'GET',
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer' // no-referrer, *client
  };
};

function parseResponse(response) {
  return response.json().then(json => ({ json, response }));
}

function handleError({ json, response }) {
  if (response.status >= 400) {
    const error = new Error(response.statusText);

    error.errorText = `${response.status} on ${response.url}`;

    console.log('request service error: ', error);

    throw error;
  }

  return { json, response };
}

function handleResponse({ json }) {
  return json.payload || json;
}

function handleFetchError(error) {
  return Promise.reject(error);
}

function getUrl(endpoint, id) {
  let url = `${BASE_URL + endpoint}`;

  if (id) {
    url + `/${id}`;
  }

  return url;
}

class RequestService {
  async get(endpoint, id) {
    console.log('* getting', endpoint, id);

    let data = await fetch(
      getUrl(endpoint, id),
      Object.assign({}, getDefaultOptions())
    )
      .then(parseResponse)
      .then(handleError)
      .then(handleResponse)
      .catch(handleFetchError);

    return data;
  }

  async post(endpoint, body) {
    console.log('* posting', endpoint, body);

    let data = await fetch(
      endpoint,
      Object.assign({}, getDefaultOptions(), {
        method: 'POST',
        body: JSON.stringify(body)
      })
    )
      .then(parseResponse)
      .then(handleError)
      .then(handleResponse)
      .catch(handleFetchError);

    return data;
  }

  async execute(endpoint, data) {
    if (endpoint.indexOf('/static/api') !== -1) {
      console.log('Requesting mock data from', endpoint, data);
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(this.get(endpoint));
        }, 500);
      });
    }

    return this.get(endpoint, JSON.stringify(data));
  }
}

export default new RequestService();
