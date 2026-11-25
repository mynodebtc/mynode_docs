---
title: "Connect Sparrow Wallet to Your Node"
description: "Connect Sparrow Wallet to your MyNode through the Electrum Server or Bitcoin Core RPC, on your home network or over Tor, and fix common Sparrow connection errors."
tags:
- "Sparrow Wallet"
- "Electrum server"
- "Bitcoin Core"
- "MyNode"
---

# Connect Sparrow Wallet to Your Node

[Sparrow](https://sparrowwallet.com/) is a desktop Bitcoin wallet with strong support for hardware wallets, coin control and multisig. By default it uses public servers. This guide connects it to your MyNode instead, so your addresses and balances stay private.

Sparrow can connect in two ways:

| | Private Electrum (recommended) | Bitcoin Core |
|---|---|---|
| **Uses** | MyNode's Electrum Server | Bitcoin Core on MyNode |
| **Ready when** | The Electrum Server has finished indexing | Bitcoin is synced |
| **Loading an older wallet** | Fast | Slow, Bitcoin Core rescans for its history |
| **Works away from home** | Yes, over Tor or Tailscale | Only through a VPN to your home network |

## Option 1: Private Electrum Server

### Step 1: Enable the Electrum Server

On the MyNode home page, enable the Electrum Server. See the [Electrum Server guide](/electrum/electrum) for details.

The first index can take a day or more. Wait until its status on the Electrum Server page shows **Running**. The same page shows your node's IP address and ports.

<center>
  <figure>
    <img src="/images/wallets/electrum-server-info.png" style="width: 600px" alt="Electrum Server Status page on MyNode with Status Running in one tile, and the Electrum Server IP, Standard Port 50001 and Secure Port 50002 in the Info tile">
  </figure>
</center>

### Step 2: Configure Sparrow

1. Open Sparrow, and open its **Settings**. Select the **Server** tab.
2. Choose **Private Electrum**.
3. In the URL field, enter your MyNode's IP address, such as `192.168.1.100`, and port `50002`.
4. Turn on **Use SSL**.
5. Click **Test Connection**.

If the test succeeds, Sparrow shows the server's details and is now using your node. Close the settings, and open or create your wallet.

MyNode's Electrum Server uses a self-signed certificate, since it's on your own network. If Sparrow asks whether to trust it, check that you're on your home network and that the address is your MyNode's, then accept it.

If you can't connect with SSL, you can try port `50001` with **Use SSL** turned off. That connection isn't encrypted, so only use it on a network you trust.

## Option 2: Bitcoin Core

### Step 1: Find Your RPC Credentials

Open the Bitcoin page on your MyNode. The Node section shows the RPC username, and you can click **Show** to see the RPC password.

<center>
  <figure>
    <img src="/images/wallets/bitcoin-rpc-info.png" style="width: 500px" alt="Node section of the MyNode Bitcoin page showing the RPC username mynode and a Show button for the RPC password">
  </figure>
</center>

Treat the RPC password like any other password. Anyone with it can control Bitcoin Core on your node.

### Step 2: Configure Sparrow

1. In Sparrow's **Settings**, select the **Server** tab, and choose **Bitcoin Core**.
2. Enter your MyNode's IP address as the URL, and port `8332`.
3. Choose **User / Pass** authentication, and enter the RPC username and password from MyNode.
4. Click **Test Connection**.

When you open an older wallet for the first time, Sparrow asks Bitcoin Core to scan the blockchain for its history. Setting the wallet's start date in Sparrow's wallet settings can make this much faster.

Bitcoin Core only accepts RPC connections from your local network, so this option won't work over Tailscale or the internet.

## Connecting from Away from Home

### Over Tor

<p class="mn-availability">Premium</p>

Your Electrum Server also has an onion address, which you can use anywhere:

1. Open the Electrum Server page on your MyNode, and copy the **Hostname** under "Electrum Tor Service".
2. In Sparrow, choose **Private Electrum**, and enter the onion address with port `50002`.
3. Turn on **Use SSL**, and click **Test Connection**.

Sparrow uses Tor for onion addresses. The connection is slower than on your home network, but it works from anywhere.

### Over Tailscale

<p class="mn-availability">Premium</p>

If you set up [Tailscale](/networking/tailscale), use your MyNode's Tailscale IP address instead of its local IP address in the Private Electrum settings. Both ports work over Tailscale.

## Troubleshooting

| Problem | What to try |
|---|---|
| Connection refused or timed out | Check the Electrum Server is Running, the IP address is correct, and your computer is on the same network |
| Certificate error | If you reset the Electrum Server certificate or your node's IP address changed, remove the old certificate in Sparrow and connect again. See [Electrum connection errors](/troubleshooting/electrum-connection-error) |
| Wallet shows an error about too many transactions | Raise the Electrum Server's TX Lookup Limit in Settings. See [Electrum Server Stuck Indexing](/troubleshooting/electrum-stuck-indexing#wallet-errors-after-indexing) |
| Bitcoin Core connection rejected | Check the RPC username and password, and that you're on your home network |
| Balance missing with Bitcoin Core | Wait for the rescan to finish, and check the wallet's start date |

## Next Steps

[Choose other wallets that work with your node](/wallets/choosing-a-wallet)

[Set up Tailscale for remote access](/networking/tailscale)
