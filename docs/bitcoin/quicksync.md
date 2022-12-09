# QuickSync

> **Warning**
> QuickSync is now disabled by default and no longer recommended. The blockchain has gotten too large for QuickSync to be feasible on most devices.

## Overview
QuickSync downloads a torrent for a major chunk of the blockchain from MyNode peers without verifying every block.
It saves time by avoiding the initial blockchain download and this time benefit is significant when using an HDD but marginal with a SSD.

QuickSync is turned on by default for HDDs and must be disabled from the settings page while setting up to trigger fully-verified blockchain download. For SSDs, QuickSync is disabled by default as long as the SSD is detected as the corret type.

If you have an SSD and QuickSync starts, it is highly recommended to disable it.

## Tradeoffs

- **Trust vs Time**: QuickSync downloads a torrent of the Bitcoin blockchain synced by the MyNode creator. This chunk of the blockchain saves the time in downloading verifying the blockchain from scratch. This convenience has a cost. The user is trusting that MyNode is propagating a legitimate copy of the Bitcoin blockchain. To minimize trust, one should disable QuickSync and download the blockchain from scratch. In case you have already synced the blockchain using QuickSync, you can [reset the blockchain](/bitcoin/troubleshoot.html#reset-blockchain).

- **Memory vs Community support**: QuickSync downloads a compressed form of the blockchain. This compressed file is not deleted after its expanded form is used for boosting the Bitcoin sync process. Instead, this file is seeds torrent for the other MyNode users to improve their download speed. The compressed file uses around 236 GB. To save this space, you can disable QuickSync.

<!-- attach a table of expected times -->

## Enable/Disable

Once the blockchain is synced with the network, enabling QuickSync won't affect the Bitcoin blockchain. Instead, it will just download the torrent and start seeding it. This helps myNode peers in downloading the blockchain faster during setup. The upload and download speed can be adjusted to optimize bandwidth usage, as shown in the screenshot below.

**Note:** Toggling QuickSync triggers a reboot.

### Enable QuickSync

![Enable QuickSync](/images/bitcoin/quicksync-enable.png)

### Disable QuickSync

![Disable QuickSync](/images/bitcoin/quicksync-disable.png)
