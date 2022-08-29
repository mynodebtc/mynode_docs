# Mempool

## Overview
Bitcoin users broadcast their transactions via a node. Miners take these transactions, verify them and add them to the blockchain for the coinbase reward. Since the blocksize is limited, if there are more transactions waiting to be verified than can fit in a single block, they must wait in a buffer space. This buffer space is called the **mempool**. The size of the mempool indicates the demand for space on the bitcoin blockchain and directly affects the fees required to confirm transactions.

Mempool is a visualization software for the bitcoin mempool. It decomposes the mempool based on transaction fees which helps in deciding fees. It also acts as an explorer for transactions and public addresses.

## Initialization
Mempool can be enabled from the homepage and runs on port number 4080/4081. Initially, it takes a few minutes to load first few blocks and the graph for the most recent 2 hours of activity.

## Memory Usage
The Bitcoin mempool can grow quite large which can lead to a lot of RAM usage. To mitigate any issues, myNode does limit the total Bitcoin mempool size to be a few hundred MB.

## Links
- Website: [https://mempool.space](https://mempool.space)
- Github: [https://github.com/mempool/mempool](https://github.com/mempool/mempool)
