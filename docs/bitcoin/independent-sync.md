# Independently Sync Bitcoin Blockchain

## Overview

Syncing the full Bitcoin blockchain can take a very long time on certain devices. By default, myNode will use QuickSync to download a pre-validated portion of the blockchain to reduce the initial sync time from up to 3-4 weeks down to 2-4 days. This saves a lot of time, but myNode does allow you to fully validate the blockchain yourself.

## Disable QuickSync

To sync the blockchain yourself, the first step is to disable QuickSync. Go to the settings page in the myNode GUI and click on the "Disable QuickSync" button.

<center>
  <figure>
    <img src="/images/bitcoin/independent-sync-1.png" alt="password" style="width: 500px">
  </figure>
</center>

## Reset Bitcoin Blockchain

After disabling QuickSync, you may need to also reset the blockchain. If your myNode was already up and running, you will need to reset the blockchain as well. If your device was still performing QuickSync, you will not need to perform the following step.

Next, reset the Blockchain via the settings page on the myNode GUI.

<center>
  <figure>
    <img src="/images/bitcoin/independent-sync-2.png" alt="password" style="width: 500px">
  </figure>
</center>

Once the device reboots, your device will begin syncing the Bitcoin blockchain from scratch!
