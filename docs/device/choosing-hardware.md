---
title: "Choosing Hardware for MyNode"
description: "Choose hardware for a Bitcoin node running MyNode: Raspberry Pi 4 vs Raspberry Pi 5 vs a mini PC, how big an SSD you need, power supplies, and how to test your drive."
tags:
- "Bitcoin node hardware"
- "Raspberry Pi 5"
- "mini PC"
- "MyNode"
---

# Choosing Hardware for MyNode

MyNode runs on a Raspberry Pi, a mini PC or other x86 computers, or a virtual machine. You can also buy a ready-made MyNode device. This guide helps you choose.

## Quick Recommendation

- **Easiest:** a pre-built [MyNode device](https://mynodebtc.com/order_now). It arrives with MyNode installed.
- **Best value to build:** a mini PC with an internal 2 TB SSD.
- **Smallest and quietest:** a Raspberry Pi 5 with a 2 TB SSD in a USB enclosure.

These are also MyNode's own recommendations for building your own node. You can find a parts list on the [download page](https://mynodebtc.com/download).

## Comparing Devices

| | Raspberry Pi 4 | Raspberry Pi 5 | Mini PC |
|---|---|---|---|
| **Speed** | Slowest | Faster | Fastest |
| **Initial sync** | Slowest, can take a long time | Faster | Fastest |
| **Data drive** | SSD in a USB enclosure | SSD in a USB enclosure | Internal SSD or NVMe |
| **Boot drive** | SD card or USB drive | SD card or USB drive | USB drive or internal drive |
| **Running many apps** | Limited | Good | Best |
| **Power use** | Lowest | Low | Higher than a Pi, still modest |
| **Best for** | Existing Pi 4 owners | A small, efficient node | A node that runs many apps |

If you already have a Raspberry Pi 4, it still works. If you're buying new, a Pi 5 or mini PC handles today's blockchain and apps much better.

### Raspberry Pi

A Raspberry Pi is small, silent and uses very little power. You'll need:

- A Raspberry Pi 5 kit with a case, SD card and **the official power supply**.
- A 2 TB SSD and a USB 3 enclosure for it.

A weak power supply is one of the most common causes of problems on a Pi. If you see [voltage warnings](/troubleshooting/voltage-error), replace it with an official one. Plug the SSD enclosure into a blue USB 3 port.

Raspberry Pi boards come with different amounts of RAM. More RAM helps if you plan to run many apps.

### Mini PC

A mini PC is usually faster than a Pi, and lets you install the SSD inside the case, which is faster and more reliable than USB. MyNode's own Model Two is a mini PC with an Intel N100 processor, 16 GB of RAM and a 2 TB NVMe SSD, which is a good example of what to look for.

MyNode uses two drives: a USB thumb drive of 32 GB or more for the operating system, and the internal SSD for data. See [Install on a Mini PC](/advanced/install-pc-server).

### Virtual Machine

You can run MyNode in a virtual machine on a computer you already have. This is best for testing. A node is most useful when it's running all the time. See [Installing in VirtualBox](/advanced/install-virtual-box).

## How Big a Drive Do You Need?

**Use a 2 TB SSD.** The Bitcoin blockchain grows every day, and MyNode also stores a transaction index, the Electrum Server's index and your apps' data. A 1 TB drive no longer leaves enough room.

- **SSD, not a hard drive.** A spinning hard drive makes the initial sync and the Electrum Server's indexing far slower.
- **A reliable brand.** The data drive is written to constantly. A failed drive means downloading the whole blockchain again.
- **For a Pi, a good USB enclosure.** Cheap enclosures are a common source of drive errors.

If you run out of space later, you can move to a bigger drive with the [Clone Tool](/advanced/clone-tool). See [My Drive is running out of Space](/troubleshooting/drive-full).

## Test Your Drive

Once MyNode is running, you can test your data drive from the **Data Drive** section of the Settings page:

- **Benchmark Data Drive** measures its speed. Run it if syncing seems unusually slow.
- **Data Drive Health Test** runs a SMART self-test and shows the drive's health data. It takes about two minutes, and MyNode keeps running while it does.

<center>
  <figure>
    <img src="/images/hardware/data-drive-settings.png" style="width: 600px" alt="Data Drive section of the MyNode Settings page with buttons to Run Disk Benchmark, Run SMART Short Test, toggle automatic checks, run a full filesystem check, remount the drive, enable the UAS USB driver, open the Clone Tool and format the drive">
  </figure>
</center>

On a Raspberry Pi 4, the **Enable UAS USB Driver** setting can change your drive's performance. Saving it reboots the device.

## Other Things You'll Need

- **A wired network connection.** Ethernet is more reliable than Wi-Fi, especially during the initial sync. See [Connecting to Wi-Fi](/device/connect-wifi) if you can't use a cable.
- **Optionally, a UPS.** A small battery backup protects your drive from sudden power loss.

## Next Steps

[Get started with MyNode](/intro/getting-started)

[Solo mine with your node](/mining/solo-mining)
