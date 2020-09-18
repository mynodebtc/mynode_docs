# Memory Usage Cap

To limit RAM usage, the database cache and maximum mempool size of Bitcoin is capped while configuring Bitcoin. This is especially useful for single-board computers like Raspberry Pi where several simultaneous services running might use up all the available memory. These limitations are relaxed gradually if larger RAM is available. The limitations are listed in the table below.

| Total RAM available | DB cache size | Max Mempool |
| -- | -- | -- |
| 1 | 225 | 50 |
| 2 | 500 | 50 |
| 3 | 750 | 100 |
| 4 | 1250 | 250 |
| 5 | 2000 | 400 |
| 8 | 2500 | 500 |
| Unknown | 500 | 50 |
