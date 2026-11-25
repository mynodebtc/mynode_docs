---
title: "Ride the Lightning (RTL)"
description: "Use Ride the Lightning on MyNode to manage your Lightning node from a browser: open and close channels, send and receive payments, set routing fees and check balances."
tags:
- "RTL"
- "Ride the Lightning"
- "Lightning node"
- "MyNode"
---

# Ride the Lightning (RTL)

<p class="mn-availability">Community Edition and Premium</p>

[Ride the Lightning](https://github.com/Ride-The-Lightning/RTL) (RTL) is a web interface for managing your MyNode's Lightning node. It covers everything from everyday payments to channel management and routing fees, and works from any browser on your network.

![RTL dashboard showing wallet balance, peers, channel balance, fee report, channel status, a local and remote capacity chart, and fee rate tables](/images/lightning/RTL/RTL_main_page_comp.png)

## Before You Start

[Create a Lightning wallet](/lightning/create) on your MyNode first. RTL shows **Waiting on Lightning** until it exists.

## Open RTL

1. On the MyNode home page, click **Info** on the RTL tile.
2. Find the password in the **App Default Credentials** section of the app page.
3. Click **Open**, and log in with that password.

<center>
  <figure>
    <img src="/images/lightning/RTL/rtl-app.png" style="width: 600px" alt="RTL app page on MyNode with Open, Restart and Disable buttons, and instructions saying RTL asks only for a password, shown in the App Default Credentials section">
  </figure>
</center>

RTL uses port 3010, or 3011 for HTTPS, such as `http://192.168.1.100:3010`.

If you lose the password, use **Set RTL Password** in the RTL section of the Settings page. **Reset RTL Configuration** in the same section deletes RTL's settings and restarts it.

## Fund Your Lightning Wallet

Before you can open channels, send bitcoin to your node's on-chain Lightning wallet. In RTL, go to **On-chain**, and click **Generate Address**. Send bitcoin to that address, and wait for it to confirm.

## Open a Channel

1. Go to **Lightning > Peers/Channels**.
2. Under **Peers**, click **Add Peer**, and enter the node's address.
3. Under **Channels**, click **Open Channel**, choose the peer, and enter the amount.

![RTL Peers/Channels page with the Peers tab under Connections selected](/images/lightning/RTL/RTL_create_peer_comp.png)

The channel shows as pending until its funding transaction confirms. For help choosing peers and amounts, see [Opening Channels](/lightning/opening-channels).

## Send and Receive Payments

Go to **Lightning > Transactions**.

- **To pay**, click **Send Payment**, paste the invoice, check the details, and click **Send Payment**.
- **To receive**, create an invoice with the amount, and share it with the payer.

![RTL Transactions page with the Send Payment button](/images/lightning/RTL/RTL_payments_comp.png)

To receive payments, your channels need inbound liquidity. See [Inbound Liquidity](/lightning/inbound-liquidity).

## Other Things RTL Can Do

- **Routing fees.** Set fees for each channel, and see your forwarding history and earnings. See [Routing](/lightning/routing).
- **Rebalance channels** with circular payments.
- **Close channels.** See [Closing Channels](/lightning/closing-channels).
- **Sign and verify messages** with your node's key.

## Next Steps

[Open your first channel](/lightning/opening-channels)

[Compare with Thunderhub](/lightning/thunderhub)
