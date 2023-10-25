# Upgrading your MyNode
There are two main options for upgrading your MyNode device.

## One Click Update

<i>Premium Feature</i>

The first and easiest option to upgrade your MyNode is to purchase MyNode Premium (included if you purchased a device). You can see all your options on the [Order Now](https://mynodebtc.com/order_now) page.

Once running MyNode Premium follow these steps:

1. Go to the settings page
2. Click on the "Check for updates button" to make sure an update is available
3. Click "Upgrade" and your device will automatically update to the latest version!


## Manual Upgrade

The second option is to upgrade manually via the Linux Terminal by running a few commands.

Follow these steps to manually upgrade to the latest version:

1. Open 2 Terminal windows:
    * Terminal 1: Local PC or laptop
    * Terminal 2: Connect to your MyNode Device ([see options](https://mynodebtc.github.io/advanced/linux-terminal.html))
      * Command: `ssh admin@[MyNode ip address]`
      * Default credentials: admin/bolt
2. Clone the latest release from the git repo on your PC or laptop
    * Run `git clone https://github.com/mynodebtc/mynode.git`
    * Run `cd mynode`
    * Run `git checkout tags/latest_release`
3. Run `make rootfs`
4. Run `make start_file_server`
    * This will run a local HTTP server so your device can download files
5. On the other terminal which you used to ssh into your device, run `sudo mynode-local-upgrade [pc ip address]`
    * This will download your locally generated artifact and install it on your device
    * Your device will automatically reboot to ensure updates take effect
6. Optional: Run `make stop_file_server`
    * This will stop the local HTTP server
7. You are now running the latest version of MyNode software!

