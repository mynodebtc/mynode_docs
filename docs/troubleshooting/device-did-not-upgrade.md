# My Device did not Upgrade Properly

If your device does not appear to have upgraded properly, there are several ways to attempt to resolve the issue. An upgrade issue may appear like the following:

- The myNode version appears incorrect
- There is a message indicating upgrade failure on the settings page
- An app is failing after an upgrade
- An app version is not upgraded after an upgrade

## Background

The upgrade process occurs in several stages:

1. The updated files are downloaded from mynodebtc.com
2. The updated files are extracted
3. The upgrade scripts are executed
    - Operating system packages are updated
    - Each updated application is installed
4. Reboot
5. The updated docker images are installed

To prevent failures from compounding, if anything does not succeed during step 1-3, it will jump to step 4 and reboot. This means it is possible for the new files to be in use, but not all applications were updated. This may appear as app version being out of date, but myNode showing as the latest release. 

This type of error can occur due to network errors, web servers being down, etc.. that can all happen during the upgrade.

## Re-attempt the Upgrade

The simplest action to take, which is likely help resolve the issue, is to re-attempt the upgrade. This can be done on the settings page under the "Developer" section heading.

<center>
  <figure>
    <img src="/images/troubleshooting/reinstall_latest_version.png" alt="Reinstall Latest Version Button">
  </figure>
</center>

Click the "Install Latest Version" button and the device will reboot and attempt to re-run the upgrade process.

It may help to wait a period of time before re-trying if the issue was caused by a network or server issue.

## Re-attempt the Upgrade via Linux Terminal

If the error is preventing access to the web interface, try using the Linux Terminal to re-attempt the upgrade.

First, connect to the Linux Terminal using [this guide](/advanced/linux-terminal.html).

Second, type in the following command and press enter. It will prompt you for your password. Enter it and press enter again.

`sudo /usr/bin/mynode_upgrade.sh`

The upgrade should re-run and fix any issues caused by the first failed upgrade.

## Upgrade a Specific App

If a specific application is not working or did not appear to upgrade, another option it to attempt to re-install a specific app.

This can be done on the application page by clicking the "Reinstall" button next to the application experiencing problems.

<center>
  <figure>
    <img src="/images/troubleshooting/reinstall_app.png" alt="Reinstall App Button">
  </figure>
</center>

The device will attempt to reinstall the app and reboot.

##  Gather Logs

If the above steps have not helped, try gathering upgrade and/or application log data. These may be helpful to support.

The two most helpful logs will be:
- The log from the latest upgrade
- The logs from any applciations experiencing issues

The latest upgrade log can be found on the settings page as show below.

<center>
  <figure>
    <img src="/images/troubleshooting/show_upgrade_log.png" alt="Show Upgrade Log Button">
  </figure>
</center>

Logs from applications experiencing issues can be found on the status page by clicking the Show Log button. Here is example.

<center>
  <figure>
    <img src="/images/troubleshooting/show_app_log.png" alt="Show App Log Button">
  </figure>
</center>

## Re-flash the SD card

The final thing to try is re-flashing the SD card, especially if more than one version has failed to update properly. This will clear any corrupt data and write a fresh myNode operating system to the SD card. All critical data is saved on the external drive, so you will not lose your Bitcoin or Lightning data. Some applications may need to be re-installed.

Detailed instructions available on the <a href="https://mynodebtc.com/download">download</a> page.

- Shutdown device using the button on the settings page
- Remove SD Card from Device
- Re-flash the SD Card
- Insert SD card back into the device
- Power device back on (may need to remove and re-connect power cable)
- Your password will also be reset to "bolt"!

Note: This process may cause your device to get a new IP address.
