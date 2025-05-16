# Using Bitcoin Data from Other Hard drive
In some cases, you may want to use Bitcoin data from a different hard drive to get MyNode up and running faster or to save bandwidth. If you have another hard drive that is already synced, you can copy that data to your MyNode.


## Step 1 - Install & Start MyNode
Start with [MyNode standard installation](https://mynodebtc.com/download) and then [Getting started guide](https://mynodebtc.github.io/intro/getting-started.html)

## Step 2 - Stop The Bitcoin Syncing
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


🥳 
