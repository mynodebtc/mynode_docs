# My Device has a Drive Error

If your device gets into a state indicating "Drive Error" it means an error has been detected on the external drive and the device cannot properly read and write data.

The error will popup and appear like this.

<center>
  <figure>
    <img src="/images/troubleshooting/warning_drive_readonly_1.png" alt="Drive Read Only Error">
  </figure>
</center>

## Step 1

First, try rebooting the device and monitor to see if the error comes back. If so, there may be corruption on the external drive preventing it from working properly.

## Step 2 - Remount the External Drive

The next thing to try is to remount the external drive via the settings page. Under the Advanced section, there is a button to remount the drive, which may make it read/write again and ready for use.

<center>
  <figure>
    <img src="/images/troubleshooting/warning_drive_readonly_2.png" alt="Remount Button Image">
  </figure>
</center>

## Step 3 - Investigate the USB adapter

If that still does not work, your drive may be suffering from a USB -> SATA adapter that is not well supported. Try replacing it with one that has been well tested.

**Recommeded Adapters**

+ [UGREEN External Hard Drive Enclosure](https://amzn.to/3b2gowf)

## Step 4 - Format the Drive

In some cases, the data on the external drive has been corrupted causing the drive to be unusable. This may have been caused by power outages or certain hardware, like from step 3. In this case, you can format the drive to get back up and running.

**NOTE:** Ensure you have backed up all wallet information, seed phrases, and static channel backup files prior to formatting your drive. This action CANNOT be undone!

<center>
  <figure>
    <img src="/images/troubleshooting/warning_drive_readonly_3.png" alt="Format Drive Button Image">
  </figure>
</center>

After rebooting, the drive will format and your device will begin syncing the blockchain again. If you had a Lighting wallet, you can re-import the wallet by following the [Restore Lightning Wallet](/lightning/restore) guide.