---
title: "Closing Lightning Channels"
description: "Close Lightning channels on MyNode: cooperative vs force close, timelocks, what pending and limbo balances mean, and what to do when a channel close appears stuck."
tags:
- "close Lightning channel"
- "force close"
- "Lightning pending channel"
- "MyNode"
---

# Closing Lightning Channels

Closing a channel moves your share of its balance back to your on-chain wallet. You can close a channel at any time, but how you close it affects how long you wait and what it costs.

## Cooperative Close vs Force Close

| | Cooperative close | Force close |
|---|---|---|
| **Needs your peer online** | Yes | No |
| **When your funds are available** | Once the closing transaction confirms | After a timelock, once the closing transaction confirms |
| **Typical wait** | Under an hour or so | Days to about two weeks if you initiated it |
| **On-chain cost** | Lower | Usually higher |
| **Use it when** | Your peer is online | Your peer has been gone a long time, or isn't responding |

Always try a cooperative close first. A force close is the fallback that makes sure you can always get your funds without your peer's permission.

## How to Close a Channel

You can close a channel from [Ride the Lightning](/lightning/rtl) or [Thunderhub](/lightning/thunderhub). Find it in your channel list and choose to close it. These apps normally try a cooperative close, and only force close if you specifically select that option.

Choose an on-chain fee that fits how soon you want the funds, using an estimator like [mempool.space](https://mempool.space/).

After closing a channel, download a new copy of your [channel backup](/lightning/backups).

## Timelocks

If you force close a channel, your own share is locked for a set number of blocks after the closing transaction confirms. This gives your peer time to respond if the close used an out-of-date balance.

The delay is agreed when the channel opens and generally scales with its size, from about a day to about two weeks. When your peer force closes the channel instead, it's your peer that waits, and your share usually becomes available soon after confirmation.

Any payments in flight at the time of a force close get resolved separately on-chain, so those funds can take longer and cost more to recover.

## What "Pending" Means

Your interface will show these funds as pending until they're back in your on-chain wallet. In LND's terms:

| State | Meaning | What to expect |
|---|---|---|
| **Pending open** | The funding transaction hasn't confirmed enough times yet | Wait for confirmations |
| **Waiting close** | A closing transaction was broadcast but isn't confirmed yet | Wait for it to confirm, or bump its fee if needed |
| **Pending close** | A cooperative close is being negotiated or waiting to finish | Should clear soon after the transaction confirms |
| **Pending force close** | The closing transaction confirmed and the timelock is running | Wait for the timelock to expire |

The amount still locked is sometimes called your **limbo balance**. Your Channel Balance and On-chain Balance might not include it until the process finishes, so it may look like funds are missing. They aren't lost, they're just still on their way.

## Check on a Stuck Close

Most stuck closes are just waiting on a timelock or a low-fee transaction. To see the details, open the [Linux terminal](/advanced/linux-terminal) on your device and run:

```sh
sudo lncli --lnddir /mnt/hdd/mynode/lnd pendingchannels
```

Look for these fields:

- `waiting_close_channels`: the closing transaction hasn't confirmed. Look up `closing_txid` on a block explorer. If it isn't found, or its fee is too low, it may need a fee bump.
- `pending_force_closing_channels`: `blocks_til_maturity` is how many blocks remain, at about 10 minutes per block. `limbo_balance` is the amount still locked.
- `pending_htlcs`: payments that were in flight during the close. Each one has its own timing.

### Bump the Fee

If a force closing transaction is stuck because its fee is too low, LND can raise it using an anchor output on anchor channels:

```sh
sudo lncli --lnddir /mnt/hdd/mynode/lnd wallet bumpforceclosefee --help
```

This needs some on-chain balance. Read the help text for the options available in your version of LND, and check the transaction's current fee before you pay more.

To speed up other unconfirmed transactions, see `lncli wallet bumpfee --help`.

## What Not to Do

- **Don't delete your Lightning wallet** while a close is pending. Your node needs its data to claim time-locked funds and handle in-flight payments.
- **Don't restore from an old backup** to try to speed things up. See [Backups to Avoid](/lightning/backups#backups-to-avoid).
- **Don't run commands you found online that remove channels from your node's records**, like `abandonchannel`, unless you fully understand them. They can make you lose track of funds that are still recoverable.

If a channel has been stuck for a long time after you've checked all of the above, read LND's [recovery documentation](https://github.com/lightningnetwork/lnd/blob/master/docs/recovery.md), or ask in the MyNode community. Never share your seed or admin macaroon with anyone offering to help.

## When a Peer Is Offline

A channel might become inactive when its peer goes offline. Peers often come back on their own after an upgrade or a restart, so it's worth waiting a few days before force closing. Waiting costs you nothing, though you can't send through that channel while it's inactive.

## Next Steps

[Back up your Lightning node](/lightning/backups)

[Protect your node while offline with a watchtower](/lightning/watchtowers)
