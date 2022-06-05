# Flash SD Card Image

For many types of devices, including the Raspberry Pi 4, the first step in getting started is to download a myNode image and flash it onto an SD card. The SD card is then inserted into the device so it can run the myNode software.

This same process can be done to load new versions of software, reset your password if it was forgotten, or to swap to a new SD card with larger storage capacity.

## What is an SD Card

The Raspberry Pi and most other small computers use a micro SD card that is inserted into a slot in the device. If you need a micro SD card, they will look similar to the image below and can be purchased from [Amazon](https://amzn.to/3x8AI8r).

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

## Download the Software Image

You will need to download the image for your device from [mynodebtc.com/download](https://mynodebtc.com/download).

<center>
  <figure>
    <img src="/images/advanced/flash_sd_card_5.png" width="400">
  </figure>
</center>

Once downloaded, the software software needs to be written to the SD card.

## Flash SD Card

To load software image on the SD card, you will need a way to connect the SD card to your computer. Some PCs and laptops have a slot to insert them, but most users will need a USB to micro SD adapter. They can be found on [Amazon](https://amzn.to/38OtQF4).

<center>
  <figure>
    <img src="/images/advanced/flash_sd_card_4.png" width="200">
  </figure>
</center>

Put the SD card into the adapter and connect it to your PC.

Then, download [Etcher](https://www.balena.io/etcher/), a program for writing software images to SD cards, and install it on your PC or Mac.

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

Once the image has been flashed to the SD card, you can remove it from the PC.

<center>
  <figure>
    <img src="/images/advanced/flash_sd_card_10.png" width="400">
  </figure>
</center>


## Insert SD Card into Device

Finally, the last step is to take the SD card and insert it into the unpowered device.

<center>
  <figure>
    <img src="/images/advanced/flash_sd_card_2.png" width="400">
  </figure>
</center>

Once, it has been inserted, reconnect the power cable and enjoy myNode!

For futher steps, try the [Getting Started](/intro/getting-started) guide.
