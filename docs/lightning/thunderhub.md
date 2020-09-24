
# Thunderhub

A GUI to manage lightning channels

## Introduction

Created by Anthony Potdevin, ThunderHub is an open-source LND node manager to monitor your node and manage channels via a web-interface. It allows you to take control of the lightning network with a simple and intuitive UX.

ThunderHub is part of the *Beta Apps* on myNode available only for *premium* users.

![ThunderHub GUI](/images/lightning/ThunderHub/ThunderHub_GUI_comp.png "ThunderHub GUI")

## Features

Find the full list of features on [GitHub](https://github.com/apotdevin/thunderhub) or [website](https://thunderhub.io). Key features are listed below.

### Monitoring
- Overview of current and pending balance for the Lightning and Bitcoin wallets.
- Liquidity report with total remote and local lightning balance.
- Complete network info.
- View open/pending/closed channels and how balanced they are.
- View all transactions.
- View all forwarded payments.
- View all chain transactions.
- View all unspent UTXOS.

### Management

- Send and Receive Lightning payments.
- Send and Receive Bitcoin payments.
- Open and close channels.
- Balance your channels through circular payments. (Check out the Tutorial)
- Backup, verify and recover all your channels.
- Sign and verify messages.

## ThunderHub on myNode

ThunderHub is already configured with default environment variables and connected to the lightning wallet, but it is disabled by default. To enable it, open the myNode homepage and find the tile with the ThunderHub logo under Beta Apps (like the left image below).
<center>
  <figure>
    <img src="/images/lightning/ThunderHub/disabled.png" alt="" style="width: 125px">
    <img src="/images/lightning/ThunderHub/enabled.png" alt="" style="width: 125px">
  </figure>
</center>
Click on the **Enable** button, and wait for the page to refresh.

You should now see a **ThunderHub** button (like shown on the right image above) and a green dot. On clicking this button, a new tab should open on your browser, containing ThunderHub.

On the ThunderHub tab, click the **Login** button, enter your myNode password and then click on **Connect**.

![ThunderHub Connect Interface](/images/lightning/ThunderHub/login.png)

You should end up at the ThunderHub dashboard (as shown in the first image at the top).

## Specs

- Website: [thunderhub.io](https://thunderhub.io)
- Github: [apotdevin/thunderhub](https://github.com/apotdevin/thunderhub)
- Installed location: `/opt/mynode/thunderhub` (NodeJS package)
- Ports: [http://mynode.local:3030/](http://mynode.local:3030/) or [https://mynode.local:3031](https://mynode.local:3031/)
