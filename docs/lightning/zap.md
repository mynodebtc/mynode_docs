---
title: "Zap"
description: "Connect the Zap desktop or Android wallet to your MyNode Lightning node with an lndconnect URL or QR code. Zap is no longer actively developed, so consider Zeus instead."
tags:
- "Zap"
- "Lightning wallet"
- "desktop wallet"
- "MyNode"
---

# Zap

::: warning
Zap is no longer actively developed. It may not work with newer versions of LND. For a mobile wallet that controls your node, use [Zeus](/lightning/zeus). For a desktop interface, use [RTL](/lightning/rtl) or [Thunderhub](/lightning/thunderhub) in your browser.
:::

Zap is a Lightning wallet for desktop and Android that can connect to your MyNode's Lightning node. If you already use it, these steps still apply.

## Before You Start

[Create a Lightning wallet](/lightning/create) on your MyNode. Then, on the MyNode home page, click the QR code icon on the Lightning tile, and enter your password. See [Pairing Wallets](/lightning/pairing-wallets).

## Zap Desktop

1. In Zap, click **Create new wallet**, choose **Connect**, and click **Next**.

<center>
  <figure>
    <img src="/images/lightning/zap-desktop-1.png" style="width: 500px" alt="Zap desktop app with no wallets yet and the Create new wallet button highlighted">
  </figure>
</center>

2. On MyNode's Pair Wallet page, choose **Zap (Local IP)**, and copy the URL.
3. Paste it into the **Connection String** box in Zap, and click **Next** twice.

<center>
  <figure>
    <img src="/images/lightning/zap-desktop-2.png" style="width: 500px" alt="Zap Connection details screen with an lndconnect URL pasted into the Connection String box and a Next button">
  </figure>
</center>

Zap connects and shows your node's balance.

## Zap for Android

1. In Zap, tap **Connect to Remote Node**.
2. On MyNode's Pair Wallet page, choose **Zap (Local IP)**, or **Zap (Tor)** with Premium.
3. Scan the QR code with Zap.

<center>
  <figure>
    <img src="/images/lightning/zap-mobile-2.png" class="app_screenshot" alt="Zap mobile camera view scanning the LND Connect QR code displayed on the MyNode page">
  </figure>
</center>

**The pairing QR code and URL give full control of your Lightning wallet.** Don't share them.

## Next Steps

[Set up Zeus instead](/lightning/zeus)
