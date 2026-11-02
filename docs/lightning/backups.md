---
title: "Backing Up a Lightning Node"
description: "Back up your MyNode Lightning node: what the seed phrase and Static Channel Backup (SCB) file can and can't recover, how to download the SCB, and backups to avoid."
tags:
- "Lightning backup"
- "Static Channel Backup"
- "SCB"
- "MyNode"
---

# Backing Up a Lightning Node

A Lightning node needs more than a seed phrase to recover its funds. You need two things, and they do different jobs:

1. **Your 24 word seed phrase**, which you wrote down when you created your wallet.
2. **Your Static Channel Backup (SCB) file**, which changes as you open and close channels.

## What Each Backup Recovers

| | Seed phrase | Static Channel Backup |
|---|---|---|
| **Recovers on-chain funds** | Yes | No |
| **Recovers funds in channels** | No | Yes, with the seed, if peers cooperate |
| **Changes over time** | Never | Whenever a channel opens or closes |
| **Works alone** | Yes, for on-chain funds | No, it's encrypted with a key from your seed |
| **Must be kept secret** | Yes, it gives access to your funds | Less critical, since it can't be used without your seed |

Together they recover your funds, but **not your channels**. Restoring doesn't bring channels back to life. It asks your peers to close them, and returns your funds to your on-chain wallet.

## How Channel Recovery Works

A channel's balance changes with every payment, and the SCB doesn't record any of those updates. It holds what your node needs to find your peers and ask for help:

1. You restore your wallet using your seed and SCB.
2. Your node connects to each peer and reports that it lost its data.
3. Each peer force closes the channel using the latest balance it knows about.
4. Your node recognizes the closing transaction, and moves your share to your on-chain wallet.

This has some limits:

- **Peers have to cooperate.** A peer must be online and able to do its part. A channel with a peer that has gone away may need manual recovery, and could end up lost.
- **In-flight payments can be lost.** Only settled balances are recovered, so any HTLC in progress at the time of the failure isn't included.
- **It takes time.** Force closes need on-chain confirmations, and some funds may be time-locked. See [Closing Lightning Channels](/lightning/closing-channels).

## Download Your Channel Backup

You can download the latest file from either of these places:

- **Settings page:** in the Lightning section, under "Download Channel Backup".
- **Lightning page:** in the Lightning section, click "download" next to "Channel Backup".

Download a new copy **every time you open or close a channel**, and keep it somewhere other than the node itself, like a USB drive or an encrypted cloud folder. If you lose the node's drive, a copy stored on that drive goes with it.

Your file doesn't need to be updated after each payment. An older file still covers every channel that was open when you saved it, but not any you opened since.

### Remote Backup with Premium+

[Premium+](/premium_plus/premium_plus) can upload an encrypted copy of your SCB to MyNode each time it changes. This protects you if you forget to download a new copy or if your hardware fails. You can turn it on in the Premium+ settings after you [connect your device](/premium_plus/connect).

## Backups to Avoid

**Never restore a node from an old copy of its Lightning data.** That includes `channel.db`, a copy of the LND data folder, or an old drive image.

LND keeps the current state of every channel in `channel.db`. An old copy has an out-of-date state, and if your node broadcasts it, your peer can treat that as an attempt to cheat and **take the entire channel balance** as a penalty.

The same risk applies to drives:

- If you use the [clone tool](/advanced/clone-tool) to move to a new drive, never start LND from the old drive again once the new one has been running.
- Never run the same Lightning wallet on two devices at the same time.

This is why LND's SCB is designed the way it is. It's safe to keep an old SCB file, but not an old channel database.

## What's Not Covered

Your seed and SCB only recover LND's funds. Some other apps keep their own records:

- **[LNbits](/lightning/lnbits)** tracks its users' wallet balances in its own database. The funds are in LND, but the record of who owns what isn't in your seed or SCB, so back up each wallet's details if you rely on them.
- **LND Hub accounts** used by wallets like [BlueWallet](/lightning/bluewallet) are also kept in the app's own data, not in the seed or SCB.
- **Bitcoin wallets** you've set up elsewhere, like [Specter](/multisig/specter), have their own seeds.

## If Your Node Fails

Before you restore, make sure the old node won't start up again. Remove the old drive or make sure it stays off. Then:

1. Set up the replacement device, and let Bitcoin finish syncing.
2. Follow [Restore Lightning Wallet](/lightning/restore) using your seed and your latest SCB file.
3. Wait for channels to close. This can take a while, and your channels won't all finish at the same time.

If you still have a working drive and only need to change hardware, you may be able to move that drive to the new device without restoring. Don't restore from your seed in that case, since that closes all of your channels.

If funds are still missing after your channels have closed, see the [Manual Recovery](/lightning/restore#manual-recovery) section.

## Checklist

- Seed phrase written down and stored securely offline
- Latest SCB file saved away from the node
- New SCB saved after each channel open or close
- Old node stays off after any restore

## Next Steps

[Add a watchtower for protection while offline](/lightning/watchtowers)
