# Step 1 - Start myNode

The first thing you need to do is start your myNode and disable QuickSync. To disable QuickSync, go to the settings page and click the "Disable QuickSync" button.

This will reboot your device and start syncing Bitcoin from scratch.

# Step 2 - Upload your own Data

Next, you need to log into your device via SSH and copy files from your existing node.

Enter the following commands:

```sh
sudo systemctl stop bitcoind
sudo systemctl stop lnd
sudo rm -rf /mnt/hdd/mynode/bitcoin/blocks
sudo rm -rf /mnt/hdd/mynode/bitcoin/chainstate
sudo rm -rf /mnt/hdd/mynode/bitcoin/indexes

# Copy the blocks and chainstate folders from your existing node to /mnt/hdd/mynode/bitcoin/
For example (fill in with your own IP and path):
sudo scp -r admin@othernode.local:/mnt/hdd/mynode/bitcoin/blocks /mnt/hdd/mynode/bitcoin/
sudo scp -r admin@othernode.local:/mnt/hdd/mynode/bitcoin/chainstate /mnt/hdd/mynode/bitcoin/
sudo scp -r admin@othernode.local:/mnt/hdd/mynode/bitcoin/indexes /mnt/hdd/mynode/bitcoin/
sudo chown -R bitcoin:bitcoin /mnt/hdd/mynode/bitcoin/
sudo reboot
```

This will copy files from your remote node to your local node. After rebooting, your device will sync from the same state as your other node.
