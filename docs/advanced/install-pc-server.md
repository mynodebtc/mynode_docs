---
title: "Install on a Mini PC"
description: "Install MyNode on a mini PC: choose the hardware, flash the amd64 image to a USB drive, install a 2 TB SSD, set the BIOS to boot from USB, and finish setup in your browser."
tags:
- "MyNode"
- "mini PC"
- "PC install"
- "Bitcoin node"
---

# Install on a Mini PC

A mini PC is the best value way to build your own MyNode. It's faster than a Raspberry Pi, holds its SSD inside the case, and still uses little power. This guide covers the whole process, from choosing parts to your first login.

The same steps work for most other x86 computers, like an old laptop or desktop.

## How MyNode Uses Two Drives

MyNode keeps the operating system and your data on separate drives:

- **Boot drive:** a USB thumb drive of 32 GB or more, holding MyNode's operating system and apps.
- **Data drive:** the internal SSD, holding the Bitcoin blockchain and all app data.

This makes recovery simple. If the boot drive fails or you need a fresh install, you flash a new USB drive, and your data drive keeps the blockchain and your apps' data.

## What You Need

| Part | What to look for |
|---|---|
| **Mini PC** | An Intel N100 or faster processor, 8 GB of RAM or more (16 GB if you'll run many apps), and room for an internal M.2 NVMe or 2.5" SSD |
| **SSD** | 2 TB from a reliable brand. NVMe is fastest, but a SATA SSD is fine |
| **USB thumb drive** | 32 GB or larger, preferably USB 3 |
| **Ethernet cable** | To connect the mini PC to your router |

For temporary setup, you'll also want a monitor and keyboard to change BIOS settings.

MyNode's own Model Two is a mini PC with an Intel N100, 16 GB of RAM and a 2 TB NVMe SSD, which is a good example to follow. For more on choosing parts, see [Choosing Hardware for MyNode](/device/choosing-hardware).

## Step 1: Download MyNode

On another computer, go to the [MyNode download page](https://mynodebtc.com/download), choose **PC**, and download the image. It's a file named like `mynode_amd64_<version>.img.gz`. You can also verify the download using the instructions on that page.

<center>
  <figure>
    <img src="/images/advanced/install-pc-download.png" style="width: 600px" alt="Step 1 of the MyNode download page with PC selected, a Download MyNode for PC button, and recommended hardware: a mini PC, a 2 TB SSD and a 32 GB USB flash drive">
  </figure>
</center>

## Step 2: Flash the USB Drive

Write the image to your USB thumb drive with [Balena Etcher](https://etcher.balena.io/):

1. Insert the USB drive into your computer.
2. In Etcher, click **Flash from file**, and choose the downloaded image.
3. Click **Select target**, and choose the USB drive. Double-check it's the right drive, since everything on it will be erased.
4. Click **Flash!**, and wait for it to finish and verify.

![balenaEtcher with the MyNode amd64 image selected, a 32 GB USB drive chosen as the target, and the Flash button ready](/images/advanced/install_pc_2.png)

For more detail, see [Flash MyNode OS Image](/advanced/flash-os-drive).

## Step 3: Install the SSD

If your mini PC didn't come with the SSD installed:

1. Unplug the mini PC, and open the case. Usually this is a few screws on the bottom.
2. Insert the SSD into the M.2 slot or the 2.5" drive bay, and secure it.
3. Close the case.

Any data already on the SSD will be erased when MyNode formats it.

## Step 4: Set Up the BIOS

Connect a monitor and keyboard, turn on the mini PC, and press the key for its BIOS setup as it starts. This is often **Delete**, **F2** or **F7**. Check your mini PC's manual if those don't work. Then:

- **Boot order:** make the USB drive the first boot device.
- **Secure Boot:** turn it off. Otherwise the mini PC may refuse to boot MyNode.
- **Power on after power loss:** if there's a setting like "Restore on AC Power Loss", set it to **Power On**. Your node then restarts by itself after a power cut.

Save your changes and exit.

If your mini PC has an operating system on its internal drive, make sure the USB drive comes before it in the boot order, or MyNode won't start.

## Step 5: Boot MyNode

1. Insert the flashed USB drive into the mini PC.
2. Connect it to your router with an Ethernet cable.
3. Turn it on.

![USB thumb drive plugged into the front USB port of a mini PC](/images/advanced/install_pc_3.png)

The first boot takes several minutes, and the device may reboot during setup. You can unplug the monitor and keyboard now.

## Step 6: Finish Setup in Your Browser

On another device on the same network, open [http://mynode.local](http://mynode.local). If that doesn't work, use the device's IP address. See [Finding Your Device's IP Address](/advanced/find-device-ip).

Log in with the default password, `bolt`. MyNode then asks you to set your own password.

<center>
  <figure>
    <img src="/images/advanced/install_pc_4.png" style="width: 400px" alt="MyNode login page with a password field, a Login button, and a note that the default password is bolt">
  </figure>
</center>

MyNode then shows a few setup screens:

- **Drive Found:** MyNode has detected your SSD and needs to format it. Click **Format Drive**.
- **Choose Network:** pick Clearnet for a faster sync, or Tor for more privacy. You can change this later. See [Bitcoin and Lightning Networks](/networking/tor).
- **Product Key:** enter your product key, or choose Community Edition.

Bitcoin then starts syncing the blockchain. This can take a day or more, depending on your mini PC and internet connection.

## After Setup

- [Upgrade your device](/device/upgrading-device) to the latest version.

## Troubleshooting

- **The mini PC boots into another operating system.** Check the boot order in the BIOS, and that Secure Boot is off.
- **`mynode.local` doesn't load.** Wait 10 minutes after the first boot, then try the IP address instead.
- **MyNode doesn't find the data drive.** Check the SSD is seated properly, and that the BIOS shows it.

## Next Steps

[Get started with MyNode](/intro/getting-started)

[Set up a Lightning wallet](/lightning/create)
