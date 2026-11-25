---
title: "Bitcoin and Lightning Networks"
description: "Choose whether Bitcoin and Lightning on MyNode connect to peers over Tor, clearnet or I2P, and understand the tradeoffs in privacy, sync speed and Lightning reachability."
tags:
- "Tor"
- "clearnet"
- "Bitcoin"
- "LND"
- "MyNode privacy"
---

# Bitcoin and Lightning Networks

<p class="mn-availability">Community Edition and Premium</p>

Bitcoin and Lightning (LND) on your MyNode connect to other nodes around the world. You can choose which networks they use for those connections: **Tor**, **clearnet** (the regular internet) or, for Bitcoin, **I2P**.

When you first set up MyNode, it asks you to choose **Clearnet** or **Tor**. Clearnet gives a faster blockchain sync, and Tor hides your home IP address from the nodes you connect to. Your choice applies to both Bitcoin and Lightning, and you can change it later on the Settings page. If you didn't choose, MyNode uses Tor.

This setting is about your node's connections to other nodes. To reach your MyNode's web interface and wallets from outside your home, see [Remote Access via Tor](/tor/setup), the [VPN](/vpn/setup) or [Tailscale](/networking/tailscale).

## The Networks

| Network | What it is | Bitcoin | Lightning |
|---|---|---|---|
| **Clearnet** | The regular internet, over IPv4. Peers see your home IP address | Yes | Yes |
| **Tor** | Connections go through the [Tor](https://www.torproject.org/) network. Peers see a `.onion` address instead of your IP address | Yes | Yes |
| **I2P** | Another privacy network, similar to Tor | Yes | No |

## Tradeoffs

| | Tor only | Clearnet only | Both |
|---|---|---|---|
| **Privacy** | Best. Peers don't see your IP address | Peers, and anyone watching the network, can link your node to your IP address | Your IP address is visible, but you can still reach Tor peers |
| **Initial Bitcoin sync** | Slower | Fastest | Varies |
| **Connection stability** | Less consistent. Tor circuits can be slow or drop | Most stable | Stable |
| **Router setup** | None | Optional port forwarding for incoming connections | Optional port forwarding for incoming connections |
| **Lightning reachability** | Only Tor-capable nodes can connect to you | Tor-only nodes can't be reached | Reachable by everyone |

### Which Should You Use?

- **Most people:** use Tor only. Privacy is one of the main reasons to run your own node, and Tor protects it.
- **Slow initial sync:** turn on clearnet for Bitcoin while it syncs, then switch back to Tor only. See [Bitcoin Sync is Slow](/troubleshooting/bitcoin-sync-slow).
- **Routing node:** turn on both clearnet and Tor for Lightning. Clearnet connections are more reliable, and many routing nodes prefer clearnet peers. See [Routing](/lightning/routing).
- **Extra privacy for Bitcoin:** add I2P alongside Tor, so Bitcoin has more peers that don't see your IP address.

## Change the Networks

1. Open the **Settings** page, and find the **Networking** section.
2. Under **Bitcoin and Lightning Networks**, turn on the networks you want for Bitcoin and for Lightning. Keep at least one network on for each.
3. Click **Save**. Your device reboots, and Bitcoin and LND use the new settings.

<center>
  <figure>
    <img src="/images/networking/bitcoin-lightning-networks.png" style="width: 700px" alt="Bitcoin and Lightning Networks setting on the MyNode Settings page with switches for Clearnet, Tor and I2P for Bitcoin, and Clearnet and Tor for Lightning. Tor is on for both">
  </figure>
</center>

If you use a [custom Bitcoin config](/advanced/customize-config), it replaces MyNode's generated config, including these network settings. Set the networks in your custom config instead.

## Using Clearnet

### Bitcoin

With clearnet on, Bitcoin connects to peers over IPv4. It syncs and works normally without any router changes.

To also accept incoming connections from other nodes, forward port 8333 on your router to your MyNode. MyNode's firewall already allows it. See [Choosing Which Services Are Reachable From the Internet](/networking/reachable-from-internet).

### Lightning

With clearnet on, LND tries to open port 9735 on your router automatically using UPnP. If your router doesn't support UPnP or has it turned off, forward port 9735 to your MyNode yourself. Without an open port, you can still open channels to others, but other nodes can't connect to you over clearnet.

When clearnet is on, your node's IP address is published to the Lightning network, so anyone can see it.

When both clearnet and Tor are on, LND runs in hybrid mode. It connects to clearnet peers directly and to Tor peers over Tor. MyNode turns off Tor stream isolation in this mode.

## Other Tor Settings

The **Tor** section of the Settings page has a few related options:

- **Use Tor Stream Isolation for LND** increases privacy, but can use a lot of resources on a node with many channels.
- **Reset Tor Connections** restarts Tor with new connections if Tor is performing poorly. Your onion addresses stay the same.
- **Reset Tor Data** resets your Tor settings and gives your node new onion addresses. Wallets and peers that use your old addresses will stop working.

## Next Steps

[Choose which services are reachable from the internet](/networking/reachable-from-internet)

[Set up remote access over Tor](/tor/setup)
