---
title: "Electrum Server Stuck Indexing"
description: "Fix a MyNode Electrum Server that seems stuck syncing, starting or compressing: what each status means, how long indexing takes, and when to restart or reset it."
tags:
- "Electrum server"
- "electrs"
- "troubleshooting"
- "MyNode"
---

# Electrum Server Stuck Indexing

The first time you enable the Electrum Server, it builds an index of every transaction in the blockchain so wallets can look up their history quickly. This takes a long time, and it can look stuck when it isn't. This guide helps you tell the difference.

## Check the Status

Open the Electrum Server page from its tile on the MyNode home page. The Status tile shows what it's doing, along with the block it has reached and the size of its index.

<center>
  <figure>
    <img src="/images/troubleshooting/electrum-server-status.png" style="width: 300px" alt="Status tile on the MyNode Electrum Server page showing Status Running, the current block, the index size and a Restart button">
  </figure>
</center>

| Status | Meaning | What to do |
|---|---|---|
| **Starting...** | The server is opening its database or waiting for Bitcoin | Wait. This can take several minutes, longer after a restart |
| **Bitcoin reindexing...** | Bitcoin is rebuilding its own data, and the Electrum Server has to wait | Wait for Bitcoin to finish |
| **Getting headers...** | It's loading block headers from Bitcoin | Wait |
| **Syncing... X%** | It's building the index | Wait, and check that the percentage rises over a few hours |
| **Compressing...** | It's compacting the index | Wait. This can take a couple of hours, and the block number won't change until it's done |
| **Running** | The index is up to date and wallets can connect | Nothing to do |
| **Disabled** | The Electrum Server is turned off | Enable it from the home page |

## How Long Does It Take?

Building the index from scratch takes hours on a fast mini PC, and can take a day or more on a Raspberry Pi. It's normal for progress to slow down as it gets to more recent blocks, which contain many more transactions.

After the first index, the Electrum Server only has to add each new block, which takes seconds.

## Before You Do Anything

1. **Is Bitcoin fully synced?** The Electrum Server can't finish until Bitcoin has. Check the Bitcoin page.
2. **Is there enough space?** Check the Data Disk usage on the Status page. The index needs tens of gigabytes. See [Running Out of Drive Space](/troubleshooting/drive-full).
3. **Has it really stopped?** Note the current block and the percentage, then check again in an hour or two. During **Compressing...** the block number doesn't move, which is normal.

## Check the Log

Open the Status page from the footer of any MyNode page. Find **Electrum Server** under Service Status, and open its **Log**. Recent lines about indexing blocks or compaction mean it's working. Repeated errors suggest a problem.

## Restart It

If the status and log haven't changed for several hours and Bitcoin is synced, click **Restart** in the Status tile on the Electrum Server page. It can take a while to show progress again after a restart. Your existing index is kept.

## Reset It

If a restart doesn't help or the log shows the index is damaged, you can rebuild it from scratch. On the Settings page, find **Electrum Server** under App Settings, and click **Reset Data** next to "Reset Electrum Server".

<center>
  <figure>
    <img src="/images/troubleshooting/electrum-server-settings.png" style="width: 600px" alt="Electrum Server section of the MyNode Settings page with the TX Lookup Limit dropdown, a Regenerate button for the server certificate, and a Reset Data button to reset the Electrum Server">
  </figure>
</center>

This deletes the index and starts over, so it takes as long as the first time. Only reset it when you're sure it's broken, not just slow.

## Wallet Errors After Indexing

If the Electrum Server is Running but a wallet with a long history shows an error or won't load, it may be hitting the **TX Lookup Limit**. MyNode limits how many transactions the server looks up for each address, so a single busy address can't overload your node.

You can raise the limit on the Settings page, in the same Electrum Server section shown above. The default is 200 on a Raspberry Pi 4 and 1,000 on a PC. Higher limits use more memory, so raise it one step at a time.

For other connection problems, see [My Electrum Wallet is not Connecting](/troubleshooting/electrum-connection-error).

## Next Steps

[Connect Sparrow Wallet to your node](/wallets/sparrow)
