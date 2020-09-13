# Explorer

## Overview
Blockchain explorers are GUI applications built over the Bitcoin blockchain to see transactions and public addresses. Generally, mobile and hardware wallets use trusted third-party explorers to check wallet balances and confirm transactions which leaks the private details (like IP address, bitcoin balance). Instead, having a local explorer with personal Bitcoin node will improve privacy and remove the trust on third-party explorers.

It depends on [Electrum server](/electrum/electrum.html), so the user must wait for the electrum server to sync completely before they can use the explorer.

## Specs
- BTC RPC explorer v2.0.2
- Website: [https://explorer.btc21.org/](https://explorer.btc21.org/)
- Github: [https://github.com/janoside/btc-rpc-explorer](https://github.com/janoside/btc-rpc-explorer)
- Installed location: `/opt/mynode/btc-rpc-explorer`
- How to access it? [http://mynode.local:3002](http://mynode.local:3002) or [https://mynode.local:3003](https://mynode.local:3003)
- Dependency: Electrum server

<!-- - Explain the error messages -->
<!-- - how to use it with wallets? -->
