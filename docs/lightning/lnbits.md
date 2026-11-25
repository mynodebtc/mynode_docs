---
title: "LNbits"
description: "Run LNbits on MyNode to create separate Lightning wallets on top of your node, share them with family or a business, and add extensions like point of sale, paywalls and LNURL."
tags:
- "LNbits"
- "Lightning apps"
- "MyNode"
- "Lightning wallet"
---

# LNbits

<p class="mn-availability">Premium</p>

[LNbits](https://lnbits.com) adds a layer of wallets and accounts on top of your MyNode's Lightning node. You can create as many wallets as you like, each with its own balance, and share them with other people without giving them access to your whole node.

It's popular for giving family members their own wallet, running a shop's point of sale, or trying Lightning apps through its many extensions.

![LNbits wallet with a balance, Send and Receive buttons, a list of transactions, wallet keys, and a sidebar of wallets and extensions](/images/lightning/lnbits/lnbits-wallet.png)

## How It Works

All LNbits wallets share your node's Lightning channels and funds. Each wallet's balance is an entry in LNbits' database, not separate bitcoin. If someone has a wallet on your LNbits, they're trusting you to honor its balance.

## Before You Start

[Create a Lightning wallet](/lightning/create) on your MyNode, and open at least one channel. To receive payments into LNbits wallets, your node also needs inbound liquidity. See [Inbound Liquidity](/lightning/inbound-liquidity).

## Set Up LNbits

1. Open the Marketplace on your MyNode, and install **LNbits**.
2. Open its app page. The admin username and password are in the **App Default Credentials** section.
3. Click **Open**, and log in.

<center>
  <figure>
    <img src="/images/lightning/lnbits/lnbits-app.png" style="width: 600px" alt="LNbits app page on MyNode showing it running, with Open, Restart and Disable buttons and the installed version">
  </figure>
</center>

LNbits uses port 5000, or 5001 for HTTPS, such as `http://192.168.1.100:5000`.

## Using LNbits

- **Create wallets.** Click **Add a wallet** in the sidebar. Each wallet has its own balance, history and API keys.
- **Share a wallet.** Each wallet has its own link. Anyone with the link can use that wallet, so treat it like a password.
- **Add extensions.** Under **Extensions**, turn on features like a point of sale (TPoS), paywalls, LNURL withdraw links and Lightning addresses.

See [LNbits' documentation](https://docs.lnbits.org/) for each extension.

## Sharing LNbits Outside Your Home

To let others use their wallets from anywhere, they need to reach your LNbits from the internet. MyNode's firewall allows LNbits' ports, 5000 and 5001, from the internet by default, but you also need to forward a port on your router. See [Choosing Which Services Are Reachable From the Internet](/networking/reachable-from-internet). Making LNbits public exposes it to everyone, so keep it updated.

## Settings

The LNbits section of the MyNode Settings page has:

- **Recover super_user**, which gives LNbits' super user a new password, shown on the app page. Use it if you changed the password and lost it.
- **Reset LNbits Data**, which deletes all LNbits users, wallets and extensions. The funds stay in your node's Lightning wallet, but the balances in LNbits wallets are gone.

## Next Steps

[Get inbound liquidity](/lightning/inbound-liquidity)
