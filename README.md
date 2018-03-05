# bip39shamir

[![Build Status](https://travis-ci.org/jkandzi/bip39shamir-web.svg?branch=master)](https://travis-ci.org/jkandzi/bip39shamir-web)

[shamir.kandzi.com](http://shamir.kandzi.com)

Split your Bip39 seed in `N` different mnemonics. Any `K` of the new mnemonics are sufficient to reconstruct the original mnemonic.


Based on [Shamir's Secret Sharing](https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing).

## Example

```js
const mnemonic = "volume speed orbit feed useful kitchen grief fringe long tackle tide damage";
const data = shares(mnemonic, 5, 3);

// [ 'account once detect oval fringe audit only kid black beach high cruise before iron siege',
//   'actor loud income bulb shock sheriff odor case message skin rapid despair tragic void cradle',
//   'add burger excess hip defense wool prize mammal help belt gate audit employ doctor nothing',
//   'afford foster stand can group eyebrow short buddy report dutch length tiny repeat effort calm',
//   'album shoot trigger finger oil hat visa rib figure old faculty sphere board vibrant maid' ]
```

```js
combine([data[0], data[1], data[3]]);

// volume speed orbit feed useful kitchen grief fringe long tackle tide damage
```

## Test

```bash
yarn test
```

## Contact

[@jkandzi](https://twitter.com/jkandzi)

## License

bip39shamir is released under the MIT license. [See LICENSE](https://github.com/jkandzi/bip39shamir-web/blob/master/LICENSE) for details.
