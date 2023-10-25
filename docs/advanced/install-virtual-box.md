# Install on Virtual Box

## Download

1. Download the virtual box manager for your operating system from [virtualbox.org](https://www.virtualbox.org/wiki/Downloads)
2. Download the virtualBox extension pack from the above website
3. Download the OVA file from [mynodebtc.com](http://mynodebtc.com/download) (3.2GB)

## Install the Virtual box manager

1. Double click the virtual box manager (.exe, .deb or .dmg file) and follow instructions to install it.
2. Double click the Extension Pack (.vbox-extpack) and follow instructions to install it

**Note**: The extension pack and virtual box manager should have the same version. Please remove any old VM managers.

## Import the virtual image

1. Double click the mynode_vm_\<version\>.ova file to launch the Virtual box manager and launch the import window (as seen below).

![Virtual Box Manager: import window](/images/virtual-box/vm3.png)

2. Leave the default settings and click on **Import**. Once it's imported, you should a screen like shown below

![Virtual Box Manager: main page](/images/virtual-box/vm1.png)

## Launch the Virtual Box

1. By default the network settings uses the Wired connection. Change the network settings if you want to use wireless network.
	- Click on Settings wheel (or Ctrl+S)
	- Choose the Network tab
	- Enable Network Adapter should be checked
	- "Attached to" should be configured to Bridged Adapter
	- Change the name to appropriate network (eg. wireless network starts with wl)
	- Click on OK to close the settings window

![VM Settings](/images/virtual-box/vm2.png)

2. Double click on **MyNode** from the sidebar and let it open a new window, as shown below.

![MyNode Virtual machine: login screen](/images/virtual-box/vm4.png)

3. Enter username as **admin** and password as **bolt**
4. Enter the password again in the Chromium window