# Ride the Lightning (RTL)

A GUI to manage Lightning channels

### Logging into RTL

Ride the Lightning is a Lightning wallet and node management tool accessible via a web interface, and is built into MyNode.
RTL is a creation of Suheb/saubyk, and complete information can be found at [Github](https://github.com/ride-the-lightning/RTL).
The developer can be contacted via Twitter at: [@Suheb__](https://twitter.com/Suheb__) [@RTL_App](https://twitter.com/RTL_app).

You can use RTL from any browser that is able to access your MyNode installation.

Once a Lightning wallet [has been created](/lightning/create) on your device, the RTL app will be available via a button on the home page.

<center>
  <figure>
    <img src="/images/lightning/RTL/RTL_enable_button_comp.png" alt="RTL enable button" style="width: 400px">
  </figure>
</center>

After clicking the button, you will be presented with a login page. Use your MyNode password to login. Once logged in, the main RTL page will be displayed.

![RTL Main Page](/images/lightning/RTL/RTL_main_page_comp.png "RTL Main Page")

### Funding your BTC Wallet

In order to participate in the Lightning Network, you first need to fund your on-chain Bitcoin wallet. To do this, click on "On-chain" on the Navigation Panel on the left. Then click on the "Generate Address" button.

This will generate a new address and corresponding QR code for you to use to fund your on-chain wallet.

### Opening a Channel

To spend bitcoins on the Lightning network, one must first find peers on the network and open a channel with them. Peers can be trusted friends or complete strangers. [1ML.com](https://1ml.com/node?order=channelcount&active=true) or the MyNode Telegram channel are good places to find peers.

When you have selected another Lightning node to connect to, click on "Lightning" in the RTL navigation panel, then click on "Peers/Channels". Under the "Connections" heading, find and click on "Peers" as shown:

![RTL Create Peer](/images/lightning/RTL/RTL_create_peer_comp.png "RTL Create Peer")

Click on the "Add Peer" button, then:

- Fill in the required information for your selected peer and close that window.
- Click on the "Channels" button that is right under the "Connections" heading.
- Click on the "Open Channel" button.
- Select your chosen peer, fill in the amount of Bitcoin that you wish to open the channel with, and then click on "Open Channel"
in the lower right corner of that window.

You can verify the status of the channel via the Channels page. The channel will be pending until the transaction used to open the channel is confirmed.


### Sending Bitcoin using RTL & Lightning

When your funding transaction is confirmed on the blockchain you are now ready to send Bitcoin using Lightning.
You will need a payment invoice from the person you want to pay. Typically, either the payee will send you an invoice or you will copy it from a webpage.

Go to the RTL navigation pane and click on "Lightning" and then "Transactions".

![RTL Send Payment](/images/lightning/RTL/RTL_payments_comp.png "RTL Send Payment")

Click on "Send Payment" and paste your copy of the invoice in the window that opens.
All of the details of the payment should automatically be filled in.
Now, just click the "Send Payment" button and the payment should be completed within seconds!

### Receiving Bitcoin using RTL and Lightning

To receive Bitcoin in any Lightning wallet, you must first establish what is called "inbound capacity".

**Tip**: When creating Lightning channels with peers, it is generally a good practice for each party to open a separate channel from two ends to have some inbound and outbound capacity for each of them.

There are many other ways to establish inbound capacity, but they are beyond the scope of this guide.
A good overview of how to establish inbound capacity can be found [here](https://gist.github.com/bretton/53bc511b6fdafef31951199dd25bbf88).

### References

- Github: [github.com/ride-the-lighting/RTL](https://github.com/Ride-The-Lightning/RTL)
