
# Thunderhub

A GUI to manage lightning channels

### Introduction

ThunderHub is an open-source LND node manager where you can manage and monitor your node on any device or browser. It allows you to take control of the lightning network with a simple and intuitive UX.

ThunderHub is a creation of Anthony Potdevin, and complete information can be found at either [Github](https://github.com/apotdevin/thunderhub) or the [ThunderHub
website](https://thunderhub.io).

You can use ThunderHub from any browser that is able to access your myNode installation.

If you are accessing Thunderhub from inside the network on which your myNode installation resides, you can open a browser window and enter <your.mynode.network.IP:3030> into the address bar.

 If you are accessing ThunderHub remotely using the premium features: VPN or Tor, you can open a browser window and enter either <your.home.IP.address:3030> or <your.Tor.hidden.service.address:3030>, depending on which premium feature you are using at the time.

Premium users can get all of their Tor Hidden Service addresses by going to the myNode home page and clicking on the "Tor Services" button in the "Services" area of the page.

The ThunderHub installation on myNode is located at: /opt/mynode/thunderhub.

![ThunderHub GUI](/images/lightning/ThunderHub/ThunderHub_GUI_comp.png "ThunderHub GUI")

### Features

- Monitoring
- Overview of current and pending balance for the Lightning and Bitcoin wallets.
- Liquidity report with total remote and local lightning balance.
- Complete network info.
- View open/pending/closed channels and how balanced they are.
- View all transactions.
- View all forwarded payments.
- View all chain transactions.
- View all unspent UTXOS.

### Management

- Send and Receive Lightning payments.
- Send and Receive Bitcoin payments.
- Open and close channels.
- Balance your channels through circular payments. (Check out the Tutorial)
- Backup, verify and recover all your channels.
- Sign and verify messages.

## ThunderHub on myNode

To use ThunderHub on myNode, open the main myNode page on a browser and find the ThunderHub emblem.

![ThunderHub Emblem](/images/lightning/ThunderHub/ThunderHub_emblem_comp.png "ThunderHub Emblem")

Click on the "Enable" button, and a new tab should open on your browser, containing ThunderHub.
Go to that tab, enter your myNode password where requested, and then press
"Connect".

![ThunderHub Connect Interface](/images/lightning/ThunderHub/ThunderHub_connect_comp.png)
