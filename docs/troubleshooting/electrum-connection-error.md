# My Electrum Wallet is not Connecting

If you run into issues connecting your Electrum wallet to the Electrum server running on myNode, there are several steps you can perform to resolve common issues.

## Verify Configuration

First, verify that your IP address matches exactly in your Electrum wallet settings. The port specified in the interface should be 50002.

## Verify Electrum Server is Running

Verify Electrum status icon on the myNode home screen is green and the status is Running. On the status page, verify that there are no obvious errors in the Electrum Server log.

## Clear Electrum Wallet Certificates

If your device has changed IP addresses or your Electrum data was cleared, you client may have cached an old certificate and is preventing the connection. On your PC or laptop running the electrum wallet, find the electrum data folder.

To find your Electrum files, try [these instructions](https://electrum.readthedocs.io/en/latest/faq.html#where-is-my-wallet-file-located).

Under the data folder, there should be a folder for certificates. Delete all the certificates and try connecting again.

## Try an Insecure Connection

To connect directly to the Electrum server, try using port 50001. This will avoid the proxy that verifies the certificates.

First, find your Electrum config file for your application and change some settings.

To find your Electrum files, try [these instructions](https://electrum.readthedocs.io/en/latest/faq.html#where-is-my-wallet-file-located).

Open the config file and make change the connection URL to: `[myNode IP]:50001:t`

Restart Electrum and you will be using myNode for trusted Electrum access!