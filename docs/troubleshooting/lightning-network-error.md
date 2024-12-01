# My Device has a Lightning Network Error

If your device gets into a state indicating "Network Error" as a Lightning Status, it means there has been a problem with Lightning launching and being able to properly connect to a network it can use for communication. This can typically be resolved quickly by changing the Lightning network to Tor-only on the main settings page.

## Check the Lightning Log

The first step is to track down the Lightning log on the status page and check it for errors. The lightning status may be rotating between various states because the process will restart automatically, but if you see a log line similar to the one below, that will confirm you are having Lightning network issues.

```
Jan 12 14:57:21 mynode lnd[15786]: unable to create server: unable to discover a NAT-PMP enabled device on the local network
```

This is caused by your network config being set to use Clearnet for Lightning. The Lightning daemon is attempting to communicate with your router to open a port and is failing. Disabling this setting will resolve the issue.

## Resolution

First, go to the main settings page on your node and scroll to the "Networking" section. In the row for Lightning, disable Clearnet and enable Tor. Save the config. Your device will reboot and Lightning should start as expected.

If you are still having issues, that setting may not have taken effect because of a [custom Lightning config](/advanced/customize-config.md). Reset your custom Lightning config back to the default so the network settings can take effect.
