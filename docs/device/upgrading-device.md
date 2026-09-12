---
title: "Upgrading your MyNode"
description: "Update MyNode to the latest software release via the web UI or command line"
tags:
- "MyNode"
- "software updates"
- "device upgrade"
- "maintenance"
---

# Upgrading your MyNode
There are two main options for upgrading your MyNode device.

## One Click Update

<i>Premium Feature</i>

The first and easiest option to upgrade your MyNode is to purchase MyNode Premium (included if you purchased a device). You can see all your options on the [Order Now](https://mynodebtc.com/order_now) page.

Once running MyNode Premium follow these steps:

1. Go to the settings page
2. Click on the "Check for updates button" to make sure an update is available
3. Click "Upgrade" and your device will automatically update to the latest version!


## Manual Upgrade

The second option is to upgrade manually via the Linux Terminal by running a couple commands. This can be done on MyNode Premium or on MyNode Community Edition.

Follow these steps to manually upgrade to the latest version:

1. Open Terminal to Device:
    * Connect to your MyNode Device ([see options](https://docs.mynodebtc.com/advanced/linux-terminal.html))
      * Command: `ssh admin@[MyNode ip address]`
      * Default credentials: admin/bolt
2. Run the command to upgrade your device
    * Run `sudo /usr/bin/mynode_upgrade.sh`
    * Run `sudo mynode-reboot`
3. Your device will run the upgrade script and reboot.
4. You are now running the latest version of MyNode software!

