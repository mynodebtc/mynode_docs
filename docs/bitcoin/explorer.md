---
title: "BTC RPC Explorer"
description: "Browse blocks, transactions, addresses and your node's own details with BTC RPC Explorer on MyNode, a private Bitcoin block explorer that runs on your own node."
tags:
- "BTC RPC Explorer"
- "Bitcoin explorer"
- "MyNode"
- "blockchain data"
---

# BTC RPC Explorer

<p class="mn-availability">Community Edition and Premium</p>

[BTC RPC Explorer](https://github.com/janoside/btc-rpc-explorer) is a Bitcoin block explorer that runs on your MyNode. It works like public explorers, but every lookup goes to your own node, so no website learns which transactions or addresses you're interested in.

It also shows details about your node itself, like its peers, its mempool and the commands it supports.

![BTC RPC Explorer home page showing market data, a network summary with hashrate, difficulty and mempool size, the predicted next block, and a table of the latest blocks with their miners, transaction counts and fee rates](/images/bitcoin/btc-rpc-explorer.png)

## Before You Start

BTC RPC Explorer needs the [Electrum Server](/electrum/electrum) to look up addresses. Enable the Electrum Server first, and let Bitcoin and the Electrum Server finish syncing.

## Open the Explorer

On the MyNode home page, find the **Explorer** tile. Click **Enable** if it's disabled, then **Open**. If the tile isn't there, install BTC RPC Explorer from the Marketplace first. The explorer opens in a new tab.

It uses port 3002, or 3003 for HTTPS, such as `http://192.168.1.100:3002`. You need to be logged in to MyNode to use it.

## What You Can Do

- **Look up a transaction, address or block.** Paste it into the search box at the top.
- **Check fees.** The home page shows the fee rates in recent blocks and a prediction for the next block.
- **Browse the mempool.** See unconfirmed transactions and the fee rates they pay.
- **See mining data.** Find out which pools mined recent blocks.
- **Inspect your node.** Under **Tools**, Node Details, Peers and RPC Browser show what your node is doing.

## Privacy

Searching for your own address on a public explorer links your IP address to that address. Using your own explorer avoids that.

Some extras, like the exchange rate, come from outside services. You can change what the explorer shows in its settings, using the gear icon at the top.

## Troubleshooting

- **Addresses won't load.** Check the Electrum Server is Running on its page. See [Electrum Server Stuck Indexing](/troubleshooting/electrum-stuck-indexing).
- **The explorer won't open.** Make sure Bitcoin is synced, and try restarting the explorer from its app page.

## Next Steps

[See fees and the mempool with Mempool](/bitcoin/mempool)
