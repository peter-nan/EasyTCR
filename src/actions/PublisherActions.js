export function buyTokens (tokens) {
  return {
    type: 'BUY_TOKENS',
    tokens: tokens
  };
}

export function getTokens () {
  return {
    type: 'REQUEST_TOKEN_INFORMATION'
  };
}

export function sendTestTxs () {
  return {
    type: 'SEND_TEST_TXS'
  };
}

export function getPublisherDomains () {
  return {
    type: 'REQUEST_PUBLISHER_DOMAINS'
  };
}
