# Flash MyNode OS Image

For most types of devices, including the Raspberry Pi 4 and mini PCs, the first step in getting started is to download a MyNode image and flash it onto a USB flash drive or SD card. The the flash drive is then inserted into the device so it can run the MyNode software.

This same process can be done to load new versions of software, reset your password if it was forgotten, or to swap to a new flash drive with larger storage capacity.

<!--
## What is an SD Card 

The Raspberry Pi and many other devices use a micro SD card that is inserted into a slot in the device. If you need a micro SD card, they will look similar to the image below and can be purchased from [Amazon](https://amzn.to/3x8AI8r).

<center>
  <figure>
    <img src="/images/advanced/flash_sd_card_1.png" width="200">
  </figure>
</center>

On the Raspberry Pi, the SD card slot can be found on the bottom of the device.

<center>
  <figure>
    <img src="/images/advanced/flash_sd_card_3.png" width="300">
  </figure>
</center>
-->

## Download the Software Image

You will need to download the image for your device from [mynodebtc.com/download](https://mynodebtc.com/download).

<center>
  <figure>
    <img src="/images/advanced/flash_sd_card_5.png" width="400">
  </figure>
</center>

Once downloaded, the software needs to be written to the flash drive.

## Flash the OS Image

To load software image on the USB drive or SD card, you will need to connect it to your computer. If you have an SD card, you will need a way to connect it to your computer. Some PCs and laptops have a slot to insert them, but most users will need a USB to micro SD adapter. They can be found on [Amazon](https://amzn.to/38OtQF4).

Connect the flash drive to your computer.

Then, download [Etcher](https://www.balena.io/etcher/), a program for writing software images, and install it on your PC or Mac.

<small><b>Note:</b> On Windows 11, some system settings may need to be changed to properly flash images. If
you have issues, more information is available on the <a href="https://forums.balena.io/t/unable-to-use-etcher-with-win11/349919/5">Balena Forums</a>.</small>

Open Etcher and click "Flash from file" and choose the recently downloaded image.

<center>
  <figure>
    <img src="/images/advanced/flash_sd_card_6.png" width="400">
  </figure>
</center>

After selecting the image, click "Select target".

<center>
  <figure>
    <img src="/images/advanced/flash_sd_card_7.png" width="400">
  </figure>
</center>

Choose the SD card or USB drive from the list and click "Select". Verify the size of the drive matches what you expect.

<center>
  <figure>
    <img src="/images/advanced/flash_sd_card_8.png" width="400">
  </figure>
</center>

Once selected, click "Flash!" and the image will be written to the drive. The flashing process may take 5-15 minutes.

<center>
  <figure>
    <img src="/images/advanced/flash_sd_card_9.png" width="400">
  </figure>
</center>

Once the image has been written to the flash drive, you can remove it from the PC.

<center>
  <figure>
    <img src="/images/advanced/flash_sd_card_10.png" width="400">
  </figure>
</center>


## Insert Flash Drive into Device

Finally, the last step is to take the flash drive and insert it into the unpowered device.

<center>
  <figure>
    <img src="/images/advanced/flash_sd_card_2.png" width="400">
  </figure>
</center>

Once, it has been inserted, reconnect the power cable and enjoy MyNode!

For futher steps, try the [Getting Started](/intro/getting-started) guide.
