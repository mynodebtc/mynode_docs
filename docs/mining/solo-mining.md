---
title: "Solo Mining with Your Node"
description: "Solo mine Bitcoin with your MyNode: understand the odds, what you need, and whether to use Public Pool for solo mining or DATUM for OCEAN pooled mining."
tags:
- "solo mining"
- "Public Pool"
- "DATUM"
- "MyNode"
---

# Solo Mining with Your Node

Your MyNode can act as the pool server for your own Bitcoin miners. Instead of sending your hashrate to a big mining pool, your miners get their work from your node. MyNode offers two apps for this:

| | [Public Pool](/mining/public-pool) | [DATUM](/mining/datum) |
|---|---|---|
| **What it is** | A self-hosted solo mining server | OCEAN's gateway for mining with templates from your own node |
| **Rewards** | The full block reward if you find a block, nothing otherwise | Pooled with OCEAN by default, for small, regular payouts. Solo is also possible |
| **Who builds the block template** | Your node | Your node |
| **Dashboard** | Public Pool UI app | Built-in web interface |
| **Miner port** | 3333 | 23334 |
| **Availability** | Premium | Community Edition and Premium |

## Know the Odds

Solo mining is a lottery. Your chance of finding a block depends on your share of the network's total hashrate, which is enormous. A small home miner like a Bitaxe might go many lifetimes without finding a block, even though people do occasionally win.

Mine solo because you enjoy it, want to support decentralization, or want a chance at the jackpot. Don't expect it to cover your electricity costs. If you want steady payouts, pooled mining through DATUM is a better fit.

## What You Need

- A synced Bitcoin node on MyNode.
- A Bitcoin miner on the same network as your node, like a Bitaxe, NerdQaxe or an ASIC miner such as an Antminer.
- A Bitcoin address for your rewards, ideally from a wallet you control.

ASIC miners are loud and use a lot of power. Check that your electrical circuit and cooling can handle one before you plug it in.

## Which App Should You Use?

- **Choose [Public Pool](/mining/public-pool)** if you want simple solo mining, where the whole reward goes to you if you find a block.
- **Choose [DATUM](/mining/datum)** if you want regular payouts from the OCEAN pool while still building your own block templates.

## Keep Your Stratum Ports Private

Your miners connect over your home network, so there's no need to forward the mining ports on your router. Leave them off the internet.

## Next Steps

[Set up Public Pool](/mining/public-pool)

[Set up DATUM](/mining/datum)
