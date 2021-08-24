# My Device has a Filesystem Error

If your device displays a message indicating a filesystem or "fsck" error, it means the device has automatically detected an error on the external drive. In many cases, it will automatically resolve the issue and you will need to click "OK" to dismiss the message.

The error will popup and appear like this on the main myNode page.

<center>
  <figure>
    <img src="/images/troubleshooting/fsck.png" alt="Filesystem warning">
  </figure>
</center>

## Concern

While data corrption is not a good thing, if this issue has only happened once, it may be nothing to worry about. If the message has appeared several times, it may warrant more investigation.

If the issue has appeared multiple times and you do not believe the hardware to be bad, you may need to reformat the external drive to get back to working condition. Some data corruption cannot be automatically recovered. This option is available via the settings page.

## Causes

### Power Outages

First, this issue can be caused by power outages when the drive was in the middle of writing a file and power was lost. If that is the case or your area experiences frequent power outages, you may want to look into putting your device on a battery backup to prevent data corruption.

### Unsupported USB -> SATA Adapter

Your drive may be suffering from a USB -> SATA adapter that is not well supported. Try replacing it with one that has been well tested.

**Recommeded Adapters**

+ [UGREEN External Hard Drive Enclosure](https://amzn.to/3b2gowf)

### Failing Drive

This issue can also be caused by a failing drive. This can be a hardware failure or by corruption that cannot be automatically recovered.

### Hardware Failure

Finally, this can be caused by other hardware going bad. It can be related to power supply problems, a bad device, or the drive itself going bad. To verify other hardware is working, you can detach the drive and let the device run for 24-48 hours while monitoring the uptime on the settings page. Verify the uptime does not get reset back to 0, indicating the device rebooted on its own.