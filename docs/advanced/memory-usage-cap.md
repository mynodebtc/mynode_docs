# Memory Usage Cap

To limit RAM usage, the database cache and maximum mempool size are capped while configuring Bitcoin. This is especially useful for single-board computers like Raspberry Pi where several services running in parallel hamper performance and user experience. These limitations are relaxed gradually when larger RAM is available (listed in the table below). One can relax these limitations by editing the `bitcoin.conf` file (available on the [Bitcoin](/bitcoin/manage) page) using the keywords `dbcache` and `maxmempool` respectively.

| Total RAM (in GB) | DB cache (in MB) | Max Mempool (in MB) |
| --: | --: | --: |
| 1 | 225 | 50 |
| 2 | 500 | 50 |
| 3 | 750 | 100 |
| 4 | 1250 | 250 |
| 5 | 2000 | 400 |
| 8 | 2500 | 500 |
| Unknown | 500 | 50 |

For reference, bitcoind default values are 450 and 300 MB respectively.
