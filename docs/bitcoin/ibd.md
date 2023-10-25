# Initial blockchain download (IBD)

ideas:
- what is it?
- what is QuickSync
- How to disable it and perform IBD from scratch
- expected waiting time with different drive and network configuration and how to boost it?
- link to dedicated QuickSync page
- explain the purpose, effects and waiting time of reset / rescan / reindex blockchain (need help from experienced users)

## Overview

Syncronizing the full Bitcoin blockchain can take a long time on certain devices. By default, MyNode will use *QuickSync* to download a pre-validated portion of the blockchain to greatly reduce the initial sync time. However MyNode also allows you to fully validate the blockchain yourself.

## Disable QuickSync

To fully synchronize the blockchain, first disable QuickSync. Go to the settings page and click on the "Disable QuickSync" button.

<center>
  <figure>
    <img src="/images/bitcoin/independent-sync-1.png" alt="password" style="width: 500px">
  </figure>
</center>

## Reset Bitcoin Blockchain

After disabling QuickSync, you may need to reset the blockchain. If your MyNode was already up and running, you will need to reset the blockchain as well. If your device was still performing QuickSync, you will not need to perform the following step.

Next, reset the Blockchain via the settings page.

<center>
  <figure>
    <img src="/images/bitcoin/independent-sync-2.png" alt="password" style="width: 500px">
  </figure>
</center>

Once the device reboots, it will begin syncronizing the Bitcoin blockchain from scratch.
