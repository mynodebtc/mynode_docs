# LND Connect

LND Connect is a program that creates QR Codes and URLs that make connecting apps to a lightning node very easy. Many lightning wallets have a way to scan the QR code or enter the URL to quickly connect to your myNode.

First, make sure you have created a lightning wallet and from the main myNode home page, click on the "Lightning Wallet" button.

Next, click on the "LND Connect" button and you will be prompted to enter your password. This prompt ensures you are securely accessing your device since anyone with your LND Connect code can access your lighting wallet. Keep it secret!

![](/images/lightning/lnd-connect-1.png)

Once on the LND connect page, you will see a QR code and a URL. These can be used to easily connect your myNode device to 3rd party lightning wallets.

![](/images/lightning/lnd-connect-2.png)

There are also two tabs at the top of the page. This gives you the option to connect via the gRPC API or the REST API. Some wallets only use one or the other. Most wallets, like Zap, use gRPC but some wallets, like Zeus, use REST.

For example, you can scan a LND Connect QR Code using the Pebble mobile wallet.

![](/images/lightning/lnd-connect-3.png)
