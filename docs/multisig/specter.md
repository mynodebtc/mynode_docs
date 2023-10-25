# Specter

Developed by [Crypto Advance GmbH](https://specter.solutions/about/), Specter is a desktop GUI for Bitcoin Core optimized to work with hardware wallets. Funds in hardware wallets are far more secure than using a hot wallet like Bitcoin Core or Electrum. Specter is built on top of Bitcoin Core as opposed to the conventional layer of an Electrum server between a wallet and Bitcoin Core. This removes a dependency and frees memory that would be used for storing the indexed database created by Electrum server.

Along with supporting single signature wallets, Specter also supports multi-signature wallets.

Specter is part of the *Beta Apps* on MyNode available only for *premium* users.

![Specter](/images/multisig/specter/wallets.png)

## Features

Find the full list of features on [GitHub](https://github.com/cryptoadvance/specter-desktop). Key features are:

- hardware wallet support
- [multisig](https://en.bitcoin.it/wiki/Multisignature)
- [Partially Signed Bitcoin Transactions](https://bitcoinops.org/en/topics/psbt/)
- Check total bitcoin supply (Run the numbers!)

## Using Specter

### On MyNode

Specter is already configured with default environment variables and connected to Bitcoin Core, but it is disabled by default. To enable it, open the MyNode homepage and find the tile with the Specter logo under Beta Apps (like the left image below).
<center>
  <figure>
    <img src="/images/multisig/specter/disabled.png" alt="" style="width: 125px">
    <img src="/images/multisig/specter/enabled.png" alt="" style="width: 125px">
  </figure>
</center>

Click on the **Enable** button, and wait for the page to refresh.

You should now see a **Specter** button (like shown on the right image above) and a green dot. On clicking this button, a new tab should open on your browser, containing Specter GUI.

Adding `blockfilterindex=1` to your [Bitcoin Config](/advanced/customize-config.md) file  will occupy few more GB of storage but would improve the rescanning speed.

### Remote Use

Your MyNode installation of Specter includes the additional "HWI Bridge" code to allow you to access your Specter wallet remotely.
If you are using the MyNode VPN, make sure that the VPN is running and then you can start MyNode in your browser by entering `https://mynode.local:25441`. If you are using Tor for remote access, find your [Tor Hidden Service Address](/tor/web-gui.md) for Specter.
Start a Tor browser and enter `your-tor-hidden-service-address:25441`.

Specific instructions on how to use Specter can be found [here](https://github.com/cryptoadvance/specter-desktop/blob/master/docs/faq.md#how-do-i-run-the-app).

If you face any issues, read their [FAQ](https://github.com/cryptoadvance/specter-desktop/blob/master/docs/faq.md).

## Specs

- Github: [cryptoadvance/specter-desktop](https://github.com/cryptoadvance/specter-desktop)
- Community: [Specter Telegram](https://t.me/spectersupport)
- Installed location: A Python3 module with environment settings at `/opt/mynode/specter`
- Ports: [https://mynode.local:25441](https://mynode.local:25441/)
