# Customizing Bitcoin and LND Config

## Adding Custom Bitcoin Configuration

myNode generates much of the Bitcoin config automatically so it can easily communciate with other services on the device. However, you may want to tweak certain settings to control bandwidth, add specific peers, etc...

To do this, you must access your myNode device via SSH and get access to the terminal. Then edit the file /mnt/hdd/mynode/settings/bitcoin_additional_config. You can use a terminal based text editor like vi or nano.

<center>
  <figure>
    <img src="/images/device/config.png" alt="password" style="width: 500px">
  </figure>
</center>

Once the file has been saved, reboot your myNode. The new settings will be applied to your bitcoin.conf file, even between reboots and upgrades!

## Adding Custom LND Configuration

myNode generates much of the LND config automatically so it can easily communciate with other services on the device. However, you may want to tweak certain settings to control bandwidth, peers, etc...

To do this, you must access your myNode device via SSH and get access to the terminal. Then edit the file /mnt/hdd/mynode/settings/lnd_additional_config. You can use a terminal based text editor like vi or nano.

Once the file has been saved, reboot your myNode. The new settings will be applied to your lnd.conf file, even between reboots and upgrades!
