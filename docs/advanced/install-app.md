# Install Applications on myNode

There are two options to install app on myNode
1. Source code
2. Docker

<!-- ## Option 1: Using source code

## Option 2: Using docker -->


### Add a service

Add service entry for systemctl which would start/restart/stop the app.

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

### Add an entry in `mynode_app_versions.sh`

Add an entry for your app like the example below:
```sh
BTC_VERSION="0.21.1"
BTC_VERSION_FILE=/home/bitcoin/.mynode/bitcoin_version
BTC_LATEST_VERSION_FILE=/home/bitcoin/.mynode/bitcoin_version_latest
```

### Add an entry in `setup_device.sh` and `mynode_post_upgrade.sh`

Installation step is added identically in two files:
- `setup/setup_device.sh`
- `rootfs/standard/usr/bin/mynode_post_upgrade.sh`

Example:
```sh
# Upgrade BTC
echo "Upgrading BTC..."
ARCH="UNKNOWN"
if [ $IS_RASPI = 1 ]; then
    ARCH="arm-linux-gnueabihf"
    if [ $IS_RASPI4_ARM64 = 1 ]; then
        ARCH="aarch64-linux-gnu"
    fi
elif [ $IS_ROCK64 = 1 ] || [ $IS_ROCKPRO64 = 1 ]; then
    ARCH="aarch64-linux-gnu"
elif [ $IS_X86 = 1 ]; then
    ARCH="x86_64-linux-gnu"
else
    echo "Unknown Bitcoin Version"
    exit 1
fi
BTC_UPGRADE_URL=https://bitcoincore.org/bin/bitcoin-core-$BTC_VERSION/bitcoin-$BTC_VERSION-$ARCH.tar.gz
BTC_UPGRADE_SHA256SUM_URL=https://bitcoincore.org/bin/bitcoin-core-$BTC_VERSION/SHA256SUMS.asc
CURRENT=""
if [ -f $BTC_VERSION_FILE ]; then
    CURRENT=$(cat $BTC_VERSION_FILE)
fi
if [ "$CURRENT" != "$BTC_VERSION" ]; then
    # Download and install Bitcoin
    rm -rf /opt/download
    mkdir -p /opt/download
    cd /opt/download

    wget $BTC_UPGRADE_URL
    wget $BTC_UPGRADE_SHA256SUM_URL -O SHA256SUMS.asc

    sha256sum --ignore-missing --check SHA256SUMS.asc
    if [ $? == 0 ]; then
        gpg --verify SHA256SUMS.asc
        if [ $? == 0 ]; then
            # Install Bitcoin
            tar -xvf bitcoin-$BTC_VERSION-$ARCH.tar.gz
            mv bitcoin-$BTC_VERSION bitcoin
            install -m 0755 -o root -g root -t /usr/local/bin bitcoin/bin/*

            # Mark current version
            echo $BTC_VERSION > $BTC_VERSION_FILE
        else
            echo "ERROR UPGRADING BITCOIN - GPG FAILED"
        fi
    else
        echo "ERROR UPGRADING BITCOIN - SHASUM FAILED"
    fi
fi
```


### Add steps to uninstall the app

Edit `rootfs/standard/usr/bin/mynode_uninstall_app.sh` to add customised steps to uninstall the app.

Example:
```sh
# Custom uninstall steps
if [ "$APP" = "bos" ]; then
    npm uninstall -g balanceofsatoshis
``` 

### Add an entry in `application_info.json`


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
    "name": "JoininBox",
    "short_name": "joininbox",
    "app_tile_button_text": "Info",
    "app_tile_button_href": "/joininbox",
    "app_tile_default_status_text": "JoinMarket Mixing",
    "can_uninstall": true,
    "show_on_homepage": true,
    "homepage_order": 24,
    "can_enable_disable": false,
    "is_premium": true
}

```

### Add icon

Add a PNG icon in `rootfs/standard/var/www/mynode/static/images`.

The name of the icon should be same as its "short_name" in `application_info.json`