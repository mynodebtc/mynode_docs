---
title: "BlueWallet (LND Hub)"
description: "Run LND Hub on MyNode and connect BlueWallet to it, so the Lightning wallets in BlueWallet on your phone use your own node's channels instead of a third party's."
tags:
- "BlueWallet"
- "LND Hub"
- "Lightning wallet"
- "MyNode"
---

# BlueWallet (LND Hub)

<p class="mn-availability">Community Edition and Premium</p>

[LND Hub](https://github.com/BlueWallet/LndHub) is a wallet server from the makers of [BlueWallet](https://bluewallet.io). Running it on your MyNode lets BlueWallet create Lightning wallets that use your own node's channels and funds.

Each LND Hub wallet is an account on your node, a bit like [LNbits](/lightning/lnbits). You can create wallets for yourself or for family members.

## How It Works

LND Hub wallets share your node's Lightning channels and funds. Each wallet's balance is an entry in LND Hub, not separate bitcoin. To receive payments, your node needs inbound liquidity. See [Inbound Liquidity](/lightning/inbound-liquidity).

## Set Up LND Hub

1. [Create a Lightning wallet](/lightning/create) on your MyNode, and open at least one channel.
2. On the MyNode home page, find the **LND Hub** tile, and click **Enable**. If it isn't there, install LND Hub from the Marketplace first.

<center>
  <figure>
    <img src="/images/lightning/lndhub-app.png" style="width: 600px" alt="LND Hub app page on MyNode showing it running, with Open, Restart and Disable buttons and the installed version">
  </figure>
</center>

LND Hub uses port 3000, or 3001 for HTTPS. Clicking **Open** shows LND Hub's status page, but you don't need it to use BlueWallet.

## Connect BlueWallet

1. On the MyNode home page, click the QR code icon on the Lightning tile, and enter your password. See [Pairing Wallets](/lightning/pairing-wallets).
2. Choose **Blue Wallet (LNDHub + Local IP)** to connect from home, or **Blue Wallet (LNDHub + Tor)** to connect from anywhere. The Tor option needs Premium.
3. In BlueWallet, go to **Settings > Lightning Settings**, and scan the QR code, or enter the URL shown. Save it.

<center>
  <figure>
    <img src="/images/lightning/bluewallet-3.png" class="app_screenshot" alt="Lightning Settings in Blue Wallet with the MyNode LNDHub URL entered on port 3000 and a Save button">
  </figure>
</center>

New Lightning wallets you add in BlueWallet now use your MyNode.

BlueWallet's Lightning features have changed over time. If your version doesn't offer Lightning Settings or LNDHub wallets, use [Zeus](/lightning/zeus) instead, which connects to your node directly.

## Using BlueWallet On-Chain with Your Node

BlueWallet can also use your node for its on-chain wallets, through the [Electrum Server](/electrum/electrum). On the Pair Wallet page, choose **Blue Wallet (Electrum + Local IP)** or **Blue Wallet (Electrum + Tor)**, and enter the details in BlueWallet's Electrum server settings.

## Next Steps

[Get inbound liquidity](/lightning/inbound-liquidity)
