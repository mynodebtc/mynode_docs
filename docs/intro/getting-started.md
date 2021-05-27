---
sidebarDepth: 0
---

# Getting Started with myNode

## Download and Install

You can skip this step if you purchased a pre-loaded myNode device!

Setting up a new myNode device can be done in a few simple steps. First, you need to download the myNode image for your device type and flash it on an SD card according to the instructions on the download page.

## Power On and Attach External Storage

Next, power on the device and attach an external HDD or SSD.

**Note**: The drive will be re-formatted for use by myNode and existing data will be lost!

## Connecting to myNode

Your myNode device runs its own local web server that you can access with any browser on the same network. Visit [http://mynode.local/](http://mynode.local/) or [http://(mynode.IP.address)/](http://mynode_ip_address/) in a web browser on a network-connected device. Here replace ’(mynode.IP.address)’ with the IP address of the myNode device.

You will be prompted to enter your product key. If you are using the Community Edition, you can choose that option. Otherwise, enter the product key that has either been emailed to you, or is found on the bottom of your device.

Next the device may run *QuickSync*. If you are using a hard drive, QuickSync will run which downloads a pre-validated truncated copy of the blockchain so you can get started more quickly. If you have a solid state drive (SSD) QuickSync should not run. This process could take one or two days depending on your device and your network bandwidth. The myNode device’s web interface will show you the current status of synchronization. Once *QuickSync* is completed, the device will automatically stay synchronized with the Bitcoin network.

![main page](/images/getting-started/gs1.png)

Your myNode device is now ready and you will see the main myNode home page.

![main page](/images/getting-started/gs2.png)

You can optionally connect to your myNode device via SSH if you are familiar with Linux. You can connect using the device IP or hostname.

### Default Credentials

Username: `admin`

Password: `bolt`

**Note:** It is recommended to [change your password](/device/changing-password).

From here, you can start using all the features myNode has to offer!


## Next Steps

[Change your Password](/device/changing-password)

[Setup Lightning Wallet](/lightning/create)