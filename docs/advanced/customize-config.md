# Customizing Bitcoin and LND Config

## Adding Custom Bitcoin Configuration

myNode generates much of the Bitcoin configuration automatically so it can easily communciate with other services on the device. However, you may want to adjust the settings to control bandwidth, add specific peers, etc...

To adjust settings, access your myNode device via SSH and get access to the terminal. Then edit the file `/mnt/hdd/mynode/settings/bitcoin_additional_config` using a terminal text editor like vi or nano.

<center>
  <figure>
    <img src="/images/device/config.png" alt="password" style="width: 500px">
  </figure>
</center>

Once the changes are saved, reboot your myNode device. The new settings will be applied to your `bitcoin.conf` file, even between reboots and upgrades.

## Adding Custom LND Configuration

myNode generates much of the Lightning Network Daemon (LND) configuration automatically so it can easily communciate with other services on the device. However, you may want to adjust its settings to control bandwidth, peers, etc...

To adjust settings, access your myNode device via SSH and get access to the terminal. Then edit the file `/mnt/hdd/mynode/settings/lnd_additional_config`using a terminal text editor like vi or nano.

Once your changes are saved, reboot your myNode device. The new settings will be applied to your `lnd.conf` file, even between reboots and upgrades.
