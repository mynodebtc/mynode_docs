# Using Bitcoin Data from Other Node
In some cases, you may want to use Bitcoin data from a different node to get MyNode up and running faster or to save bandwidth. If you have another node that is already synced, you can copy that data to your MyNode.

## Step 1 - Start MyNode

The first thing you need to do is start your MyNode and disable QuickSync. To disable QuickSync, go to the settings page and click the "Disable QuickSync" button.

This will reboot your device and start syncing Bitcoin from scratch.

## Step 2 - Upload your own Data

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
