# Bitcoin is Syncing Slowly

There are numerous reasons your device may appear to be syncing the Bitcoin blockchain slowly. If your device is syncing slowly, here are several suggestions to try and speed things up.

Even with slow internet speed, slow external drives, or slow Internet, the early blocks in a device's IBD (Initial Blockchain Download) may still appear to sync quickly. However, once the device has progressed to block ~450k, sync times may appear to decrease.

## Using a Hard Drive

Earlier on in Bitcoin, hard drives could be used for Bitcoin nodes since the chain was much smaller. Now that the chain is over 720,000 and the size is over 400GB, hard drives are not fast enough to keep up.

It is recommended to upgrade to a Solid State Drive (SSD) for much better performance.

Try using the recommended hardware on [mynodebtc.com/download](https://mynodebtc.com/download).

## Using the wrong USB Port

On Raspberry Pi 4 devices, there are USB ports for USB 2 (black) and USB 3 (blue). USB 3 provides much better performance. Ensure you are using a USB 3 port.

## Slow Tor Connection

Another reason for slow syncing is a bad tor connection. MyNode uses tor by default and if your connection or Bitcoin peers are slow, you may also experience slow sync times.

First, just try rebooting. You should get a new tor connection and may find new Bitcoin peers.

Second, if that doesn't seem to help. You can also disable Tor for Bitcoin and Lightning on the settings page. That will use clearnet for syncing the Bitcoin Blockchain, which can be much more performant. We have a guide on toggling tor/clearnet available [here](/networking/tor).

## Unsupported USB -> SATA Adapter for SSD

Some enclosures or adapters for Solid State drives (SSDs) are not well supported by the Raspberry Pi OS. This can lead to slow sync times or possible data corruption. The recommended adapter listed on [mynodebtc.com/download](https://mynodebtc.com/download) has been known to work well.