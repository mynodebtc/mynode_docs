---
title: "Electrum Server"
description: "Enable the Electrum Server on MyNode and connect Electrum, Sparrow and other wallets on desktop and mobile to it, so no third party sees your addresses or balances."
tags:
- "Electrum"
- "Electrum Server"
- "MyNode"
- "Bitcoin wallet"
---

# Electrum Server

<p class="mn-availability">Community Edition and Premium</p>

The Electrum Server lets wallets on your computer or phone get their balances and history from your own node instead of from a public server. It builds an index of the whole blockchain, so wallets can look up any address quickly. MyNode uses [electrs](https://github.com/romanz/electrs) for this.

Many popular wallets can connect to it, including Electrum, [Sparrow](/wallets/sparrow), BlueWallet and Nunchuk. Other MyNode apps rely on it too: [BTC RPC Explorer](/bitcoin/explorer) needs it, and [Mempool](/bitcoin/mempool) uses it to look up addresses. For why this matters, see [Why Use Your Own Node](/wallets/why-use-your-own-node).

## Enable the Electrum Server

1. On the MyNode home page, find the **Electrum Server** tile, and click **Enable**.
2. Wait for it to build its index. This takes hours on a mini PC and can take a day or more on a Raspberry Pi. Your device may be slower during this time.

Click **Info** on the tile to open the Electrum Server page. Its Status tile shows the progress, and says **Running** once it's ready. If it seems stuck, see [My Electrum Server is stuck Indexing](/troubleshooting/electrum-stuck-indexing).

## Connection Details

The Info tile on the Electrum Server page shows what to enter in your wallet:

<center>
  <figure>
    <img src="/images/wallets/electrum-server-info.png" style="width: 600px" alt="Electrum Server Status page on MyNode with Status Running in one tile, and the Electrum Server IP, Standard Port 50001 and Secure Port 50002 in the Info tile">
  </figure>
</center>

| Port | Use |
|---|---|
| **50002** | Secure (SSL). Use this one when your wallet supports it |
| **50001** | Standard, unencrypted. Only for wallets that can't use SSL |

The secure port uses a self-signed certificate, so your wallet may ask you to accept it the first time it connects.

To connect from outside your home, use the Tor hostname shown on the same page (see [Electrum over Tor](/tor/electrum)), the [VPN](/vpn/setup) or [Tailscale](/networking/tailscale).

## Connect Electrum on Desktop

1. In Electrum, open **Tools > Network**, or click the colored circle in the bottom right corner.
2. On the **Server** tab, uncheck **Select server automatically**.
3. Enter your MyNode's IP address with port 50002, such as `192.168.1.100:50002`.

<center>
  <figure>
    <img src="/images/bitcoin/electrum-3.png" alt="Electrum desktop Network dialog on the Server tab, with Select server automatically unchecked and the MyNode IP address entered with port 50002" style="width: 500px">
  </figure>
</center>

When it connects, the circle in the bottom right turns green.

<center>
  <figure>
    <img src="/images/bitcoin/electrum-4.png" alt="Electrum desktop wallet connected, with a green status icon in the bottom right corner of the window" style="width: 500px">
  </figure>
</center>

Electrum can still connect to other servers for some information. To use only your node, reopen the Network dialog, right-click your node in the list, choose **Use as server**, and restart Electrum.

<center>
  <figure>
    <img src="/images/bitcoin/electrum-10.png" alt="Electrum Network dialog on the Overview tab with the MyNode server selected under Connected nodes and the Use as server context menu option showing" style="width: 500px">
  </figure>
</center>

### From the Command Line

You can also start Electrum connected only to your node. Replace the IP address with your own:

```bash
./electrum --oneserver --server 192.168.1.100:50002:s
```

The `:s` at the end means SSL.

## Connect Electrum on Mobile

In Electrum for Android, open the network settings, turn off automatic server selection, and enter your MyNode's IP address and port 50002 as the server. Your phone must be on your home network, or connected through the VPN or Tailscale.

## Other Wallets

- **[Sparrow](/wallets/sparrow):** choose Private Electrum in Sparrow's server settings.
- **Other wallets:** look for a setting called Electrum server, custom server or personal node, and enter the same IP address and port.

Not sure which wallet to use? See [Choosing a Wallet](/wallets/choosing-a-wallet).

## Settings

On the Settings page, under App Settings, the **Electrum Server** section lets you:

- Raise the **TX Lookup Limit** if a wallet with a long history won't load. See [Wallet Errors After Indexing](/troubleshooting/electrum-stuck-indexing#wallet-errors-after-indexing).
- **Regenerate** the server's SSL certificate.
- **Reset** the Electrum Server, which deletes its index and rebuilds it from scratch.

## Troubleshooting

- [My Electrum Wallet is not Connecting](/troubleshooting/electrum-connection-error)
- [My Electrum Server is stuck Indexing](/troubleshooting/electrum-stuck-indexing)

## Next Steps

[Connect Sparrow Wallet to your node](/wallets/sparrow)

[Use the Electrum Server over Tor](/tor/electrum)
