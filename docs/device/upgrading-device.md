---
title: "Upgrading your MyNode"
description: "Update MyNode to the latest software release via the web interface, the command line, or by re-flashing"
tags:
- "MyNode"
- "software updates"
- "device upgrade"
- "maintenance"
---

# Upgrading your MyNode
There are three ways to upgrade your MyNode device.

## Upgrading via the Web Interface

<p class="mn-availability">Premium</p>

1. Open your MyNode device's Settings page.
2. Click **Check for updates** to make sure the new version is available.
3. Click **Upgrade**. Your device will upgrade and reboot.

<center>
  <figure>
    <img src="/images/upgrading-device/upgrade1.png" width="400" alt="Version section of the MyNode settings page showing a newer Latest Version, with Upgrade and See Changes buttons">
  </figure>
</center>

## Upgrading via Command Line

<p class="mn-availability">Community Edition and Premium</p>

1. Connect to your device over SSH from a [terminal](/advanced/linux-terminal.html), and enter your MyNode password when prompted. If `mynode.local` doesn't work, use your device's IP address instead.

   ```
   ssh admin@mynode.local
   ```

2. Run the upgrade. It can take a while, so stay connected until it finishes and you're back at the command prompt.

   ```
   sudo /usr/bin/mynode_upgrade.sh
   ```

3. Reboot your device.

   ```
   sudo mynode-reboot
   ```

4. After it restarts, reconnect and confirm the version is the one you upgraded to.

   ```
   cat /usr/share/mynode/version
   ```

## Upgrading by Re-flashing your SD Card or OS Drive

<p class="mn-availability">Community Edition and Premium</p>

You can also write a fresh copy of the latest MyNode image to your SD card, or to your OS drive on a PC. Your Bitcoin and Lightning data is saved on the external drive and is not lost, but some apps may need to be re-installed.

1. Shut down your device using the button on the Settings page.
2. Remove the SD card or OS drive and flash it with the latest image from the [download page](https://mynodebtc.com/download). See the [flashing guide](/advanced/flash-os-drive.html) for details.
3. Put the SD card or OS drive back in your device and power it on.
4. Log in with the default password, `bolt`, and change it. Re-flashing resets your password, and your device may get a new IP address.

## After Upgrading

Check your device's home page and follow any warnings shown there.

If something doesn't look right, see [My Device did not Upgrade Properly](/troubleshooting/device-did-not-upgrade.html). If you need help, please [contact support](https://mynodebtc.com/support).
