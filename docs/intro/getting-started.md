---
title: "Getting Started with MyNode"
description: "Bring a new MyNode online: flash the image, boot the device, open the web interface and start the initial Bitcoin blockchain sync!"
tags:
- "MyNode setup"
- "Bitcoin node"
- "Lightning node"
- "getting started"
sidebarDepth: 0
---

# Getting Started with MyNode

Choose the section that corresponds to your situation and expand the details to get started.

## Building your Own Device

Expand this section if you are building a MyNode device.

<details>
<summary><b>Show Details</b></summary>

<div class="details-body">

Setting up a new MyNode device can be done in a few simple steps!

**Acquire Parts**

First, you need to acquire the parts you will need to assemble the device. A full parts list can be found on the <a href="https://mynodebtc.com/download" target="_blank">MyNode download page</a>.

In general, you will need:
- A Mini PC or Raspberry Pi 5
- A USB thumbdrive as the boot drive
- A 2TB SSD for the data drive

**Download MyNode OS Image**

Next, you need to download the MyNode image for your device type and [flash it to a USB thumbdrive](/advanced/flash-sd-card) according to the instructions on the download page. The device will boot from the thumbdrive into the MyNode OS!

**Connect Data Drive**

Many devices, like the Raspberry Pi 4 and 5, use an external drive attached via USB for data storage. Some devices, like mini PCs, support internal storage drives. Those should be preferred and offer better performance.

For internal storage, follow these steps:

- Open Mini PC
- Insert an SSD or NVMe drive of at least 2TB

For external storage, follow these steps:

- Insert SSD into USB Enclosure
- Verify connections are secure
- Attach SSD enclosure to device in USB 3 port (blue)

**Setup Device**

- Insert the flashed USB thumbdrive into the device
- Connect the Ethernet cable between your device and your router

**Power on Device**

- Plug power cable in outlet and connect to device
- Push power button if your device has one

Your node is now booting and will be accessible shortly!

</div>
</details>


## Model Two

Expand this section if you purchased a MyNode Model Two.

<details>
<summary><b>Show Details</b></summary>

<div class="details-body">

**Setup Device**

- Insert the provided USB thumbdrive into the device
- Connect the Ethernet cable between your device and your router

**Power on Device**

- Plug power cable in outlet and connect to your device
- Push power button on the front of your device to turn it on

Your node is now booting and will be accessible shortly!

</div>
</details>

## Connecting to MyNode

Your MyNode device runs its own web server that you can access with any browser on the same WiFi or local network. Visit [http://mynode.local/](http://mynode.local/) or [the IP address](/advanced/find-device-ip) in a web browser on your PC, laptop, tablet, or phone.

**Note:** The device may reboot during initial setup. The web interface may not be available for 5-10 minutes.

Upon accessing the web interface, you will be prompted to login. The default password is `bolt`.

You will be prompted to enter your product key. If you are using the Community Edition, you can choose that option. Otherwise, enter the product key that has either been emailed to you, or is found on the bottom of your device.

<center>
  <figure>
    <img src="/images/getting-started/gs1.png" width="400" alt="MyNode Product Key screen with a text field, a Save Product Key button, and a Choose Community Edition button">
  </figure>
</center>

Next, the device will begin syncing the Bitcoin Blockchain! This process can take 6+ days, depending on your device and your network bandwidth. The MyNode web interface will show you the current status of synchronization. Once the initial sync is completed, the device will automatically stay synchronized with the Bitcoin network and display the main application page.

<center>
  <figure>
    <img src="/images/getting-started/gs2.png" width="400" alt="MyNode sync screen reading Bitcoin Blockchain Syncing, with a count of blocks downloaded out of the chain total">
  </figure>
</center>

Your MyNode device is now ready and you will see the main MyNode home page.

<center>
  <figure>
    <img src="/images/getting-started/gs3.png" alt="MyNode home page with Bitcoin and Lightning core service tiles above a grid of app tiles including RTL, Electrum Server, BTCPay Server, Mempool, and Thunderhub">
  </figure>
</center>

You can optionally connect to your MyNode device via SSH if you are familiar with Linux. You can connect using the device IP or hostname.

### Default Credentials

Username: `admin`

Password: `bolt`

**Note:** It is recommended to [change your password](/device/changing-password).

From here, you can start using all the features MyNode has to offer!


## Next Steps

[Change your Password](/device/changing-password)

[Setup Lightning Wallet](/lightning/create)
