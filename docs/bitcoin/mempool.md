# Mempool Space

## Overview
Bitcoin users broadcast their transactions via a node. Miners take these transactions, verify them and add them to the blockchain for the coinbase reward. Since the blocksize is limited, if there are more transactions waiting to be verified than can fit in a single block, they must wait in a buffer space. This buffer space is called the **mempool**. The size of the mempool indicates the demand for space on the bitcoin blockchain and directly affects the fees required to confirm transactions.

Mempool.space is a visualization software for the bitcoin mempool. It decomposes the mempool based on transaction fees which helps in deciding fees. It also acts as an explorer for transactions and public addresses.

## Initialization
Mempool.space can be enabled from the homepage and runs on port number 4080/4081. Initially, it takes a few minutes to load first few blocks and the graph for the most recent 2 hours of activity.

## Memory usage cap
The myNode implementation of mempool.space is limited by default. The mempool size is capped to limit RAM usage. Refer this [page in advanced section](/advanced/memory-usage-cap) to know more. One can change that in the `bitcoin.conf` file (available to view and edit on [Bitcoin](/bitcoin/manage) page). Nodes with limited mempool size do not relay transactions with low fees once they are occupied.

## Lighter version
The mynode implementation differs from that on official website of [mempool.space](https://mempool.space). v1 included in myNode is compatible with single-board computers like Raspberry Pi whereas the latest v2 is not.

<!-- show a preview -->

## Specs
- Version: v1
- Website: [https://mempool.space](https://mempool.space)
- Github: [https://github.com/mempool/mempool](https://github.com/mempool/mempool)
- Installed location: as a docker container with configuration at `/opt/mynode/mempoolspace`
- How to access it? [http://mynode.local:4080/](http://mynode.local:4080/) or [http://mynode.local:4081/](http://mynode.local:4081/)
