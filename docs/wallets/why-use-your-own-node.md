---
title: "Why Use Your Own Node with Your Wallet"
description: "Learn why connecting your Bitcoin wallet to your own node matters: privacy from public servers, verifying your own transactions, and how to connect a wallet to MyNode."
tags:
- "Bitcoin node"
- "Bitcoin wallet privacy"
- "full node"
- "MyNode"
---

# Why Use Your Own Node with Your Wallet

Running a node is only half the job. Your wallet still needs to be connected to it. Out of the box, most wallets connect to servers run by the wallet's developer or by strangers. This guide explains why that matters and how to change it.

## What Your Wallet Asks a Server

A wallet doesn't store the blockchain. To show your balance, it asks a server which transactions belong to your addresses, and it sends your new transactions through that server.

When that server belongs to someone else, they can see:

- **All of your addresses**, and so your balance and full transaction history.
- **Your IP address**, which can reveal roughly where you are.
- **When you're online** and when you make payments.

Even if a server's operator is trustworthy, that data can leak, be sold, or be handed over. Combined, it links your identity to your bitcoin.

## What Changes with Your Own Node

| | Public server | Your MyNode |
|---|---|---|
| **Who sees your addresses** | The server's operator | Only you |
| **Who verifies your balance** | You trust the server | Your node checks every block and transaction itself |
| **Fee estimates and history** | Whatever the server reports | Calculated from your own copy of the blockchain |
| **Censorship** | A server can refuse to broadcast or hide transactions | Your node talks directly to the Bitcoin network |
| **Availability** | Depends on someone else's service | Works as long as your node is running |

### Privacy

When your wallet queries your own node, nobody else learns which addresses are yours. If you choose Tor for Bitcoin and Lightning, which MyNode offers during setup, your home IP address is also hidden from other nodes. See [Bitcoin and Lightning Networks](/networking/tor).

### Verification

Your node downloads and checks every block against Bitcoin's rules. When it says a payment has confirmed, you don't have to trust anyone else's word for it. That's the meaning of the phrase "don't trust, verify".

### Supporting the Network

Every node that enforces the rules makes Bitcoin harder to change without users' consent. Connecting your wallet makes your node the source of truth for your own money, which is what gives your node a say.

## What It Doesn't Change

- **Your keys stay in your wallet.** Connecting a wallet to your node doesn't move your seed phrase or private keys there. A hardware wallet still signs transactions on the device.
- **Your node needs to be reachable.** On your home network this just works. Away from home, use [Tor](/tor/setup), [Tailscale](/networking/tailscale) or a [VPN](/vpn/setup), which are MyNode Premium features.
- **Lightning is separate.** On-chain wallets connect through the Electrum Server or Bitcoin Core. Lightning wallets connect to LND. See [Pairing Wallets](/lightning/pairing-wallets).

## How to Connect a Wallet

Most on-chain wallets connect through MyNode's **Electrum Server**. It's built for this job, so it's fast and works with many wallets.

1. Enable the [Electrum Server](/electrum/electrum) on your MyNode and wait for it to finish indexing. This can take a day or more the first time.
2. In your wallet's server settings, enter your MyNode's IP address and port 50002.
3. Turn off any option that automatically picks a public server.

The Electrum Server page on your MyNode shows the address and ports to use.

<center>
  <figure>
    <img src="/images/wallets/electrum-server-info.png" style="width: 600px" alt="Electrum Server Status page on MyNode with Status Running and the current block in one tile, and the Electrum Server IP, Standard Port 50001 and Secure Port 50002 in the Info tile">
  </figure>
</center>

## Next Steps

[Choose a wallet that works with your node](/wallets/choosing-a-wallet)

[Connect Sparrow Wallet to your node](/wallets/sparrow)
