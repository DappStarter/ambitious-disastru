require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile prosper harvest only fresh trim'; 
let testAccounts = [
"0x0e72d5143ab5d7f853fef009992332a863fa43f9885e9f673e1cb9a3394eab69",
"0x09da141c54b22c3dd172446eb8dd9fd164f8a26fc4b5412f4e7ff3c2fe3244c3",
"0x9420e3b97443b273cf68c76a181150cf9506cabdd35929a88ef32a34911e7d38",
"0x67ed6ded660d013943e962a887dc7b3ab6187fc525c7d13e0b188423d36896be",
"0x2e7f1ddbfbfaedd491907d9c8aa3d38b4cd10fcfcd8775fc99da68f268297692",
"0xc8bffe5525103de90edccb1c3e29ae58b3a38451ce2eceb229abdd972619de5e",
"0x0b5b514a72484a3873d1265603b5be8f78d99ff476f222de18fee362097905a3",
"0xa7ad55a87925afc4dc2fd5d00fa81778340ff77fbf604d1142efc665b6d47191",
"0x931963a7d1d4733b5df207fc56c382ec75291110dccb11fb2d85ff082dc1d206",
"0x18c7a928b592c854f4cc708a05d55b382ba03a0ea365c49a85ae6f0d812f8141"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
