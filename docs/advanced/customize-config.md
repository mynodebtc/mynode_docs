# Customizing Bitcoin and LND Config

## Adding Custom Bitcoin Configuration

myNode generates much of the Bitcoin config automatically so it can easily communciate with other services on the device. However, you may want to tweak certain settings to control bandwidth, add specific peers, etc...

To do this, you can go to your myNode homepage and scroll to the bottom and click on the `Settings` button, as shown here:

![Settings](/images/device/settings_comp.png)

When the `Settings` window has opened, scroll down to  the section labeled `Bitcoin` and click the `Edit Config` button.

![Bitcoin Config](/images/device/edit_bitcoin_conf_comp.png)

Make any desired changed and click on the `Save` button. This will automatically reboot your myNode installation.

NOTE: Changing your Bitcoin Config file will prevent future myNode updates from further modifying the file. This may or may not
be desirable. Make sure you understand what you are changing, and why.

## Adding Custom LND Configuration

myNode generates much of the LND config automatically so it can easily communciate with other services on the device. However, you may want to tweak certain settings to add Watchtower functionality, control bandwidth, etc...

To do this, you can go to your myNode homepage and scroll to the bottom and click on the `Settings` button, as shown here:

![Settings](/images/device/settings_comp.png)

When the `Settings` window has opened, scroll down to  the section labeled `Lightning` and click the `Edit Config` button.

![LND Config](/images/device/edit_lnd_conf_comp.png)

Make any desired changed and click on the `Save` button. This will automatically reboot your myNode installation.

NOTE: Changing your LND Config file will prevent future myNode updates from further modifying the file. This may or may not
be desirable. Make sure you understand what you are changing, and why.
