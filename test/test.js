const assert = require('assert');
const shamir = require('../index.js')
const bip39 = require('bip39');

function random_combination(set, k) {
  var i = 0, j = 0, temp = null
  for (i = set.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = set[i]
    set[i] = set[j]
    set[j] = temp
  }
  return set.slice(0, k);
}

describe('bip39shamir', function() {
  for (let i = 0; i < 100; i++) {
    
    const n = Math.max(2, Math.floor(Math.random() * 255))
    const k = Math.max(2, Math.floor(Math.random() * n))
    const strength = 128 + Math.floor(Math.random() * 3) * 32
    const mnemonic = bip39.generateMnemonic(strength)
    it(`[${i}] works with ${k} out of ${n} for (strength: ${strength}) ${mnemonic}.`, function() {
      const data = shamir.shares(mnemonic, n, k);
      let rnd = random_combination(data, k);
      assert.equal(shamir.combine(rnd), mnemonic);
    });
  }
});
