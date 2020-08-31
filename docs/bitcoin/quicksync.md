# QuickSync

<!-- - What is it? -->
<!-- - How is it useful? -->
<!-- - What are the tradeoffs? -->
QuickSync downloads a torrent for a major chunk of the blockchain from MyNode peers without verifying every block.
It saves time by avoiding the initial blockchain download and this time benefit is significant when using HDD but marginal with SSD.
QuickSync is turned on by default and must be disabled from the settings page while setting up to trigger fully-verified blockchain download.
Once the blockchain is synced with the network, enabling QuickSync will download the torrent and start seeding it.
This helps MyNode peers in downloading the blockchain faster during setup. The upload and download speed can be adjusted to optimize bandwidth usage, as shown in the screenshot below.

**Note:** Toggling QuickSync triggers a reboot and the torrent occupies additional 236 GB besides the Bitcoin blockchain.
<!-- attach a table of expected times -->
<!-- - What are the effects of enabling it before IBD and after IBD? -->
<!-- - talk about download/upload speed -->
<!-- - enable/disable triggers a reboot -->
<!-- - memory required? -->
<!-- - Control the upload/download speed -->

## Enable QuickSync

![Enable QuickSync](/images/bitcoin/quicksync-enable.png)

## Disable QuickSync

![Disable QuickSync](/images/bitcoin/quicksync-disable.png)
