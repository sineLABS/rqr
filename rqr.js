var path = require('path');


var makeRoot = function(prefix) {
  var root = path.normalize(path.join(__dirname, '..', '..'));
  if (prefix) {
    root = path.join(root, prefix);
  }
  return root;
};

var rqr = function(module) {
  return require(path.join(rqr.root, module));
};
rqr.root = makeRoot();

rqr.withRoot = function(root) {
  var _rqr = function(module) {
    return require(path.join(_rqr.root, module));
  };
  _rqr.root = root;
  return _rqr;
};

rqr.withPrefix = function(prefix) {
  var _rqr = function(module) {
    return require(path.join(_rqr.root, module));
  };
  _rqr.root = makeRoot(prefix);
  return _rqr;
};

module.exports = rqr;
