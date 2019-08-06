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

//TODO: implement this in individual api files
const getInitialData = async (req, apiRoute, resourceId) => {
  const { protocol, host } = absoluteUrl(req);

  let endpoint = `${protocol}//${host}${apiRoute}`;

  if (resourceId) endpoint = `${endpoint}/${resourceId}`;

  const response = await fetch(endpoint);

  const responseData = await response.json().then(data => {
    const { success, payload, error } = data;

    if (!success) {
      const genericErrorObject = {
        title: 'generic fetch error',
        statusCode: 'Oh no!'
      };

      return {
        error: { ...genericErrorObject, ...error }
      };
    }

    return { payload };
  });

  return { ...responseData };
};

module.exports = {
  getInitialData
};
