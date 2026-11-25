---
title: "DATUM"
description: "Mine Bitcoin with the OCEAN pool using DATUM on MyNode: build block templates on your own node, connect your miners, and set up blocknotify for faster block updates."
tags:
- "DATUM"
- "OCEAN"
- "Bitcoin mining"
- "MyNode"
---

# DATUM

<p class="mn-availability">Community Edition and Premium</p>

DATUM (Decentralized Alternative Templates for Universal Mining) is a protocol from the OCEAN mining pool. Your node builds the block templates, deciding which transactions go into the blocks you mine, while OCEAN combines your shares with other miners' and pays out rewards.

MyNode sets up DATUM for pooled mining with OCEAN. New to mining with your node? Read [Solo Mining with Your Node](/mining/solo-mining) first.

## Install and Set Up DATUM

1. Open the Marketplace on your MyNode, and install **DATUM**.
2. Open the DATUM app page. Find the username and password in its **App Default Credentials** section.
3. Click **Open**, log in, and **enter your Bitcoin address**. DATUM won't start until you do.

<center>
  <figure>
    <img src="/images/mining/datum-app.png" style="width: 600px" alt="DATUM app page on MyNode with instructions: add your Bitcoin address in the GUI, credentials are in the App Default Credentials section, and miners use stratum port 23334 with your Bitcoin address as the user and x as the password">
  </figure>
</center>

## Configure Your Miner

| Setting | Value |
|---|---|
| **Stratum URL** | Your MyNode's IP address and port 23334, such as `stratum+tcp://192.168.1.100:23334` |
| **Username** | Your Bitcoin payout address, with an optional `.workername` |
| **Password** | `x` |

DATUM's web interface shows the gateway's status, connected miners and the current job.

![DATUM Gateway web interface showing the Status tab with client stats, stratum server info and the current stratum job](/images/mining/datum-gateway.png)

You can check your shares and payouts on [OCEAN's website](https://ocean.xyz/) by searching for your Bitcoin address.

## Recommended Bitcoin Setting

DATUM's app page recommends adding this line to your Bitcoin config, so DATUM learns about new blocks right away and your miners don't waste work on old ones:

```text
blocknotify=curl -s -m 5 http://127.0.0.1:21000/NOTIFY
```

To add it, see [Customizing your Config](/advanced/customize-config). Using a custom Bitcoin config means MyNode won't update that config for you in the future.

## Solo Mining with DATUM

DATUM can also mine fully solo, without OCEAN. This requires editing `/mnt/hdd/mynode/datum/datum_config.json` from the [Linux terminal](/advanced/linux-terminal). Read [DATUM's documentation](https://github.com/OCEAN-xyz/datum_gateway) first, since OCEAN doesn't provide support for solo mode. If you want simple solo mining, [Public Pool](/mining/public-pool) is easier.

## Troubleshooting

- **DATUM isn't running.** Make sure you've entered your Bitcoin address in DATUM's web interface.
- **Miner won't connect.** Check the IP address and port 23334, and that the miner and your node are on the same network. Bitcoin must be synced.
- **Shares are rejected.** Check the miner's username is a valid Bitcoin address.

## Next Steps

[Compare with solo mining through Public Pool](/mining/public-pool)

[Choose hardware for your node](/device/choosing-hardware)
