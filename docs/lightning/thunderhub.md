---
title: "Thunderhub"
description: "Use Thunderhub on MyNode to monitor and manage your Lightning node from a modern web interface: channels, balances, payments, routing fees, rebalancing and backups."
tags:
- "Thunderhub"
- "Lightning node"
- "channel management"
- "MyNode"
---

# Thunderhub

<p class="mn-availability">Premium</p>

[Thunderhub](https://thunderhub.io) is a web interface for monitoring and managing your MyNode's Lightning node. It's similar to [RTL](/lightning/rtl), with a clean layout that also works well on a phone.

![Thunderhub dashboard showing the node's balances, channels and recent activity](/images/lightning/ThunderHub/ThunderHub_GUI_comp.png)

## Before You Start

[Create a Lightning wallet](/lightning/create) on your MyNode first.

## Open Thunderhub

1. If Thunderhub isn't on your home page, install it from the Marketplace.
2. On the MyNode home page, click **Info** on the Thunderhub tile. Click **Enable** if it's disabled.
3. Find the master password in the **App Default Credentials** section of the app page.
4. Click **Open**, click **Login**, and enter the master password.

<center>
  <figure>
    <img src="/images/lightning/ThunderHub/thunderhub-app.png" style="width: 600px" alt="Thunderhub app page on MyNode with Open, Restart and Disable buttons, and instructions saying Thunderhub asks for a master password, shown in the App Default Credentials section">
  </figure>
</center>

Thunderhub uses port 3030, or 3031 for HTTPS, such as `http://192.168.1.100:3030`.

If you lose the password, use **Set Thunderhub Password** in the Thunderhub section of the Settings page. **Reset Thunderhub Configuration** in the same section deletes its settings and restarts it.

## What You Can Do

**Monitor your node**

- Lightning and on-chain balances, including pending amounts.
- A liquidity report showing your total inbound and outbound capacity.
- Open, pending and closed channels, and how balanced each one is.
- Payments, invoices, forwards and on-chain transactions.

**Manage your node**

- Send and receive Lightning and on-chain payments.
- Open and close channels.
- Set routing fees for each channel.
- Rebalance channels with circular payments.
- Download your channel backup, and sign and verify messages.

For background on these, see the [Lightning guides](/lightning/basics).

## Next Steps

[Set routing fees](/lightning/routing)

[Back up your Lightning node](/lightning/backups)
