# Overview

## What is Bitcoin?
MyNode's primary purpose is to run a full Bitcoin full node. Bitcoin is a revolutionary protocol to transact value between two parties without a trusted intermediary.

## What is a full-node?
A full node verifies every block mined by miners and relayed by its peers before adding it to the chain. It also broadcasts transactions of users to be mined and maintains a pool of pending transactions.

## Benefits
- **Trustless:** Have a personal copy of the entire verified transaction history
- **Privacy:** Check your balance and transactions without leaking any information
- **Censorship resistance:** It also enables broadcasting of transactions without fear of censorship.
- **Network resilience:** independently validate blocks to increase security and resilience


## Features
- **Private by default**: Hide your IP behind Tor
- **CLI on GUI**: Use bitcoin-cli commands from your browser
- **Flexible**: Customize configuration and connect any apps via RPC
<!-- - It is flexible enough to add and connect custom apps via RPC -->
<!-- - Private: The Tor network doesn't expose your IP address to the public -->
<!-- - The CLI is accessible through the browser which enables non-linux users in learning the basic commands of bitcoin-cli and bitcoind. -->

## Hardware Limitations
- The number of CPU cores used by MyNode is fixed at the number of available cores minus 1 to limit CPU usage.
- On devices with little RAM, Bitcoin will limit RAM usage to prevent low memory issues

## Specs
- **Version:** 0.21.1
- **Memory required:** 335 GB (as of Aug 23, 2020)
- **Data location:** `/mnt/mynode/bitcoin` which is also linked at `/home/bitcoin/.bitcoin`

<!-- While setting up MyNode, the user have three options: -->
<!-- - IBD: (initial blockchain download) download the blockchain from scratch. -->
<!-- ProTip: IBD can be sped up by increasing number of threads in bitcoin CLI. -->
<!-- - QuickSync: the default option to download a torrent from mynodebtc.com -->
<!-- and other MyNode users -->
<!-- - Copy the blockchain from an existing source -->
<!-- ## Connected apps
- All other apps are connected to Bitcoin via RPC
  - Lightning and several wallets
  - Electrum server
  - Explorer
  - Mempool viewer
  - Multisig wallets
  - Samourai apps
  - BTCPay server -->
<!-- - By default, bitcoin uses Tor network to find peers, so the user doesn't have
to open the 8333 port for MyNode -->
