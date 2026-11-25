---
title: "My App won't Start"
description: "Fix a MyNode app that won't start or open: what statuses like Waiting on Bitcoin and Installing mean, how to read the app's log, and when to restart, reinstall or reset."
tags:
- "MyNode apps"
- "troubleshooting"
- "app not starting"
- "MyNode"
---

# My App won't Start

If an app on your MyNode shows an error, keeps restarting or won't open, work through this page from the top. Most problems are an app waiting for something else, and fix themselves.

## Check the App's Status

The app's tile on the home page, and its app page, show a status. Many statuses mean the app is waiting for something, not broken:

| Status | Meaning | What to do |
|---|---|---|
| **Waiting on Bitcoin** | The app needs Bitcoin to be fully synced | Wait for the initial sync to finish |
| **Waiting on Lightning** | The app needs a Lightning wallet that's running | [Create a Lightning wallet](/lightning/create), or wait for LND to start |
| **Waiting on Electrum** | The app needs the Electrum Server | Enable the [Electrum Server](/electrum/electrum), and let it finish indexing |
| **Installing...** | MyNode is still installing Docker apps | Wait. This can take a while, especially on a Raspberry Pi |
| **Requires Mainnet** | The app doesn't work in testnet mode | Turn off testnet, or use a different app |
| **Requires (another app)** | The app depends on another one, such as Jam needing JoinMarket | Install the app it names |
| **Requires a 64-bit device** or **Requires Debian** | Your device or MyNode version can't run this app | Upgrade MyNode, or use supported hardware |

After a reboot, apps can take several minutes to start. Wait at least 10 minutes before assuming something is wrong.

## Check the Basics

1. **Is the app enabled?** A disabled app shows its description instead of a status. Click **Enable** on its tile or app page.
2. **Is Bitcoin synced?** Most apps need it. Check the Bitcoin tile on the home page.
3. **Is there enough space?** Check Data Disk on the Status page. Apps can fail when the drive is almost full. See [My Drive is running out of Space](/troubleshooting/drive-full).
4. **Is MyNode up to date?** Older versions can have bugs that are already fixed. See [Upgrading your MyNode](/device/upgrading-device).

## Read the App's Log

The log usually says why an app stopped.

1. Open the **Status** page from the link at the bottom of any MyNode page.
2. Under **Service Status**, find the app, and click its card to show the log.

<center>
  <figure>
    <img src="/images/device/status-services.png" style="width: 700px" alt="Service Status section of the MyNode Status page with cards for MyNode Startup, Tor, Bitcoin, LND, BTC RPC Explorer and Electrum Server, each showing Running with a green dot and a Log toggle">
  </figure>
</center>

A green dot means the service is running. Look for repeated errors near the end of the log. Apps that need Bitcoin or Lightning only appear here once those are ready.

If you ask for help, include the relevant lines from the log.

## Restart the App

Click **Restart** on the app's page, or on the **Manage Applications** page, which you can open from the **Applications** section of the Settings page. Give it a few minutes, then check the status and log again.

## Reinstall the App

If a restart doesn't help, or the app broke during an upgrade, reinstall it. Click **Reinstall** on the Manage Applications page, or choose the app under **Reinstall Applications** in the Advanced section of the Settings page. Your device reboots, and the app's data is normally kept.

## Last Resorts

If reinstalling doesn't help:

- **For Docker apps** like BTCPay Server, Mempool or Jam, **Reset Docker** on the Settings page erases all Docker apps and sets them up again. All Docker app data is lost, including BTCPay stores and invoices.
- **For the Electrum Server**, see [My Electrum Server is stuck Indexing](/troubleshooting/electrum-stuck-indexing).
- **For Bitcoin**, see [Troubleshooting Bitcoin](/bitcoin/troubleshoot).
- **For Lightning**, see [Lightning Network Error](/troubleshooting/lightning-network-error).

See [Should I Reset, Reinstall or Format?](/device/reset-reinstall-format) for what each option erases.

## Next Steps

[Compare reset, reinstall and format options](/device/reset-reinstall-format)
