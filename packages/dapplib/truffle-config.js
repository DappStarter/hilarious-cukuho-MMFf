require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half enter blue tooth notice rival smile property install forum foam tennis'; 
let testAccounts = [
"0xbca1fcb67c0e2bd4f33384a534d702752a976cf16fa490593e7678f44158b3bb",
"0x02ef72408692a2424acfda80f92005da56fd51de04f34b5192f7d182f9240316",
"0x7919fc52d0923b4dfc0cea05cc7392d4f81e565e7b5f3ed3836d5276b0f6d4e3",
"0x5bf0276ad4b55a12d4f4727fadb3ab0791874c9222f8a0f54f45b3a7130c04a0",
"0x82721891b60e93ec3b4ad38eaab4ed06ca643b1c52454fefab13d6386e94d76f",
"0x0980b87289c7b13a4c937657771c030f4bc66b32d0328f750ebec8a83b203bdd",
"0xb058f9835fdbbdf88d6d077a65f2b6fe2fe436a7296663614b3bb2cb3f4d1041",
"0xda6ec033e5bf040c880f67d32730bb8157a58e4de46896f154f200f9d4d38396",
"0x312ce281fb0bf56cb29a6262f734221ce0cb9e7815589d414b9cdc82592753bc",
"0x0133e4679e812e2010b714f1eec03ef7e403849a8fe24de6a4a4d26284bcc4f6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

