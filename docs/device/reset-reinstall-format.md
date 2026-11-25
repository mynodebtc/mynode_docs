---
title: "Should I Reset, Reinstall or Format?"
description: "Compare MyNode's restart, reinstall, re-flash, reset, format and factory reset options: what each one erases, what it keeps, and which to try first when something goes wrong."
tags:
- "factory reset"
- "reinstall"
- "format drive"
- "MyNode"
---

# Should I Reset, Reinstall or Format?

<p class="mn-availability">Community Edition and Premium</p>

MyNode has several ways to fix problems, from restarting one app to erasing everything. Start with the least destructive option that fits your problem, and only move down the list if it doesn't help.

**Before anything that erases data, back up your Lightning seed phrase and channel backup.** See [Backing Up and Moving Your Node](/device/backup-and-migrate).

## Quick Comparison

Ordered from least to most destructive:

| Option | Erases | Keeps | Where |
|---|---|---|---|
| **Restart an app** | Nothing | Everything | App page, or Manage Applications |
| **Reinstall an app** | That app's software | The app's data, everything else | Manage Applications, or Settings > Reinstall Applications |
| **Reinstall MyNode** (Premium) | Nothing | Everything | Settings > Reinstall Latest Version |
| **Re-flash the boot drive** | The operating system and your password | The data drive: blockchain, Lightning, app data | Flash a new SD card or USB drive |
| **Reset Electrum Server** | The Electrum Server index | Everything else | Settings > Electrum Server |
| **Reset Docker** | All data for Docker apps, like BTCPay Server and Mempool | Bitcoin, Lightning, other apps | Settings > Docker |
| **Reset Blockchain** | The Bitcoin blockchain | Bitcoin wallets, Lightning, apps | Settings > Bitcoin |
| **Format Data Drive** | Everything on the data drive: blockchain, Lightning, app data | The boot drive | Settings > Data Drive |
| **Factory Reset** | Everything: the data drive, Lightning, Tor addresses, product key and password | Nothing | Settings > Advanced |

## Restart an App

If one app is misbehaving, restart it first. Click **Restart** on the app's page, or use the **Manage Applications** page, which you can open from the **Applications** section of the Settings page.

<center>
  <figure>
    <img src="/images/device/manage-apps.png" style="width: 700px" alt="Manage Applications page listing installed apps such as BTC RPC Explorer, BTCPay Server, Bitcoin, Electrum Server and LND, with installed and latest versions, a status dot, and Disable, Restart, Reinstall and Uninstall buttons for each">
  </figure>
</center>

## Reinstall an App

Reinstalling downloads and installs the app's software again. It's the next step if an app still won't start after a restart, or broke during an upgrade. The app's data is normally kept.

Click **Reinstall** on the Manage Applications page, or choose the app under **Reinstall Applications** in the Advanced section of the Settings page. Reinstalling reboots your device.

<center>
  <figure>
    <img src="/images/device/settings-reinstall-apps.png" style="width: 700px" alt="Reinstall Applications setting explaining that you can reinstall an app if you're having issues with it, and that reinstalling triggers a reboot">
  </figure>
</center>

See [My App won't Start](/troubleshooting/app-wont-start) for other things to check first.

## Reinstall MyNode

<p class="mn-availability">Premium</p>

**Reinstall Latest Version**, in the Developer section of the Settings page, installs the latest official MyNode release again. Use it if an upgrade didn't finish properly, or to go back from a beta version. On Community Edition, re-flash the boot drive instead. See [Upgrading your MyNode](/device/upgrading-device).

## Re-flash the Boot Drive

Writing a fresh MyNode image to your SD card or USB thumb drive gives you a clean operating system, while your data drive keeps the blockchain, Lightning and app data. It fixes a corrupted boot drive and resets a forgotten password.

Afterwards, log in with `bolt`, and MyNode asks you to set a new password. Some apps may need to be reinstalled. See [Upgrading by Re-flashing](/device/upgrading-device#upgrading-by-re-flashing-your-sd-card-or-os-drive) and [Forgot your Password](/device/forgot-password).

## Reset One Part

These options each erase one kind of data, which MyNode then rebuilds or downloads again:

- **Reset Electrum Server** deletes its index. It rebuilds from scratch, which takes hours. See [My Electrum Server is stuck Indexing](/troubleshooting/electrum-stuck-indexing).
- **Reset Docker** erases all Docker state and data. Docker apps like BTCPay Server lose all their data, including your stores and invoices. Use it only as a last resort.
- **Reset Blockchain** deletes the blockchain and starts the initial download again, which can take days. Bitcoin wallets are kept. Before you do this, try the Bitcoin repair options. See [Troubleshooting Bitcoin](/bitcoin/troubleshoot).

<center>
  <figure>
    <img src="/images/device/settings-reset-docker.png" style="width: 700px" alt="Reset Docker setting warning that it erases all Docker state and data, and that Docker apps like BTCPay Server will lose all data">
  </figure>
</center>

## Format Data Drive

This reboots your device and asks you to format the data drive again, erasing everything on it. That includes the blockchain, your Lightning wallet and channels, and all app data. Your boot drive isn't changed.

Use it if your data drive is corrupted and can't be repaired, or if you want to start over with the same drive. You'll need to download the blockchain again, and restore Lightning from your seed phrase and channel backup.

<center>
  <figure>
    <img src="/images/device/settings-format-drive.png" style="width: 700px" alt="Format Data Drive setting explaining that it reboots and asks to format the drive again, may help if the drive is corrupted, is less destructive than a factory reset, and that you should back up your keys and wallets first">
  </figure>
</center>

## Factory Reset

A factory reset returns your MyNode to how it was out of the box. It:

- Formats the data drive, erasing the blockchain, Lightning and all app data.
- Deletes your Tor data, so your node gets new onion addresses.
- Removes your product key, network choice and interface settings.
- Resets your password to `bolt`.

You'll need to enter your password to confirm. Use a factory reset before selling or giving away your device, or when you want to start completely fresh.

<center>
  <figure>
    <img src="/images/device/settings-factory-reset.png" style="width: 700px" alt="Factory Reset setting warning that all storage will be completely reset and to back up all keys and wallets first">
  </figure>
</center>

## Next Steps

[Back up and move your node](/device/backup-and-migrate)

[Fix an app that won't start](/troubleshooting/app-wont-start)
