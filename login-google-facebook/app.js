// Google Login

const { generateKeyPair } = require('crypto');

function onLoadFunction() {
  gapi.client.setApiKey('AIzaSyAKbBqlVpEJKCquxQ9sswQGmrLlc-dO2KI');
  gapi.client.load('plus', 'v1', function () {});
}
