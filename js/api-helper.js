import fetch from 'isomorphic-unfetch';

const LOCAL_HOST = 'localhost:3000';

function absoluteUrl(req, localHost = LOCAL_HOST) {
  var protocol = 'https:';

  var host = req ? req.headers.host : window.location.hostname;

  if (host.indexOf('localhost') > -1) {
    if (localHost) host = localHost;
    protocol = 'http:';
  }
  return {
    protocol,
    host
  };
}

const getInitialData = async (req, apiRoute, resourceId) => {
  const { protocol, host } = absoluteUrl(req);

  let endpoint = `${protocol}//${host}${apiRoute}`;

  if (resourceId) endpoint = `${endpoint}/${resourceId}`;

  const response = await fetch(endpoint);

  return await response.json();
};

module.exports = {
  getInitialData
};
