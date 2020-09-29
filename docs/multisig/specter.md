# Specter

Developed by CryptoAdvance team, Specter is a desktop GUI for Bitcoin Core optimized to work with hardware wallets. Keeping funds in hardware wallets is far more secure than using a hot wallet like Bitcoin Core or Lightning. Specter is directly built on top of Bitcoin Core as opposed to conventional layer of Electrum server between wallets and the Bitcoin Core. This removes a dependency and saves memory for storing the indexed database created by Electrum server.

Along with supporting single signature wallets, Specter also supports multi-signature wallets.

Specter is part of the *Beta Apps* on myNode available only for *premium* users.

![](/images/multisig/specter/wallets.png)

## Features

Find the full list of features on [GitHub](https://github.com/cryptoadvance/specter-desktop). Key features are listed below.

- hardware wallets
- multisig
- PSBT
- Check total bitcoin supply (Run the numbers!)

## Using Specter

### On myNode

Specter is already configured with default environment variables and connected to the Bitcoin core, but it is disabled by default. To enable it, open the myNode homepage and find the tile with the Specter logo under Beta Apps (like the left image below).
<center>
  <figure>
    <img src="/images/multisig/specter/disabled.png" alt="" style="width: 125px">
    <img src="/images/multisig/specter/enabled.png" alt="" style="width: 125px">
  </figure>
</center>

Click on the **Enable** button, and wait for the page to refresh.

You should now see a **Specter** button (like shown on the right image above) and a green dot. On clicking this button, a new tab should open on your browser, containing Specter GUI.

Adding `blockfilterindex=1` to the bitcoin configuration will occupy few more GB of storage but would improve the rescanning speed.

[HWIBridge](https://github.com/cryptoadvance/specter-desktop/blob/master/docs/hwibridge.md)

### Remote Use

Using Specter remotely

If you face any issue, read their [FAQ](https://github.com/cryptoadvance/specter-desktop/blob/master/docs/faq.md).

## Specs

- Github: [cryptoadvance/specter-desktop](https://github.com/cryptoadvance/specter-desktop)
- Community: [Specter Telegram](https://t.me/spectersupport)
- Installed location: A Python3 module with environment settings at `/opt/mynode/specter`
- Ports: [https://mynode.local:3031](https://mynode.local:25441/)
