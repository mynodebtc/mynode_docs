---
title: "Netdata"
description: "Enable Netdata on MyNode for real-time dashboards covering CPU, memory, disk, temperature, and service health, useful when diagnosing slow syncs or crashes."
tags:
- "Netdata"
- "system monitoring"
- "MyNode"
- "performance"
---

# Netdata

## Overview

Netdata is distributed, real-time performance and health monitoring for systems and applications. It is a highly-optimized monitoring agent you install on all your systems and containers. It provides unparalleled insights, in real-time, of everything happening on the systems it's running on, using highly interactive web dashboards. A highly-efficient database stores long-term historical metrics for days, weeks, or months, all at 1-second granularity. It is fast and efficient, designed to permanently run on all systems (physical and virtual servers, containers, IoT devices), without disrupting their core function.

Netdata is disabled by default. To turn it on, find the Netdata tile on your MyNode home page and click **Enable**. Once it is running, click **Open** on the same tile, as shown here. The **Open Netdata** button in the Status section of the Settings page opens it too.

![Netdata app tile on the MyNode home page with a green status dot and Open and Info buttons](/images/advanced/netdata_tile.png)

Your Netdata dashboard will open in a new window, and will take a few seconds to fully populate with data.
The images below show some of the comprehensive operating data that will be available to you.

![Netdata1](/images/advanced/netdata1_comp.png)

![Netdata2](/images/advanced/netdata2_comp.png)

![Netdata3](/images/advanced/netdata3_comp.png)

![Netdata4](/images/advanced/netdata4_comp.png)

## Specs
- Github: [netdata/netdata](https://github.com/netdata/netdata)
- Live demo: [london.my-netdata.io/](https://london.my-netdata.io/)
- Ports: 19999/20000
