---
title: "Opening Your First Lightning Channel"
description: "Open your first Lightning channel on MyNode: fund your wallet, pick a good peer, choose a channel size and on-chain fee, and decide on a public or private channel."
tags:
- "open Lightning channel"
- "Lightning peers"
- "Lightning channels"
- "MyNode"
---

# Opening Your First Lightning Channel

A channel is what connects your node to the Lightning Network. This guide covers the choices you'll make when opening one. If channels are new to you, read [Lightning Basics](/lightning/basics) first.

## Before You Start

- Bitcoin must be fully synced and your [Lightning wallet created](/lightning/create).
- Save a copy of your seed phrase, and read [Backing Up a Lightning Node](/lightning/backups).

## Step 1: Fund Your On-chain Wallet

Channels are funded from LND's on-chain wallet, so send it some bitcoin first. The MyNode Lightning page shows a deposit address in its Balances section, or you can generate one in [Ride the Lightning](/lightning/rtl) under "On-chain".

Wait for the deposit to confirm before you continue. Your funds will appear as your On-chain Balance. Leave some extra in the wallet to cover the fees for opening the channel, and to keep the small [on-chain reserve](/lightning/basics#on-chain-and-lightning-funds) LND holds back.

## Step 2: Pick a Peer

A peer is the node on the other side of your channel. Your peer can't take your funds, but it does affect how well your payments work. A good first peer:

- **Is online reliably.** You can't use a channel while your peer is offline, and an unreliable peer can lead to a force close.
- **Is well connected.** A peer with many channels gives you more routes to the rest of the network.
- **Has a good reputation.** Check how long it has been running and whether it keeps its channels open for long periods.
- **Accepts your channel size.** Many larger nodes set a minimum channel size, sometimes on the order of millions of sats. Check before you try.
- **Is reachable from your node.** Tor nodes can connect to both clearnet and Tor peers. A peer that's only reachable through Tor can't be reached by a node with Tor turned off.

You can research nodes on explorers like [Amboss](https://amboss.space/), [1ML](https://1ml.com/) and [mempool.space](https://mempool.space/lightning). You can also ask in the MyNode community.

You'll need the peer's URI, which looks like this:

```text
pubkey@address:port
```

## Step 3: Choose a Channel Size

There's no single correct size. These are the limits and tradeoffs to consider:

- **Minimum:** LND won't accept channels smaller than 20,000 sats by default, and many peers require much more.
- **Maximum:** MyNode uses LND's default limit of 16,777,215 sats (about 0.167 BTC) per channel. You can open more than one channel.
- **On-chain costs:** Each channel costs an on-chain fee to open and another to close. In a very small channel, those fees can use up a large share of the balance, especially when network fees rise.
- **Payment size:** A channel can't send more than its outbound balance. LND can split a payment across several channels when the receiver supports it, but larger channels are more reliable.

A single medium-sized channel with a well-connected peer is usually a better start than several very small ones. Only commit what you're comfortable having on a hot wallet.

## Step 4: Choose an On-chain Fee

Your channel's funding transaction is a normal Bitcoin transaction, so it needs a fee. Check a fee estimator like [mempool.space](https://mempool.space/) and choose a rate that should confirm within your timeframe.

If you pick a fee that's too low, the channel can stay pending for a long time. It's usually cheaper to wait until network fees are low unless you need the channel right away.

## Step 5: Choose Public or Private

| | Public | Private (unannounced) |
|---|---|---|
| **Visible in the network graph** | Yes | No, though it can still be seen by the peer and by anyone who gets an invoice that reveals it |
| **Forwards payments for others** | Yes | Generally no |
| **Receiving** | Others find routes to you through the graph | Your invoices must include route hints |

Choose a **public** channel if you want to forward payments or be easy to pay. Choose a **private** channel if you only plan to send and receive your own payments. If you're unsure, the default of public works for most people.

## Step 6: Open the Channel

Ride the Lightning and Thunderhub can both open channels. For RTL:

1. Add your peer under "Lightning", then "Peers/Channels", then "Peers".
2. Go to "Channels", and click "Open Channel".
3. Select your peer, enter the amount and your fee, and confirm.

The [Ride the Lightning guide](/lightning/rtl#opening-a-channel) has screenshots of these steps. If you'd rather use another interface, see [Thunderhub](/lightning/thunderhub) or [Zeus](/lightning/zeus).

## Step 7: Wait for Confirmations

The channel shows as pending until the funding transaction confirms. LND usually needs between 3 and 6 confirmations depending on the channel's size, so expect this to take around 30 to 60 minutes after the transaction enters a block. Your peer can ask for more.

Once it's active, the channel appears in the Channels section of the MyNode Lightning page, where a bar shows how its balance is split between you and your peer.

If the channel stays pending for much longer, look up its funding transaction on a block explorer to see whether it has confirmed. A low-fee transaction just needs more time. See [Closing Lightning Channels](/lightning/closing-channels) for what else "pending" can mean.

## After It Opens

Download a new copy of your channel backup. The file changes every time you open or close a channel. See [Backing Up a Lightning Node](/lightning/backups).

## Next Steps

[Get inbound liquidity so you can receive payments](/lightning/inbound-liquidity)

[Send and receive your first payment](/lightning/payments)
