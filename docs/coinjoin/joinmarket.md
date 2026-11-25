---
title: "JoinMarket"
description: "Use JoinMarket on MyNode to make CoinJoin transactions for better Bitcoin privacy, with the Jam web interface or the command line, and earn fees as a maker."
tags:
- "JoinMarket"
- "coinjoin"
- "Bitcoin privacy"
- "MyNode"
---

# JoinMarket

<p class="mn-availability">Premium</p>

[JoinMarket](https://github.com/JoinMarket-Org/joinmarket-clientserver) makes CoinJoin transactions, which combine your coins with other people's in a single transaction. This makes it much harder for anyone watching the blockchain to follow your coins.

What makes JoinMarket different from other CoinJoin tools:

- **No central coordinator.** Participants find each other through a decentralized market.
- **Two roles.** A **taker** starts a CoinJoin when they want one, and pays a small fee. A **maker** leaves their wallet online for takers to use, and earns those fees.

There are two ways to use JoinMarket on MyNode: **Jam**, a web interface, or the **command line**. Jam is the easiest way to start.

## Using Jam

[Jam](https://jamapp.org/) is a web interface for JoinMarket, developed separately by volunteers. It lets you create a wallet, CoinJoin your coins and run as a maker from your browser.

![Jam wallet dashboard showing the wallet balance, Receive and Send buttons, and the wallet split into five accounts named Apricot, Blueberry, Cherry, Date and Elderberry](/images/coinjoin/jam-wallet.png)

### Set Up Jam

1. Open the Marketplace on your MyNode, and install both **JoinMarket** and **Jam**. Jam needs JoinMarket to run.
2. Enable Jam, and open its app page.
3. Click **Open**, and follow the instructions in Jam to create a wallet.

**Write down the recovery phrase** Jam shows you when you create a wallet, and keep it safe. It's the only way to restore your funds.

### Using Jam

- **Receive:** send bitcoin to your Jam wallet.
- **Send:** send bitcoin as a CoinJoin. Jam picks other participants for you.
- **Earn:** run as a maker, so others CoinJoin with your coins and pay you fees.
- **Sweep:** schedule a series of CoinJoins that move your funds through several rounds for more privacy.

Jam explains each feature as you go. See [Jam's guides](https://jamapp.org/) for more.

## Using the Command Line

The command line gives you every JoinMarket feature, but you need to understand JoinMarket's scripts first. Read JoinMarket's [usage guide](https://github.com/JoinMarket-Org/joinmarket-clientserver/blob/master/docs/USAGE.md) before you start.

Open a terminal on your MyNode. See [Accessing the Linux Terminal](/advanced/linux-terminal).

### JoinInBox

JoinInBox is a menu-based interface for JoinMarket in the terminal. To start it, run:

```bash
sudo mynode-joininbox
```

Enter your password when asked, and you'll see the JoinInBox menu:

![JoinInBox menu in a terminal window with options including Quickstart with JoinMarket, Wallet management, Yield Generator options for makers, Send, Freeze, Payjoin, the order book, and config settings](/images/coinjoin/joinmarket2.png)

See [JoinInBox on GitHub](https://github.com/openoms/joininbox) for more.

### JoinMarket Scripts

To use JoinMarket's own scripts directly, run:

```bash
sudo mynode-joinmarket
```

Enter your password when asked:

![SSH session on MyNode running sudo mynode-joinmarket, which opens a JoinMarket virtual environment in the joinmarket-clientserver scripts folder](/images/coinjoin/joinmarket1.png)

| What | Where |
|---|---|
| Scripts | `/home/joinmarket/joinmarket-clientserver/scripts` |
| Config file (`joinmarket.cfg`) | `/home/joinmarket/.joinmarket` |

Type `exit` to leave.

### Running a Maker in the Background

A maker needs to run for a long time, but anything you start in an SSH session stops when you disconnect. Run it inside [tmux](https://github.com/tmux/tmux/wiki) instead:

1. Connect over SSH, and run `tmux`.
2. Start JoinMarket as above, and then your maker script.
3. Press `Ctrl+b`, then `d`, to detach. The maker keeps running.

To come back to it later, connect over SSH and run `tmux attach`.

## Next Steps

[Manage Bitcoin on your node](/bitcoin/manage)
