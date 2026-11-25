---
title: "BTCPay Server"
description: "Set up BTCPay Server on MyNode to accept Bitcoin and Lightning payments without a middleman: log in, create a store, connect a wallet and Lightning, and make your store public."
tags:
- "BTCPay Server"
- "Bitcoin payments"
- "MyNode"
- "merchant tools"
---

# BTCPay Server

<p class="mn-availability">Community Edition and Premium</p>

[BTCPay Server](https://btcpayserver.org/) is a free, open source payment processor. Running it on your MyNode lets you accept Bitcoin and Lightning payments straight to your own wallet, with no payment company in between and no fees beyond network fees.

You can use it for an online store, a point-of-sale app for in-person sales, invoices, payment buttons, crowdfunding and more.

![BTCPay Server screens: a checkout page with a QR code, the store dashboard with wallet balance and recent transactions, and a point-of-sale store with products](/images/btcpay-server/btcpay-overview.png)

## Before You Start

- Bitcoin must be fully synced.
- BTCPay Server needs [Lightning](/lightning/create) set up on your MyNode, even if you only plan to accept on-chain payments.

## Step 1: Install and Log In

1. Open the Marketplace on your MyNode, and install **BTCPay Server**.
2. Open its app page. MyNode creates the administrator account for you, so nobody else on your network can claim it first. The email and password are in the **App Default Credentials** section.
3. Click **Open**, and log in with those details.

<center>
  <figure>
    <img src="/images/btcpay-server/btcpay-app.png" style="width: 600px" alt="BTCPay Server app page on MyNode with Open, Restart and Disable buttons, the installed version, and instructions explaining that MyNode created the administrator account shown in the App Default Credentials section">
  </figure>
</center>

BTCPay Server uses port 49393, such as `https://192.168.1.100:49393`. Your browser will warn about the self-signed certificate the first time.

**Change the password** once you're in, from your account settings in BTCPay. MyNode stops showing it once you've changed it. If you lose your password, go to the **BTCPay Server** section of the MyNode Settings page and use **Recover Administrator Access** to set a new one.

## Step 2: Create a Store

1. In BTCPay, create a store, and give it a name and default currency.
2. Set up a Bitcoin wallet for the store. The safest option is to **connect an existing wallet**, such as a hardware wallet, by importing its public key (xpub). BTCPay can then create addresses for payments but can't spend your funds.

Creating a new hot wallet in BTCPay stores the keys on your node. If you do this, back up the recovery phrase it shows you.

## Step 3: Set Up Lightning

In your store's Lightning settings, choose your MyNode's internal Lightning node. Payments then go to your MyNode's Lightning wallet.

To receive Lightning payments, your node needs inbound liquidity. See [Inbound Liquidity](/lightning/inbound-liquidity).

## Step 4: Start Accepting Payments

From BTCPay's menu, you can:

- **Create an invoice** to request a specific amount.
- **Add a Point of Sale app** for in-person sales or a simple online shop.
- **Connect an e-commerce plugin**, such as WooCommerce or Shopify.

See [BTCPay Server's documentation](https://docs.btcpayserver.org/) for each feature.

## Making Your Store Public

Customers who pay through your store need to reach your BTCPay Server from the internet.

### Over Tor

The simplest option is BTCPay's Tor address. You don't need to change your router, but customers need a Tor-capable browser. See [Web UI over Tor](/tor/web-gui) to find your onion addresses.

### With a Domain Name

1. **Forward a port.** On your router, forward external port 443 to port 49393 on your MyNode's IP address.

<center>
  <figure>
    <img src="/images/btcpay-server/router.png" style="width: 600px" alt="Router port forwarding settings forwarding external port 443 to port 49393 on the MyNode's local IP address">
  </figure>
</center>

2. **Check the firewall.** BTCPay Server must be selected under **Settings > Firewall > Reachable From the Internet**. It is by default. See [Choosing Which Services Are Reachable From the Internet](/networking/reachable-from-internet).
3. **Point a domain at your home.** At your domain registrar, add an **A record** for a subdomain, such as `store.example.com`, with your home's public IP address as the value.
4. **Allow the name on MyNode.** Add `store.example.com` under **Settings > Firewall > Allowed Host Names**. Without this, the domain shows a 421 error instead of your store. See [Allowed Host Names](/networking/allowed-host-names).

MyNode's BTCPay Server uses a self-signed certificate, so visitors will see a security warning. For a store customers use, put it behind a reverse proxy that has a trusted certificate. Also check whether your home IP address changes, and use a dynamic DNS service if it does. See [BTCPay's guide to changing domains](https://docs.btcpayserver.org/Deployment/ChangeDomain/) for more.

Making a service reachable from the internet exposes it to everyone. Keep BTCPay Server updated and use a strong password.

## Next Steps

[Set up inbound liquidity for Lightning payments](/lightning/inbound-liquidity)
