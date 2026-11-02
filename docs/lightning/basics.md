---
title: "Lightning Basics for Node Runners"
description: "Learn how the Lightning Network works on your MyNode: channels, capacity, on-chain and Lightning balances, and what your node does for you while it runs."
tags:
- "Lightning Network"
- "Lightning channels"
- "LND"
- "MyNode"
---

# Lightning Basics for Node Runners

Lightning is a payment network built on top of Bitcoin. Payments settle in seconds and usually cost very little, because most of them never touch the blockchain. MyNode runs [LND](https://github.com/lightningnetwork/lnd), a Lightning node, alongside Bitcoin.

This guide explains the ideas you need before you put funds into Lightning. If you haven't set up a wallet yet, start with [Create a Lightning Wallet](/lightning/create).

## Channels

A channel is a shared balance between two Lightning nodes. To open one, a node sends bitcoin to a 2-of-2 multisig address on the blockchain. The two nodes can then update how that balance is split between them as often as they like, without any new on-chain transactions.

When the channel closes, one final on-chain transaction pays each side its share. Only the opening and closing transactions appear on the blockchain.

## Capacity, Outbound and Inbound

A channel's capacity is its total size, and it doesn't change while the channel is open. What changes is which side of the channel holds the funds.

- **Outbound liquidity** is the part on your side. It's how much you can send.
- **Inbound liquidity** is the part on your peer's side. It's how much you can receive.

For example, suppose you open a 1,000,000 sat channel:

| | Your side (outbound) | Peer's side (inbound) |
|---|---|---|
| After opening | 1,000,000 sats | 0 sats |
| After you pay 200,000 sats | 800,000 sats | 200,000 sats |
| After you receive 50,000 sats | 850,000 sats | 150,000 sats |

The first row explains the most common surprise on Lightning: a channel you open yourself can't receive anything until some of its balance has moved to the other side. See [Inbound Liquidity](/lightning/inbound-liquidity) for ways to fix that.

These figures are simplified. Each side must also keep a small reserve in the channel, usually around 1% of its capacity, and some of the balance covers the fees for closing the channel. You can't spend quite all of a channel's balance.

## Payments Cross Other Nodes

You don't need a channel with everyone you pay. A payment can hop across several channels to reach its destination, and each node along the way can charge a small fee for forwarding it.

Hash time-locked contracts (HTLCs) make those hops safe. Either the whole payment completes or it fails and the funds return to you, so a node in the middle can't take your money. Onion routing also means that nodes along the way generally can't see who sent the payment or where it ends up.

## On-chain and Lightning Funds

Your Lightning wallet has two balances, and both appear in the Balances section of the MyNode Lightning page.

| | On-chain Balance | Channel Balance |
|---|---|---|
| **Where the funds are** | Regular Bitcoin addresses in your LND wallet | Inside your open channels |
| **Used for** | Opening channels and paying closing fees | Lightning payments |
| **Speed** | Needs block confirmations | Seconds |
| **Fees** | Bitcoin network fee | Usually small routing fees |
| **Recovered from your seed alone?** | Yes | No, see [Backing Up a Lightning Node](/lightning/backups) |

LND's on-chain wallet is separate from any other Bitcoin wallet you use with your node. To add funds to Lightning, you first send bitcoin to your LND wallet, then open a channel with it.

LND also holds back a small on-chain balance to pay fees if a channel has to be force closed: roughly 10,000 sats per channel, up to 100,000 sats. That's why it may not let you spend your last few sats on-chain.

## What Your Node Does

While it's running, your node:

- Sends and receives your payments.
- Forwards payments for other nodes through your public channels.
- Learns the network's public channels so it can find routes.
- Watches the blockchain to make sure no peer tries to close a channel with an out-of-date balance.

That last job is why uptime matters. A peer could try to cheat while you're offline, and your node has to respond within a time limit. A short restart or upgrade isn't a concern, but plan ahead if your node will be off for days at a time. A [watchtower](/lightning/watchtowers) can protect you while it's offline.

## Lightning on MyNode

- **Tor is on by default.** Your node's address is a `.onion` address, so peers don't see your home IP address. You can change this in [Using Tor for Bitcoin and LND](/networking/tor).
- **You can choose your interface.** The Lightning page shows your balances, channels and peers. Apps like [Ride the Lightning](/lightning/rtl) and [Thunderhub](/lightning/thunderhub) let you open channels and make payments, and you can [pair a mobile wallet](/lightning/pairing-wallets).
- **Lightning needs its own backup.** Your seed phrase alone doesn't recover funds in channels. Read [Backing Up a Lightning Node](/lightning/backups) before adding funds.

## Before You Add Funds

Lightning software holds real money on hot keys, on a device connected to the internet. Start with an amount you could afford to lose while you learn, and add more once you're comfortable.

## Next Steps

[Open your first channel](/lightning/opening-channels)

[Look up a term in the Lightning glossary](/lightning/glossary)
