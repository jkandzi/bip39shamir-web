var bip39 = require('bip39');
var secrets = require('secrets.js-grempe');

shares = function(mnemonic, n, k) {
  var s = bip39.mnemonicToEntropy(mnemonic);
  var shares = secrets.share(s, n, k, 30);
  return shares.map(function(share) { return bip39.entropyToMnemonic(share.slice(1)) });
}
exports.shares = shares;

combine = function(shares) {
  var s = shares.map(function(x) { return '8' + bip39.mnemonicToEntropy(x) });
  return bip39.entropyToMnemonic(secrets.combine(s));
}
exports.combine = combine;

random = function() {
  return bip39.generateMnemonic(128);
}

validateMnemonic = function(mnemonic) {
  return bip39.validateMnemonic(mnemonic);
}
