---
title: "Choosing a Wallet for Your Node"
description: "Compare Bitcoin and Lightning wallets that connect to your MyNode, including Sparrow, Electrum, BlueWallet, Nunchuk, Specter and Zeus, and how each one connects."
tags:
- "Bitcoin wallet"
- "Lightning wallet"
- "connect wallet to node"
- "MyNode"
---

# Choosing a Wallet for Your Node

Many wallets can use your MyNode instead of a public server. They connect in one of three ways:

- **Electrum Server**, for on-chain bitcoin. Most popular wallets support it.
- **Bitcoin Core RPC**, for on-chain bitcoin. Used by a few wallets that talk to Bitcoin Core directly.
- **LND or LND Hub**, for Lightning. See [Pairing Wallets](/lightning/pairing-wallets).

If you're new to this, read [Why Use Your Own Node with Your Wallet](/wallets/why-use-your-own-node) first.

## Wallet Comparison

| Wallet | Platforms | Connects through | Good for |
|---|---|---|---|
| [Sparrow](/wallets/sparrow) | Desktop | Electrum Server or Bitcoin Core | Hardware wallets, coin control, multisig |
| [Electrum](/electrum/electrum) | Desktop, Android | Electrum Server | A long-established, lightweight wallet |
| Nunchuk | Desktop, mobile | Electrum Server | Multisig and hardware wallets |
| Blockstream Green | Desktop, mobile | Electrum Server | Simple everyday wallet, hardware wallets |
| [BlueWallet](/lightning/bluewallet) | Mobile | Electrum Server for on-chain, LND Hub for Lightning | One app for on-chain and Lightning |
| [Specter](/multisig/specter) | App on MyNode, desktop | Bitcoin Core | Multisig with hardware wallets |
| Fully Noded | iOS, macOS | Bitcoin Core over Tor | Advanced users who want full control |
| [Zeus](/lightning/zeus) | Mobile | LND | Managing your Lightning node from your phone |
| [Alby Hub](/lightning/payments#lnurl-and-lightning-addresses) | App on MyNode | LND | Lightning payments and connecting Lightning apps |
| [LNbits](/lightning/lnbits) | App on MyNode | LND | Lightning accounts for family, shops and extensions |

Wallets change their features over time, so check a wallet's own documentation for the current details.

## Choosing Between Them

- **For savings with a hardware wallet**, use Sparrow, Nunchuk or Specter. They work with most hardware wallets, and Sparrow and Nunchuk also connect through your Electrum Server.
- **For an everyday phone wallet**, BlueWallet or Blockstream Green can connect to your Electrum Server. For Lightning payments on the go, use Zeus.
- **For multisig**, Sparrow, Nunchuk and Specter all support it.
- **For Lightning on your node**, see the [Lightning guides](/lightning/basics). Lightning wallets need channels, which on-chain wallets don't.

## Electrum Server or Bitcoin Core?

Prefer the Electrum Server when your wallet supports it.

| | Electrum Server | Bitcoin Core RPC |
|---|---|---|
| **Setup on MyNode** | Enable the app and wait for it to finish indexing | Ready once Bitcoin is synced |
| **Loading an older wallet** | Fast, since every address is already indexed | Can be slow, since Bitcoin Core has to rescan the blockchain |
| **Wallet support** | Many wallets | A few wallets |
| **Remote access** | Over Tor, [Tailscale](/networking/tailscale) or a VPN | Over Tor or a VPN, but not over Tailscale |
| **Ports** | 50002 (SSL) or 50001 | 8332 |

You can find the Electrum Server's address and ports on its page in MyNode, and the Bitcoin Core RPC username and password on the Bitcoin page.

## Wallets That Can't Use Your Node

Some wallets only work with their developer's own servers or run their own built-in node. Phoenix and Wallet of Satoshi are examples. They can still be good wallets, but they won't use your node, and custodial wallets hold your bitcoin for you.

## Using Your Wallet Away from Home

Your node's local IP address only works on your home network. Away from home, you can connect through:

- **[Tor](/tor/setup)**, using the onion address for each service on the MyNode Tor page.
- **[Tailscale](/networking/tailscale)**, a private network between your devices.
- **[A VPN](/vpn/setup)** to your home network.

All three remote access options are MyNode Premium features.

## Next Steps

[Connect Sparrow Wallet to your node](/wallets/sparrow)

[Pair a Lightning wallet](/lightning/pairing-wallets)
