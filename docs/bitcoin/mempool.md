---
title: "Mempool"
description: "See Bitcoin fee rates, pending transactions and recent blocks with the Mempool app on MyNode, so you can pick fees and track transactions using your own node's data."
tags:
- "Mempool"
- "Bitcoin fees"
- "MyNode"
- "blockchain explorer"
---

# Mempool

<p class="mn-availability">Community Edition and Premium</p>

[Mempool](https://mempool.space) is a visual explorer for Bitcoin that focuses on fees. Running it on your MyNode lets you check fees and track your transactions without telling a public website what you're looking at.

![Mempool dashboard showing upcoming blocks with their fee rates, recent mined blocks, recommended transaction fees by priority, the difficulty adjustment, mempool size and incoming transaction charts, and tables of the latest blocks and transactions](/images/bitcoin/mempool-dashboard.png)

## What the Mempool Is

When you send bitcoin, your transaction waits with others to be added to a block. That waiting area is the **mempool**. Each block has limited space, so miners pick the transactions that pay the highest fee rate first. When the mempool is busy, you need a higher fee to confirm quickly.

## Before You Start

Mempool uses the [Electrum Server](/electrum/electrum) to look up addresses and transactions. Enable the Electrum Server first, and let it finish indexing.

## Open Mempool

1. If Mempool isn't on your home page, install it from the Marketplace.
2. On the MyNode home page, find the **Mempool** tile, and click **Enable**.
3. When it's running, click **Open**.

Mempool uses port 4080, or 4081 for HTTPS, such as `http://192.168.1.100:4080`. When it first starts, it takes a few minutes to load recent blocks and fee history.

## Using Mempool

- **Pick a fee.** The **Transaction Fees** section suggests fee rates for low, medium and high priority, in sats per virtual byte (sat/vB).
- **See what's coming.** The blocks on the left are the next blocks miners are likely to mine, with the fee range in each. The blocks on the right were mined most recently.
- **Track a transaction.** Paste a transaction ID into the search box to see whether it's confirmed, or where it sits in the queue.
- **Look up an address or block.** Use the same search box.

If your transaction is stuck because its fee is too low, many wallets let you raise the fee with Replace-By-Fee (RBF).

## Memory Use

A busy mempool can use a lot of memory. MyNode limits how much memory Bitcoin's mempool can use based on your device's RAM, so a device with less RAM keeps fewer pending transactions. Because of this, your Mempool may show a smaller mempool than public sites during busy periods.

## Next Steps

[Explore blocks and your node with BTC RPC Explorer](/bitcoin/explorer)
