# JoinMarket

## Overview

JoinMarket is software to create a special kind of bitcoin transaction called a ["CoinJoin"](https://en.bitcoin.it/wiki/CoinJoin). Its aim is to improve the confidentiality and privacy of bitcoin transactions. JoinMarket differs from other popular CoinJoin implementations in a few ways.

The most important differences are:

1. **Open**: Users can choose to act as a market "taker" and initiate a CoinJoin transaction on demand, or they can act as a market "maker" (and potentially earn fees) by leaving a JoinMarket wallet connected to the network for others to CoinJoin with.
2. **Decentralized**: JoinMarket has no central coordinator.

JoinMarket was created by Chris Belcher in 2015, and is currently maintained by Adam Gibson [here.](https://github.com/Joinmarket-Org/joinmarket-clientserver)
For a quick introduction to Joinmarket you can watch [this demonstration](https://youtu.be/hwmvZVQ4C4M) of installation and usage given by Adam Gibson during the [Understanding Bitcoin conference](https://understandingbtc.com/) on April 6 2019.

## General Usage

Joinmarket is installed in myNode and must be run via the command line. There are several Joinmarket scripts and configurations that can be utilized for various purposes, and it is important to fully understand the proper usage of each of them. Users are strongly urged to first read this [usage guide](https://github.com/JoinMarket-Org/joinmarket-clientserver/blob/master/docs/USAGE.md).

To get a myNode command line window you will need to open an SSH session from another computer.

Instructions for doing that while on the same network as your myNode can be found [here](https://mynodebtc.com/guide/debug_access_linux_terminal).

There are two ways to run JoinMarket - by using JoinMarket scripts directly or by using a minimal terminal interface provided by JoinInBox.

## Usage - JoinInBox

Once you have opened a terminal window in your myNode, there is a convenient script for setting up and running JoinMarket.

`sudo mynode-joininbox`

You will be prompted for your password and should now see this in your terminal window:

![joinmarket_cli](/images/coinjoin/joinmarket2.png)

You should now have access to JoinMarket through the interface provided by JoinInBox.

* Github: [openoms/joininbox](https://github.com/openoms/joininbox)

## Usage - JoinMarket

Once you have opened a terminal window in your myNode, there is a convenient script for setting up and running JoinMarket.

`sudo mynode-joinmarket`

You will be prompted for your password and should now see this in your terminal window:

![joinmarket_cli](/images/coinjoin/joinmarket1.png)

You are now ready to run any of the Joinmarket scripts, located at:

`/home/joinmarket/joinmarket-clientserver/scripts`

You can find the main configuration file, `joinmarket.cfg` at:

`/home/joinmarket/.joinmarket`

To exit, simply type and enter `exit`.

**TIP**: If you are planning to use JoinMarket as a "maker", you will need to leave your maker script running for an extended period of time.  This would normally require you to leave an open SSH session to your myNode to keep your JoinMarket session running. This is impractical at best, and potentially unsecure if others might have access to your computer.

A better way is to run your JoinMarket maker script inside of a [TMUX](https://github.com/tmux/tmux/wiki) window. You can start TMUX (after connecting to myNode via SSH) by entering:

`tmux`

Next, you start the JoinMarket virtual environment as described earlier, and then your desired maker script.

This will allow you to end your SSH session with your myNode while leaving your JoinMarket maker/offer actively running.
Without using TMUX, if you exit your SSH connection to your myNode, any JoinMarket script that you have running will stop.

* Github: [joinmarket/joinmarketclientserver](https://github.com/joinmarket/joinmarket-clientserver)

## Specs

* Installed location: `/home/joinmarket/joinmarket-clientserver/`
* IRC: [webchat.freenode.net](https://webchat.freenode.net) #joinmarket
