function absoluteUrl(req, localHost = 'localhost:3000') {
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

module.exports = absoluteUrl;
