# Install on a PC or Server

## Background

myNode has been designed to protect your data by requiring two drives. One drive contains the operating system and applications and the other stores the data. This allows for easier data backup and enables simpler recovery.

This guide suggests using a USB drive to boot the operating system and using an internal drive for data. In more advanced use cases, the myNode image can be written to an internal drive as well using similar tools. It is assumed a dedicated PC or server will be running myNode.

## Download

First, download the myNode image for a PC or server (amd64) from [mynodebtc.com](http://mynodebtc.com/download) and save it. This should be done on a PC that is not intended to be used as the node.

## Write Image to Drive

Once the image has been downloaded, write the image to a drive that will be used to boot the PC or server intended to run myNode. This can easily be done with a [USB drive](https://amzn.to/3AlIxco) and [Balena Etcher](https://www.balena.io/etcher/).

Insert the USB drive into your PC and open Etcher. Write the myNode image to the USB drive using Etcher and remove from your PC once the image has been successfully written.

## Boot Device

Now that the USB drive has been written, insert it into the PC or server to be used as your node and reboot the device. The device may need to have its BIOS settings updated to boot from the new device.

## Running myNode

Once the PC or server has been powered on, you can access the myNode interface by either accessing http://mynode.local via a device connected to the same network or via a monitor and keyboard connected to the device. You can login with the username `admin` and password `bolt`.
