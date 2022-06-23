---
sidebarDepth: 0
---

# Getting Started with myNode

## Download and Install

You can skip this step if you purchased a myNode device!

Setting up a new myNode device can be done in a few simple steps. First, you need to download the myNode image for your device type and [flash it to an SD card](/advanced/flash-sd-card) according to the instructions on the download page.

## Power On and Attach Storage

Next, power on the device and attach an external SSD.

## Connecting to myNode

Your myNode device runs its own local web server that you can access with any browser on the same network. Visit [http://mynode.local/](http://mynode.local/) or [the IP address](/advanced/find-device-ip) in a web browser on a device that is on the same network.

*Note:* The device may reboot during initial setup. The web interface may not be available for 5-10 minutes.

You will be prompted to enter your product key. If you are using the Community Edition, you can choose that option. Otherwise, enter the product key that has either been emailed to you, or is found on the bottom of your device.

<center>
  <figure>
    <img src="/images/getting-started/gs1.png" width="400">
  </figure>
</center>

Next, the device will begin syncing the Bitcoin Blockchain! This process can take 6+ days, depending on your device and your network bandwidth. The myNode web interface will show you the current status of synchronization. Once the initial sync is completed, the device will automatically stay synchronized with the Bitcoin network and display the main application page.

<center>
  <figure>
    <img src="/images/getting-started/gs2.png" width="400">
  </figure>
</center>

Your myNode device is now ready and you will see the main myNode home page.

<center>
  <figure>
    <img src="/images/getting-started/gs3.png">
  </figure>
</center>

You can optionally connect to your myNode device via SSH if you are familiar with Linux. You can connect using the device IP or hostname.

### Default Credentials

Username: `admin`

Password: `bolt`

**Note:** It is recommended to [change your password](/device/changing-password).

From here, you can start using all the features myNode has to offer!


## Next Steps

[Change your Password](/device/changing-password)

[Setup Lightning Wallet](/lightning/create)