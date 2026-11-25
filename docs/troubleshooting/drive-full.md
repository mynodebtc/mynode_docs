---
title: "Running Out of Drive Space"
description: "Fix a MyNode data drive that's almost full: check what's using space, why pruning isn't an option, and how to move to a larger drive with the Clone Tool."
tags:
- "drive full"
- "disk space"
- "Clone Tool"
- "MyNode"
---

# Running Out of Drive Space

The Bitcoin blockchain grows every day, so eventually every node's data drive fills up. MyNode warns you before it does. This guide covers what to do.

## Signs Your Drive Is Full

When your data drive is 95% full or more, the MyNode home page shows a warning:

<center>
  <figure>
    <img src="/images/troubleshooting/drive-full-warning.png" style="width: 600px" alt="Red warning on the MyNode home page saying the drive is 96% full and free space is running very low, with a link to the Clone Tool for migrating to a larger drive">
  </figure>
</center>

You can check usage at any time on the Status page, under System. **Data Disk** is your data drive, and **OS Disk** is the SD card or boot drive.

<center>
  <figure>
    <img src="/images/troubleshooting/status-system.png" style="width: 600px" alt="System section of the MyNode Status page with tiles for CPU, RAM, Data Disk at 96% with a red warning mark, OS Disk at 34%, temperature and uptime">
  </figure>
</center>

If your data drive runs out of space completely, Bitcoin and other apps stop working properly. Deal with the warning before that happens.

If it's the **OS Disk** that's full instead, see [SD Card Full Error](/troubleshooting/sd-card-full-error).

## What Uses the Space

- **The Bitcoin blockchain**, which is by far the largest item and keeps growing.
- **Bitcoin's transaction index**, which several MyNode apps rely on.
- **The Electrum Server's index.** Its size is shown on the Electrum Server page.
- **Other apps' data**, like Mempool, BTCPay Server and other Docker apps.

## Why You Can't Prune

Bitcoin Core can "prune" old blocks to save space, but MyNode doesn't support it. MyNode keeps the full blockchain and a transaction index because apps like the Electrum Server and block explorers rely on them. Don't try to turn on pruning in a custom Bitcoin config, since it will break those apps.

## Best Fix: Move to a Larger Drive

The lasting solution is a bigger drive. A 2 TB SSD is the recommended size today. See [Choosing Hardware for MyNode](/device/choosing-hardware).

The [Clone Tool](/advanced/clone-tool) copies everything from your current data drive to a new one, so you don't have to download the blockchain again:

1. Back up your Lightning [seed phrase and channel backup](/lightning/backups) before you start.
2. Connect the new drive, and open the Clone Tool from the Data Drive section of the Settings page. Opening it reboots your device.
3. Follow the [Clone Tool guide](/advanced/clone-tool).

Once your node is running on the new drive, **don't start your node on the old drive again** if you use Lightning. An old copy of your Lightning data can cost you your channel funds. See [Backups to Avoid](/lightning/backups#backups-to-avoid).

## Short-Term Fixes

If you need to buy some time before you can replace the drive:

- **Disable apps you don't use.** Disabling or uninstalling an app stops it from using more space. Some apps keep their data until you remove it.
- **Reset the Electrum Server** if you don't need it right now. On the Settings page, find Electrum Server under App Settings, and click **Reset Data**. If you turn it back on later, it has to build its index again from scratch.
- **Reset Docker** only as a last resort. It erases all data for Docker apps like BTCPay Server, including your store's records.

Don't delete files from the data drive by hand. Removing the wrong file can corrupt Bitcoin's data or your wallets.

## Next Steps

[Choose hardware for your node](/device/choosing-hardware)

[Use the Clone Tool](/advanced/clone-tool)
