---
title: "Specter"
description: "Use Specter on MyNode to manage single-sig and multisig Bitcoin wallets with hardware wallets, using your own node to check balances and broadcast transactions."
tags:
- "Specter"
- "multisig"
- "Bitcoin wallet"
- "MyNode"
---

# Specter

<p class="mn-availability">Premium</p>

[Specter](https://specter.solutions/) is a wallet coordinator for hardware wallets. It runs on your MyNode, talks directly to Bitcoin Core, and gives you a web interface to create wallets, receive bitcoin, and build transactions that your hardware wallets sign.

Specter is especially useful for **multisig** wallets, where spending needs signatures from several devices, such as 2 of 3. Losing one device doesn't lose your funds, and a thief needs more than one device to spend them.

![Specter's wallet creation screen with options for a single key wallet or a multisignature wallet, and a sidebar listing devices such as a Coldcard, a Keepkey and a Specter DIY](/images/multisig/specter/wallets.png)

## What You Can Do

- Use hardware wallets like Coldcard, Trezor, Ledger, BitBox02, Keystone and Jade.
- Create single-signature and multisig wallets.
- Sign transactions with USB, SD card or QR code, depending on the device.
- See your balances and history from your own node, with no Electrum Server needed.

## Set Up Specter

1. Open the Marketplace on your MyNode, and install **Specter**.
2. Open Specter's app page. Find the password in the **App Default Credentials** section.
3. Click **Open**, and log in with that password.

<center>
  <figure>
    <img src="/images/multisig/specter/specter-app.png" style="width: 600px" alt="Specter app page on MyNode with Open, Restart and Disable buttons, the installed version, and instructions saying the Specter password is shown in the App Default Credentials section">
  </figure>
</center>

Specter uses port 25441, such as `https://192.168.1.100:25441`. You need to be logged in to MyNode to use it, and your browser will warn about the self-signed certificate the first time.

If you've already set your own Specter password, MyNode keeps it and shows it as user configured. You can set a new Specter password on the MyNode Settings page.

Specter is already connected to your node's Bitcoin Core, so you don't need to enter any connection details.

## Add Devices and Wallets

1. In Specter, click **Add new device**, choose your hardware wallet type, and import its public keys. Follow the instructions for your device.
2. Click **Add new wallet**, and choose a **Single key wallet** or a **Multisignature wallet**.
3. For a multisig wallet, choose the devices to use and how many signatures are needed to spend, such as 2 of 3.

**Back up your multisig wallet's configuration**, also called the wallet descriptor or backup file. You need it, plus enough of your devices, to recover a multisig wallet. Each device's recovery phrase alone isn't enough.

## Using USB Hardware Wallets

Specter runs on your MyNode, not on your computer, so it can't see a hardware wallet plugged into your computer's USB port on its own. You can:

- Use a device that signs with an **SD card or QR codes**, like a Coldcard, Keystone or Jade.
- Run Specter's **HWI Bridge** on your computer so Specter can reach your USB devices. See [Specter's documentation](https://docs.specter.solutions/).

## Faster Rescans

If you import a wallet that already has history, Specter asks Bitcoin Core to rescan the blockchain, which can be slow. Adding `blockfilterindex=1` to your Bitcoin config makes rescans much faster, at the cost of a few more gigabytes of storage. See [Customizing your Config](/advanced/customize-config).

## Remote Access

To use Specter away from home, connect through the [VPN](/vpn/setup) or [Tailscale](/networking/tailscale) and open Specter with your node's address and port 25441.

## Help

- [Specter's documentation](https://docs.specter.solutions/)
- [Specter on GitHub](https://github.com/cryptoadvance/specter-desktop)
- [Specter Telegram group](https://t.me/spectersupport)

## Next Steps

[Choose a wallet for your node](/wallets/choosing-a-wallet)
