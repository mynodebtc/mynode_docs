# My Device cannot Find the Drive

Some users may encouter an issue where the drive cannot be found even though it is attached. This is likely due to power or driver issues related to the external disk drive.

## Hard Disk Drive

If you are using a hard drive, you may need to provide more power to the drive. During disk startup it requires a large amount of power and this can cause the device to hang or fail. It can also lead to data corruption, which can cause other issues down the line.

If you experience this issue and have a hard drive, try using a USB Y cable or powered USB hub to power the drive.

A powered USB hub will let the drive pull power from two USB ports and a powered USB hub will provide an additional power supply for powering the drive. Here are two recommeded options.

+ [USB Y Cable](https://amzn.to/2SMixF7)  
+ [Powered USB Hub](https://amzn.to/3idx5bn)

Once updating your drive connection and power, it is recommended to reset the blockchain to restart QuickSync to avoid any issues with previously corrupted data.

Alternatively, you can try using a USB 2 port or different port on your device.

## Solid State Drive

If you are using a solid state drive, power is probably NOT the issue. The issue is more likely to be poor driver support for the specific USB -> SATA adapter you are using.

To resolve this, you have two options. First, you can try plugging your drive into a USB 2 port (black) on the device. This will typically revert the driver back to the older, but more consistent, version and help avoid issues. If that doesn't work, or you want to continue using USB 3, try using a recommeded USB->SATA adapter that has worked well for users in the past.

**Recommeded Adapters**

+ [UGREEN External Hard Drive Enclosure](https://amzn.to/3b2gowf)

Once updating your drive connection, it is recommended to reset the blockchain to restart IBD to avoid any issues with previously corrupted data.

