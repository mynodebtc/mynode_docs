---
title: "Lightning Watchtowers"
description: "Set up a Lightning watchtower on MyNode to protect your channels while offline, add towers as a client, run your own tower server, and reset watchtower settings."
tags:
- "Lightning watchtower"
- "LND watchtower"
- "Lightning security"
- "MyNode"
---

# Lightning Watchtowers

A watchtower is a service that watches the blockchain on your behalf, and stops a peer from cheating you if your node happens to be offline.

## Why You'd Want One

Each update to a channel creates a new balance state and invalidates the old ones. A dishonest peer could try to close the channel using an old state that pays them more.

Your node guards against this by watching the blockchain. If it sees an old state, it broadcasts a **justice transaction** during the timelock period, which claims the entire channel balance as a penalty. If your node is offline for that whole time, it can't respond, and the peer could get away with it.

A watchtower can respond for you. It's most useful if your node could be offline for days at a time, or if you have channels with peers you don't know.

A watchtower is not a backup. It can't recover your funds if your drive fails, so you still need to [back up your node](/lightning/backups).

## How It Works

Your node sends the tower an encrypted package for each channel update. The tower can't read it, so it learns nothing about your channels or balances unless a breach actually happens. If one of those old states appears on-chain, the tower can decrypt the matching package and broadcast the justice transaction.

## Use a Watchtower (Client)

To be protected by someone else's tower:

1. On the MyNode Lightning page, find "Watchtower" in the Lightning section, and click "open".
2. Under "Watchtower Client", turn on "Enabled" and click "Save". LND will restart, which can take a few minutes.
3. Under "Active Towers", enter the tower's URI, and click "Add". It looks like this:

```text
pubkey@address:9911
```

Your new tower appears in the list. You can remove a tower with the trash icon next to it.

The page's Stats and Policy sections show how your client is doing:

| Field | Meaning |
|---|---|
| **Backups** | Channel updates successfully sent to a tower |
| **Pending Backups** | Updates waiting to be sent |
| **Failed Updates** | Updates that couldn't be sent |
| **Sessions Acquired** | Slots you've negotiated with towers to store your backups |
| **Sessions Exhausted** | Sessions that have been filled |
| **Max Updates** | How many updates fit in one session |
| **Sweep sat/vbyte** | The fee rate used for a justice transaction, which is 10 sat/vbyte by default |

Backups only start from the point when you add a tower. Older channel states aren't covered until your channels update again.

### Choosing a Tower

- Use a tower that isn't on the same device or the same internet connection as your node. A tower that goes down along with your node doesn't help.
- Pick someone you trust to keep it running, such as a friend who also runs a node. You can add more than one.
- [Premium+](/premium_plus/premium_plus) includes a watchtower that you can turn on from your Premium+ settings once your [device is connected](/premium_plus/connect).

## Run a Watchtower (Server)

Your node can also act as a tower for your friends' nodes:

1. On the same page, under "Watchtower Server", turn on "Enabled" and click "Save". LND will restart.
2. Copy the URI shown under "URI / Pubkey", and share it with the people who will use your tower.

Towers use port 9911. The [firewall](/networking/reachable-from-internet) allows this port by default, but if you've changed your firewall rules, make sure it's open. The URI also shows your `.onion` address if you run Tor, in which case the client must be able to connect through Tor.

Running a server uses some storage and doesn't protect your own node. You'll also need a client for that.

## Reset Watchtower Info

In the Lightning section of the Settings page, "Reset Watchtower Info" has two buttons, "Reset Watchtower Client" and "Reset Watchtower Server". Each erases those watchtower settings and restarts LND.

These are meant to help if LND has issues after adding a watchtower. They don't touch your wallet, channels or funds. A reset does have these effects:

- **Client:** you lose your tower list and session data, and you'll have to add your towers again. Until you do, you have no tower protection.
- **Server:** clients using your tower lose the backups it stored for them. Let them know, because their older channel states are no longer protected by your tower.

## Next Steps

[Back up your Lightning node](/lightning/backups)

[Learn how channels close](/lightning/closing-channels)
