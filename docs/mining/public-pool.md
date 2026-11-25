---
title: "Public Pool"
description: "Solo mine Bitcoin on MyNode with Public Pool: install the stratum server, point a Bitaxe or other miner at your node, and watch your workers in Public Pool UI."
tags:
- "Public Pool"
- "solo mining"
- "Bitaxe"
- "MyNode"
---

# Public Pool

<p class="mn-availability">Premium</p>

Public Pool is an open source stratum server for solo mining. It hands out work based on your own node's view of the blockchain. If one of your miners finds a block, the reward goes directly to your address.

New to solo mining? Read [Solo Mining with Your Node](/mining/solo-mining) first. It explains the odds and what you need.

## Install Public Pool

1. Open the Marketplace on your MyNode, and install **Public Pool**.
2. Optionally, install **Public Pool UI** too, which adds a web dashboard.

Once Public Pool is running, its app page shows the stratum URL for your miners.

<center>
  <figure>
    <img src="/images/mining/public-pool-app.png" style="width: 600px" alt="Public Pool app page on MyNode showing it Running, with instructions to point a miner at the stratum URL 192.168.1.100 port 3333">
  </figure>
</center>

## Configure Your Miner

In your miner's pool settings, enter:

| Setting | Value |
|---|---|
| **Stratum URL** | Your MyNode's IP address and port 3333, such as `192.168.1.100:3333`. Some miners need it written as `stratum+tcp://192.168.1.100:3333` |
| **Username** | Your Bitcoin address. To name a worker, add a dot and a name, such as `bc1q...xyz.bitaxe` |
| **Password** | `x` |

Save the settings, and the miner should connect within a minute or so.

## Watch Your Miners

Open Public Pool UI from its app page. The dashboard shows your best difficulty, the hashrate of each worker, and the network's difficulty for comparison.

![Public Pool dashboard showing your best difficulty, network difficulty, network hash rate and block height, a table of workers with a Bitaxe at about 990 GH/s, and a hashrate chart](/images/mining/public-pool-dashboard.png)

"Best difficulty" is your best share so far. You find a block when a share's difficulty is higher than the network's difficulty.

## Troubleshooting

- **Miner won't connect.** Check the IP address and port 3333, and that the miner and your node are on the same network. Public Pool must be running and Bitcoin must be synced.
- **Shares are rejected.** Check the miner's username is a valid Bitcoin address.
- **The dashboard shows no workers.** Make sure your miner is pointed at your node and not at another pool.

## Next Steps

[Compare with pooled mining through DATUM](/mining/datum)

[Choose hardware for your node](/device/choosing-hardware)
