# Add applications to myNode

<!-- There are two options to install app on myNode
1. Source code
2. Docker -->

## Step 1: Add an entry in `application_info.json`

Add an entry in `rootfs/standard/usr/share/mynode/application_info.json`

Possible fields are:
| Field | Datatype | Required? |
| --- | --- | --- |
| name | string | Y |
| short_name | string | Y |
| app_tile_button_text | string | N |
| app_tile_button_href | string | N |
| app_tile_default_status_text | string | N |
| app_tile_running_status_text | string | N |
| supports_testnet | boolean | N |
| can_uninstall | boolean | N |
| show_on_homepage | boolean | N |
| show_on_application_page | boolean | N |
| homepage_order | integer | N |
| can_enable_disable | boolean | N |
| can_reinstall | boolean | N |
| requires_lightning | boolean | N |
| requires_electrs | boolean | N |
| requires_docker_image_installation | boolean | N |
| is_premium | boolean | N |

Example:
```json
{
    "name": "Ride the Lightning",
    "short_name": "rtl",
    "app_tile_name": "RTL",
    "app_tile_default_status_text": "Lightning Wallet",
    "can_uninstall": true,
    "show_on_homepage": true,
    "requires_lightning": true,
    "supports_testnet": true,
    "homepage_order": 11
}

```

## Step 2: Add icon for the home and applications page

Add a PNG icon in `rootfs/standard/var/www/mynode/static/images`.

The name of the icon should be **\<short_name\>.png**.


<center>

![RTL app tile](/images/add-app/app-tile.png)

</center>

## Step 3: Add an entry in `mynode_app_versions.sh`

Add an entry for your app like the example below:
```sh
RTL_VERSION="v0.11.2"
RTL_VERSION_FILE=/home/bitcoin/.mynode/rtl_version
RTL_LATEST_VERSION_FILE=/home/bitcoin/.mynode/rtl_version_latest
```

The version file should start with the **\<short_name\>** of the app.

## Step 4: Add installation steps

Add the installation steps in `rootfs/standard/usr/bin/mynode_post_upgrade.sh`. This script upgrades the app if a new version is available or installs it if it is not installed already.

Note that
- The `UPGRADE_URL` is the URL of the source code which includes the `VERSION` variable from `mynode_app_versions.sh` mentioned above
- Download and installation steps are executed by `bitcoin` user
- the app should be installed in `/opt/mynode/<short_name>`

Example:
```sh
if should_install_app "rtl" ; then
    RTL_UPGRADE_URL=https://github.com/Ride-The-Lightning/RTL/archive/$RTL_VERSION.tar.gz
    RTL_UPGRADE_ASC_URL=https://github.com/Ride-The-Lightning/RTL/releases/download/$RTL_VERSION/$RTL_VERSION.tar.gz.asc
    CURRENT=""
    if [ -f $RTL_VERSION_FILE ]; then
        CURRENT=$(cat $RTL_VERSION_FILE)
    fi
    if [ "$CURRENT" != "$RTL_VERSION" ]; then
        cd /opt/mynode
        rm -rf RTL

        sudo -u bitcoin wget $RTL_UPGRADE_URL -O RTL.tar.gz
        #sudo -u bitcoin wget $RTL_UPGRADE_ASC_URL -O RTL.tar.gz.asc

        #gpg --verify RTL.tar.gz.asc RTL.tar.gz
        #if [ $? == 0 ]; then
        if [ true ]; then
            sudo -u bitcoin tar -xvf RTL.tar.gz
            sudo -u bitcoin rm RTL.tar.gz
            sudo -u bitcoin mv RTL-* RTL
            cd RTL
            sudo -u bitcoin NG_CLI_ANALYTICS=false npm install --only=production

            echo $RTL_VERSION > $RTL_VERSION_FILE
        else
            echo "ERROR UPGRADING RTL - GPG FAILED"
        fi
    fi
fi
```

