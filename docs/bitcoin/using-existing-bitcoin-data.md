# Using Existing Bitcoin Data 

There are 2 methods, either reuse existing Bitcoin blockchain data from another MyNode instance or copy it from an external hard drive.

## Using Bitcoin Data from Other MyNode
In some cases, you may want to use Bitcoin data from a different node to get MyNode up and running faster or to save bandwidth. If you have another node that is already synced, you can copy that data to your MyNode.

### Step 1 - Start MyNode

The first thing you need to do is start your MyNode and disable QuickSync. To disable QuickSync, go to the settings page and click the "Disable QuickSync" button.

This will reboot your device and start syncing Bitcoin from scratch.

### Step 2 - Upload your own Data

Next, you need to log into your device via SSH and copy files from your existing node.

On the node with the source data, ensure the bitcoin block data is readable by the "admin" user or the user you are logging in with. Also, make sure that Bitcoin is not running. Run the following commands on each device.

**On source node:**
<br/><sub><sup>Steps may differ if source is not MyNode device</sup></sub>
```sh
# Stop Bitcoin and other services
sudo /usr/bin/mynode_stop_critical_services.sh

# Make sure block data is readable by the admin user
sudo chmod -R 755 /mnt/hdd/mynode/bitcoin/blocks
sudo chmod -R 755 /mnt/hdd/mynode/bitcoin/chainstate
sudo chmod -R 755 /mnt/hdd/mynode/bitcoin/indexes
```

**On destination node:**
```sh
# Stop Bitcoin and other services
sudo /usr/bin/mynode_stop_critical_services.sh

# Make sure old data is removed
sudo rm -rf /mnt/hdd/mynode/bitcoin/blocks
sudo rm -rf /mnt/hdd/mynode/bitcoin/chainstate
sudo rm -rf /mnt/hdd/mynode/bitcoin/indexes

# Copy the blocks and chainstate folders from your existing node to /mnt/hdd/mynode/bitcoin/
# For example (fill in with your own IP and path):
sudo rsync -aP admin@othernode.local:/mnt/hdd/mynode/bitcoin/blocks /mnt/hdd/mynode/bitcoin/
sudo rsync -aP admin@othernode.local:/mnt/hdd/mynode/bitcoin/chainstate /mnt/hdd/mynode/bitcoin/
sudo rsync -aP admin@othernode.local:/mnt/hdd/mynode/bitcoin/indexes /mnt/hdd/mynode/bitcoin/
sudo chown -R bitcoin:bitcoin /mnt/hdd/mynode/bitcoin/
sudo reboot
```

This will copy files from your remote node to your local node. After rebooting, your device will sync from the same state as your other node.


## Using Bitcoin Data from Other Hard drive
In some cases, you may want to use Bitcoin data from a different hard drive to get MyNode up and running faster or to save bandwidth. If you have another hard drive that is already synced, you can copy that data to your MyNode.


### Step 1 - Install & Start MyNode
Start with [MyNode standard installation](https://mynodebtc.com/download) and then [Getting started guide](https://mynodebtc.github.io/intro/getting-started.html)

### Step 2 - Stop The Bitcoin Syncing
As soon as the Bitcoin Blockchain syncing process has started, the web interface will displays `"Bitcoin Blockchain Syncing..."`.

At this point, "stop" the syncing:

```sh
ssh admin@mynode.local
sudo /usr/bin/mynode_stop_critical_services.sh
```

## Step 3 - Remove Old Data
Remove any data that the syncing process has completed before you stopped the process.

```sh
ssh admin@mynode.local
sudo rm -rf /mnt/hdd/mynode/bitcoin/blocks
sudo rm -rf /mnt/hdd/mynode/bitcoin/chainstate
sudo rm -rf /mnt/hdd/mynode/bitcoin/indexes
```

### Step 4 - Copy Existing Blockchain
1. Connect a second hard drive (which has a copy of the blockchain) to your Raspberry Pi
2. SSH into your node

```sh
ssh admin@mynode.local
```

3. Mount the second drive to some path 

```sh
sudo mount -t auto /dev/sda<X> /mnt/sda<X>
```

4. Set access-levels...

```sh
sudo chmod -R 755 /mnt/sda<X>/<some-path...>/bitcoin/blocks
sudo chmod -R 755 /mnt/sda<X>/<some-path...>/bitcoin/chainstate
sudo chmod -R 755 /mnt/sda<X>/<some-path...>/bitcoin/indexes
```

5. Copy the existing blockchain from the other drive to MyNode's drive

```sh
sudo cp -r /mnt/sda<X>/<some-path...>/bitcoin/blocks /mnt/hdd/mynode/bitcoin/
sudo cp -r /mnt/sda<X>/<some-path...>/bitcoin/chainstate /mnt/hdd/mynode/bitcoin/
sudo cp -r /mnt/sda<X>/<some-path...>/bitcoin/indexes /mnt/hdd/mynode/bitcoin/
```

6. Change group access...

```sh
sudo chown -R bitcoin:bitcoin /mnt/hdd/mynode/bitcoin/
```

7. Reboot the node

```sh
sudo reboot
``` 

