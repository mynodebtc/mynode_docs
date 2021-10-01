# Restore Lightning Wallet

If you already have a Lighting Wallet and want to restore it, you can do so via the myNode interface.

## Restoring a Lightning Wallet

First, click on Manage under the Lightning app on the myNode home page.

Then, click on "Restore Wallet from Seed" on the Lightning page. 

**You will need your seed phrase and Static Channel Backup file!**

**Note:** You will only see the Restore button if no wallet exists. If a wallet had been created, you will first need to delete the Lightning wallet via the settings page.

<center>
  <figure>
    <img src="/images/lightning/restore-1.png" style="width: 300px">
  </figure>
</center>

On the next page, enter your seed phrase and upload your Static Channel Backup (SCB) file. Click Create.

![](/images/lightning/restore-2.png)

This will restore you on-chain balance, close all channels that had been opened, and restore those funds in you on chain wallet. Seeing the channel funds appear may take a while.

Your Lightning wallet is now setup and ready to use!

## Manual Recovery

If all funds do not re-appear, you may need to use the lightning CLI to recover or check on the status of channels that are being closed.

Below are more resources for recovering wallets.

<a href="https://github.com/lightningnetwork/lnd/blob/master/docs/recovery.md" target="_blank">Recovering Funds</a>

<a href="https://node-recovery.com/" target="_blank">Node Recovery</a>