# My Device is stuck at Formatting Drive

Some users may encouter an issue where the first step of setting up the external drive for use by myNode stalls and becomes stuck. This is likely due to a USB to SATA adapter that is not well supported by the Raspberry Pi operating system.

### Solid State Drive

If you are using a solid state drive, the issue is more likely to be poor driver support for the specific USB -> SATA adapter you are using.

To resolve this, you have two options. First, you can try plugging your drive into a USB 2 port (black) on the device. This will typically revert the driver back to the older, but more consistent, version and help avoid issues. If that doesn't work, or you want to continue using USB 3, try using a recommeded USB->SATA adapter that has worked well for users in the past.

**Recommeded Adapters**

+ [UGREEN External Hard Drive Enclosure](https://amzn.to/3b2gowf)

After updating your drive connection, you may need to use the Format Drive option on the settings page to trigger it to re-format the external drive.
