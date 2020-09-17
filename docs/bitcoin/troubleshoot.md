# Troubleshooting Bitcoin

## Available options
Bitcoin can run into various kinds of issues. Although MyNode aims to automatically detect these issues and fix them without user intervention, users might have to intervene. Based on the severity of the issues, there are many options available to fix common issues. Those solutions are listed below in increasing order of cost of convenience.
- Reboot MyNode
- Reinstall Bitcoin
- Rescan blockchain
- Reindex blockchain
- Reset blockchain
- Factory reset

## Reboot MyNode

MyNode can be rebooted from the settings page with the button under Device (as shown below). Rebooting mynode is the easiest way to fix common issues.

![device-settings](/images/bitcoin/device-settings.png)

## Reinstall Bitcoin

One can reinstall Bitcoin from the settings page with the dropdown tool under Advanced (as shown below). This maybe necessary when Bitcoin installation failed during an update.

![advanced-settings](/images/bitcoin/advanced-settings.png)

## Rescan blockchain

This option is available on the settings page under Bitcoin (as shown below). It facilitates running `bitcoind` with the `-rescan` option. It scans the blockchain for missing transactions of the connected wallet.

![bitcoin-settings](/images/bitcoin/bitcoin-settings.png)

## Reindex blockchain

This option is available on the settings page under Bitcoin (as shown above). It facilitates running `bitcoind` with the `-reindex-chainstate` option. To use the full `reindex` option, one has to use the command-line.

Reindexing the blockchain becomes necessary when the blockchain data on HDD/SSD is corrupted, either due to disk failure or power cutoff. This is a time-consuming process and can take up to a day.

## Reset blockchain

This option is available on the settings page under Bitcoin (as shown above).
Resetting the blockchain will delete the existing blockchain and will either download it from scratch or use the QuickSync data to get a head start. This is a time-consuming process and can take many days based on the hardware and network configuration.

## Factory reset

This option is available in the Advanced section of settings page. This should be the last resort when all the options listed available has been tried. One should backup their wallet seed and channels before doing so.

![advanced-settings](/images/bitcoin/advanced-settings.png)
