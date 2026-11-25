---
title: "Alby Hub and Alby Extension"
description: "Run Alby Hub on MyNode to connect your Lightning node to apps and websites, and pair the Alby browser extension for one-click Lightning payments and Nostr logins."
tags:
- "Alby"
- "Alby Hub"
- "Lightning wallet"
- "MyNode"
---

# Alby Hub and Alby Extension

<p class="mn-availability">Community Edition and Premium</p>

[Alby](https://getalby.com) makes it easy to use your Lightning node with apps and websites. There are two parts:

- **Alby Hub** is a Lightning wallet app that runs on your MyNode. It connects apps to your node with Nostr Wallet Connect (NWC), with a spending budget for each app.
- **The Alby browser extension** lets you pay Lightning invoices on websites in one click, and log in to Nostr apps.

## Alby Hub

On MyNode, Alby Hub uses your node's own Lightning (LND) wallet and channels. It doesn't create a separate node.

### Set Up Alby Hub

1. [Create a Lightning wallet](/lightning/create) on your MyNode, if you haven't already.
2. Open the Marketplace on your MyNode, and install **Alby Hub**.
3. Open its app page. The unlock password is in the **App Default Credentials** section. You can change it later in Alby Hub's settings.
4. Click **Open**, unlock Alby Hub, and follow its setup.

<center>
  <figure>
    <img src="/images/lightning/alby/albyhub-app.png" style="width: 600px" alt="Alby Hub app page on MyNode showing it Running, with Open, Restart, Disable and Reset Data buttons, and the installed version">
  </figure>
</center>

Alby Hub uses port 3040, or 3041 for HTTPS, such as `http://192.168.1.100:3040`.

During setup, Alby Hub offers to connect an Alby Account. This is optional. It adds extras like a Lightning address and email notifications.

### Connect Apps

In Alby Hub, go to **Connections** to connect apps that support Nostr Wallet Connect. For each app, you choose what it can do and how much it can spend. You can remove a connection at any time.

### Reset or Recover

- **Reset Data**, on the Alby Hub app page, deletes all Alby Hub data without making a backup. Your Lightning funds and channels stay in your node's LND wallet.
- **Reset Password**, in the Alby Hub section of the MyNode Settings page, deletes Alby Hub's data and sets it up again with a new password. Funds in LND aren't affected.

Back up your Lightning node as usual. See [Backing Up a Lightning Node](/lightning/backups) and [Alby Hub's backup guide](https://guides.getalby.com/user-guide/alby-account-and-browser-extension/alby-hub/backups-and-recover).

## Alby Browser Extension

The Alby extension adds a Lightning wallet to your browser. Websites that support it can ask for a payment, and you approve it with one click, within a budget you set for each site.

### Connect the Extension to Your Node

1. Install the extension from [getalby.com](https://getalby.com).

<center>
  <figure>
    <img src="/images/lightning/alby/alby-1.png" class="app_screenshot" alt="The Alby home page with the Add Browser Extension button highlighted next to Create Account">
  </figure>
</center>

2. Set a passcode to protect the extension.
3. Connect it to your node. You can connect it to Alby Hub, or choose **Connect other wallet** and then **myNode**.

<center>
  <figure>
    <img src="/images/lightning/alby/alby-4.png" class="app_screenshot" alt="Alby Connect Lightning Wallet grid of connector options with the myNode tile highlighted">
  </figure>
</center>

4. Choose what to connect to, such as LND, and follow the instructions in the extension.

<center>
  <figure>
    <img src="/images/lightning/alby/alby-5.png" class="app_screenshot" alt="Alby Connect to myNode screen offering LND, Lightning Terminal, Core Lightning, and LNbits as apps to connect with">
  </figure>
</center>

The extension's setup screens may look different in newer versions. If you can't connect, see [Alby's guides](https://guides.getalby.com/).

## Next Steps

[Get inbound liquidity](/lightning/inbound-liquidity)

[Make Lightning payments](/lightning/payments)
