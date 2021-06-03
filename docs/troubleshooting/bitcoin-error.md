# My Device has a Bitcoin Error

If your device gets into a state indicating "Bitcoin has experienced an error. Please check the logs." it means Bitcoin is not able to start and so the device limits other services from starting until the Bitcoin error is resolved.

## Check the Bitcoin Log

The first step is to track down the Bitcoin log on the status page and check it for errors. Click on the "status" link at the bottom of the page. Then click "Show Log" under the Bitcoin Status heading. This will open and display the recent lines of the Bitcoin log with the latest information at the top.

Typical errors are corruption in the blockchain data. If you see errors similar to "failure to open database" or mentioning "corrupt" data, the blockchain data is likely bad. This can happen due to several reasons - the drive could be going bad or it could be from a power outage.

## Step 1

First, just try rebooting the device and see if the error comes back. The error could be minor and the device might work fine after rebooting and remounting the drive and data.

## Step 2

Investigate the issue further - if the error is related to network settings, UPnP settings, tor failure, etc... the suggestions below may not help and it would need to be investigated further.

## Step 3 - Data Corruption

If the error does appear to be related to corruption (most Bitcoin errors are), the next step is to "Reset Blockchain" which will delete the blockchain data and re-sync it. This may take several days. Any of the corrupt data will be replaced with freshly downloaded data.

## Step 4 - Data Corruption

Finally, the last option is to try a new drive or other hardware. If you have a hard drive, you may want to upgrade to an SSD to reduce load and sync faster. If you had been getting Undervoltage or Throttling errors, a new power supply or new device may also help.