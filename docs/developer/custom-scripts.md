# Customizing MyNode with Scripts

Developers or advanced users may want to run custom scripts at certain points in time to customize their expecience. This is facilitated through "hook" bash scripts. A user who puts a script in specific location will have it executed automatically by MyNode at the proper time.

## Adding a Hook Script

The hook scripts can be placed at the desired location by adding the file through the Linux terminal. For example, you can use `nano` to create a script like this:

Open Editor:

`sudo nano /usr/local/bin/mynode_hook_pre_startup.sh`

Contents:
```
#/bin/bash

touch /tmp/mynode_hook_pre_startup_complete
```

After adding this script, the next time the device reboots, it will run the hook script during the startup process. To prove it was executed, look to see if the `/tmp/mynode_hook_pre_startup_complete` file was created. If so, your script was successfully executed!

<b>Caution:</b> Any serious errors or infinite loops may negatively affect MyNode behavior.

## Hook Script Options

| File Location | Description |
| --- | --- |
| /usr/local/bin/mynode_hook_pre_startup.sh | This script is executed during MyNode startup, prior to the drive being mounted. |
| /usr/local/bin/mynode_hook_post_startup.sh | This script is executed during MyNode startup, after the drive being mounted and basic setup has completed. Services like Bitcoin, LND, and other applications have not started. |
| /usr/local/bin/mynode_hook_post_bitcoin_synced.sh | This script is executed after Bitcoin has started and it has synced to the tip.<br/><br/>This script can execute multiple times if Bitcoin happens to get significantly out of sync and then catches back up. |

