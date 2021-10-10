# Verify or Restore on-chain Lightning funds using BlueWallet

<div class="danger">

## Cautionary note

Use this method to monitor the on-chain wallet, verify the seed or recover the on-chain funds in case of emergency. **DO NOT** use the wallet to make transactions while your lightning node is running. It may disrupt your node.

</div>

## Step 1: Install Bluewallet

You can install Blue wallet on any of the following operating systems:
- iOS
- MacOS
- Android

Use their website [bluewallet.io](https://bluewallet.io/) to find links for the above.

## Step 2: Add new wallet

Once the Bluewallet is installed, launch it and find the "Add a wallet" page, like the image shown below. Click on it.

<center>
  <figure>
    <img src="/images/bluewallet/android-1.png" class="app_screenshot">
  </figure>
</center>

![Add wallet: MacOS](/images/bluewallet/macos-1.png)

## Step 3: Import wallet

Click on import wallet at the bottom.

<center>
  <figure>
    <img src="/images/bluewallet/android-2.png" class="app_screenshot">
  </figure>
</center>

<center>

![Import wallet: MacOS](/images/bluewallet/macos-2.png)

</center>

## Step 4: Enter 24 word aezeed seed

Enter the 24 words of your seed in the textbox and click on Import.

<center>

![Enter seed: MacOS](/images/bluewallet/macos-3.png)

</center>

## Step 5: View transactions

A violet color wallet should appear called "Imported HD Aezeed". Click on it to view transactions. It may take a few minutes to load all transactions.

<center>
  <figure>
    <img src="/images/bluewallet/android-3.png" class="app_screenshot">
  </figure>
</center>

![Transactions: MacOS](/images/bluewallet/macos-4.png)

**Note**: Bluewallet only scans the first 20 addresses whereas myNode generates a new address on every reboot, so total funds may appear to be different.