---
title: "Lightning Routing Node Basics"
description: "Get started running a Lightning routing node on MyNode: setting forwarding fees, rebalancing channels, and using LNDg, Thunderhub, and Balance of Satoshis tools."
tags:
- "Lightning routing node"
- "Lightning fees"
- "channel rebalancing"
- "MyNode"
---

# Lightning Routing Node Basics

Any node with public channels can forward payments between other nodes and earn small fees. This guide covers the basics, in case you'd like to try it.

Be realistic about what to expect. Routing is a good way to learn and to help the network, but most small nodes earn very little. Opening channels, rebalancing and closing all cost money, and those costs can easily exceed your fee income. Don't commit more funds than you'd be happy to leave on a hot wallet.

## What Makes a Good Routing Node

- **Uptime.** A node that's often offline fails payments and loses peers.
- **Good peers.** Channels should connect places where payments actually want to go.
- **Enough capacity.** Larger channels can forward larger payments.
- **Balanced liquidity.** A channel with no balance in the direction a payment wants to go can't forward it.
- **Reliable connections.** Tor is great for privacy but slower and less stable than clearnet. Many serious routing nodes run clearnet, or both. See [Using Tor for Bitcoin and LND](/networking/tor) and [the Lightning firewall section](/networking/reachable-from-internet) if you're considering this. Turning off Tor means peers can see your IP address.

## Setting Fees

Each channel has its own fee policy for payments you forward out through it. There are two parts:

- **Base fee:** a flat fee for each forward, in millisats. LND's default is 1,000 msat, which is 1 sat.
- **Fee rate:** a percentage of the amount, in parts per million (ppm). LND's default is 1 ppm.

The fee for one forward is the base fee plus the amount times the fee rate. For example, at a base fee of 0 and a rate of 500 ppm, forwarding 1,000,000 sats earns 500 sats.

The default fee rate is low enough to quickly drain channels in a popular direction. Common tactics include:

- **Raise fees on channels that drain quickly.** High demand means you can charge more.
- **Lower fees on channels that never forward.** Lower fees may attract traffic.
- **Check how other nodes price their channels.** Node explorers like [Amboss](https://amboss.space/) show what your peers charge.
- **Make small changes and wait.** It takes time for a new fee to spread across the network, and frequent changes make it hard to tell what's working.

You can set fees in [Ride the Lightning](/lightning/rtl), [Thunderhub](/lightning/thunderhub) and LNDg.

## Keeping Channels Balanced

As payments flow through a channel, its balance shifts to one side. There are a few ways to fix that:

- **Circular rebalancing:** pay yourself, out through a channel with too much outbound and back in through one with too little. You pay ordinary routing fees, and no on-chain transaction is needed.
- **Loop Out or Loop In:** swap with on-chain funds using [Lightning Terminal](/lightning/lightning-terminal). See [Inbound Liquidity](/lightning/inbound-liquidity).
- **Let it flow:** channels sometimes balance themselves, especially if your fees encourage traffic to go the other way.

Before you rebalance, compare the cost with what you expect to earn from that liquidity. If it costs 1,000 ppm to refill a channel that charges 200 ppm, you lose money on every forward.

## Tools on MyNode

Enable these under Manage Applications on your device. The apps below are optional, and you can start with RTL or Thunderhub alone.

### Thunderhub and RTL

[Thunderhub](/lightning/thunderhub) and [Ride the Lightning](/lightning/rtl) both show your channels, forwards and fees. Start here, since they cover most routine tasks like setting fees and viewing forwarding history.

### LNDg

LNDg is a web dashboard for analyzing a node and automating its upkeep. It can show channel performance and failed forwards, and can automate rebalancing and fee changes.

Open it from its app page. The username is `admin`, and MyNode generates the password. You can set a new one in the LNDg section of the Settings page.

Be careful with automation. Understand what a setting does and what it may spend before you turn it on. Start with low limits and watch the results.

### LndBoss and Balance of Satoshis

Balance of Satoshis (BOS) is a command line tool for working with LND. It's widely used by routing node operators for reports and rebalancing. To use it, open the [Linux terminal](/advanced/linux-terminal) and run commands like these:

```sh
bos balance
bos peers
bos report
bos help
```

LndBoss is a web interface for BOS, if you prefer not to use the terminal. You can set its password in the LndBoss section of the Settings page.

## Reading the Numbers

Whichever dashboard you use, these metrics are the most useful:

| Metric | What it tells you |
|---|---|
| **Forwards per channel** | Which channels are actually being used |
| **Fees earned** | What you've made, before costs |
| **Rebalancing cost** | Compare this with fees earned to see your real result |
| **Local and remote balance** | Which channels are drained or stuck full |
| **Failed forwards** | Demand you're missing, often from a lack of liquidity |
| **Peer uptime** | Which peers may be worth replacing |

A channel that hasn't forwarded anything for a month or two may not be worth keeping. Before closing it, consider that a close and a replacement channel both cost on-chain fees.

## Protect Your Node

More channels mean more to lose if something goes wrong. Before you add much capacity:

- Keep your [channel backup](/lightning/backups) up to date, since it changes each time you open or close a channel.
- Consider a [watchtower](/lightning/watchtowers).
- Use a reliable drive and power supply, since a failure could force many channels to close.

## Next Steps

[Learn how channels close](/lightning/closing-channels)

[Look up a term in the Lightning glossary](/lightning/glossary)
