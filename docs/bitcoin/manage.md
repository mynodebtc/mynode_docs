# Managing Bitcoin

Bitcoin runs automatically when MyNode starts. By clicking on the "Manage" button under Bitcoin on the home page, you can view the current state of the Bitcoin blockchain and your node, and interact with your node. You can also reach the page by pointing to **\<MYNODE-IP\>/bitcoind**

<center>
  <img src="/images/bitcoin/bitcoin-status-1.png" alt="Bitcoin tile">
</center>

On the Bitcoin page, you can see the current state of Bitcoin. There are several information tiles on this page which are explained below.

![](/images/bitcoin/bitcoin-status-2.png)

| Tile | Description |
| :-- | -- |
| Blocks | number of blocks downloaded and verified from network |
| Header | number of block headers obtained from the network. It signals the state of the longest chain. |
| Difficulty | the current mining difficulty which adjusts with the competition in mining world |
| Disk usage | memory occupied by the blockchain on external HDD/SSD |
| Version | the installed version of Bitcoin Core |
| Mempool TX | number of transactions waiting in the mempool to be added to the blockchain by miners |
| Mempool Size | the memory occupied by the waiting transactions |
| RPC Username | the username for accessing RPC (the default is mynode) |
| RPC Password | the password for accessing RPC. It is randomly generated during the setup and is revealed on clicking the Show button.<br><span style="color:red">WARNING: Handle RPC password with utmost care!!</span> |
| Bitcoin config | access the configuration settings of Bitcoin daemon |
| Bitcoin CLI | access the web terminal to use bitcoin-cli commands |
| Local Bitcoin address/port | the address and port number to access Bitcoin daemon from inside or outside the network. By default, Bitcoin daemon interacts with other bitcoin nodes through Tor network and thus have long cryptic onion address. The user doesn't have to open or forward the port in their network router to make it visible to other Bitcoin nodes. |
| List of recent blocks | A list of 5 recent blocks added to the local copy of the blockchain. The age of the blocks may not be separated by intervals of 10 minutes since it fluctuates around 1-30 minutes. Number of transactions and size of the block indicate the supply/demand for block-space. |
| List of peers | The onion/IP address of connected bitcoin nodes and few details about the connection. It might include few local peers (starting with 127.0.0.1) from other apps on MyNode. |

## Managing blockchain data

To make more advanced changes, like resetting the blockchain, there are few more options available on the settings page. Since these options are generally required after encountering an issue, they are explained in the [troubleshooting](/bitcoin/troubleshoot) page.

![Bitcoin settings](/images/bitcoin/bitcoin-settings.png)
