---
title: "Lightning Network Glossary"
description: "Plain definitions of common Lightning Network terms for node runners, including HTLC, CLTV, SCB, macaroon, LSP, inbound liquidity, keysend, and force close."
tags:
- "Lightning glossary"
- "Lightning Network terms"
- "HTLC"
- "MyNode"
---

# Lightning Network Glossary

Short definitions of terms you'll run into while using Lightning on your MyNode.

## A to C

### Alias

A public display name for your node. It isn't unique, so anyone can use the same one. See [changing your LND alias](/lightning/lnd-alias).

### AMP

Atomic Multi-path Payment. A way to pay a node without an invoice, split across multiple routes. MyNode's default Lightning config accepts these payments.

### Anchor Channel

A channel type with small extra outputs, which let either side raise the fee on a force close after broadcasting it. LND keeps a small on-chain balance in reserve to pay for this.

### Base Fee

The flat part of a [routing](/lightning/routing) fee, charged per forward. LND's default is 1,000 millisats (1 sat).

### BOLT11

The standard format for a Lightning invoice.

### Capacity

The total size of a channel, counting both sides. See [Lightning Basics](/lightning/basics).

### Channel

A shared balance between two Lightning nodes, secured by an on-chain 2-of-2 multisig output.

### Channel Reserve

A small part of a channel's balance, usually about 1%, that each side must keep and can't spend. It means a peer always has something to lose by cheating.

### Clearnet

The regular internet, as opposed to Tor. MyNode uses Tor by default.

### CLTV

CheckLockTimeVerify. A Bitcoin script feature that locks funds until a specific block height. Lightning uses it to give each hop in a payment time to react. The CLTV delta is how many blocks a node requires for that, and LND's default is 80.

### Commitment Transaction

The latest signed but unbroadcast transaction that holds a channel's current balance. Either side can broadcast it to force close the channel.

### Cooperative Close

Closing a channel with both peers' agreement. It's the cheapest and fastest way to close. See [Closing Lightning Channels](/lightning/closing-channels).

### CSV

CheckSequenceVerify. A Bitcoin script feature that locks funds for a number of blocks after a transaction confirms. It's what creates the wait after you force close a channel.

## D to K

### Data Loss Protection

A feature that lets a node that has lost its data ask its peers to close their channels. Channel recovery using an [SCB](#scb) depends on this.

### Force Close

Closing a channel without your peer's cooperation by broadcasting the latest commitment transaction. See [Closing Lightning Channels](/lightning/closing-channels).

### Gossip

How nodes share information about public channels and other nodes across the network.

### HTLC

Hash Time-Locked Contract. The building block of a Lightning payment. Funds on each hop are released when the receiver reveals a secret, or returned when a time limit passes. This makes multi-hop payments safe, since each hop either completes or refunds.

### Inbound Liquidity

The balance on your peer's side of a channel, which determines how much you can receive. See [Inbound Liquidity](/lightning/inbound-liquidity).

### Invoice

A payment request created by the receiver. See [Sending and Receiving Lightning Payments](/lightning/payments).

### Justice Transaction

A transaction that takes the entire balance of a channel when a peer closes it with an old state. Your node, or a [watchtower](/lightning/watchtowers), broadcasts it.

### Keysend

A payment sent directly to a node's public key, without an invoice. MyNode's default Lightning config accepts these payments.

## L to O

### Limbo Balance

Funds from a closing channel that are still locked or unconfirmed, and so aren't in your on-chain wallet yet.

### LND

Lightning Network Daemon. The Lightning node software that MyNode runs.

### LNDHub

A service that lets wallets like [BlueWallet](/lightning/bluewallet) use accounts on your node.

### LNURL

A set of protocols that use a web server to simplify payments, for example with reusable QR codes and withdrawal links.

### Lightning Address

A payment address that looks like an email address, built on LNURL.

### Loop

A Lightning Labs swap service that moves funds between Lightning and on-chain. See [Inbound Liquidity](/lightning/inbound-liquidity#loop-out).

### LSP

Lightning Service Provider. A company that sells channels or liquidity to nodes and wallets.

### Macaroon

A credential that lets an app or wallet access LND with specific permissions. MyNode's Lightning page lets you download the admin, readonly and invoice macaroons. **Treat the admin macaroon like a password**, since it allows spending your funds. "Reset Macaroons" on the Settings page deletes them, and paired wallets stop working until you pair them again.

### Millisat

One thousandth of a satoshi (msat). Lightning tracks balances to this precision, though on-chain transactions only use whole sats.

### MPP

Multi-Path Payment. A single payment split into smaller parts that take different routes to the same destination.

### Node URI

Your node's full address, in the form `pubkey@address:port`. Other nodes use it to connect to you. It's shown on the MyNode Lightning page.

### Onion Routing

A method of encrypting payment details in layers, so each hop knows only the previous and next hop. It's related to, but separate from, Tor.

### Outbound Liquidity

The balance on your side of a channel, which determines how much you can send.

## P to S

### Peer

A node connected directly to yours, usually sharing a channel.

### Pool

A Lightning Labs auction marketplace for buying and selling channels. It's available through [Lightning Terminal](/lightning/lightning-terminal).

### PPM

Parts per million. The usual way to express a percentage routing fee. For example, 1,000 ppm is 0.1%.

### Private Channel

A channel that isn't announced to the network. Also called an unannounced channel. See [Opening Your First Lightning Channel](/lightning/opening-channels).

### Public Key

The unique identifier of your node, also called its pubkey. It's the first part of your node URI.

### Rebalancing

Moving funds between your channels to change their inbound and outbound balances. See [Routing Node Basics](/lightning/routing#keeping-channels-balanced).

### Route Hint

Information in an invoice that helps senders reach a node through a private channel.

### Routing Node

A node that forwards payments for others, usually to earn fees.

### Sat

A satoshi, the smallest on-chain unit of bitcoin. 100,000,000 sats equal 1 BTC.

### SCB

Static Channel Backup. A file that helps you recover channel funds after a failure, along with your seed. See [Backing Up a Lightning Node](/lightning/backups).

### Seed Phrase

The 24 words that back up your LND wallet. Anyone with these words can access your on-chain funds. Keep them secret and offline.

### Submarine Swap

A swap between Lightning and on-chain funds, in which neither side can run away with the money. Loop uses this method.

## T to Z

### Timelock

A condition that prevents funds from being spent until a certain block or amount of time. [CLTV](#cltv) and [CSV](#csv) are the two kinds used in Lightning.

### TLS Certificate

A file wallets use to confirm that they're connecting to your node securely. If you regenerate it from the Lightning page, you may have to pair your wallets again.

### UTXO

Unspent Transaction Output. A chunk of on-chain bitcoin that you can spend. Each channel is funded from one or more UTXOs.

### Watchtower

A service that monitors the blockchain for you and responds if a peer tries to cheat while your node is offline. See [Lightning Watchtowers](/lightning/watchtowers).

### Wumbo Channel

A channel larger than the standard limit of 16,777,215 sats. MyNode's default config doesn't turn this on.
