# Mempool Space

## Overview
Bitcoin users broadcast their transactions via a node. Miners take these transactions, verify them and add them to the blockchain for the coinbase reward. Since the blocksize is limited, if there are more transactions than the blocksize, they must wait in buffer space. This buffer space is called the **mempool**. The size of the mempool indicates the demand for space on the bitcoin blockchain and directly affects the fees required to confirm transactions.

Mempool.space is a visualization software for the bitcoin mempool. It decomposes of the mempool based on transaction fees and suggests three priority levels of fees.

Mynode implementation of mempool.space is limited by default. The mempool size is capped at 50MB to limit RAM usage. One can change that in the `bitcoin.conf`. Mempool.space can be enabled from the homepage and used at port 4080/4081. Initially, it takes a few minutes to load first few blocks and the graph for last 2 hours. Also, the mynode implementation differ from that on official website of [mempool.space](https://mempool.space). v1 included in mynode is compatible with single-board computers like Raspberry Pi whereas the latest v2 is not.

## Specs
- Version: v1
- Website: [https://mempool.space](https://mempool.space)
- Github: [https://github.com/mempool/mempool](https://github.com/mempool/mempool)
- Installed location: as a docker container with configuration at `/opt/mynode/mempoolspace`
- How to access it? [http://mynode.local:4080/](http://mynode.local:4080/) or [http://mynode.local:4081/](http://mynode.local:4081/)
