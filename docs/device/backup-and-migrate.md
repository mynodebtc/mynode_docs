---
title: "Backing Up and Moving Your Node"
description: "What to back up on your MyNode, what you can skip, and how to move your node to new hardware or a bigger drive without losing your Lightning funds or resyncing the blockchain."
tags:
- "MyNode backup"
- "node migration"
- "Lightning backup"
- "MyNode"
---

# Backing Up and Moving Your Node

<p class="mn-availability">Community Edition and Premium</p>

Most of what's on your MyNode can be downloaded or rebuilt. A few things can't, and losing them can mean losing funds. This guide covers what to back up, and how to move your node to new hardware safely.

## What to Back Up

| What | Can it be replaced? | What to do |
|---|---|---|
| **Lightning seed phrase** | No | Write down the 24 words when you create your Lightning wallet, and store them offline |
| **Lightning channel backup** | No | Download a new copy after every channel open or close. See [Backing Up a Lightning Node](/lightning/backups) |
| **On-chain wallets on the node** | No | Back up the recovery phrase for any wallet created on the node, such as in Jam, Specter or a BTCPay hot wallet |
| **App data** | Sometimes | Use the app's own export, where it has one. For example, BTCPay Server can export invoices |
| **Product key** | Yes | Keep the email with your product key, or the label on your device |
| **Bitcoin blockchain** | Yes | Nothing. It can always be downloaded again |
| **Electrum Server index** | Yes | Nothing. It can always be rebuilt |

Wallets that only connect to your node, like [Sparrow](/wallets/sparrow) or a hardware wallet, keep their keys outside the node. Back them up with their own recovery phrase.

### Download the Lightning Channel Backup

On the Settings page, under **Lightning**, click **Download Channel Backup**. Save the file somewhere other than your node, and replace it after each channel change.

<center>
  <figure>
    <img src="/images/device/settings-channel-backup.png" style="width: 700px" alt="Download Channel Backup setting on the MyNode Settings page, which downloads the latest copy of your static channel backup file">
  </figure>
</center>

## How MyNode Stores Data

MyNode uses two drives:

- **Boot drive** (SD card or USB thumb drive): the operating system and apps. You can replace it at any time by flashing a new one.
- **Data drive** (SSD): the blockchain, Lightning, app data and most settings. This is the drive that matters.

Because of this split, you can usually move or reinstall MyNode without starting over, as long as you keep the data drive.

## Moving to New Hardware

Pick the option that fits what you're changing.

| You want to | Do this |
|---|---|
| Replace the device but keep the same SSD | [Move your data drive](#move-your-data-drive) |
| Move to a bigger SSD | [Clone your data drive](#clone-to-a-bigger-drive) |
| Replace a failed boot drive | [Re-flash the boot drive](#replace-the-boot-drive) |
| Start fresh, or your data drive failed | [Set up a new node and restore Lightning](#start-fresh-and-restore-lightning) |

### Move Your Data Drive

This is the fastest way to upgrade, for example from a Raspberry Pi to a mini PC. You keep the blockchain and your Lightning channels, with no restore needed.

1. Download your Lightning channel backup, as a safety net.
2. On the Settings page, under **Reboot Device**, click **Shutdown Device**, and wait for it to power off.
3. Move the SSD to the new device. A 2.5" SATA SSD can come out of its USB enclosure and go inside a mini PC. An NVMe SSD needs an NVMe slot or an NVMe enclosure.
4. Flash a boot drive with the MyNode image for the **new** device type. See [Flash MyNode OS Image](/advanced/flash-os-drive).
5. Boot the new device, and log in. MyNode finds your existing data. If it asks you to format the drive, stop, and check you connected the right drive.
6. Check that Bitcoin and Lightning start, and reinstall any apps that don't. See [My App won't Start](/troubleshooting/app-wont-start).

**Never run the old device with a copy of the same Lightning data.** If two nodes use the same Lightning data, you can lose your channel funds. See [Backups to Avoid](/lightning/backups#backups-to-avoid).

### Clone to a Bigger Drive

The [Clone Tool](/advanced/clone-tool) copies your whole data drive to a new one, so you don't have to download the blockchain again. Afterwards, use the new drive and don't start your node with the old one again. See [My Drive is running out of Space](/troubleshooting/drive-full).

### Replace the Boot Drive

If your SD card or USB thumb drive fails, or you want a clean install, flash a new one with the latest image. Your data drive keeps the blockchain and Lightning. Your password resets to `bolt`, and MyNode asks you to set a new one when you log in. Some apps may need to be reinstalled. See [Upgrading by Re-flashing](/device/upgrading-device#upgrading-by-re-flashing-your-sd-card-or-os-drive).

### Start Fresh and Restore Lightning

If your data drive has failed, or you want a completely new start:

1. Make sure the old node can't start up again.
2. Set up the new node, and let Bitcoin finish syncing.
3. Restore Lightning with your seed phrase and latest channel backup. See [Restore Lightning Wallet](/lightning/restore).

Restoring closes all of your channels and returns the funds to your on-chain Lightning wallet. Only do this if you can't move the old data drive.

## Checklist

- Lightning seed phrase written down and stored offline
- Latest channel backup saved away from the node
- Recovery phrases for any wallets created on the node
- Product key email kept
- Old node kept off after any move or restore

## Next Steps

[Back up your Lightning node](/lightning/backups)

[Should I reset, reinstall or format?](/device/reset-reinstall-format)