**DO NOT** add the installation steps in `setup/setup_device.sh` unless the app is designed to be installed by default (like Bitcoin, LND).


## Step 5: Add steps to uninstall/reinstall the app

Edit 
- `rootfs/standard/usr/bin/mynode_uninstall_app.sh` and
- `rootfs/standard/usr/bin/mynode_reinstall_app.sh`

to add customised steps to uninstall the app.

The uninstall script deletes the version and install marker file, whereas the reinstall script deletes only the version marker file and keeps the install marker file intact.

Example:
```sh
elif [ "$APP" = "rtl" ]; then
    rm -rf /opt/mynode/RTL
``` 

## Step 6: Add a service to run the applications in background

Add service entry for systemctl which would start/restart/stop the app.

The service file should be named as **\<short_name\>.service**.

Example
```sh
# RTL service
# /etc/systemd/system/rtl.service

[Unit]
Description=RTL
Wants=bitcoin.service
After=bitcoin.service

[Service]
ExecStartPre=/usr/bin/is_not_shutting_down.sh
ExecStartPre=/usr/bin/wait_on_lnd.sh
WorkingDirectory=/opt/mynode/RTL
ExecStart=/usr/bin/node rtl

User=bitcoin
Group=bitcoin
Type=simple
TimeoutSec=240
Restart=always
RestartSec=60
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=rtl

[Install]
WantedBy=multi-user.target
```

## Optional step: Add configurations files

Add any configuration files in `/rootfs/standard/usr/share/mynode/` folder and copy them over to the desired location during installation or startup

## Optional step: Edit startup script

All persistent files should be stored on the external drive at `/mnt/hdd/mynode/short_name`. Make sure the startup script located at `/rootfs/standard/usr/bin/mynode_startup.sh` creates that folder. You can use symlinks from `/opt/mynode/short_name` to `/mnt/hdd/mynode/short_name` to store large files on the external drive.

The example below shows how the startup script checks for the config file and creates symlinks if it's missing either on external drive or the SD card.

```sh
# RTL config
sudo -u bitcoin mkdir -p /opt/mynode/RTL
sudo -u bitcoin mkdir -p /mnt/hdd/mynode/rtl
chown -R bitcoin:bitcoin /mnt/hdd/mynode/rtl
chown -R bitcoin:bitcoin /mnt/hdd/mynode/rtl_backup
# If local settings file is not a symlink, delete and setup symlink to HDD
if [ ! -L /opt/mynode/RTL/RTL-Config.json ]; then
    rm -f /opt/mynode/RTL/RTL-Config.json
    sudo -u bitcoin ln -s /mnt/hdd/mynode/rtl/RTL-Config.json /opt/mynode/RTL/RTL-Config.json
fi
# If config file on HDD does not exist, create it
if [ ! -f /mnt/hdd/mynode/rtl/RTL-Config.json ]; then
    cp -f /usr/share/mynode/RTL-Config.json /mnt/hdd/mynode/rtl/RTL-Config.json
fi
# Force update of RTL config file (increment to force new update)
RTL_CONFIG_UPDATE_NUM=1
if [ ! -f /mnt/hdd/mynode/rtl/update_settings_$RTL_CONFIG_UPDATE_NUM ]; then
    cp -f /usr/share/mynode/RTL-Config.json /mnt/hdd/mynode/rtl/RTL-Config.json
    touch /mnt/hdd/mynode/rtl/update_settings_$RTL_CONFIG_UPDATE_NUM
fi
# Update RTL config file to use mynode pw
if [ -f /home/bitcoin/.mynode/.hashedpw ]; then
    HASH=$(cat /home/bitcoin/.mynode/.hashedpw)
    sed -i "s/\"multiPassHashed\":.*/\"multiPassHashed\": \"$HASH\",/g" /mnt/hdd/mynode/rtl/RTL-Config.json
fi
```

## Tips:

- Learn from installation scripts of existing apps
- Write scripts which do not fail unless they really need to