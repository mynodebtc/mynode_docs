---
title: "Inbound Liquidity: How to Receive Lightning Payments"
description: "Find out why a new Lightning node can't receive payments, and how to get inbound liquidity on MyNode by spending, using Loop Out, buying channels, or swapping."
tags:
- "inbound liquidity"
- "receive Lightning payments"
- "Lightning Loop"
- "MyNode"
---

# Inbound Liquidity: How to Receive Lightning Payments

If you just opened your first channel, you may find that you can send payments but can't receive them. That's normal. This guide explains why it happens and how to fix it.

## Why You Can't Receive Yet

A channel you open starts with all of its balance on your side. To receive a payment, your peer has to be able to send funds to you, and it has nothing on its side to send. The room you have to receive is called **inbound liquidity**. See [Lightning Basics](/lightning/basics#capacity-outbound-and-inbound) for an example.

## Check Your Inbound Liquidity

You can see your liquidity in several places:

- The Channels section of the MyNode Lightning page shows each channel's local and remote balance. The remote balance is your inbound for that channel.
- [Lightning Terminal](/lightning/lightning-terminal) shows your total inbound and outbound liquidity.
- [Ride the Lightning](/lightning/rtl) and [Thunderhub](/lightning/thunderhub) also show it per channel.

Inbound is only useful if the peer is online and connected to the rest of the network. A large channel with a poorly connected peer won't help you much.

## Ways to Get Inbound

| Option | Moves your funds? | Main cost | Best for |
|---|---|---|---|
| Spend over Lightning | Yes, to whoever you pay | None beyond routing fees | Anyone with things to pay for |
| Loop Out | Yes, back to on-chain | Swap fee and on-chain fee | Keeping your bitcoin while adding inbound |
| Ask someone to open a channel to you | No | None, or an agreed price | People who know other node runners |
| Liquidity swaps | No, but you open a channel too | On-chain fees | Getting inbound and outbound together |
| Buy a channel | No | Purchase price | Merchants and anyone who needs inbound right away |
| Lightning Pool | No | Auction price | Advanced users |

### Spend Over Lightning

Every sat you pay moves to your peer's side of the channel, and creates the same amount of inbound. If you were going to spend anyway, this is the simplest option.

### Loop Out

Lightning Loop swaps your Lightning balance for on-chain bitcoin. You send funds out through a channel, and they return to an on-chain address. You keep your bitcoin, and your channel now has inbound.

Loop is included with MyNode, and you can run it from [Lightning Terminal](/lightning/lightning-terminal):

1. Open Lightning Terminal, and click "Loop".
2. Select the channel, and choose Loop Out.
3. Enter the amount and review the fees before confirming.

Loop has a minimum and maximum swap amount that change over time, and on-chain fees can make small swaps expensive. Lightning Terminal shows the current limits and the estimated cost before you confirm. Swaps also need a route from your channel to the Loop service, so a channel with a poorly connected peer can fail.

Loop In does the reverse. It uses on-chain funds to refill your side of a channel.

### Ask Someone to Open a Channel to You

When another node opens a channel to you, its funds start on its side of the channel, and all of that balance is inbound for you. Friends and other community members may be happy to open one, especially if you open one back to them.

To let another node connect to you, share the URI shown on the MyNode Lightning page. If you run Tor only, this is a `.onion` address, and the other node must be able to reach Tor peers.

### Liquidity Swaps

In a liquidity swap, a group of node runners each open a channel to the next person in a ring. Everyone pays their own on-chain fees, and everyone ends up with one new outbound channel and one new inbound channel. [LightningNetwork.plus](https://lightningnetwork.plus/) is a popular place to find swaps.

Check each participant's size requirements, and remember that the channels are only as good as the nodes you're paired with.

### Buy a Channel

Lightning Service Providers (LSPs) and marketplaces sell inbound channels. You pay a fee, and the seller opens a channel to your node. [Amboss Magma](https://amboss.space/magma) is one example of a marketplace.

Before you buy:

- Compare the price with the channel's size and how long the seller commits to keeping it open.
- Look at the seller's history and how well connected their node is.
- Confirm that the seller can reach your node. Some don't connect to Tor-only nodes.

### Lightning Pool

Lightning Pool is an auction for channels, and it's included with MyNode and available in Lightning Terminal. Activity on it has been low in recent years, so orders may take a long time to fill or not fill at all. Start with one of the options above unless you have a specific reason to use it.

## How Much Do You Need?

Aim for at least as much inbound as the largest payment you expect, plus a margin. Spreading it across two or more peers helps, since one peer going offline won't stop you from getting paid.

Inbound isn't permanent. Each payment you receive uses some of it and adds to your outbound. If you mostly receive, you'll eventually need to Loop Out or make another change. If you start [forwarding payments](/lightning/routing), keeping balances healthy becomes a regular job.

## Still Can't Receive?

- Check that the channel is active and your peer is online.
- Check that the invoice is for less than your inbound, leaving some room for the channel reserve.
- If you only have private channels, make sure your invoice includes route hints.
- See [why Lightning payments fail](/lightning/payments#why-payments-fail).

## Next Steps

[Send and receive payments](/lightning/payments)
