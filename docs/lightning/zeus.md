---
title: "Zeus"
description: "Connect the Zeus mobile wallet to your MyNode Lightning node by scanning a pairing QR code, so you can send, receive and manage channels from your phone at home or away."
tags:
- "Zeus"
- "Lightning wallet"
- "mobile wallet"
- "MyNode"
---

# Zeus

[Zeus](https://zeusln.com) is a mobile wallet for iPhone and Android that can control your MyNode's Lightning node. You get your node's balances, channels and payments in your pocket, using your own funds.

## Before You Start

- [Create a Lightning wallet](/lightning/create) on your MyNode.
- Install Zeus from the App Store or Google Play.

## Pair Zeus with Your Node

1. On the MyNode home page, click the QR code icon on the Lightning tile, and enter your password. See [Pairing Wallets](/lightning/pairing-wallets).
2. Choose **Lightning (REST + Local IP)** to connect from home, or **Lightning (REST + Tor)** to connect from anywhere. The Tor option needs Premium.
3. In Zeus, add a new wallet or node, and choose to scan an lndconnect QR code.

<center>
  <figure>
    <img src="/images/lightning/zeus-mobile-2.png" class="app_screenshot" alt="Zeus Node Configuration screen with host, port, and macaroon fields and the Scan lndconnect config button highlighted">
  </figure>
</center>

4. Scan the QR code shown on your MyNode, and save the node configuration.

<center>
  <figure>
    <img src="/images/lightning/zeus-mobile-4.png" class="app_screenshot" alt="Zeus main screen connected to MyNode, showing Lightning and on-chain balances with Send and Receive buttons and counts of transactions, payments, invoices, and channels">
  </figure>
</center>

Zeus's screens change between versions, so yours may look different. The steps stay the same: add a node, and scan the QR code.

**The pairing QR code gives full control of your Lightning wallet.** Don't share it or take a screenshot of it.

## Using Zeus Away from Home

The Local IP option only works on your home network. To use Zeus elsewhere:

- **Tor:** pair with **Lightning (REST + Tor)**, and turn on Tor in Zeus's settings if it doesn't do it on its own. See [Zeus over Tor](/tor/zeus).
- **VPN or Tailscale:** connect your phone with the [VPN](/vpn/setup) or [Tailscale](/networking/tailscale), and use the Local IP pairing. With Tailscale, change the host in Zeus to your node's Tailscale IP address.

## Next Steps

[Make Lightning payments](/lightning/payments)

[Open a channel](/lightning/opening-channels)
